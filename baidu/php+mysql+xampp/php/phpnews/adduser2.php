<!-- 添加百家中的新闻内容 -->
<?php
require_once 'functions.php';

$title=addslashes(htmlspecialchars($_POST['title']));
if (empty($title)) {
	die('标题不能为空！');
}
$descrip=addslashes(htmlspecialchars($_POST['descrip']));
$time=date("y-m-d h:i:s");
$content_url=$_POST['content_url'];
if (empty($content_url)) {
	die('内容不能为空！');
}
$pic_url=$_POST['pic_url'];
connectDb();
mysql_query("SET NAMES 'utf8'");
mysql_query("INSERT INTO news2 (title,descrip,time,content_url,pic_url) VALUES ('$title','$descrip','$time','$content_url','$pic_url')");
header("location:../index.html");
?>
