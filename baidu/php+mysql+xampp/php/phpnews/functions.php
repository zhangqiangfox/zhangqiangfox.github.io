<!-- 连接phplesson数据库 -->
<?php
require_once 'config.php';
mysql_query("SET NAMES 'utf8'");
function connectDb(){
	$con=mysql_connect(MYSQL_HOST,MYSQL_USER,MYSQL_PW);
	if (!$con) {
		die('can not connect db');
	}
	mysql_select_db('phplesson');
    return $con;
}
?>