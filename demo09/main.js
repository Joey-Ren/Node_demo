// 输出全局变量 __filename 的值
console.log('__filename', __filename);

// 输出全局变量 __dirname 的值
console.log('__dirname', __dirname);

// 延时函数
function printHello() {
  console.log("Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);
// 清除定时器
// clearTimeout(t);
// setTimeout(printHello, 2000);