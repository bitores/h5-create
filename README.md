# h5-create

	快速创建 H5 模板页面

#### 使用方法 

	>h5-create [filename.html]

#### 模板内容

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name='viewport' content='width=device-width,initial-scale=1.0,user-scalable=no'>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name='renderer' content='webkit'>
		<meta name='x5-page-mode' content='app'>
		<meta name='x5-orientation' content='portrait'>
		<meta name="x5-fullscreen" content="true">
		<meta name="full-screen" content="yes">
		<meta name='layoutmode' content='standard'>
		<meta name='mobile-web-app-capable' content='yes'>
		<meta name='browsermode' content='application'>
		<meta name='screen-orientation' content='portrait'>
		<meta name='format-detection' content='telephone=no'>
		<meta name='apple-mobile-web-app-capable' content='yes'>
		<meta name='apple-mobile-web-app-status-bar-style' content='black'>
		<title>Document</title>
	</head>
	<body>
		
	</body>
	</html>

#### 发布 Node CLI

	1、npm init  开始生成 package.json

	2、生成bin/demo

	3、package.json添加
		"bin": {
			"demo": "./bin/demo"
		}

	4、npm link 本地开发测试

	5、npm adduser

	6、npm publish .

	7、如果出错，设置如下：npm config set registry http://registry.npmjs.org，再进行第5步


	!! 注意 demo 文件 首行 添加 #!/usr/bin/env node


**bin/demo**

	#!/usr/bin/env node
 
	/**
	 * Module dependencies.
	 */
	 
	var program = require('commander');
	 
	program
	  .version('0.0.1')
	  .option('-p, --peppers', 'Add peppers')
	  .option('-P, --pineapple', 'Add pineapple')
	  .option('-b, --bbq-sauce', 'Add bbq sauce')
	  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
	  .parse(process.argv);
	 
	console.log('you ordered a pizza with:');
	if (program.peppers) console.log('  - peppers');
	if (program.pineapple) console.log('  - pineapple');
	if (program.bbqSauce) console.log('  - bbq');
	console.log('  - %s cheese', program.cheese);