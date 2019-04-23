/**
 * @author songfangyuan
 * @date 2018-12-18
 * @Description: The respectability of youth lies in their courage and great expectation.
 *
 * 列出当前目录下面的文件，等待用户输入
 *
 *
 *
 *
 *
 *
 *
 */

var fs = require("fs"),
  stdin = process.stdin,
  stdout = process.stdout;
  
  fs.readdir(process.cwd(),(err,files) => {
    
    if(!files.length){
      return console.log('\033[31m no files \033[39m\n')
    }
    
    console.log('\022[31m 你想看那个文件夹 \033[39m\n')
    
    function files(i) {
      var fileName = files[i]
      
    }
    
  })
  
  