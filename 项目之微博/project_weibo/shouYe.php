<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/9/26
 * Time: 15:01
 */

require "4phpmysql.php";
$sn=$_GET["sn"];
//header("Content-Type:text/html;charset=utf-8");
$con=connectDB("localhost","root","","weibo");
$resArr1=sel($con,"SELECT * FROM $sn ");
echo json_encode($resArr1);