var http = require('http');
var url = require('url');
var router = require('./models/Router');
http.createServer(function (request, response) {
    if (request.url !== "/favicon.ico") {
      pathname = url.parse(request.url).pathname;
      pathname = pathname.replace(/\//, '');
      router[pathname](request, response);
  }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');