// const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const glob = require('glob')
const ejs = require('ejs')
// const archiver = require('archiver')
// const inquirer = require('inquirer')

const log = require('./log')
const templateInfo = require('./data')
const sendMail = require('./sendMail')

// 1. 更新代码
const distDir = path.resolve(__dirname, 'dist')
const temDir = path.resolve(__dirname, 'template')
const renderDir = path.resolve(__dirname, 'render')
const publicDir = path.resolve(__dirname, 'public')
const indexDir = path.resolve(__dirname, './')

// 项目信息
// const projectNamePrompt = [
//   {
//     type: 'list',
//     name: 'projectName',
//     message: '请选择服务的客户',
//     choices: [
//       {
//         name: '陕西特种车辆（特车）-销售系统',
//         value: 'TC'
//       },
//       {
//         name: '陕西特种车辆（特车）-销售系统（201）',
//         value: 'TCdev'
//       },
//       {
//         name: '陕西庆华汽车安全系统有限责任公司',
//         value: 'QH'
//       },
//       {
//         name: '陕西庆华汽车安全系统有限责任公司（201）',
//         value: 'QHdev'
//       },
//       {
//         name: '中海油服油技制造中心随钻车间',
//         value: 'HY'
//       },
//       {
//         name: '中海油服油技制造中心随钻车间（201）',
//         value: 'HYdev'
//       }
//     ]
//   }
// ]

/**
 * 命令行传递参数的解析
 */
// ['projectName=HY']
// const arguments = process.argv.splice(2)

// let arg = {}

// if(arguments.length) {
//   let arr = arguments[0].split('=')
//   arg[arr[0]] = arr[1]
// }

// console.log('传递的参数是：', arg)

// 全局信息
let globalMessage = {}
// const ignore = ['**/.git/**', '**/node_modules/**', '**/public/**', '**/tests/**', '**/assets/**']

// function checkArg(projectPromptInfo) {
//   if (typeof projectPromptInfo !== 'object') {
//     console.log('部署项目参数输入应为Object')
//     return
//   }
//   if (!projectPromptInfo.projectName) {
//     console.log('未传递项目code')
//     return
//   }
// }

// async function auto(projectPromptInfo = { projectName: 'HY' }) {

//   if(typeof projectPromptInfo !== 'object') {
//     console.log('部署项目参数输入应为Object')
//     return
//   }
//   if(!projectPromptInfo.projectName) {
//     console.log('未传递项目code')
//     return
//   }

//   try {
//     // 选取项目信息
//     // const projectPromptInfo = await inquirer.prompt(projectNamePrompt)
//     console.log('进入项目部署函数')
//     // const projectPromptInfo = { projectName: 'HY' }
//     // 准备阶段
//     await prepare(projectPromptInfo)
//     // 模板渲染阶段
//     const ignore = ['**/.git/**','**/node_modules/**', '**/public/**', '**/tests/**', '**/assets/**']
//     await ejsRender({ignore}, projectPromptInfo)
//     // 打包编译阶段
//     await build(projectPromptInfo)
//     // 整理打包文件
//     await organize(projectPromptInfo)
//     // 发布代码整理压缩并发送阶段
//     await public(projectPromptInfo)
//     return true
//   }catch (e) {
//     log.error(e)
//   }
// }

