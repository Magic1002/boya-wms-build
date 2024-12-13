// ‌require('glob')是Node.js中用于引入glob模块的方法。glob模块是一个用于匹配文件路径的模块，它可以通过通配符模式快速找到符合条件的文件或文件夹路径。
// 参考地址：https://www.npmjs.com/package/glob
// 使用方法
// 1、‌同步获取文件路径‌：使用glob.sync(pattern[, options])方法可以同步地获取满足指定通配符模式的文件或文件夹路径列表。例如，获取所有的.js文件路径可以这样写：
// const glob = require('glob');
// const files = glob.sync('*.js');
// console.log(files);
// 2、‌异步获取文件路径‌：使用glob(pattern[, options], callback)方法可以异步地获取满足指定通配符模式的文件或文件夹路径列表。例如：
// const glob = require('glob');
// glob('*.js', (err, files) => {
//     if (err) throw err;
//     console.log(files);
// });
// 通配符模式
// glob模块支持以下通配符：
// *：匹配0个或多个字符
// ?：匹配1个字符
// **：匹配所有文件和零个或多个目录
// [...]：匹配指定范围内的字符，如[a-z]匹配所有小写字母
// 示例
// 匹配所有.js文件：glob.sync('*.js') 或 glob('*.js', callback)
// 匹配所有的.js和.css文件：glob.sync(['*.js', '*.css'])
// 匹配所有子目录中的.js文件：glob.sync('**/*.js')
