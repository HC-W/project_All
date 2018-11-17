var mySwiper = new Swiper(".swiper-container", {
	loop: true,
	//自动滚动
	autoplay: {
		//时间间隔
		delay: 2000,
	},
	//高度随内容变化
	autoHeight: true,
	//滚动的方向
	direction: "horizontal",
	//使用分页器
//	pagination: {
//		el: '.swiper-pagination',
//	},
	//使用前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
$(".swiper-container").on("mouseover", function() {
	$(".swiper-button-prev").css("display", "block"),
	$(".swiper-button-next").css("display", "block")

})
$(".swiper-container").on("mouseout", function() {
	$(".swiper-button-prev").css("display", "none"),
	$(".swiper-button-next").css("display", "none")
})



$(window).on("scroll",function(){
	if(window.pageYOffset>0){
		$("header nav").css("background-color","rgba(78,190,203,.8)");
	}else{
		$("header nav").css("background-color","");
	}
})
$("header .nav .ul_one>li>a").on("mouseover",function(){
	if(window.pageYOffset>0){
		$(this).aHover();
	}else{
		$(this).aHoverE();
	}
})
$("header .nav .ul_one>li>a").on("mouseout",function(){
	if($(window).pageYOffset>0){
		$(this).aFinish();
	}else{
		$(this).aFinishE();
	}
})
$.fn.extend({
	aHover:function(){
		$(this).css({
			"background-color":"#2D9DAB",
			"color":"white"
		});
		$(".logo").css("background-color","");
	},
	aHoverE:function(){
		$(this).css({
			"background-color":"rgba(255,255,255,0)",
			"color":"#168391"
		});
		$(".logo").css("background-color","");
	},
	aFinish:function(){
		$(this).css({
			"background-color":"rgba(78,190,203,.8)",
			"color":"white"
		});
		$(".logo").css("background-color","");
	},
	aFinishE:function(){
		$(this).css({
			"background-color":"rgba(255,255,255,0)",
			"color":"white"
		});
		$(".logo").css("background-color","");
	}
});


for (var k=0;k<$(".fD_tu1>div>img").length;k++) {
	$(".fD_tu1>div>img").eq(k).attr("src","../img/you/you_"+k+".jpg");
	$(".fD_tu1>div>img").eq(5).attr("src","../img/you/you_"+5+".gif");
	$(".fD_tu1>div>img").eq(k).css({
		"height":260,
		"border-top-left-radius":5,
		"border-top-right-radius":5
	});
}
for (var h=0;h<$(".fD_tu2>div").length;h++) {
	$(".fD_tu2>div").eq(h).css({
		"background":"url(../img/img_1/mu_"+h+".jpg) no-repeat",
		"background-size":"100% 100%"
	});
}
