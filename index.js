var fs = require('fs');
var path = require('path');

var file_name = process.argv.slice(2)[0] || "index.html";


// 同步读取
var data = fs.readFileSync(path.join( __dirname, 'template/index.html'));


fs.writeFile(path.join( process.cwd(), file_name), data.toString(),  function(err) {
   if (err) {
       return console.error(err);
   }
});