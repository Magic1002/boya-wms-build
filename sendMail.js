const path = require('path')
const nodemailer = require('nodemailer')
const moment = require('moment')
const log = require('./log')
moment.locale('zh-cn')
const templateInfo = require('./data')

const projectNamePrompt = [
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

const transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  // service: '腾讯企业邮箱', // 选择你的邮件服务提供商，例如腾讯企业邮箱、网易邮箱等
  // service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
  service: '163', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
  port: 465, // SMTP 端口(邮件传输协议)
  secureConnection: true, // 使用了 SSL
  auth: {
    // user: '773983210@qq.com',
    user: '18295790529@163.com', // 发件人邮箱
    // 这里密码不是qq密码，是你设置的smtp授权码
    // pass: 'foxyxamgunidbebf'
    pass: 'rrcqwtbjexlibadd' // 发件人邮箱密码或授权码
    // pass: '163Email134658' // 发件人邮箱密码或授权码
  }
})

// const toEmail = '87937472@qq.com'
// const toEmail = '773983210@qq.com'
const maillistDev = [
  '773983210@qq.com',
  '568665691@qq.com'
]

const maillistProd = [
  // '87937472@qq.com', // 吕工
  // '773983210@qq.com',
  // '568665691@qq.com',
  // '280660410@qq.com',   // 小孙
  // 'haimanchen@126.com',
  // '3634911615@qq.com', // 穆亚森
  // '576259100@qq.com',
  // '2287307495@qq.com', // 帅博
  'zb18539701268@163.com', // 帅博
  '576259100@qq.com', // 宋海涛
  '18295790529@163.com', // 畅智锋
  'm17718563027@163.com', // 杨泽赵
  'whw18500517798@163.com' // 王海伟
]

function sendMail(message, projectName, zipName) {
  let messageHTML = ''
  message.packageTime.forEach(msg => {
    messageHTML += `<p style="text-indent: 2em;">${msg}</p>`
  })
  const customerName = templateInfo[projectName].packageName || templateInfo[projectName].customer
  const zipFile = path.resolve(__dirname, zipName || `boya.tar.gz`)
  let chooseProjectName = ''
  projectNamePrompt.forEach(i => {
    if (i.value === projectName) {
      chooseProjectName = i.name
    }
  })
  // 邮件选项
  const mailOptions = {
    // from: '"773983210" <773983210@qq.com>', // 发件人邮箱
    from: '18295790529@163.com', // 发件人邮箱
    to: projectName.indexOf('dev') !== -1 ? maillistDev : maillistProd, // 收件人邮箱
    subject: `${customerName}打包文件`, // 邮件主题
    // 邮件正文（HTML）
    html: `<h4>Dear:</h4>
        <p h5 style="display: inline-block;text-indent: 2em;">附件是 <h5 style="display: inline;"> ${customerName} (${projectName.indexOf('dev') !== -1 ? '测试环境' : '正式环境'})</h5> （${chooseProjectName}）前端部署打包文件。</p>
        <p style="text-indent: 2em;">本次打包${message.installTime[0]}</p>
        
        <p style="text-indent: 2em;">本次打包编译用时信息如下：</p>
        ${messageHTML}
        <h5>Good luck</h5><h4 style="text-indent:35em;">博雅智能</h4>`, // 内容主体
    attachments: [
      {
        filename: `${customerName}${moment().format('YYYY-MM-DD')}.tar.gz`, // 附件文件名
        path: zipFile // 附件文件路径
      }
    ]
  }
  // send mail with defined transport object
  // 发送邮件
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    // console.log('Message sent: %s', info.messageId);
    log.success(`*** 发布文件zip已发送 ***`)
    // log.success(`*** 发布文件zip已发送到 ${maillist.join(',')}  ***`)
  })
}

module.exports = sendMail
