// Node.js GET/POST请求
// 在很多场景中，我们的服务器都需要跟用户的浏览器打交道，如表单提交。
// 表单提交到服务器一般都使用 GET/POST 请求


// 获取 URL 的参数
var http = require('http');
var url = require('url');
var util = require('util');
http.createServer(function (req, res) {
  console.log('服务开始')
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  // res.end(util.inspect(url.parse(req.url, true)));

  // 解析 url 参数
  var params = url.parse(req.url, true).query;
  res.write("网站名：" + params.name);
  res.write("\n");
  res.write("网站 URL：" + params.url);
  res.end();
}).listen(3000);


/** 
 * 获取 POST 请求内容
    POST 请求的内容全部的都在请求体中，http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。
    比如上传文件，而很多时候我们可能并不需要理会请求体的内容，恶意的POST请求会大大消耗服务器的资源，所以 node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。
*/