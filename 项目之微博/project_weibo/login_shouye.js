//获取头部加上margin的高度，用来设置主要内容的margin-top值
var hg=$("header").outerHeight(true);
//设置上边距
$("section").css("margin-top",hg);
//右边三角点击事件
var offLeft=$(".header_nav ul").offset().left;
$(".header_nav .more").on("tap",function(){
    var ulWidth=$(".header_nav .ul").width();
    var ulWWidth=$(".header_nav ul").width();
    var cha=ulWWidth-ulWidth;
    var left=$(".header_nav ul").offset().left;

    if(left<30 && left>0){
        $(".header_nav ul").css("left",-cha+left);
    }else if(left<0){
        $(".header_nav ul").css("left",offLeft);
    }
    // console.log(left);
})

//头像点击
$(".logo").on("tap",function () {
    location.href="me_exit.html";
})

//原始呈现页面
//热门显示，其他样式为原始样式
$(".ul ul li>div").hide();
$(".ul ul li>span").eq(0).css("color","black");
$(".ul ul li>div").eq(0).show();
$("section>div").hide();
$("section>div").eq(0).show();
//给刷新后呈现出来的热门页面进行内容的后台调取
$.ajax({
    type:"GET",
    url:"php.php",
    data:{
        //热门
        sn:"guanzhu"
    },
    dataType:"json",
    //接收数据，对数据进行处理
    success:function(res){
        // console.log(res);
        res.forEach(function(item){
            // console.log(item);
            // console.log(item.length);
            //添加标签，并给标签添加内容
            var resStr=
                "<div class='wrap'>" +
                "<div class='wrap_top'>" +
                "<div class='wrap_top_left'>" +
                "<img src='"+item["touxiang"]+"' alt=''>"+
                "<div class='wrap_top_ps'>" +
                "<p class='ps_name'>"+item.name+"</p>"+
                "<p class='ps_time'>"+item.time+"</p>"+
                "</div>"+
                "</div>"+
                "</div>"+
                "<p>" +item["title"]+"</p>"+
                "<div class='wrap_imgs'>" +
                "<img src='"+item["img_1"]+"' alt=''>"+
                "<img src='"+item["img_2"]+"' alt=''>"+
                "<img src='"+item["img_3"]+"' alt=''>"+
                "<img src='"+item["img_4"]+"' alt=''>"+
                "</div>"+
                "<div class='wrap_skr'>" +
                "<p class='zan'>" +
                "<img src='imgs/skr.png' alt='' class='img_zan'>" +
                "<span>"+item["zan"]+"</span>"+
                "</p>" +
                "<p class='cai'>" +
                "<img src='imgs/cai.png' alt='' class='img_cai'>" +
                "<span>" +item["cai"]+"</span>"+
                "</p>"+
                "</div>"+
                "</div>"
            //添加内容
            $("section>div").eq(0)[0].innerHTML+=resStr;
            var zan_index=0;
            $(".wrap .wrap_skr>p .img_zan").on("tap",function () {
                // console.log(123);
                zan_index++;
                $(this).attr("src","imgs/zan2.png");
                var fClass=$(this).parent().attr("class");
                var snName=$(this).parents(".wrap")[0].firstChild.firstChild.firstChild.nextSibling.firstChild.innerHTML;
                // console.log(snName);
                var xd=$(this)[0].nextSibling;
                var snZan=$(this)[0].nextSibling.innerHTML;
                var zanyuan=parseInt(snZan)-1;
                var nn=parseInt(snZan)+1;
                var _this1=this;
                if(zan_index%2!=0) {
                    xd.innerHTML = nn;
                }else{
                    xd.innerHTML=zanyuan;
                    $(_this1).attr("src","imgs/skr.png")
                }
                $.ajax({
                    type:"GET",
                    url:"zan_guanzhu.php",
                    data:{
                        snName:snName,
                        snZan:xd.innerHTML,
                        snTable:"guanzhu",
                        fClass:fClass
                    }
                });


            })



            var cai_index=0;
            $(".wrap .wrap_skr>p .img_cai").on("tap",function () {
                // console.log(123);
                cai_index++;
                var fClass=$(this).parent().attr("class");
                var snName=$(this).parents(".wrap")[0].firstChild.firstChild.firstChild.nextSibling.firstChild.innerHTML;
                // console.log(snName);
                var xd=$(this)[0].nextSibling;
                var snZan=$(this)[0].nextSibling.innerHTML;
                var zanyuan=parseInt(snZan)-1;
                var nn=parseInt(snZan)+1;
                var _this1=this;
                if(cai_index%2!=0) {
                    xd.innerHTML = nn;
                }else{
                    xd.innerHTML=zanyuan;
                }
                $.ajax({
                    type:"GET",
                    url:"zan_guanzhu.php",
                    data:{
                        snName:snName,
                        snZan:xd.innerHTML,
                        snTable:"guanzhu",
                        fClass:fClass
                    }
                });
            })
        })
    }
});
//导航栏的点击事件：点击哪个哪个样式进行变化
$(".ul ul li").on("tap",function(){
    $(".ul ul li>span").css("color","#ccc");
    $(".ul ul li>div").hide();
    $("section>div").hide();
    //字体颜色变化
    $(".ul ul li>span").eq($(this).index()).css("color","black");
    //底下border的隐藏与显示
    $(".ul ul li>div").eq($(this).index()).show();
    //点击时存存储数据div的切换
    $("section>div").eq($(this).index()).show();
    //每点击一次，先给此次点击的页面进行内容的清除
    $("section>div").eq($(this).index())[0].innerHTML="";
    //保存this
    $_this=this;
    //后台请求数据
    $.ajax({
        type:"GET",
        url:"php.php",
        data:{
            //id 名称和后台数据库的表名相同，此处将id名获取并且传到后台，进行表格数据的查询
            sn:$("section>div").eq($(this).index()).attr("id")
        },
        dataType:"json",
        //接收数据，对数据进行处理
        success:function(res){
            // console.log(res);
            res.forEach(function(item){
                // console.log(item);
                var resStr=
                    "<div class='wrap'>" +
                    "<div class='wrap_top'>" +
                    "<div class='wrap_top_left'>" +
                    "<img src='"+item["touxiang"]+"' alt=''>"+
                    "<div class='wrap_top_ps'>" +
                    "<p class='ps_name'>"+item.name+"</p>"+
                    "<p class='ps_time'>"+item.time+"</p>"+
                    "</div>"+
                    "</div>"+
                    "<a href='javascript:void(0)'>+关注</a>"+
                    "</div>"+
                    "<p>" +item["title"]+"</p>"+
                    "<div class='wrap_imgs'>" +
                    "<img src='"+item["img_1"]+"' alt=''>"+
                    "<img src='"+item["img_2"]+"' alt=''>"+
                    "<img src='"+item["img_3"]+"' alt=''>"+
                    "<img src='"+item["img_4"]+"' alt=''>"+
                    "</div>"+
                    "<div class='wrap_skr'>" +
                    "<p class='zan'>" +
                    "<img src='imgs/skr.png' alt='' class='img_zan'>" +
                    "<span>"+item["zan"]+"</span>"+
                    "</p>" +
                    "<p class='cai'>" +
                    "<img src='imgs/cai.png' alt='' class='img_cai'>" +
                    "<span>" +item["cai"]+"</span>"+
                    "</p>"+
                    "</div>"+
                    "</div>"
                $("section>div").eq($($_this).index())[0].innerHTML+=resStr;
                $(".wrap_top>a").on("tap",function () {
                    $(".bj2").show();
                });
                //赞和踩
                var zan_index1=0;
                $(".wrap .wrap_skr>p .img_zan").on("tap",function () {
                    zan_index1++;
                    $(this).attr("src","imgs/zan2.png");
                    //获取点击父级的class,这个值同数据库里面的数据是相同的，用于连接
                    var fClass=$(this).parent().attr("class");
                    //获取点击对应的用户名
                    var snName=$(this).parents(".wrap")[0].firstChild.firstChild.firstChild.nextSibling.firstChild.innerHTML;
                    // console.log(snName);
                    //获取点击的下一个兄弟元素
                    var xd=$(this)[0].nextSibling;
                    //获取点击的下一个兄弟元素的值
                    var snZan=$(this)[0].nextSibling.innerHTML;
                    //赋值数据
                    var zanyuan=parseInt(snZan)-1;
                    var nn=parseInt(snZan)+1;
                    var _this1=this;
                    if(zan_index1%2!=0) {
                        xd.innerHTML = nn;
                    }else{
                        xd.innerHTML=zanyuan;
                        $(_this1).attr("src","imgs/skr.png")
                    }
                    $.ajax({
                        type:"GET",
                        url:"zan_guanzhu.php",
                        data:{
                            snName:snName,
                            snZan:xd.innerHTML,
                            snTable:$("section>div").eq($($_this).index()).attr("id"),
                            fClass:fClass
                        }
                    });
                })


                //踩
                var cai_index1=0;
                $(".wrap .wrap_skr>p .img_cai").on("tap",function () {
                    console.log(123);
                    cai_index1++;
                    var fClass=$(this).parent().attr("class");
                    var snName=$(this).parents(".wrap")[0].firstChild.firstChild.firstChild.nextSibling.firstChild.innerHTML;
                    // console.log(snName);
                    var xd=$(this)[0].nextSibling;
                    var snZan=$(this)[0].nextSibling.innerHTML;
                    var zanyuan=parseInt(snZan)-1;
                    var nn=parseInt(snZan)+1;
                    var _this1=this;
                    if(cai_index1%2!=0) {
                        xd.innerHTML = nn;
                    }else{
                        xd.innerHTML=zanyuan;
                    }
                    $.ajax({
                        type:"GET",
                        url:"zan_guanzhu.php",
                        data:{
                            snName:snName,
                            snZan:xd.innerHTML,
                            snTable:$("section>div").eq($($_this).index()).attr("id"),
                            fClass:fClass
                        }
                    });
                })
            })
        }
    });
});

