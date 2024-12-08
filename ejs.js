const ejs = require('ejs')
const people = ['geddy', 'neil', 'alex']
const html = ejs.render('<%= people.join(", "); %>', { people })
console.log('html: ', html)

const path = require('path')
const distDir = path.resolve(__dirname, 'dist')
ejs.renderFile(distDir, {}, {}, (err, result) => {
  console.log('result: ', result)
  // result => 输出渲染后的 HTML 字符串
  if (err) {
    console.log(err)
  }
})
