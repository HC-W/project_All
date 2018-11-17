<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/27
 * Time: 20:12
 */

include "phpmysql.php";
$con=connectDB("localhost","root","","weibo");
$user=$_POST["user"];
//$txt=$_POST["txt"];
$sql="SELECT touxiang FROM zhuce WHERE emailAddress= \"$user\"";
//mysqli_query($con,$sql);
$res=sel($con,$sql);
echo json_encode($res);


