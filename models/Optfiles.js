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
  },
  // 登陆界面（data）
  // 同步方法执行完毕
  // 主程序执行完毕


  
  //异步
  writefile: function(path, data, recall){    //异步方式
    fs.writeFile(path, data, function (err) {
      if (err) {
        throw err;
      }
      console.log('It\'s  saved!');  //文件被保存
      recall('写文件成功');
    });
  },


  //同步
  writeFileSync: function(path, data){  //同步方式
    fs.writeFileSync(path, data);
    console.log("同步写文件完成");
  },



  readImg:function(path, res){
    fs.readFile(path, 'binary', function(err, filedata){
      if(err){
        console.log(err);
        return;
      }else{
        console.log('输出文件');
        res.write(filedata, 'binary');
        res.end();
      }
    })
  }

  
}