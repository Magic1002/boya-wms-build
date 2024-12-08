// 工具背景：
// 现在很多工程都是通过脚手架来创建的。使用脚手架的时候最明显的就是与命令行的交互。如果想自己做一个脚手架，给大家推荐inquirer。

// requirer是一个基于nodejs、提问-回答模式的命令行交互工具。
// 两个核心概念
// 问题(question)
// 回答(answer)
const { name } = require('ejs')
const inquirer = require('inquirer')
// 定义question变量用来接收问题
const question = [
  // 定义一个输入用户姓名的一个问题
  {
    type: 'input', // type属性表示用来提问的类型，type等于input代表输入问题的类型
    name: 'username', // name属性存储当前问题回答的变量，用username来接收我们输入的内容
    message: '姓名', // 问题的描述
    default: '', // 用来存储我们的默认值
    validate(value) { // 我们也可通过validate方法用来验证用户输入的内容，返回false要求用户重新输入，返回true需要继续执行
      if (value === '') return false
      return true
    }
  },
  // 定义一个是否结婚的问题
  {
    type: 'confirm',
    name: 'ismarry',
    message: '是否结婚',
    default: false
  },
  // 定义一个选择学历的列表
  {
    type: 'list',
    name: 'xueli',
    message: '学历',
    choices: [
      { name: 'chuzhong', value: '初中' },
      '高中',
      '大专',
      '本科',
      '研究生'
    ]
  },
  //   定义一个爱好的多选项问题
  {
    type: 'checkbox',
    name: 'aihao',
    message: '爱好',
    choices: [
      '音乐',
      '读书',
      '舞蹈',
      '游泳'
    ]
  }
]
// inquirer提供了一个prompt方法用来提出问题
inquirer.prompt(question)
// 当用户交互完成，then方法传递回一个answer对向用来存储我们的答案
  .then((answer) => {
    console.log('answer:', answer)
  })
