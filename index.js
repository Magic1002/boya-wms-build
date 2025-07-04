// const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const glob = require('glob')
const ejs = require('ejs')
const inquirer = require('inquirer')

const log = require('./log')
const templateInfo = require('./data')
const sendMail = require('./sendMail')

const distDir = path.resolve(__dirname, 'dist')
const temDir = path.resolve(__dirname, 'template')
const boyaDir = path.resolve(__dirname, 'boya')
const publicDir = path.resolve(__dirname, 'public')

// 项目信息
const projectNamePrompt = [
  {
    type: 'list',
    name: 'projectName',
    message: '请选择服务的客户',
    choices: [
      {
        name: '精益生产物料管理系统(仓储海油云服务器 ip:10.75.25.79)',
        value: 'WMSHYCloud'
      },
      {
        name: '精益生产物料管理系统(仓储1.4服务器_http ip:192.168.1.4)',
        value: 'WMSHYTest' // 海油测试
      },
      {
        name: '精益生产物料管理系统(仓储1.7服务器_http ip:192.168.1.7)',
        value: 'WMSdev'
      },
      {
        name: '精益生产物料管理系统(仓储1.5服务器_https ip:192.168.1.5)',
        value: 'WMSdevSecure'
      },
      {
        name: '精益生产物料管理系统(仓储内网域名服务器_https https://intranet.byimt.com)',
        value: 'WMSdevIntranet'
      }
    ]
  }
]

// 全局信息
let globalMessage = {}

async function prepare(projectPromptInfo) {
  try {
    const projectName = projectPromptInfo.projectName // 选择的项目名称

    // ensureDirSync：创建目录(确保目录的存在。如果目录结构不存在,就创建一个。)
    fse.ensureDirSync(distDir)
    fse.ensureDirSync(temDir)
    fse.ensureDirSync(publicDir)

    // 如果template目录为空，则删除目录。将项目克隆下来再更名为template。
    const isTemDirEmpty = isDirectoryEmpty(temDir)
    if (isTemDirEmpty) {
      removeDir(temDir)
      log.info('正在克隆GitHub远程仓库。。。')
      await execCommand(__dirname, 'git clone git@github.com:Jasonwang911/boya.git', 'GitHub远程仓库克隆失败！')
      log.success('GitHub远程仓库克隆成功！')
      modifyDir(boyaDir, temDir)
    }

    // 拉取代码
    log.info('正在拉取gitlab最新代码。。。')
    await execCommand(temDir, 'git checkout master', '切换分支失败！')
    await execCommand(temDir, 'git pull', '代码拉取失败！')

    // 清空dist内目录
    log.info('正在清空dist目录。。。')
    fse.emptyDirSync(distDir) // 确保一个目录是空的。如果目录非空删除目录内容。如果目录不存在,就创建一个。目录本身并不是删除。
    log.success('清空dist目录成功！')

    // 复制最新代码到dist目录下
    log.info('正在拷贝源码到dist目录。。。')
    // fse.copySync(temDir, distDir)
    const b = await copyFile(projectName)
    if (!b) {
      return
    }
    log.success('拷贝源码到dist目录成功！')

    // 替换对应渲染文件
    log.info('正在替换渲染文件。。。')

    // board
    log.info('***  正在替换的模块： board模块  ***')
    fse.copySync(path.resolve(__dirname, 'render/board/Board/index.vue'), path.resolve(__dirname, 'dist/board/src/views/Board/index.vue'))
    log.success('board模块 控制面板 渲染文件替换成功！')
    // 登陆页面和重置密码页面的替换
    fse.copySync(path.resolve(__dirname, 'dist/board/src/views/Login/wms.vue'), path.resolve(__dirname, 'dist/board/src/views/Login/index.vue'))
    fse.copySync(path.resolve(__dirname, 'dist/board/src/views/reset-pwd/wms.vue'), path.resolve(__dirname, 'dist/board/src/views/reset-pwd/index.vue'))
    log.success('board模块 登录页面 重置密码页面 渲染文件替换成功！')
    // vue.config.js 文件的替换
    fse.copySync(path.resolve(__dirname, 'dist/board/vue.config_wms.js'), path.resolve(__dirname, 'dist/board/vue.config.js'))
    log.success('board模块 vue.config.js文件 替换成功！')
    // settings.js 文件的替换
    fse.copySync(path.resolve(__dirname, 'render/board/settings.js'), path.resolve(__dirname, 'dist/board/src/settings.js'))
    log.success('board模块 settings 替换成功！')
    // .env.production 文件的替换
    fse.copySync(path.resolve(__dirname, `render/env/${projectName}/board/.env.production`), path.resolve(__dirname, 'dist/board/.env.production'))
    log.success('board模块 环境变量 替换成功！')

    // sys-wms
    log.info('***  正在替换的模块： sys-wms模块  ***')
    fse.copySync(path.resolve(__dirname, 'render/sys-wms/system/menu/index.vue'), path.resolve(__dirname, 'dist/sys-wms/src/views/system/menu/index.vue'))
    log.success('sys-wms模块 菜单页面 替换成功！')
    fse.copySync(path.resolve(__dirname, 'render/sys-wms/system/role/menus.vue'), path.resolve(__dirname, 'dist/sys-wms/src/views/system/role/menus.vue'))
    log.success('sys-wms模块 角色页面 替换成功！')
    fse.copySync(path.resolve(__dirname, 'render/sys-wms/system/dictionary/index.vue'), path.resolve(__dirname, 'dist/sys-wms/src/views/system/dictionary/index.vue'))
    log.success('sys-wms模块 字典页面 替换成功！')
    // fse.copySync(path.resolve(__dirname, 'render/sys/system/user/index.vue'), path.resolve(__dirname, 'dist/sys/src/views/system/user/index.vue'))
    // log.success('sys模块 用户页面 替换成功！')
    fse.copySync(path.resolve(__dirname, 'render/sys-wms/settings.js'), path.resolve(__dirname, 'dist/sys-wms/src/settings.js'))
    log.success('sys-wms模块 settings 替换成功！')
    fse.copySync(path.resolve(__dirname, `render/env/${projectName}/sys/.env.production`), path.resolve(__dirname, 'dist/sys-wms/.env.production'))
    log.success('sys-wms模块 环境变量 替换成功！')

    // wms
    log.info('***  正在替换的模块： wms模块  ***')
    fse.copySync(path.resolve(__dirname, 'render/wms/settings.js'), path.resolve(__dirname, 'dist/wms/src/settings.js'))
    log.success('wms模块 settings 替换成功！')
    fse.copySync(path.resolve(__dirname, `render/env/${projectName}/wms/.env.production`), path.resolve(__dirname, 'dist/wms/.env.production'))
    log.success('wms模块 环境变量 替换成功！')

    log.info('渲染文件替换成功！')
  } catch (e) {
    throw e
  }
}

