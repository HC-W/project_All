//$(".mb").css("height",$("html").height());
$(".mb").hide();
$(".login").hide();
console.log("hide");
$("header nav .dengLu").on("click",function(){
	$(".mb").show();
	$(".login").show();
	console.log("show");
})
$(".cha").on("click",function(){
	$(".mb").hide();
	$(".login").hide();
})
