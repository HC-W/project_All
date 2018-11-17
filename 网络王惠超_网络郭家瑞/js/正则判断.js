//邮箱
var email=/^[a-zA-Z]\w+[a-zA-Z]@[a-zA-Z0-9]+(\.[a-z]{2,3}){1,2}$/;
//用户名：数字字母下划线以及中文
var userYan1=/\w+[\u4e00-\u9fa5]+/;

//微博框
$(".weiBo_form_btn>input").on("click",function(){
	$(".weiBo_form>input").focus();
	if($(".weiBo_form>input").val()){
		if(email.test($(".weiBo_form>input").val())){
			$(".weiBo_form .eM_yanZheng").html("请先登录");
		}else{
			$(".weiBo_form .eM_yanZheng").html("请输入正确的邮件地址");
		}
		$(".weiBo_form>input").css("border","1px solid #FC5D7B");
	}else{
		$(".weiBo_form .eM_yanZheng").html("请填写一个邮件地址：");
		$(".weiBo_form>input").css("border","");
	}
})
$(".weiBo_form_btn>a").on("click",function(){
	var newInp=$("<input type='text' placeholder='email@example.com' />");
	newInp.insertBefore($(".weiBo_form_btn"));
})

//登录弹框
$(".nowLogin").on("click",function(){
	if($(".user").val()==false){
		$(".dengYan").html("用户名不能为空");
		$(".user").css("border","1px solid #FC5D7B");
	}else{
		$(".user").css("border","");
		if($(".psd").val()==false){
			$(".dengYan").html("密码不能为空");
			$(".psd").css("border","1px solid #FC5D7B");
		}else{
			$(".psd").css("border","");
			if($(".yanZhengMa").val()==false){
				$(".dengYan").html("验证码不能为空");
				$(".yanZhengMa").css("border","1px solid #FC5D7B");
			}else{
				$(".yanZhengMa").css("border","");
				$(".dengYan").html("登录中...");
			}
		}
	}
})
//注册
$(".zhuCe1_form>input:nth-of-type(1)").on("blur",function(){
	if($(this).val()){
		if(email.test($(this).val())==false){
			$(".zhuCe_yanEm").html("请输入正确的邮件地址");
		}else{
			$(this).css("background-color","#FAFFBD");
			$(".zhuCe_yanEm").html("");
		}
	}else{
		$(".zhuCe_yanEm").html("请输入电子邮件");
	}
})
$(".zhuCe1_form>input:nth-of-type(2)").on("blur",function(){
	if($(this).val()){
		$(".zhuCe_yanUser").html("");
	}else{
		$(".zhuCe_yanUser").html("请输入用户名");
	}
})
var psd=/^\w{6,40}$/;
$(".zhuCe1_form>input:nth-of-type(3)").on("blur",function(){
	if($(this).val()){
		if(psd.test($(this).val())){
			$(".zhuCe_yanPsd").html("");
		}else{
			$(".zhuCe_yanPsd").html("请输入6-40位密码");
		}
	}else{
		$(".zhuCe_yanPsd").html("请输入6-40位密码");
	}
})
$(".zhuCe_zhuce").on("click",function(){
	if($(".zhuCe1_form>input:nth-of-type(1)").val() && $(".zhuCe1_form>input:nth-of-type(2)").val() && $(".zhuCe1_form>input:nth-of-type(3)").val()){
		$(".waiting").html("waiting");
	}else{
		$(".waiting").html("");
		if($(".zhuCe1_form>input:nth-of-type(1)").val()==false){
			$(".zhuCe_yanEm").html("请输入电子邮件");
		}
		if($(".zhuCe1_form>input:nth-of-type(2)").val()==false){
			$(".zhuCe_yanUser").html("请输入用户名");
		}
		if($(".zhuCe1_form>input:nth-of-type(3)").val()==false){
			$(".zhuCe_yanPsd").html("请输入6-40位密码");
		}
	}
	if($(".login2_form>input:nth-of-type(1)").val() && $(".login2_form>input:nth-of-type(2)").val()){
		$(".login_yan").html("login...");
	}else{
		$(".login_yan").html("用户名或密码有误");
	}
})
