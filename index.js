const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const glob = require('glob')
const ejs = require('ejs')
// const archiver = require('archiver')
const inquirer = require('inquirer')

const log = require('./log')
const templateInfo = require('./data')
const sendMail = require('./sendMail')

// 1. 更新代码
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
        name: '陕西特种车辆（特车）-销售系统',
        value: 'TC'
      },
      {
        name: '陕西特种车辆（特车）-销售系统（201）',
        value: 'TCdev'
      },
      {
        name: '陕西庆华汽车安全系统有限责任公司',
        value: 'QH'
      },
      {
        name: '陕西庆华汽车安全系统有限责任公司（201）',
        value: 'QHdev'
      },
      {
        name: '陕西庆华汽车安全系统有限责任公司（经开）',
        value: 'QHJK'
      },
      {
        name: '陕西庆华汽车安全系统有限责任公司(经开-外网)',
        value: 'QHJKOut'
      },
      {
        name: '陕西庆华汽车安全系统有限责任公司（总部）',
        value: 'QHZB'
      },
      {
        name: '陕西庆华汽车安全系统有限责任公司(总部-外网)',
        value: 'QHZBOut'
      },
      {
        name: '中海油服油技制造中心随钻车间（海油云）',
        value: 'HYCloud'
      },
      {
        name: '中海油服油技制造中心随钻车间（海油云2）',
        value: 'HYCloud2'
      },
      {
        name: '中海油服油技制造中心随钻车间（海油本地服务器）',
        value: 'HY'
      },
      {
        name: '中海油服油技制造中心随钻车间（201）',
        value: 'HYdev'
      },
      {
        name: '装备作业及运维管理系统（EMOS-88环境）',
        value: 'EMOS'
      },
      {
        name: '装备作业及运维管理系统（EMOS）（201）',
        value: 'EMOSdev'
      },
      {
        name: '装备作业及运维管理系统（EMOS_TEST）',
        value: 'EMOSTEST'
      },
      {
        name: '装备作业及运维管理系统（EMOS海油云）',
        value: 'EMOSCloud'
      },
      {
        name: '装备作业及运维管理系统（EMOS本地）',
        value: 'EMOSLocal'
      },
      {
        name: '精益生产物料管理系统（仓储海油云服务器 10.75.25.79）',
        value: 'WMS'
      },
      {
        name: '精益生产物料管理系统（仓储测试服务器 8.130.16.201）',
        value: 'WMSdev'
      }
    ]
  }
]

// 全局信息
let globalMessage = {}

