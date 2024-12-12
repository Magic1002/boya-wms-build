const fse = require('fs-extra')
// 1、新建文件text.txt，写入'hello word'
// 第一个参数：文件路径(相对/绝对 路径都 可以)
// 第二个参数：读取文件的编码(不写的话读取出来的是一个buffer，处理起来比较麻烦)
// 异步读取文件
// fse.readFile('hello.txt', 'utf-8')
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log('err: ', err)
//   })
// 同步读取文件
// const res = fse.readFileSync('hello.txt', 'utf-8')
// console.log('同步读取文件结果res: ', res)
// 同步读取文件容错模式
// async function getResult() {
//   try {
//     const res = await fse.readFile('hello.txt', 'utf-8')
//     console.log('res: ', res)
//   } catch (error) {
//     console.log('error: ', error)
//   }
// }
// console.log('getResult: ', getResult())

// 2、新建文件hello.txt并写入"hello，Word！"
// const text = 'hello，Word！'
// fse.writeFileSync('hello.txt', text)
// 重命名文件为Bilibili.txt
// fse.renameSync('hello.txt', 'Bilibili.txt')
// 新增一行：我是Erik，感谢您的点赞！
// fse.appendFileSync('Bilibili.txt', '\n我是Erik，感谢您的点赞！')

// 3、将文件复制到dir1/dir2下，同事创建目录dir1/dir3
// copyFile只能复制文件，并且copyFile没有copy好用。copyFile不能复制这个文件的权限跟修改时间等等
// copy既可以复制文件也可以复制文件夹
// fse.copySync('Bilibili.txt', 'dir1/dir2/Bilibili.txt')
// 将目录dir1的内容复制到dir4下
// fse.copySync('dir1', 'dir4/dir1')

// 4、删除目录dir1和dir4
// fse.removeSync('dir1')

// 5、复制test目录到test2目录下
// fse.copySync('test', 'test2')
