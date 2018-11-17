<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/27
 * Time: 22:25
 */

include "phpmysql.php";
$con=connectDB("localhost","root","","weibo");
$user=$_POST["user"];
$txt=$_POST["txt"];
$sqlInsert="INSERT INTO u".$user."(id,time,title,img_1,zan,cai) VALUE ('','2018-9-27','$txt','https://wx2.sinaimg.cn/orj360/006ZubU4gy1fvhb619sujj30hp2l0tkw.jpg','0','0');";
//mysqli_query($con,$sqlInsert);
$resIn=zsg($con,$sqlInsert);
echo json_encode($resIn);
