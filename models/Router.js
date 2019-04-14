var Optfiles = require('./Optfiles');
function getRecall(req, res){
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  function recall(data){
    res.write(data);
    res.end();
  }
  return recall;
}
module.exports = {
  login: function (req, res) {
    //res.write("我是login方法");
    // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // function recall(data){
    //   res.write(data);
    //   res.end('');
    // }
    recall = getRecall(req, res);
    Optfiles.readfile('./views/login.html', recall);
  },
  register: function (req, res) {
    //res.write("我是register方法");
    // function recall(data){
    //   res.write(data);
    //   res.end();
    // }
    recall = getRecall(req, res);
    Optfiles.readfile('./views/register.html', recall);
  },
  writefile:function(req, res){
    function recall(data){
      res.write(data);
      res.end('');
    }
    Optfiles.writefile('./views/one.txt', '我的写入文件', recall);
  },
  showimg:function(req, res){
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    Optfiles.readImg('./imgs/timg.jpg', res);
  }
}