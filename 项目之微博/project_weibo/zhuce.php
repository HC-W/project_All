<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/27
 * Time: 14:41
 */
require "4connectMySQL.php";
$con=connectDB("localhost","root","","weibo");
$emailAddress=$_POST["emailAddress"];
$pass=$_POST["pass"];
$nicheng=$_POST["nicheng"];

//注册数据处理
    $sql="INSERT INTO zhuce (id,emailAddress,pass,nicheng) VALUES ('','$emailAddress','$pass','$nicheng')";
    mysqli_query($con,$sql);
    $res = zsg($con,$sql);
    if($res){
        echo json_encode(array(
            "status" => 0,
            "msg"=>"注册成功"
        ));
    }else{
        echo json_encode(array(
            "status" => 1,
            "msg"=>"注册失败",
            "data"=>array(
                "emailAddress" => $emailAddress,
                "pass"=>$pass,
                "sql"=>$sql
            )
        ));
    }

