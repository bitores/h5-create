var fs = require('fs');
var path = require('path');


module.exports = {

	createModule: function(arv){
		var file_name = arv[0] || "index.html";//对应命令行第一个参数

		// 同步读取
		var data = fs.readFileSync(path.join( __dirname, '../template/index.html'));


		fs.writeFile(path.join( process.cwd(), file_name), data.toString(),  function(err) {
		   if (err) {
		       return console.error(err);
		   }
		});
	}



}