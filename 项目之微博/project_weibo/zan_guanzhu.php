<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/28
 * Time: 19:56
 */

include "phpmysql.php";
$num=$_GET["snZan"];
$snTable=$_GET["snTable"];
$snName=$_GET["snName"];
$fClass=$_GET["fClass"];

$con=connectDB("localhost","root","","weibo");
$sql="UPDATE $snTable SET $fClass=$num WHERE name=\"$snName\"";
$str=sel($con,$sql);
echo json_encode($str);
