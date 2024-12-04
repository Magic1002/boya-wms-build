// Tip 这个脚本主要用来一次性下载多项目依赖
const path = require('path')

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

async function auto() {
  // 这个路径根据自身项目结构进行调整
  const boardCrd = path.resolve(__dirname, 'dist/board')
  const sysWmsCrd = path.resolve(__dirname, 'dist/sys-wms')
  const wmsCrd = path.resolve(__dirname, 'dist/wms')
  await execCommand(boardCrd, 'yarn', 'board模块依赖安装过程失败！')
  await execCommand(sysWmsCrd, 'yarn', 'board模块依赖安装过程失败！')
  await execCommand(wmsCrd, 'yarn', 'board模块依赖安装过程失败！')
}

auto()
