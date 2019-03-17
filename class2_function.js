var http = require('http');
var otherfun = require('./models/OtherFunction.js');
http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html; charest=utf-8'});
  if(request.url!=="favicon.ico"){
    fun1(response);
    otherfun.fun2(response);
    //相等
    otherfun['fun3'](response);
    response.end('');
  }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');


function fun1(res){
  console.log("fun1");
  res.write('Hello, I am fun1\n');
}