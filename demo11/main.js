var fs = require("fs")

/** 
 * 异步和同步
    Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
    异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
    建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。
*/
// 异步读取
fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("文件打开成功！");
});

console.log("准备写入文件");
fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("数据写入成功！");
  console.log("--------我是分割线-------------")
  console.log("读取写入的数据！");
  fs.readFile('input.txt', function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("异步读取文件数据: " + data.toString());
  });
});
console.log("同步读取111: " + data.toString());


// 参考文档，这一张比较有作用 https://www.runoob.com/nodejs/nodejs-fs.html