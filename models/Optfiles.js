var fs = require('fs');
module.exports = {
  //异步
  readfile: function (path, recall) {
    fs.readFile(path, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data.toString());
        recall(data.toString());
      }
    });
    console.log("异步方法执行完毕");
    // 异步执行完毕
    // 主程序执行完毕
    // 登陆界面（data）
  },
  //同步
  readfileSync: function (path) {
    var data = fs.readFileSync(path, 'utf-8');
    console.log(data.toString());
    console.log('同步方法执行完毕');
  }
  // 登陆界面（data）
  // 同步方法执行完毕
  // 主程序执行完毕
}