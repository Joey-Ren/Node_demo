const fs = require('fs')
const data = fs.readFileSync('input.txt');
// 阻塞式代码实例
console.log(data.toString())
console.log('阻塞程序执行结束')

// 非阻塞程序代码
fs.readFile('input.txt', function (err, data) {
  if (err) return console.log(err);
  console.log(data.toString())
})
console.log('非阻塞程序执行结束')

/*
以上两个实例我们了解了阻塞与非阻塞调用的不同。
第一个实例在文件读取完后才执行程序。 第二个实例我们不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。
因此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。
*/