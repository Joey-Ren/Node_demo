/**
 * 在 JavaScript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。
    Node.js 中函数的使用与 JavaScript 类似，举例来说，你可以这样做：
 */
function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, "Hello");

// 一个简单的服务应用
var http = require("http");

http.createServer(function (request, response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.write("Hello World");
  response.end();
}).listen(8888);

// 改装调用匿名函数
function onRequest(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);