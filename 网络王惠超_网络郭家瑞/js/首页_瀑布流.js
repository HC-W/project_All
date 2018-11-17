var myF = document.querySelector(".puBu_tu");
var lis = document.querySelectorAll(".puBu_tu li");
var more=q(".wrap>div .jiazai>p");
//先都隐藏起来
myF.style.opacity = 0;

//每块之间的间隔
var marginW = 17;
var marginH = 15;

//个数
var liCount = 12;
var liWidth = 0;
//存高度数组
var saveHeight = [];

createAll();
//先把所有的li放到页面上
function createAll() {
	for(var i = 0; i < liCount; i++) {
		//创建
		var newLi = document.createElement("li");
		var newImg = document.createElement("img");
		//给img附上图片
		newImg.src = "../img/dar/" + i + ".jpg";
		//把图片放进li
		newLi.appendChild(newImg);
		//把li放进ul
		myF.appendChild(newLi);
		setAtt(newLi,"class","li"+i);
		//创建节点
		//上面的div
		var newTopDiv = createCss("div");
		setAtt(newTopDiv,"class","puBu_top_div");
		newLi.insertBefore(newTopDiv,newImg);
		var newImage=createCss("img");
		setAtt(newImage,"src","../img/dar/da_0.jpg")
		append(newTopDiv,newImage);
		
		var newTopDivX=createCss("div");
		for (var h=0;h<2;h++) {
			var newTopP=createCss("p");
			setAtt(newTopP,"class","topP"+h);
			append(newTopDivX,newTopP);
		}
		var newp1=qa(".topP1");
		var newp0=qa(".topP0");
		
		append(newTopDiv,newTopDivX);
		//下面
		var newBottomDiv =createCss("div");
		setAtt(newBottomDiv,"class","puBu_bottom_div");
		var newBottomP1=createCss("p");
		setAtt(newBottomP1,"class","puBu_bottom_p1");
		newBottomP1.innerHTML="阿利克谢沙皇的大木宫，叶二给拆了，十几年原样复建的，非常漂亮."
		newBottomDiv.appendChild(newBottomP1);
		var newBottomP2=createCss("p");
		setAtt(newBottomP2,"class","puBu_bottom_p2");
		for (var k=0;k<2;k++) {
			var newA=createCss("a");
//			setAtt(newA,"class","puBu_bottom_p2_a"+i);
			append(newBottomP2,newA);
			var newSpan=createCss("span");
			newSpan.innerHTML="0";
//			setAtt(newSpan,"class","puBu_bottom_p2_span"+i);
			var newSpan0=q(".puBu_bottom_p2_span0");
			append(newBottomP2,newSpan);
		}
		newBottomDiv.appendChild(newBottomP2); 
		newLi.appendChild(newBottomDiv);
	}
	for (var t=0;t<newp1.length;t++) {
		var newA_p0=createCss("a");
		newA_p0.innerHTML="涛哥tao";
		append(newp0[t],newA_p0);
		
		var div_p0=createCss("div");
		var divA_p0=createCss("a");
		append(div_p0,divA_p0);
		var span_p0=createCss("span");
		span_p0.innerHTML="昨天 18:16"
		append(div_p0,span_p0);
		append(newp0[t],div_p0);
		
		var newA_p1=createCss("a");
		newA_p1.innerHTML="俄罗斯：熟悉的陌生人";
		append(newp1[t],newA_p1);
	}
}
//当页面图片加载完毕，再开始摆位置
//未加载完毕时，高度不准确
window.onload = function() {
	setWall();
}

//砌墙(设置每一块的位置)
function setWall() {
	//获取列数
	var cols = getCols();
	//通过列数设置flower的宽度
	myF.style.width = cols * liWidth - marginW + "px";
	//先铺第一排
	for(var i = 0; i < cols; i++) {
		//存每一列的高度
		saveHeight[i] = lis[i].offsetHeight;
		//设置第一排的left和top
		lis[i].style.top = "0px";
		lis[i].style.left = i * liWidth + "px";
	}

	//铺剩下所有的
	for(var i = cols; i < liCount; i++) {
		//找到最小的列
		var minHeightIndex = getMinIndex(saveHeight)[0];

		//继续摆
		//left = 最小列的下标 * 每一列的宽度
		lis[i].style.left = minHeightIndex * liWidth + "px";
		//top = 最小列的高度 + margin值
		lis[i].style.top =
			saveHeight[minHeightIndex] + marginH + "px";
		//摆完把flower拿出来
		myF.style.opacity = 1;
		//把数组中最小高度 更新一下，更新为加上新li后的高度
		saveHeight[minHeightIndex] =
			saveHeight[minHeightIndex] + marginH + lis[i].offsetHeight;

	}
	//找最高的高度，设置flower的高度
	var maxHeight = getMinIndex(saveHeight)[1];
	//通过最大高度，来设置flower的高度
	myF.style.height = maxHeight + "px";

}

//找最小的下标
function getMinIndex(arr) {
	//定义最小值为数组的第一个
	var min = arr[0];
	var max = arr[0];
	//最小值下标
	var minIndex = 0;
	//遍历
	for(var i = 0; i < arr.length; i++) {
		//判断，获取最小值
		if(min > arr[i]) {
			min = arr[i];
			//得到最小值下标
			minIndex = i;
		}
		//判断，获取最大值
		if(max < arr[i]) {
			max = arr[i];
		}
	}
	return [minIndex, max];
}

//获取一行能放置的列数
function getCols() {
	lis = document.querySelectorAll(".puBu_tu li");
	//获取body宽度
	var bodyW = document.body.clientWidth;
	//获取li的宽度
	liWidth = lis[0].offsetWidth + marginW;
	//列数
	var cols = Math.floor(bodyW / liWidth);

	return cols;
}
var i = 0;
var j = 0;
//当浏览器窗口尺寸发生改变的时候，执行事件
window.onresize = function() {
	setWall();
}

//滑动到底部，重新加载
window.onscroll = function() {
	//滚动偏移量
	var sh = window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop;
	//获取整个页面高度
	var dh = document.documentElement.scrollHeight;
	//页面可见高度
	var kjh = document.documentElement.clientHeight;

	//判断点击事件
	more.onclick=function() {
		liCount += 10;
		//加载20个
		createAll();
		setWall();
	}
}