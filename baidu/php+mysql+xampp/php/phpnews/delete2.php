<!-- 删除百家一栏中的新闻内容 -->
<?php

if (empty($_GET['id'])) {
	die('id is empty');
}
require_once 'functions.php';
connectDb();
$id=intval($_GET['id']);
mysql_query("set names 'utf8'");
mysql_query("DELETE FROM news2 WHERE id=$id");

if (mysql_errno()) {
	die("fail to delete user with id $id");
}else{
	header("location:../index.html");
}
?>