var fs = require('fs');

fs.readFile('textfile.txt','utf8',function (error,data){
  console.log(data);


});
