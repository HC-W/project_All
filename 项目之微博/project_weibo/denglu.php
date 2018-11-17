<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/27
 * Time: 15:37
 */

require "4connectMySQL.php";
$con=connectDB("localhost","root","","weibo");
$emailAddress=$_POST["emailAddress"];
$pass=$_POST["pass"];
//注册数据处理
$sql="SELECT emailAddress,pass FROM zhuce";
mysqli_query($con,$sql);
$res = sel($con,$sql);
if($res){
    echo json_encode(array(
        "status" => 0,
        "msg"=>"登陆成功",
        "data" => $res
    ));
}else {
    echo json_encode(array(
        "status" => 1,
        "msg" => "登陆失败",
        "data" => ""
    ));
}