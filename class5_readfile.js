var http = require('http');
var optfile = require('./models/Optfiles');
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  if (request.url !== "/favicon.ico") {
    //optfile.readfileSync('./views/login.html');
    function recall(data){
      response.write(data);
      response.end('ok');
    }
    optfile.readfile('./views/login.html', recall);

    console.log('主程序执行完毕');
  }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');
//recall 闭包