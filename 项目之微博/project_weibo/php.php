<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/26
 * Time: 19:50
 */

include "phpmysql.php";
$sn=$_GET["sn"];
$con=connectDB("localhost","root","","weibo");
$sql="SELECT * FROM $sn";
$resArr=sel($con,$sql);
echo json_encode($resArr);
