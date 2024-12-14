// EJS 嵌入式JavaScript模板引擎
// EJS是一个用于Web开发的JavaScript模板引擎，允许用户使用HTML模板中的JavaScript代码生成动态HTML标记。它旨在简化在Web应用程序中呈现动态内容的过程。它包含HTML和JavaScript的混合体，这使得基于应用程序中的数据生成动态内容变得很容易。
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
