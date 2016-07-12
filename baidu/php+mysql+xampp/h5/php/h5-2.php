<?php
require_once 'functions.php';
connectDb();
// 获得JOSN数据
// 返回值:title decrip time content_url pic_url
  $n=0;
  mysql_query("SET NAMES 'utf8'");
  $result=mysql_query("select * from news2");
  while ($row=mysql_fetch_array($result)) {
  	$arr[$n++]=array("id"=>$row['id'],
  		              "title" => $row['title'],
  		              "descrip" => $row['descrip'],
  		              "time" => $row['time'],
  		              "content_url" => $row['content_url'],
  		              "pic_url" => $row['pic_url']
  		);
  };
//将数组转换为json字符转
      echo json_encode($arr); 
?>