async function ejsRender(options, projectPromptInfo) {
  return new Promise((resolve, reject) => {
    log.info('开始渲染文件...')
    glob('**', {
      // 这个对象的选项用来控制文件匹配的行为
      cwd: distDir, // cwd 选项用于指定查找的起始目录
      ignore: options.ignore || '', // 指定需要忽略的文件
      nodir: true // 不匹配目录，只匹配文件
    }, (err, files) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      const projectName = projectPromptInfo.projectName // 选择的项目名称
      Promise.all(files.map(file => {
        const filePath = path.join(distDir, file)
        return new Promise((resolve1, reject1) => {
          // 文件渲染(将信息提供给glob模块匹配到的文件，供文件使用。然后用ejs的renderFile方法进行页面渲染。)
          // 参数1：文件名
          // 参数2：传入文件的参数
          // 参数3：配置属性
          // 参数2：回调函数
          // ejs.renderFile(filename, data, options, (err, str) => {
          //   str => Rendered HTML string
          // })
          ejs.renderFile(filePath, templateInfo[projectName], {}, (err, result) => {
            // result => 输出渲染后的 HTML 字符串
            if (err) {
              console.log(err)
              reject1(`${filePath} 渲染失败: ${err}`)
            }
            // 同步地将数据写入文件，如果文件不存在会被创建，如果文件已存在则替换它。
            fse.writeFileSync(filePath, result)
            // log.info(`文件渲染成功： ${filePath}`)
            resolve1(result)
          })
        })
      }))
        .then(() => {
          log.success(`客户： ${templateInfo[projectName].customer} 前端代码渲染成功！`)
          resolve()
        })
        .catch(err => {
          log.error(err)
          reject(err)
        })
    })
  })
}
// 相比较上一版区别在于：
// 这一版没使用glob。原因是没有那么多的文件需要编译，没必要把整个dist目录重新编译一遍。
// 哪个文件需要编译然后再进行精准编译，不会造成性能浪费。
async function ejsRender1(options, projectPromptInfo) {
  return new Promise((resolve, reject) => {
    const projectName = projectPromptInfo.projectName // 选择的项目名称
    const files = [
      path.resolve(__dirname, 'dist/board/src/views/Board/index.vue'),
      path.resolve(__dirname, 'dist/board/src/settings.js'),
      path.resolve(__dirname, 'dist/board/.env.production'),
      path.resolve(__dirname, 'dist/sys-wms/src/views/system/menu/index.vue'),
      path.resolve(__dirname, 'dist/sys-wms/src/views/system/role/menus.vue'),
      path.resolve(__dirname, 'dist/sys-wms/src/views/system/dictionary/index.vue'),
      path.resolve(__dirname, 'dist/sys-wms/src/settings.js'),
      path.resolve(__dirname, 'dist/sys-wms/.env.production'),
      path.resolve(__dirname, 'dist/wms/src/settings.js'),
      path.resolve(__dirname, 'dist/wms/.env.production')
    ]
    Promise.all(files.map(filePath => {
      return new Promise((resolve1, reject1) => {
      // 文件渲染(将信息提供给glob模块匹配到的文件，供文件使用。然后用ejs的renderFile方法进行页面渲染。)
      // 参数1：文件名
      // 参数2：传入文件的参数
      // 参数3：配置属性
      // 参数2：回调函数
      // ejs.renderFile(filename, data, options, (err, str) => {
      //   str => Rendered HTML string
      // })
        ejs.renderFile(filePath, templateInfo[projectName], {}, (err, result) => {
        // result => 输出渲染后的 HTML 字符串
          if (err) {
            console.log(err)
            reject1(`${filePath} 渲染失败: ${err}`)
          }
          // 同步地将数据写入文件，如果文件不存在会被创建，如果文件已存在则替换它。
          fse.writeFileSync(filePath, result)
          // log.info(`文件渲染成功： ${filePath}`)
          resolve1(result)
        })
      })
    }))
      .then(() => {
        log.success(`客户： ${templateInfo[projectName].customer} 前端代码渲染成功！`)
        resolve()
      })
      .catch(err => {
        log.error(err)
        reject(err)
      })
  })
}

