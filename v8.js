const v8 = require('v8')

// 获取当前的堆统计信息
const heapStats = v8.getHeapStatistics()

// 打印堆的最大使用情况
console.log(`Node.js 最大分配内存（字节）: ${heapStats.heap_size_limit}`)

// 打印当前的老生代内存大小：
const oldSpaceMemory = v8.getHeapSpaceStatistics().find(space => space.space_name === 'old_space')
console.log(`Old space memory used: ${oldSpaceMemory.space_used / 1024 / 1024} MB`)
console.log(`Old space memory total: ${oldSpaceMemory.space_size / 1024 / 1024} MB`)

// 设置Node.js进程的最大老生代内存为1GB
// 在运行时通过代码设置（仅限于调整不超过当前分配的内存大小）：
// try {
//   global.gc() // 尝试强制进行垃圾回收以释放内存
//   const maxMemory = 1024
//   v8.setFlagsFromString(`--max-old-space-size=${maxMemory}`)
//   console.log('Max old space size set to 1024 MB')
// } catch (e) {
//   console.error('Failed to set max old space size', e)
// }
// 你的应用程序代码