async function public1(projectPromptInfo) {
  const { projectName } = projectPromptInfo
  // 对public进行tar压缩
  log.info(`*** 发布文件进行 zip 压缩  ***`)
  // const output = fs.createWriteStream(zipDir)
  // const archive = archiver('zip')
  // archive.on('err', (err) => {
  //   log.error(err)
  // })
  // archive.pipe(output)
  // archive.directory(publicDir, false)
  // archive.finalize()
  await execCommand(indexDir, 'tar -cvzf boya.tar.gz -C ./public .', '文件打压缩包失败')
  log.success(`*** 发布文件zip压缩成功  ***`)
  // const zipFile = path.resolve(__dirname, 'boya-zip.zip')
  if (projectName === 'QHdev') {
    // 传输文件开始时间
    const startTime = new Date().getTime()
    // const cspCmd = `scp -r -o StrictHostKeyChecking=no ${zipFile} root@8.130.16.201:/usr/share/nginx/html/test`
    // 庆华测试服务，部署到201测试机 /usr/share/nginx/html/qhmes
    // await execCommand(publicDir, cspCmd, '庆华测试环境部署到201测试机过程失败！')
    log.success(`*** 庆华201测试服务原有版本清空开始  ***`)
    await execCommand(publicDir, 'ssh -o StrictHostKeyChecking=no root@8.130.16.201  rm -rf /usr/share/nginx/html/qhmes/*', '庆华201测试机清空Nginx资源失败！')
    log.success(`*** 庆华201测试服务原有版本清空成功！  ***`)
    log.success(`*** 庆华201测试服务新版本开始部署~~  ***`)
    await execCommand(indexDir, 'tar -cvzf boya.tar.gz -C ./public .', '文件打压缩包失败')
    log.success(`*** tar包打包成功  ***`)
    await execCommand(indexDir, 'scp -r -o StrictHostKeyChecking=no ./boya.tar.gz root@8.130.16.201:/usr/share/nginx/html/qhmes', 'tar包传输到测试服务器失败')
    log.success(`*** tar传输成功  ***`)
    await execCommand(indexDir, 'ssh -o StrictHostKeyChecking=no root@8.130.16.201 tar -zxvf /usr/share/nginx/html/qhmes/boya.tar.gz -C /usr/share/nginx/html/qhmes ', '测试服务器解压tar包失败')
    // await execCommand(publicDir, 'scp -r -o StrictHostKeyChecking=no ./ root@8.130.16.201:/usr/share/nginx/html/qhmes', '庆华测试环境部署到201测试机过程失败！')
    // 传输文件结束时间
    const scpEndTime = new Date().getTime()
    log.success(`*** 庆华测试服务已经部署到201服务器成功  ***`)
    const cspUseTime = `***  部署文件传输到201服务器用时 ${costTime(startTime, scpEndTime)}  ***`
    globalMessage.packageTime.push(cspUseTime)
    log.info(cspUseTime)
  }
  if (projectName === 'HYdev') {
    // 传输文件开始时间
    const startTime = new Date().getTime()
    // const cspCmd = `scp -r -o StrictHostKeyChecking=no ${zipFile} root@8.130.16.201:/usr/share/nginx/html/test`
    // 庆华测试服务，部署到201测试机 /usr/share/nginx/html/qhmes
    // await execCommand(publicDir, cspCmd, '庆华测试环境部署到201测试机过程失败！')
    log.success(`*** 陕西庆华汽车安全系统有限责任公司（201）服务原有版本清空开始  ***`)
    await execCommand(publicDir, 'ssh -o StrictHostKeyChecking=no root@8.130.16.201  rm -rf /usr/share/nginx/html/lms/*', '庆华201测试机清空Nginx资源失败！')
    log.success(`*** 陕西庆华汽车安全系统有限责任公司（201）原有版本清空成功！  ***`)
    log.success(`*** 陕西庆华汽车安全系统有限责任公司（201）新版本开始部署~~  ***`)
    await execCommand(indexDir, 'tar -cvzf boya.tar.gz -C ./public .', '文件打压缩包失败')
    log.success(`*** tar包打包成功  ***`)
    await execCommand(indexDir, 'scp -r -o StrictHostKeyChecking=no ./boya.tar.gz root@8.130.16.201:/usr/share/nginx/html/lms', 'tar包传输到测试服务器失败')
    log.success(`*** tar传输成功  ***`)
    await execCommand(indexDir, 'ssh -o StrictHostKeyChecking=no root@8.130.16.201 tar -zxvf /usr/share/nginx/html/lms/boya.tar.gz -C /usr/share/nginx/html/lms ', '测试服务器解压tar包失败')
    //  await execCommand(publicDir, 'scp -r -o StrictHostKeyChecking=no ./ root@8.130.16.201:/usr/share/nginx/html/lms', '陕西庆华汽车安全系统有限责任公司（201）测试机过程失败！')
    // 传输文件结束时间
    const scpEndTime = new Date().getTime()
    log.success(`*** 陕西庆华汽车安全系统有限责任公司（201）服务器成功  ***`)
    const cspUseTime = `***  部署文件传输到201服务器用时 ${costTime(startTime, scpEndTime)}  ***`
    globalMessage.packageTime.push(cspUseTime)
    log.info(cspUseTime)
  }

  if (projectName === 'TCdev') {
    // 传输文件开始时间
    const startTime = new Date().getTime()
    // const cspCmd = `scp -r -o StrictHostKeyChecking=no ${zipFile} root@8.130.16.201:/usr/share/nginx/html/test`
    // 庆华测试服务，部署到201测试机 /usr/share/nginx/html/qhmes
    // await execCommand(publicDir, cspCmd, '庆华测试环境部署到201测试机过程失败！')
    log.success(`*** 陕西特种车辆（特车）-销售系统（201）服务原有版本清空开始  ***`)
    await execCommand(publicDir, 'ssh -o StrictHostKeyChecking=no root@8.130.16.201  rm -rf /usr/share/nginx/html/sale/*', '销售系统201测试机清空Nginx资源失败！')
    log.success(`*** 陕西特种车辆（特车）-销售系统（201）原有版本清空成功！  ***`)
    log.success(`*** 陕西特种车辆（特车）-销售系统（201）新版本开始部署~~  ***`)
    await execCommand(indexDir, 'tar -cvzf boya.tar.gz -C ./public .', '文件打压缩包失败')
    log.success(`*** tar包打包成功  ***`)
    await execCommand(indexDir, 'scp -r -o StrictHostKeyChecking=no ./boya.tar.gz root@8.130.16.201:/usr/share/nginx/html/sale', 'tar包传输到测试服务器失败')
    log.success(`*** tar传输成功  ***`)
    await execCommand(indexDir, 'ssh -o StrictHostKeyChecking=no root@8.130.16.201 tar -zxvf /usr/share/nginx/html/sale/boya.tar.gz -C /usr/share/nginx/html/sale ', '测试服务器解压tar包失败')
    // await execCommand(publicDir, 'scp -r -o StrictHostKeyChecking=no ./ root@8.130.16.201:/usr/share/nginx/html/sale', '陕西特种车辆（特车）-销售系统部署到201测试机过程失败！')
    // 传输文件结束时间
    const scpEndTime = new Date().getTime()
    log.success(`*** 陕西特种车辆（特车）-销售系统已经部署到201服务器成功  ***`)
    const cspUseTime = `***  部署文件传输到201服务器用时 ${costTime(startTime, scpEndTime)}  ***`
    globalMessage.packageTime.push(cspUseTime)
    log.info(cspUseTime)
  }
  sendMail(globalMessage, projectName)
}