async function build(projectPromptInfo) {
  // 1. 安装依赖
  const startTime = new Date().getTime() // 依赖下载开始时间
  const boardCrd = path.resolve(__dirname, 'dist/board')
  const sysWmsCrd = path.resolve(__dirname, 'dist/sys-wms')
  const wmsCrd = path.resolve(__dirname, 'dist/wms')
  const projectName = projectPromptInfo.projectName // 选择的项目名称
  log.info('***  board模块正在安装依赖...  ***')
  await execCommand(boardCrd, 'yarn', 'board模块依赖安装过程失败！')
  log.info('***  sys-wms模块正在安装依赖...  ***')
  await execCommand(sysWmsCrd, 'yarn', 'sys-wms模块依赖安装过程失败！')
  log.info('***  wms模块正在安装依赖...  ***')
  await execCommand(wmsCrd, 'yarn', 'wms模块依赖安装过程失败！')
  const installEndTime = new Date().getTime() // 依赖下载结束时间

  // 2. 打包
  log.info('***  开始打包的模块： board模块  ***')
  await execCommand(boardCrd, 'npm run build:prod', 'board模块打包失败！')
  const boardPackEndTime = new Date().getTime()
  log.info('***  开始打包的模块： sys-wms模块  ***')
  await execCommand(sysWmsCrd, 'npm run build:prod', 'sys-wms模块打包失败！')
  const sysWmsPackEndTime = new Date().getTime()
  log.info('***  开始打包的模块： wms模块  ***')
  await execCommand(wmsCrd, 'npm run build:prod', 'wms模块打包失败！')
  const wmsPackEndTime = new Date().getTime()

  globalMessage = {
    ...globalMessage,
    installTime: [
      `***  依赖安装用时 ${costTime(startTime, installEndTime)}  ***`
    ],
    packageTime: [
      `***  board模块打包用时 ${costTime(installEndTime, boardPackEndTime)}  ***`,
      `***  sys-wms模块打包用时 ${costTime(boardPackEndTime, sysWmsPackEndTime)}  ***`,
      `***  wms模块打包用时 ${costTime(sysWmsPackEndTime, wmsPackEndTime)}  ***`
    ]
  }
  log.success(`客户： ${templateInfo[projectName].customer} 的前端代码打包成功！`)
  globalMessage.installTime.forEach(msg => log.info(msg))
  globalMessage.packageTime.forEach(msg => log.info(msg))
}

