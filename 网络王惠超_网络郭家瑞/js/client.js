//导航栏鼠标移动的颜色变化
$("header .nav .ul_one>li>a").on("mouseover",function(){
	$(this).aHover();
})
$("header .nav .ul_one>li>a").on("mouseout",function(){
	$(this).aFinish();
})
//jq函数声明
$.fn.extend({
	aHover:function(){
		$(this).css({
			"background-color":"#2E9DAB",
			"color":"white"
		});
		$(".logo").css("background-color","");
	},
	aFinish:function(){
		$(this).css({
			"background-color":"rgba(78,190,203,.8)",
			"color":"white"
		});
		$(".logo").css("background-color","");
	}
});