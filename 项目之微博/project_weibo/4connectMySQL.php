<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/25
 * Time: 14:47
 */
function connectDB($ip,$name,$pass,$db){
 $db_ip=$ip;
 $db_name=$name;
 $db_pass=$pass;
 $select_db=$db;
 //连接
    $con=mysqli_connect($db_ip,$db_name,$db_pass) or die(mysqli_connect_error());
    //选择数据库
    mysqli_select_db($con,$select_db);
    //设置字符集
    mysqli_query($con,"set names utf8");

    return $con;
}
//查询
function sel($co,$sqlStr){
   //执行
   $result = mysqli_query($co,$sqlStr);
   //把结果装进数组
    $arr=array();
    //结果逐条取出，放进数组
    while ($row=mysqli_fetch_assoc($result)){
        array_push($arr,$row);
    }
    return $arr;
}

//增删改
function zsg($con,$sqlStr){
    //执行sql语句
    mysqli_query($con,$sqlStr);
    //判断是否成功
    if(mysqli_affected_rows($con)>0){//数据表中受影响的行数
        return true;
    }else{
        return false;
    }

}