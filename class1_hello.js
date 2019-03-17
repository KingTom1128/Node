var http = require('http');
http.createServer(function (request, response){
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  if(request.url!=="/favicon.ico"){//清除第二次访问
    console.log('访问');
    response.write('Hello,World'); 
    response.end('你好世界');//不写则没有http协议尾，但写了会产生两次访问
  }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
/**
 * 启动服务
 * cmd下执行
 * node hello.js
 * 浏览器访问：http://localhost:8000
 */