async function organize(projectPromptInfo) {
  const projectName = projectPromptInfo.projectName
  // 1. 拷贝项目打包目录到 public
  log.info(`*** 开始整理发布文件  ***`)
  //  清空publish防止缓存
  fse.emptyDirSync(publicDir)
  fse.copySync(path.resolve(__dirname, 'dist/board/dist'), path.resolve(__dirname, 'public/board'))
  fse.copySync(path.resolve(__dirname, 'dist/sys/dist'), path.resolve(__dirname, 'public/sys'))
  if (projectName === 'TC' || projectName === 'TCdev') {
    fse.copySync(path.resolve(__dirname, 'dist/sale/dist'), path.resolve(__dirname, 'public/sale'))
  }
  if (projectName === 'QH' || projectName === 'QHdev') {
    fse.copySync(path.resolve(__dirname, 'dist/qhmes/dist'), path.resolve(__dirname, 'public/qhmes'))
  }
  if (projectName === 'HY' || projectName === 'HYdev') {
    fse.copySync(path.resolve(__dirname, 'dist/lms/dist'), path.resolve(__dirname, 'public/lms'))
  }
}

async function build(projectPromptInfo) {
  // 1. 安装依赖
  const startTime = new Date().getTime()
  const boardCrd = path.resolve(__dirname, 'dist/board')
  const sysCrd = path.resolve(__dirname, 'dist/sys')
  const saleCrd = path.resolve(__dirname, 'dist/sale')
  const qhmesCrd = path.resolve(__dirname, 'dist/qhmes')
  const lmsCrd = path.resolve(__dirname, 'dist/lms')

  // 获取需要打包的文件夹名称  ['board', 'sys', 'sale']
  const projectName = projectPromptInfo.projectName
  log.info('***  board模块正在安装依赖...  ***')
  await execCommand(boardCrd, 'yarn', 'board模块依赖安装过程失败！')
  log.info('***  sys模块正在安装依赖...  ***')
  await execCommand(sysCrd, 'yarn', 'sys模块依赖安装过程失败！')

  if (projectName === 'TC' || projectName === 'TCdev') {
    log.info('***  sale模块正在安装依赖...  ***')
    await execCommand(saleCrd, 'yarn', 'sale模块依赖安装过程失败！')
  }
  if (projectName === 'QH' || projectName === 'QHdev') {
    log.info('***  qhmes模块正在安装依赖...  ***')
    await execCommand(qhmesCrd, 'yarn', 'qhmes模块依赖安装过程失败！')
  }
  if (projectName === 'HY' || projectName === 'HYdev') {
    log.info('***  lms模块正在安装依赖...  ***')
    await execCommand(lmsCrd, 'yarn', 'lms模块依赖安装过程失败！')
  }
  // 依赖下载结束时间
  const installEndTime = new Date().getTime()
  // 2. 打包
  log.info('***  开始打包的模块： board模块  ***')
  await execCommand(boardCrd, 'npm run build:prod', 'board模块打包失败！')
  const boardPackEndTime = new Date().getTime()
  log.info('***  开始打包的模块： sys模块  ***')
  await execCommand(sysCrd, 'npm run build:prod', 'sys模块打包失败！')
  const sysPackEndTime = new Date().getTime()

  globalMessage = {
    ...globalMessage,
    installTime: [
      `***  依赖安装用时 ${costTime(startTime, installEndTime)}  ***`
    ],
    packageTime: [
      `***  board模块打包用时 ${costTime(installEndTime, boardPackEndTime)}  ***`,
      `***  sys模块打包用时 ${costTime(boardPackEndTime, sysPackEndTime)}  ***`
    ]
  }

  if (projectName === 'TC' || projectName === 'TCdev') {
    log.info('***  开始打包的模块： sale模块  ***')
    const startPackTime = new Date().getTime()
    await execCommand(saleCrd, 'npm run build:prod', 'sale模块打包失败！')
    // 打包结束时间
    const endPackTime = new Date().getTime()
    globalMessage.packageTime.push(`***  sale模块打包用时 ${costTime(startPackTime, endPackTime)}  ***`)
  }
  if (projectName === 'QH' || projectName === 'QHdev') {
    log.info('***  开始打包的模块： qhmes模块  ***')
    const startPackTime = new Date().getTime()
    await execCommand(qhmesCrd, 'npm run build:prod', 'qhmes模块打包失败！')
    // 打包结束时间
    const endPackTime = new Date().getTime()
    globalMessage.packageTime.push(`***  qhmes模块打包用时 ${costTime(startPackTime, endPackTime)}  ***`)
  }
  if (projectName === 'HY' || projectName === 'HYdev') {
    log.info('***  开始打包的模块： lms模块  ***')
    const startPackTime = new Date().getTime()
    await execCommand(lmsCrd, 'npm run build:prod', 'lms模块打包失败！')
    // 打包结束时间
    const endPackTime = new Date().getTime()
    globalMessage.packageTime.push(`***  lms模块打包用时 ${costTime(startPackTime, endPackTime)}  ***`)
  }

  log.success(`客户： ${templateInfo[projectName].customer} 的前端代码打包成功！`)
  globalMessage.installTime.forEach(msg => log.info(msg))
  globalMessage.packageTime.forEach(msg => log.info(msg))
}

