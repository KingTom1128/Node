var http = require('http');
var optfile = require('./models/Optfiles');
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  if (request.url !== "/favicon.ico") {
    optfile.readImg('./imgs/timg.jpg', response);
  }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');
