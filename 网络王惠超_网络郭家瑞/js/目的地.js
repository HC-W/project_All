//导航栏鼠标移动的颜色变化
$(".muDi").css("color","#168AA8");
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
		$(".muDi").css("color","#168AA8");
	},
	aFinish:function(){
		$(this).css({
			"background-color":"rgba(78,190,203,.8)",
			"color":"white"
		});
		$(".logo").css("background-color","");
		$(".muDi").css("color","#168AA8");
	}
});

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
	pagination: {
		el: '.swiper-pagination',
	},
	//使用前进后退按钮
//	navigation: {
//		nextEl: '.swiper-button-next',
//		prevEl: '.swiper-button-prev',
//	},
});


$(".sec_left_wordN").on("mouseover",function(){
	$(".lv_mb").show();
})
$(".sec_left_wordN").on("mouseout",function(){
	$(".lv_mb").hide();
})
$(".sec_left_wordG").on("mouseover",function(){
	$(".lan_mb").show();
})
$(".sec_left_wordG").on("mouseout",function(){
	$(".lan_mb").hide();
})

var placeArr=["北京","芬兰","布拉格","云南省","巴黎","上海","桑托林岛","大阪","大理","丽江","Thaiba"];
var likeArr=[9877,3244,222,6617,5887,5805,5771,5023,4341,4179,4040];
for (var i=0;i<$(".sec_smallTuAll>div").length;i++) {
	$(".sec_smallTuAll>div>a").eq(i).css({
		"background":"url(../img/mudi/md"+i+".jpg) no-repeat",
		"background-size":"100% 100%"
	});
	$(".sec_smallTu_ps>p:nth-child(1)").eq(i).html(placeArr[i]);
	$(".sec_smallTu_ps>p:nth-child(2)").eq(i).html(likeArr[i]+"人喜欢这里");
}
//页面滑动
$(window).on("scroll",function(){
	//文档高度
	var wenDang=$(document).height();
	//可见高度
	var see=$(window).height();
	//底部高度
	var bottomH=$("footer").height();
	//向上滑动高度
	var scTop=$(document).scrollTop();
	//头部导航栏高度
	var navH=$("header").height();
	
	if(scTop+see>=wenDang-bottomH){
		$(".sec_smallTuAll").append($(".sec_smallTuAll>div").clone());
	}
//	console.log($(".sec_smallTuAll>div").length);
})

var spanArrNum1=[1,2,3,4,5,6,7,8,9,10];
var spanArrNum2=[11,12,13,14,15,16,17,18,19,20];
var spanArrCity1=["首尔","北京","上海","厦门","曼谷","大理","丽江市","*粒市","阿坝藏族","成都"];
var spanArrCity2=["首尔","北京","上海","厦门","曼谷","大理","丽江市","*粒市","阿坝藏族","成都"];
var spanArrCity3=["首尔","北京","上海","厦门","曼谷","大理","丽江市","*粒市","阿坝藏族","成都"];
var spanArrCity4=["首尔","北京","上海","厦门","曼谷","大理","丽江市","*粒市","阿坝藏族","成都"];
for (var k=0;k<$(".city1_left>p").length;k++) {
	$(".city1_left>p>span:nth-child(1)").eq(k).html(spanArrNum1[k]);
	$(".city1_left>p>span:nth-child(2)").eq(k).html(spanArrCity1[k]);
	$(".city1_right>p>span:nth-child(1)").eq(k).html(spanArrNum2[k]);
	$(".city1_right>p>span:nth-child(2)").eq(k).html(spanArrCity2[k]);
}
for (var j=0;j<$(".city2_left>p").length;j++) {
	$(".city2_left>p>span:nth-child(1)").eq(j).html(spanArrNum1[j]);
	$(".city2_left>p>span:nth-child(2)").eq(j).html(spanArrCity1[j]);
	$(".city2_right>p>span:nth-child(1)").eq(j).html(spanArrNum2[j]);
	$(".city2_right>p>span:nth-child(2)").eq(j).html(spanArrCity2[j]);
}





