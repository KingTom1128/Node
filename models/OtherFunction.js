function fun2(res){
  console.log('fun2');
  res.write('Hello, I am fun2\n');
}
//只支持单个函数
module.exports = fun2;
//支持多个函数
module.exports={
  fun2:function(res){
    console.log('fun2');
    res.write('Hello, I am fun2\n');
  },
  fun3:function(res){
    console.log('fun3');
    res.write('Hello, I am fun3\n');
  }
}