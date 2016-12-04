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

#### 发布 npm 包

	1、npm adduser

	2、npm publish .

	3、如果出错，设置如下：npm config set registry http://registry.npmjs.org，再进行第2步