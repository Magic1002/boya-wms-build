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
const renderDir = path.resolve(__dirname, 'render')
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
    // 拉取代码
    const projectName = projectPromptInfo.projectName
    log.info('正在拉取gitlab最新代码。。。')
    await execCommand(temDir, 'git checkout master', '切换分支失败！')
    await execCommand(temDir, 'git pull', '代码拉取失败！')

    // 确保目录同步
    fse.ensureDirSync(distDir)
    fse.ensureDirSync(temDir)
    fse.ensureDirSync(renderDir)
    fse.ensureDirSync(publicDir)

    // 清空dist内目录
    log.info('正在清空dist目录。。。')
    fse.emptyDirSync(distDir)
    log.info('清空dist目录成功！')

    // 复制最新代码到dist目录下
    log.info('正在拷贝源码到dist目录。。。')
    fse.copySync(temDir, distDir)
    log.info('拷贝源码到dist目录成功！')

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
    fse.copySync(path.resolve(__dirname, 'render/board/settings.js'), path.resolve(__dirname, 'dist/board/src/settings.js'))
    log.success('board模块 settings 替换成功！')
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

async function build(projectPromptInfo) {
  // 1. 安装依赖
  const startTime = new Date().getTime() // 依赖下载开始时间
  const boardCrd = path.resolve(__dirname, 'dist/board')
  const sysWmsCrd = path.resolve(__dirname, 'dist/sys-wms')
  const wmsCrd = path.resolve(__dirname, 'dist/wms')
  const projectName = projectPromptInfo.projectName
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
  const { projectName } = projectPromptInfo
  log.info(`*** 发布文件进行 zip 压缩  ***`)
  await execCommand(path.resolve(__dirname, './'), 'tar -cvzf wms.tar.zip -C ./public .', '文件打压缩包失败')
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

  sendMail(globalMessage, projectName, `wms.tar.zip`)
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

async function auto() {
  try {
    // 选取项目信息
    const projectPromptInfo = await inquirer.prompt(projectNamePrompt)
    // 准备阶段
    await prepare(projectPromptInfo)
    // 模板渲染阶段
    const ignore = ['**/.git/**', '**/node_modules/**', '**/public/**', '**/tests/**', '**/assets/**']
    await ejsRender({ ignore }, projectPromptInfo)
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
  ejsRender,
  build,
  organize,
  public1
}