async function auto() {
  try {
    // 选取项目信息
    const projectPromptInfo = await inquirer.prompt(projectNamePrompt)
    // 准备阶段
    await prepare(projectPromptInfo)
    // return
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

async function public1(projectPromptInfo) {
  const { projectName } = projectPromptInfo
  // 对public进行tar压缩
  // const output = fs.createWriteStream(__dirname+'/boya-zip.zip')
  // const archive = archiver('zip')
  // archive.on('err', (err) => {
  //   log.error(err)
  // })
  // archive.pipe(output)
  // archive.directory('public/', false)
  // archive.finalize()
  log.info(`*** 发布文件进行 zip 压缩  ***`)
  await execCommand(path.resolve(__dirname, './'), 'tar -cvzf boya.tar.gz -C ./public .', '文件打压缩包失败')
  log.success(`*** 发布文件zip压缩成功  ***`)
  // const zipFile = path.resolve(__dirname, 'boya-zip.zip')
  // QHMES
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
    await execCommand(publicDir, 'scp -r -o StrictHostKeyChecking=no ./ root@8.130.16.201:/usr/share/nginx/html/qhmes', '庆华测试环境部署到201测试机过程失败！')
    // 传输文件结束时间
    const scpEndTime = new Date().getTime()
    log.success(`*** 庆华测试服务已经部署到201服务器成功  ***`)
    const cspUseTime = `***  部署文件传输到201服务器用时 ${costTime(startTime, scpEndTime)}  ***`
    globalMessage.packageTime.push(cspUseTime)
    log.info(cspUseTime)
  }
  // LMS
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
    await execCommand(publicDir, 'scp -r -o StrictHostKeyChecking=no ./ root@8.130.16.201:/usr/share/nginx/html/lms', '陕西庆华汽车安全系统有限责任公司（201）测试机过程失败！')
    // 传输文件结束时间
    const scpEndTime = new Date().getTime()
    log.success(`*** 陕西庆华汽车安全系统有限责任公司（201）服务器成功  ***`)
    const cspUseTime = `***  部署文件传输到201服务器用时 ${costTime(startTime, scpEndTime)}  ***`
    globalMessage.packageTime.push(cspUseTime)
    log.info(cspUseTime)
  }
  // EMOS
  if (projectName === 'EMOS') {
    // 传输文件开始时间
    const startTime = new Date().getTime()
    // const cspCmd = `scp -r -o StrictHostKeyChecking=no ${zipFile} root@8.130.16.201:/usr/share/nginx/html/test`
    // 庆华测试服务，部署到201测试机 /usr/share/nginx/html/qhmes
    // await execCommand(publicDir, cspCmd, '庆华测试环境部署到201测试机过程失败！')
    log.success(`*** 海油EMOS（201）服务原有版本清空开始  ***`)
    await execCommand(publicDir, 'ssh -o StrictHostKeyChecking=no root@8.130.16.201  rm -rf /usr/share/nginx/html/emos88/*', '销售系统201测试机清空Nginx资源失败！')
    log.success(`*** 海油EMOS（88环境）原有版本清空成功！  ***`)
    log.success(`*** 海油EMOS（88环境）新版本开始部署~~  ***`)
    await execCommand(publicDir, 'scp -r -o StrictHostKeyChecking=no ./ root@8.130.16.201:/usr/share/nginx/html/emos88', '海油EMOS（88环境）系统部署到201测试机过程失败！')
    // 传输文件结束时间
    const scpEndTime = new Date().getTime()
    log.success(`*** 海油EMOS系统已经部署到201服务器成功  ***`)
    const cspUseTime = `***  部署文件传输到201服务器用时 ${costTime(startTime, scpEndTime)}  ***`
    globalMessage.packageTime.push(cspUseTime)
    log.info(cspUseTime)
  }
  if (projectName === 'EMOSdev') {
    // 传输文件开始时间
    const startTime = new Date().getTime()
    // const cspCmd = `scp -r -o StrictHostKeyChecking=no ${zipFile} root@8.130.16.201:/usr/share/nginx/html/test`
    // 庆华测试服务，部署到201测试机 /usr/share/nginx/html/qhmes
    // await execCommand(publicDir, cspCmd, '庆华测试环境部署到201测试机过程失败！')
    log.success(`*** 海油EMOS（201）服务原有版本清空开始  ***`)
    await execCommand(publicDir, 'ssh -o StrictHostKeyChecking=no root@8.130.16.201  rm -rf /usr/share/nginx/html/emos/*', '销售系统201测试机清空Nginx资源失败！')
    log.success(`*** 海油EMOS（201）原有版本清空成功！  ***`)
    log.success(`*** 海油EMOS（201）新版本开始部署~~  ***`)
    await execCommand(publicDir, 'scp -r -o StrictHostKeyChecking=no ./ root@8.130.16.201:/usr/share/nginx/html/emos', '海油EMOS系统部署到201测试机过程失败！')
    // 传输文件结束时间
    const scpEndTime = new Date().getTime()
    log.success(`*** 海油EMOS系统已经部署到201服务器成功  ***`)
    const cspUseTime = `***  部署文件传输到201服务器用时 ${costTime(startTime, scpEndTime)}  ***`
    globalMessage.packageTime.push(cspUseTime)
    log.info(cspUseTime)
  }
  // WMS
  if (projectName === 'WMSdev') { // 仓储测试服务器 8.130.16.201服务器
    // 传输文件开始时间
    const startTime = new Date().getTime()
    // const cspCmd = `scp -r -o StrictHostKeyChecking=no ${zipFile} root@8.130.16.201:/usr/share/nginx/html/test`
    // 庆华测试服务，部署到201测试机 /usr/share/nginx/html/qhmes
    // await execCommand(publicDir, cspCmd, '庆华测试环境部署到201测试机过程失败！')
    log.success(`*** 精益生产物料管理系统（仓储测试服务器 8.130.16.201）原有版本清空开始  ***`)
    await execCommand(publicDir, 'ssh -o StrictHostKeyChecking=no root@8.130.16.201  rm -rf /usr/share/nginx/html/wms/*', '精益生产物料管理系统（仓储测试服务器 8.130.16.201）清空Nginx资源失败！')
    log.success(`*** 精益生产物料管理系统（仓储测试服务器 8.130.16.201）原有版本清空成功！  ***`)
    log.success(`***精益生产物料管理系统（仓储测试服务器 8.130.16.201）新版本开始部署~~  ***`)
    await execCommand(publicDir, 'scp -r -o StrictHostKeyChecking=no ./ root@8.130.16.201:/usr/share/nginx/html/wms', '精益生产物料管理系统（仓储测试服务器 8.130.16.201）部署过程失败！')
    // 传输文件结束时间
    const scpEndTime = new Date().getTime()
    log.success(`*** 精益生产物料管理系统（仓储测试服务器 8.130.16.201）部署成功  ***`)
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
    await execCommand(publicDir, 'scp -r -o StrictHostKeyChecking=no ./ root@8.130.16.201:/usr/share/nginx/html/sale', '陕西特种车辆（特车）-销售系统部署到201测试机过程失败！')
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

  if (projectName === 'EMOSLocal') {
    fse.copySync(path.resolve(__dirname, 'dist/board/dist'), path.resolve(__dirname, 'public/boya-board'))
  } else {
    fse.copySync(path.resolve(__dirname, 'dist/board/dist'), path.resolve(__dirname, 'public/board'))
  }

  if (projectName.indexOf('WMS') !== -1) {
    // wms的sys
    fse.copySync(path.resolve(__dirname, 'dist/sys-wms/dist'), path.resolve(__dirname, 'public/sys'))
  } else if (projectName === 'EMOS' || projectName === 'EMOSdev' || projectName === 'EMOSCloud' || projectName === 'EMOSTEST') {
    // 国际化项目
    fse.copySync(path.resolve(__dirname, 'dist/sys-i18n/dist'), path.resolve(__dirname, 'public/sys-i18n'))
  } else if (projectName === 'EMOSLocal') {
    // 国际化项目
    fse.copySync(path.resolve(__dirname, 'dist/sys-i18n/dist'), path.resolve(__dirname, 'public/boya-sys'))
  } else {
    // 非国际化项目
    fse.copySync(path.resolve(__dirname, 'dist/sys/dist'), path.resolve(__dirname, 'public/sys'))
  }

  if (projectName === 'TC' || projectName === 'TCdev') {
    fse.copySync(path.resolve(__dirname, 'dist/sale/dist'), path.resolve(__dirname, 'public/sale'))
  }
  if (projectName === 'QH' || projectName === 'QHdev' || projectName === 'QHJK' || projectName === 'QHJKOut' || projectName === 'QHZB' || projectName === 'QHZBOut') {
    fse.copySync(path.resolve(__dirname, 'dist/qhmes/dist'), path.resolve(__dirname, 'public/qhmes'))
  }
  if (projectName === 'HY' || projectName === 'HYCloud' || projectName === 'HYCloud2' || projectName === 'HYdev') {
    fse.copySync(path.resolve(__dirname, 'dist/lms/dist'), path.resolve(__dirname, 'public/lms'))
  }
  if (projectName === 'EMOS' || projectName === 'EMOSdev' || projectName === 'EMOSCloud' || projectName === 'EMOSTEST') {
    fse.copySync(path.resolve(__dirname, 'dist/emos/dist'), path.resolve(__dirname, 'public/emos'))
  }
  if (projectName === 'EMOSLocal') {
    fse.copySync(path.resolve(__dirname, 'dist/emos/dist'), path.resolve(__dirname, 'public/emos-web'))
  }
  if (projectName === 'WMS' || projectName === 'WMSdev') {
    fse.copySync(path.resolve(__dirname, 'dist/wms/dist'), path.resolve(__dirname, 'public/wms'))
  }
}

async function build(projectPromptInfo) {
  // 1. 安装依赖
  const startTime = new Date().getTime()
  const boardCrd = path.resolve(__dirname, 'dist/board')
  const sysCrd = path.resolve(__dirname, 'dist/sys')
  const sysI18nCrd = path.resolve(__dirname, 'dist/sys-i18n')
  const sysWmsCrd = path.resolve(__dirname, 'dist/sys-wms')
  const saleCrd = path.resolve(__dirname, 'dist/sale')
  const qhmesCrd = path.resolve(__dirname, 'dist/qhmes')
  const lmsCrd = path.resolve(__dirname, 'dist/lms')
  const emosCrd = path.resolve(__dirname, 'dist/emos')
  const wmsCrd = path.resolve(__dirname, 'dist/wms')

  // 获取需要打包的文件夹名称  ['board', 'sys', 'sale']
  const projectName = projectPromptInfo.projectName
  log.info('***  board模块正在安装依赖...  ***')
  await execCommand(boardCrd, 'yarn', 'board模块依赖安装过程失败！')

  if (projectName.indexOf('WMS') !== -1) {
    // wms的sys
    log.info('***  sys-wms模块正在安装依赖...  ***')
    await execCommand(sysWmsCrd, 'yarn', 'sys-wms模块依赖安装过程失败！')
  } else if (projectName.indexOf('EMOS') !== -1) {
    // 国际化项目
    log.info('***  sys-i18n模块正在安装依赖...  ***')
    await execCommand(sysI18nCrd, 'yarn', 'sys-i18n模块依赖安装过程失败！')
  } else {
    // 非国际化项目
    log.info('***  sys模块正在安装依赖...  ***')
    await execCommand(sysCrd, 'yarn', 'sys模块依赖安装过程失败！')
  }

  if (projectName === 'TC' || projectName === 'TCdev') {
    log.info('***  sale模块正在安装依赖...  ***')
    await execCommand(saleCrd, 'yarn', 'sale模块依赖安装过程失败！')
  }
  if (projectName === 'QH' || projectName === 'QHdev' || projectName === 'QHJK' || projectName === 'QHJKOut' || projectName === 'QHZB' || projectName === 'QHZBOut') {
    log.info('***  qhmes模块正在安装依赖...  ***')
    await execCommand(qhmesCrd, 'yarn', 'qhmes模块依赖安装过程失败！')
  }
  if (projectName === 'HY' || projectName === 'HYCloud' || projectName === 'HYCloud2' || projectName === 'HYdev') {
    log.info('***  lms模块正在安装依赖...  ***')
    await execCommand(lmsCrd, 'yarn', 'lms模块依赖安装过程失败！')
  }
  if (projectName === 'EMOS' || projectName === 'EMOSdev' || projectName === 'EMOSCloud' || projectName === 'EMOSLocal' || projectName === 'EMOSTEST') {
    log.info('***  emos模块正在安装依赖...  ***')
    await execCommand(emosCrd, 'yarn', 'emos模块依赖安装过程失败！')
  }
  if (projectName === 'WMS' || projectName === 'WMSdev') {
    log.info('***  wms模块正在安装依赖...  ***')
    await execCommand(wmsCrd, 'yarn', 'wms模块依赖安装过程失败！')
  }
  // 依赖下载结束时间
  const installEndTime = new Date().getTime()
  // 2. 打包
  log.info('***  开始打包的模块： board模块  ***')
  await execCommand(boardCrd, 'npm run build:prod', 'board模块打包失败！')
  const boardPackEndTime = new Date().getTime()
  let sysPackEndTime = null

  if (projectName.indexOf('WMS') !== -1) {
    // wms的sys
    log.info('***  开始打包的模块： sys-wms模块  ***')
    await execCommand(sysWmsCrd, 'npm run build:prod', 'sys-wms模块打包失败！')
    sysPackEndTime = new Date().getTime()
  } else if (projectName.indexOf('EMOS') !== -1) {
    // 国际化项目
    log.info('***  开始打包的模块： sys-i18n模块  ***')
    await execCommand(sysI18nCrd, 'npm run build:prod', 'sys-i18n模块打包失败！')
    sysPackEndTime = new Date().getTime()
  } else {
    // 非国际化项目
    log.info('***  开始打包的模块： sys模块  ***')
    await execCommand(sysCrd, 'npm run build:prod', 'sys模块打包失败！')
    sysPackEndTime = new Date().getTime()
  }

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
  if (projectName === 'QH' || projectName === 'QHdev' || projectName === 'QHJK' || projectName === 'QHJKOut' || projectName === 'QHZB' || projectName === 'QHZBOut') {
    log.info('***  开始打包的模块： qhmes模块  ***')
    const startPackTime = new Date().getTime()
    await execCommand(qhmesCrd, 'npm run build:prod', 'qhmes模块打包失败！')
    // 打包结束时间
    const endPackTime = new Date().getTime()
    globalMessage.packageTime.push(`***  qhmes模块打包用时 ${costTime(startPackTime, endPackTime)}  ***`)
  }
  if (projectName === 'HY' || projectName === 'HYCloud' || projectName === 'HYCloud2' || projectName === 'HYdev') {
    log.info('***  开始打包的模块： lms模块  ***')
    const startPackTime = new Date().getTime()
    await execCommand(lmsCrd, 'npm run build:prod', 'lms模块打包失败！')
    // 打包结束时间
    const endPackTime = new Date().getTime()
    globalMessage.packageTime.push(`***  lms模块打包用时 ${costTime(startPackTime, endPackTime)}  ***`)
  }
  if (projectName === 'EMOS' || projectName === 'EMOSdev' || projectName === 'EMOSCloud' || projectName === 'EMOSLocal' || projectName === 'EMOSTEST') {
    log.info('***  开始打包的模块： emos模块  ***')
    const startPackTime = new Date().getTime()
    await execCommand(emosCrd, 'npm run build:prod', 'emos模块打包失败！')
    // 打包结束时间
    const endPackTime = new Date().getTime()
    globalMessage.packageTime.push(`***  emos模块打包用时 ${costTime(startPackTime, endPackTime)}  ***`)
  }
  if (projectName === 'WMS' || projectName === 'WMSdev') {
    log.info('***  开始打包的模块： wms模块  ***')
    const startPackTime = new Date().getTime()
    await execCommand(wmsCrd, 'npm run build:prod', 'wms模块打包失败！')
    // 打包结束时间
    const endPackTime = new Date().getTime()
    globalMessage.packageTime.push(`***  wms模块打包用时 ${costTime(startPackTime, endPackTime)}  ***`)
  }

  log.success(`客户： ${templateInfo[projectName].customer} 的前端代码打包成功！`)
  globalMessage.installTime.forEach(msg => log.info(msg))
  globalMessage.packageTime.forEach(msg => log.info(msg))
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

async function prepare(projectPromptInfo) {
  try {
    // 拉取代码
    const projectName = projectPromptInfo.projectName
    log.info('正在拉取gitlab最新代码。。。')
    if (projectName === 'EMOSCloud') {
      await execCommand(temDir, 'git checkout prod', '切换分支失败！')
      await execCommand(temDir, 'git pull', '代码拉取失败！')
    } else {
      await execCommand(temDir, 'git checkout master', '切换分支失败！')
      await execCommand(temDir, 'git pull', '代码拉取失败！')
    }
    console.log(projectName, 'projectName')
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

    log.info('正在替换渲染文件。。。')
    // board
    log.info('***  正在替换的模块： board模块  ***')
    fse.copySync(path.resolve(__dirname, 'render/board/Board/index.vue'), path.resolve(__dirname, 'dist/board/src/views/Board/index.vue'))
    log.success('board模块 控制面板 渲染文件替换成功！')
    // 登陆页面和特殊页面的替换
    if (projectName.indexOf('EMOS') !== -1) {
      // 装备作业及运维管理系统
      // fse.copySync(path.resolve(__dirname, 'render/board/Login/emos.vue'), path.resolve(__dirname, 'dist/board/src/views/Login/index.vue'))
      fse.copySync(path.resolve(__dirname, 'dist/board/src/views/Login/emos.vue'), path.resolve(__dirname, 'dist/board/src/views/Login/index.vue'))
      fse.copySync(path.resolve(__dirname, 'dist/board/src/views/reset-pwd/emos.vue'), path.resolve(__dirname, 'dist/board/src/views/reset-pwd/index.vue'))
    } else if (projectName.indexOf('WMS') !== -1) {
      // 装备作业及运维管理系统
      // fse.copySync(path.resolve(__dirname, 'render/board/Login/emos.vue'), path.resolve(__dirname, 'dist/board/src/views/Login/index.vue'))
      fse.copySync(path.resolve(__dirname, 'dist/board/src/views/Login/wms.vue'), path.resolve(__dirname, 'dist/board/src/views/Login/index.vue'))
      fse.copySync(path.resolve(__dirname, 'dist/board/src/views/reset-pwd/wms.vue'), path.resolve(__dirname, 'dist/board/src/views/reset-pwd/index.vue'))
    } else {
      fse.copySync(path.resolve(__dirname, 'render/board/Login/index.vue'), path.resolve(__dirname, 'dist/board/src/views/Login/index.vue'))
    }

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
    // Tip 新增
    fse.copySync(path.resolve(__dirname, 'render/sys/system/user/index.vue'), path.resolve(__dirname, 'dist/sys/src/views/system/user/index.vue'))
    log.success('sys模块 用户页面 替换成功！')
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

    if (projectName === 'QH' || projectName === 'QHdev' || projectName === 'QHJK' || projectName === 'QHJKOut' || projectName === 'QHZB' || projectName === 'QHZBOut') {
      // qhmes  庆华
      fse.copySync(path.resolve(__dirname, 'render/qhmes/settings.js'), path.resolve(__dirname, 'dist/qhmes/src/settings.js'))
      log.success('qhmes模块 settings 替换成功！')
      fse.copySync(path.resolve(__dirname, `render/env/${projectName}/qhmes/.env.production`), path.resolve(__dirname, 'dist/qhmes/.env.production'))
      log.success('qhmes模块 环境变量 替换成功！')
    }

    if (projectName === 'HY' || projectName === 'HYCloud' || projectName === 'HYCloud2' || projectName === 'HYdev') {
      // lms  海油
      fse.copySync(path.resolve(__dirname, 'render/lms/settings.js'), path.resolve(__dirname, 'dist/lms/src/settings.js'))
      log.success('lms模块 settings 替换成功！')
      fse.copySync(path.resolve(__dirname, `render/env/${projectName}/lms/.env.production`), path.resolve(__dirname, 'dist/lms/.env.production'))
      log.success('lms模块 环境变量 替换成功！')
    }

    if (projectName === 'EMOS' || projectName === 'EMOSdev' || projectName === 'EMOSCloud' || projectName === 'EMOSLocal' || projectName === 'EMOSTEST') {
      // sys-i18n
      log.info('***  正在替换的模块： sys-i18n模块  ***')
      fse.copySync(path.resolve(__dirname, 'render/sys-i18n/system/menu/index.vue'), path.resolve(__dirname, 'dist/sys-i18n/src/views/system/menu/index.vue'))
      log.success('sys-i18n模块 菜单页面 替换成功！')
      fse.copySync(path.resolve(__dirname, 'render/sys-i18n/system/role/menus.vue'), path.resolve(__dirname, 'dist/sys-i18n/src/views/system/role/menus.vue'))
      log.success('sys-i18n模块 角色页面 替换成功！')
      fse.copySync(path.resolve(__dirname, 'render/sys-i18n/system/dictionary/index.vue'), path.resolve(__dirname, 'dist/sys-i18n/src/views/system/dictionary/index.vue'))
      log.success('sys-i18n模块 字典页面 替换成功！')
      fse.copySync(path.resolve(__dirname, 'render/sys-i18n/settings.js'), path.resolve(__dirname, 'dist/sys-i18n/src/settings.js'))
      log.success('sys-i18n模块 settings 替换成功！')
      fse.copySync(path.resolve(__dirname, `render/env/${projectName}/sys-i18n/.env.production`), path.resolve(__dirname, 'dist/sys-i18n/.env.production'))
      log.success('sys-i18n模块 环境变量 替换成功！')
      // emos  海油
      fse.copySync(path.resolve(__dirname, 'render/emos/settings.js'), path.resolve(__dirname, 'dist/emos/src/settings.js'))
      log.success('emos模块 settings 替换成功！')
      fse.copySync(path.resolve(__dirname, `render/env/${projectName}/emos/.env.production`), path.resolve(__dirname, 'dist/emos/.env.production'))
      log.success('emos模块 环境变量 替换成功！')
    }

    if (projectName === 'WMS' || projectName === 'WMSdev') {
      // sys-wms
      log.info('***  正在替换的模块： sys-i18n模块  ***')
      fse.copySync(path.resolve(__dirname, 'render/sys-wms/system/menu/index.vue'), path.resolve(__dirname, 'dist/sys-wms/src/views/system/menu/index.vue'))
      log.success('sys-i18n模块 菜单页面 替换成功！')
      fse.copySync(path.resolve(__dirname, 'render/sys-wms/system/role/menus.vue'), path.resolve(__dirname, 'dist/sys-wms/src/views/system/role/menus.vue'))
      log.success('sys-i18n模块 角色页面 替换成功！')
      fse.copySync(path.resolve(__dirname, 'render/sys-wms/system/dictionary/index.vue'), path.resolve(__dirname, 'dist/sys-wms/src/views/system/dictionary/index.vue'))
      log.success('sys-i18n模块 字典页面 替换成功！')
      fse.copySync(path.resolve(__dirname, 'render/sys-wms/settings.js'), path.resolve(__dirname, 'dist/sys-wms/src/settings.js'))
      log.success('sys-i18n模块 settings 替换成功！')
      fse.copySync(path.resolve(__dirname, `render/env/${projectName}/sys/.env.production`), path.resolve(__dirname, 'dist/sys-wms/.env.production'))
      log.success('sys-i18n模块 环境变量 替换成功！')
      // wms  海油
      fse.copySync(path.resolve(__dirname, 'render/wms/settings.js'), path.resolve(__dirname, 'dist/wms/src/settings.js'))
      log.success('wms模块 settings 替换成功！')
      fse.copySync(path.resolve(__dirname, `render/env/${projectName}/wms/.env.production`), path.resolve(__dirname, 'dist/wms/.env.production'))
      log.success('wms模块 环境变量 替换成功！')
    }

    // 替换文字
    if (projectName === 'EMOSTEST') {
      const from = ['装备运维作业', '井', '璇玑', '作业', 'Trak', 'SLB', 'BH', 'HAL', '定向', '随钻']
      const to = ['ZBYWZY', 'JJ', 'XJ', 'ZY', 'XXX', 'SSS', 'BB', 'HHH', 'DX', 'SZ']
      // templateInfo[projectName].buildFilesList.map(item => {
      //   fse.ensureDirSync(distDir + '/' + item)
      replaceSensitiveWordInFolder(path.resolve(__dirname, 'dist/sys-i18n/src'), from, to)
      replaceSensitiveWordInFolder(path.resolve(__dirname, 'dist/emos/src'), from, to)
      replaceSensitiveWordInFolder(path.resolve(__dirname, 'dist/board/src'), from, to)
      // })
    }

    log.info('渲染文件替换成功！')
  } catch (e) {
    throw e
  }
}

// 替换敏感词
// 替换文件内容的函数
function replaceContentInFile(filePath, from, to) {
  const content = fs.readFileSync(filePath, 'utf8')
  let replacedContent = content
  from.forEach((v, i) => {
    replacedContent = replacedContent.replace(new RegExp(v, 'g'), to[i])
  })

  fs.writeFileSync(filePath, replacedContent, 'utf8')
}

// 递归替换指定文件夹下所有文件的敏感字符串
function replaceSensitiveWordInFolder(folder, from, to) {
  // 使用glob模块获取指定文件夹下所有文件的路径
  glob.sync(`${folder}/**/*`).forEach(function(file) {
    if (fs.lstatSync(file).isFile()) {
      replaceContentInFile(file, from, to)
    }
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

auto()

module.exports = {
  prepare,
  ejsRender,
  build,
  organize,
  public1
}

