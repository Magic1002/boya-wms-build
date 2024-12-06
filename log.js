'use strict'

const log = require('npmlog')

log.heading = '博雅智能'
log.headingStyle = { fg: 'green', bg: 'blue' }

// 自定义日志级别‌：
log.addLevel('success', 2000, { fg: 'green', bold: true })

module.exports = log
