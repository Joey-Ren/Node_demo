// 手写node，并添加行注释
// 引入http模块
const http = require('http');
// 引入url模块
const url = require('url')
// 创建一个服务
//  req:获取客户端传过来的一些信息
//  res： 服务端返回的一些信息
http.createServer((req, res) => {
  console.log(req.url);
  console.log(url.parse(req.url, true).query) // 获取客户端get方法的传值
  // 设置响应头
  // 状态是200  文件类型是html   格式为utf-8
  res.writeHead(200, {
    "Content-Type": "text/html;charset = 'utf-8'"
  })
  // 客户端打印输入
  res.write('hello node js')
  // 服务结束之后，一定要加end
  res.end()
}).listen(3000) // 添加端口