// 直接用代码提示工具生成一个简单的node服务
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');