async function ejsRender(projectPromptInfo) {
  const options = {
    ignore: ['**/.git/**', '**/node_modules/**', '**/public/**', '**/tests/**', '**/assets/**']
  }
  return new Promise((resolve, reject) => {
    log.info('开始渲染文件...')
    glob('**', {
      cwd: distDir,
      ignore: options.ignore || '',
      nodir: true
    }, (err, files) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      Promise.all(files.map(file => {
        const filePath = path.join(distDir, file)
        // 选择的项目名称
        const projectName = projectPromptInfo.projectName
        return new Promise((resolve1, reject1) => {
          ejs.renderFile(filePath, templateInfo[projectName], {}, (err, result) => {
            if (err) {
              console.log(err)
              reject1(`${filePath} 渲染失败: ${err}`)
            }
            fse.writeFileSync(filePath, result)
            // log.info(`文件渲染成功： ${filePath}`)
            resolve1(result)
          })
        })
      })).then(() => {
        log.success(`客户： ${templateInfo[projectPromptInfo.projectName].customer} 前端代码渲染成功！`)
        resolve()
      }).catch(err => {
        log.error(err)
        reject(err)
      })
    })
  })
}

async function prepare(projectPromptInfo) {
  try {
    // 拉取代码
    log.info('正在拉取gitlab最新代码。。。')
    await execCommand(temDir, 'git pull', '代码拉取失败！')
    fse.ensureDirSync(distDir)
    fse.ensureDirSync(temDir)
    fse.ensureDirSync(renderDir)
    fse.ensureDirSync(publicDir)
    // 2. 清空dist下目录
    log.info('正在清空dist目录。。。')
    fse.emptyDirSync(distDir)
    log.info('清空dist目录成功！')
    // 3. 复制最新代码到dist目录下
    log.info('正在拷贝源码到dist目录。。。')
    fse.copySync(temDir, distDir)
    log.info('拷贝源码到dist目录成功！')
    // 4. 替换对应渲染文件
    const projectName = projectPromptInfo.projectName
    log.info('正在替换渲染文件。。。')
    // board
    log.info('***  正在替换的模块： board模块  ***')
    fse.copySync(path.resolve(__dirname, 'render/board/Board/index.vue'), path.resolve(__dirname, 'dist/board/src/views/Board/index.vue'))
    log.success('board模块 控制面板 渲染文件替换成功！')
    fse.copySync(path.resolve(__dirname, 'render/board/Login/index.vue'), path.resolve(__dirname, 'dist/board/src/views/Login/index.vue'))
    log.success('board模块 登录页面 渲染文件替换成功！')
    fse.copySync(path.resolve(__dirname, 'render/board/settings.js'), path.resolve(__dirname, 'dist/board/src/settings.js'))
    log.success('board模块 settings 替换成功！')
    fse.copySync(path.resolve(__dirname, `render/env/${projectName}/board/.env.production`), path.resolve(__dirname, 'dist/board/.env.production'))
    log.success('board模块 环境变量 替换成功！')
    // sys
    log.info('***  正在替换的模块： sys模块  ***')
    fse.copySync(path.resolve(__dirname, 'render/sys/system/menu/index.vue'), path.resolve(__dirname, 'dist/sys/src/views/system/menu/index.vue'))
    log.success('sys模块 菜单页面 替换成功！')
    fse.copySync(path.resolve(__dirname, 'render/sys/system/role/menus.vue'), path.resolve(__dirname, 'dist/sys/src/views/system/role/menus.vue'))
    log.success('sys模块 角色页面 替换成功！')
    fse.copySync(path.resolve(__dirname, 'render/sys/system/dictionary/index.vue'), path.resolve(__dirname, 'dist/sys/src/views/system/dictionary/index.vue'))
    log.success('sys模块 字典页面 替换成功！')
    fse.copySync(path.resolve(__dirname, 'render/sys/settings.js'), path.resolve(__dirname, 'dist/sys/src/settings.js'))
    log.success('sys模块 settings 替换成功！')
    fse.copySync(path.resolve(__dirname, `render/env/${projectName}/sys/.env.production`), path.resolve(__dirname, 'dist/sys/.env.production'))
    log.success('sys模块 环境变量 替换成功！')
    if (projectName === 'TC' || projectName === 'TCdev') {
      // 特车项目, 后续需修改为根据变量执行不同文件
      // sale
      log.info('***  正在替换的模块： sale模块  ***')
      fse.copySync(path.resolve(__dirname, 'render/sale/settings.js'), path.resolve(__dirname, 'dist/sale/src/settings.js'))
      log.success('sale模块 settings 替换成功！')
      fse.copySync(path.resolve(__dirname, `render/env/${projectName}/sale/.env.production`), path.resolve(__dirname, 'dist/sale/.env.production'))
      log.success('sale模块 环境变量 替换成功！')
    }
    if (projectName === 'QH' || projectName === 'QHdev') {
      // qhmes  庆华
      fse.copySync(path.resolve(__dirname, 'render/qhmes/settings.js'), path.resolve(__dirname, 'dist/qhmes/src/settings.js'))
      log.success('qhmes模块 settings 替换成功！')
      fse.copySync(path.resolve(__dirname, `render/env/${projectName}/qhmes/.env.production`), path.resolve(__dirname, 'dist/qhmes/.env.production'))
      log.success('qhmes模块 环境变量 替换成功！')
    }

    if (projectName === 'HY' || projectName === 'HYdev') {
      // lms  海油
      fse.copySync(path.resolve(__dirname, 'render/lms/settings.js'), path.resolve(__dirname, 'dist/lms/src/settings.js'))
      log.success('lms模块 settings 替换成功！')
      fse.copySync(path.resolve(__dirname, `render/env/${projectName}/lms/.env.production`), path.resolve(__dirname, 'dist/lms/.env.production'))
      log.success('lms模块 环境变量 替换成功！')
    }

    log.info('渲染文件替换成功！')
  } catch (e) {
    throw e
  }
}

