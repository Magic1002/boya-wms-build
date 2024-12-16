/**
  *‌ Node.js提供了多个内置模块，这些模块在安装Node.js时就已经存在，通过require()函数引入并使用，无需额外安装。以下是一些常用的内置模块及其功能‌：
    *‌ fs（文件系统）模块‌：用于处理文件系统操作，如读取、写入、删除文件或文件夹等。例如，读取文件可以使用fs.readFile()或fs.readFileSync()方法‌。
    *‌ http模块‌：用于创建HTTP服务器和客户端，实现网络通信功能‌。这个模块提供了基本的HTTP请求和响应功能‌。
    *‌ path模块‌：用于处理和转换文件路径，例如解析路径、合并路径、判断路径类型等‌。
    *‌ os模块‌：提供基本的系统操作函数，如获取环境变量、系统信息等‌。
    *‌ url模块‌：用于URL解析和处理，可以将域名转换为IP地址或反向解析IP地址为域名‌。
    *‌ crypto模块‌：提供加密功能，例如生成哈希、加密解密等‌。
    *‌ querystring模块‌：用于解析和处理URL中的查询字符串‌。
    *‌ util模块‌：提供一些实用工具函数，如格式化输出、检查数据类型等‌。
    * events - 事件发射器模块，许多其他模块都是基于此构建的。
    * stream - 流模块，用于处理流数据。
    * 此外，还有一些工具模块，如：
      *‌ net模块‌：用于底层的网络通信，提供创建服务器和客户端的功能‌。
      *‌ dns模块‌：用于解析域名，将域名转换为IP地址或反向解析IP地址为域名‌。
      *‌ domain模块‌：简化异步代码的异常处理，可以捕捉try catch无法捕捉的异常‌。
  */

/**
 * 在Node.js中，有一些模块是全局自动可用的，不需要使用require来引入。这些模块提供特定的功能，比如URL、console.log等。
这些全局模块的使用方法如下：
  1、URL 模块：
    const myURL = new URL('https://example.com');
    console.log(myURL.href); // 输出：https://example.com/
  2、console 模块：
    console.log('Hello, World!'); // 输出：Hello, World!
  3、process 模块：
    console.log(process.version); // 输出：Node.js的版本号
  4、Buffer 模块：
    const buffer = Buffer.from('Hello, World!');
    console.log(buffer.toString()); // 输出：Hello, World!
  5、setTimeout 和 setInterval 定时器函数：
    setTimeout(() => {
      console.log('This message is shown after 2000ms');
    }, 2000);
  6、Promise 构造函数：
    new Promise((resolve, reject) => {
      // 异步操作
      resolve('Success!');
    }).then((result) => {
      console.log(result); // 输出：Success!
    });
 * 注意：虽然这些模块不需要require来引入，但是在某些情况下，比如使用CommonJS模块化代码时，你可能会选择显式地require它们。
 */

