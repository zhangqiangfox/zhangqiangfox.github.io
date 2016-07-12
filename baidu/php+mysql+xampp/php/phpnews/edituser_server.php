<?php
require_once 'functions.php';

$id=intval($_POST['id']);
$title=addslashes(htmlspecialchars($_POST['title']));
if (empty($title)) {
	die('标题不能为空！');
}
$descrip=addslashes(htmlspecialchars($_POST['descrip']));
$content_url=$_POST['content_url'];
if(empty($content_url)){
   die("content_url can not empty!");

}
$pic_url=$_POST['pic_url'];
connectDb();
mysql_query("SET NAMES 'utf8'");
mysql_query("UPDATE news SET title='$title',descrip='$descrip',content_url='$content_url',pic_url='$pic_url' WHERE id=$id");

if (mysql_errno()) {
	echo mysql_error();
}else{
    echo "<script language=\"JavaScript\">\r\n";
    echo " alert(\"修改成功\");\r\n";
    echo " location.replace(\"../index.html\");\r\n";
    echo "</script>";
    exit;
	// header("location:../index.html");
}
?>