async function execCommand(cwd, command, errMsg) {
  let ret = null
  if (command) {
    const cmdArray = command.split(' ')
    const cmd = cmdArray[0]
    const args = cmdArray.slice(1)
    //  cmd: npm   args: ['install']
    ret = await execAsync(cmd, args, {
      stdio: 'inherit',
      cwd
    })
  }
  if (ret !== 0) {
    // 安装依赖命令执行失败
    throw new Error(errMsg)
  }
  return ret
}

// 命令执行， 兼容 windows 和 macOs 中 spawn
function exec(command, args, options) {
  // win32 是 windows 环境
  const win32 = process.platform === 'win32'
  // window 中需要使用cmd来执行命令
  const cmd = win32 ? 'cmd' : command
  // 命令参数 -c 静默执行
  const cmdArgs = win32 ? ['/c'].concat(command, args) : args

  return require('child_process').spawn(cmd, cmdArgs, options || {})
}

// 命令执行的Promise函数
function execAsync(command, args, options) {
  return new Promise((resolve, reject) => {
    const p = exec(command, args, options)
    p.on('error', e => {
      reject(e)
    })
    p.on('exit', c => {
      resolve(c)
    })
  })
}

function costTime(start, end) {
  return `${Math.floor((end - start) / 1000)} s`
}

// auto(arg)

module.exports = {
  prepare,
  ejsRender,
  build,
  organize,
  public1
}

