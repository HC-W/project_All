//导航栏鼠标移动的颜色变化
$(".remen").css("color","#168AA8");
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
		$(".remen").css("color","#168AA8");
	},
	aFinish:function(){
		$(this).css({
			"background-color":"rgba(78,190,203,.8)",
			"color":"white"
		});
		$(".logo").css("background-color","");
		$(".remen").css("color","#168AA8");
	}
});

//图片遍历背景添加
for (var h=0;h<$(".sec_renMen>div>div>a").length;h++) {
	$(".sec_renMen>div>div>a").eq(h).css({
		"background":"url(../img/re2/"+h+".jpg) no-repeat",
		"background-size":"100% 110%"
	});
}
//加载克隆
$(".sec_jiaZai").on("click",function(){
	$(".sec_renMen").append($(".sec_renMen>div").clone());
})
//页面切换的选择
$(".sec_renMen_p").show();
$(".sec_daRen").hide();
$(".sec_choose .choose_reMen").css("color","#E7E7E7");
$(".sec_choose .choose_reMen").on("click",function(){
	$(".sec_renMen_p").show();
	$(".sec_daRen").hide();
	$(this).css("color","#E7E7E7");
	$(".sec_choose .choose_daRen").css("color","");
})
$(".sec_choose .choose_daRen").on("click",function(){
	$(".sec_renMen_p").hide();
	$(".sec_daRen").show();
	$(this).css("color","#E7E7E7");
	$(".sec_choose .choose_reMen").css("color","");
})
//页面开始滑动事件
$(".dingBu").hide();
$(window).on("scroll",function(){
	//文档高度
	var wenDang=$(document).height();
	//可见高度
	var see=$(window).height();
	//底部高度
	var botH=$("footer").height();
	//向上滑动高度
	var scTop=$(document).scrollTop();
	//头部导航栏高度
	var navH=$("header").height();
	if(scTop>=navH){
		$(".dingBu").show();
	}else{
		$(".dingBu").hide();
	}
	if(scTop+see>=wenDang-botH){
		$(".dingBu").css("position","absolute");
	}else{
		$(".dingBu").css("position","fixed");
	}
})

//返回顶部点击事件
$(".dingBu").on("click",function(){
	$("html").animate({
		scrollTop:0
	},100)
})