async function organize(projectPromptInfo) {
  log.info(`*** 开始整理发布文件(项目打包目录)并拷贝到public目录  ***`)
  // 1、清空publish防止缓存
  fse.emptyDirSync(publicDir) //
  // 2、拷贝项目打包目录到public目录
  fse.copySync(path.resolve(__dirname, 'dist/board/dist'), path.resolve(__dirname, 'public/board'))
  fse.copySync(path.resolve(__dirname, 'dist/sys-wms/dist'), path.resolve(__dirname, 'public/sys'))
  fse.copySync(path.resolve(__dirname, 'dist/wms/dist'), path.resolve(__dirname, 'public/wms'))
}

async function public1(projectPromptInfo) {
  const projectName = projectPromptInfo.projectName // 选择的项目名称
  log.info(`*** 发布文件进行 zip 压缩  ***`)
  await execCommand(path.resolve(__dirname, './'), 'tar -cvzf wms.tar.gz -C ./public .', '文件打压缩包失败')
  log.success(`*** 发布文件zip压缩成功  ***`)
  if (projectName === 'WMSdev') { // http://192.168.1.7
    const startTime = new Date().getTime() // 传输文件开始时间
    log.success(`*** 精益生产物料管理系统(仓储1.7服务器 192.168.1.7)原有版本清空开始  ***`)
    await execCommand(publicDir, 'ssh -o StrictHostKeyChecking=no root@192.168.1.7  rm -rf /usr/share/nginx/html/wms/*', '精益生产物料管理系统(仓储1.7服务器 192.168.1.7)清空Nginx资源失败！')
    log.success(`*** 精益生产物料管理系统(仓储1.7服务器 192.168.1.7)原有版本清空成功！  ***`)
    log.success(`***精益生产物料管理系统(仓储1.7服务器 192.168.1.7)新版本开始部署~~  ***`)
    await execCommand(publicDir, 'scp -r -o StrictHostKeyChecking=no ./ root@192.168.1.7:/usr/share/nginx/html/wms', '精益生产物料管理系统(仓储1.7服务器 192.168.1.7)部署过程失败！')
    log.success(`*** 精益生产物料管理系统(仓储1.7服务器 192.168.1.7)部署成功  ***`)
    const scpEndTime = new Date().getTime() // 传输文件结束时间
    const cspUseTime = `***  部署文件传输到内网服务器用时 ${costTime(startTime, scpEndTime)}  ***`
    globalMessage.packageTime.push(cspUseTime)
    log.info(cspUseTime)
  }

  sendMail(globalMessage, projectName, `wms.tar.gz`)
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
async function copyFile(projectName) {
  const buildFilesList = ['board', 'sys-wms', 'wms']
  let n = 0
  buildFilesList.map(item => {
    fse.ensureDirSync(distDir + '/' + item)
    fse.copySync(temDir + '/' + item, distDir + '/' + item)
    n++
  })
  if (n === buildFilesList.length) {
    return true
  }
  return false
}

// 检查目录是否为空
function isDirectoryEmpty(dirPath) {
  try {
    const files = fse.readdirSync(dirPath)
    return files.length === 0
  } catch (err) {
    console.error('Error checking directory:', err)
    return null
  }
}

// 删除目录
function removeDir(dirPath) {
  try {
    fse.removeSync(dirPath)
    console.log(`Directory ${dirPath} is successfully deleted.`)
  } catch (err) {
    console.error(`Error while deleting directory ${dirPath}: ${err}`)
  }
}

// 修改目录
function modifyDir(oldDirPath, newDirPath) {
  try {
    fse.renameSync(oldDirPath, newDirPath)
  } catch (error) {
    console.error(error)
  }
}

async function auto() {
  try {
    // 选取项目信息
    const projectPromptInfo = await inquirer.prompt(projectNamePrompt)
    // 准备阶段
    await prepare(projectPromptInfo)
    // 模板渲染阶段
    const ignore = ['**/.git/**', '**/node_modules/**', '**/public/**', '**/tests/**', '**/assets/**']
    // await ejsRender({ ignore }, projectPromptInfo)
    await ejsRender1({ ignore }, projectPromptInfo)
    // 打包编译阶段
    await build(projectPromptInfo)
    // 整理打包文件
    await organize(projectPromptInfo)
    // 发布代码整理压缩并发送阶段
    await public1(projectPromptInfo)
    return true
  } catch (e) {
    log.error(e)
  }
}

auto()

module.exports = {
  prepare,
  ejsRender, // 使用了glob模块
  ejsRender1, // 未使用glob模块
  build,
  organize,
  public1
}
