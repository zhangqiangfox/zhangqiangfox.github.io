<!-- 编辑推荐一栏中的新闻内容 -->
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
	<title>修改新闻</title>
</head>
<style type="text/css">
	*{
		margin: 0;
		padding: 0;
		
	}
	form{
		width: 400px;
		margin: 200px auto;
		text-align: center;
	}
	.btn{
		width: 70px;
		height: 30px;
		margin-top: 10px;
		border-style: none;
		cursor: pointer;
		background-color: #6BFF3A;
	}
	input{
		width: 255px;
		height: 30px;
		margin-top: 10px;
	}
</style>
<body>

<?php
require_once 'functions.php';
if (!empty($_REQUEST['id'])) {
	connectDb();
	$id=intval($_REQUEST['id']);
	mysql_query("SET NAMES 'utf8'");
	$result=mysql_query("SELECT * FROM news WHERE id=$id");
	if (mysql_errno()) {
		die('can not connect db');
	}
	$arr=mysql_fetch_assoc($result);
}else{
	die('id not define!');
}
?>

<form action="edituser_server.php" method="post">
<div>新闻的ID：
	<input type="text" name="id" value="<?php echo $arr['id']; ?>">
</div>
<div>新闻标题：
	<input type="text" name="title" value="<?php echo $arr['title']; ?>">
</div>
<div>新闻简介：
	<input type="text" name="descrip" value="<?php echo $arr['descrip']; ?>">
</div>
<div>新闻链接：
	<input type="text" name="content_url" value="<?php echo $arr['content_url']; ?>">
</div>
<div>图片链接：
	<input type="text" name="pic_url" value="<?php echo $arr['pic_url']; ?>">
</div>
	<input type="submit" value="修改" class="btn">
</form>
</body>
</html>