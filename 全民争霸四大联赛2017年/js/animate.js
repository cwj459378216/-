//口风琴
$(function(){
    var $li=$(".kofeng").children();
    for(var i=0;i<$li.length;i++){
    $li[i].style.background = "url(images/"+(i+5)+".jpg) no-repeat";
    }
    $($li[0]).animate({"width":"270px"},500)
    $($li[0]).siblings().animate({"width":"44px"},500)
    $li.mouseover(function(){
        $li.stop(true,true)
        $(this).animate({"width":"270px"},500)
        $(this).siblings().animate({"width":"44px"},500)
    })
})

//顶部轮播
$(".top_lunbo")[0].appendChild( $(".top_lunbo")[0].children[0].cloneNode(true));
var key= 0;
clearInterval(timer)
var timer = setInterval(topL,1000)

$(".top_lunbo")[0].onmouseover = function (){
    clearInterval(timer);
}
$(".top_lunbo")[0].onmouseout= function (){
    clearInterval(timer);
    timer = setInterval(topL,1000)
}

function topL(){
    key++;
    if(key==6){
        $(".top_lunbo")[0].style.top=0;
        key=1;
    }
    var height = key*55;
    $(".top_lunbo").animate({"top":-height})
}


//旋转木马
var arrOfJson = [
    {
        width:300,
        top:70,
        left:50,
        opacity:0.2,
        "z-index":2
    },
    {
        width:400,
        top:120,
        left:0,
        opacity:0.8,
        "z-index":3
    },
    {
        width:500,
        top:100,
        left:200,
        opacity:1,
        "z-index":4
    },
    {
        width:400,
        top:120,
        left:600,
        opacity:0.8,
        "z-index":3
    },
    {
        width:300,
        top:70,
        left:750,
        opacity:0.2,
        "z-index":2
    }
];

var slide = document.getElementById("slide");
var liArr = slide.getElementsByTagName("li");
var arrow = document.getElementById("arrow");
var prev  = arrow.children[0];
var next  = arrow.children[1];
var bool = true;
autoPlay();
slide.onmouseover = function () {
    animate1(arrow,{"opacity": 1});
}
slide.onmouseout = function () {
    animate1(arrow,{"opacity": 0});
}
next.onclick = function () {
    if(bool){
        autoPlay(true);
        bool = false;
    }
}
prev.onclick = function () {
    if(bool){
        autoPlay(false);;
        bool = false;
    }
}
clearInterval(timer1);
var timer1 = setInterval(next.onclick,2000)
for(var i=0;i<liArr.length;i++){
    liArr[i].onmouseover=function(){
        clearInterval(timer1);
    }
    liArr[i].onmouseout=function(){
        clearInterval(timer1);
        timer1 = setInterval(next.onclick,2000)
    }
}


function autoPlay(flag){
    if(flag !== undefined){
        if(flag){
            arrOfJson.push(arrOfJson.shift());
        }else{
            arrOfJson.unshift(arrOfJson.pop());
        }
    }
    for(var i=0;i<liArr.length;i++){
        animate1(liArr[i],arrOfJson[i], function () {
            bool = true;
        });
    }
}
function animate1(ele,json,fn){
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for(var k in json){
            if(k === "z-index"){
                ele.style.zIndex = json[k];
            }else if(k === "opacity"){
                var leader = parseInt(getStyle(ele,k)*10) || 10;
                var step = (parseInt(json[k]*10)-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader/10;
                ele.style.filter = "alpha(opacity="+leader*10+")";
                if(parseInt(json[k]*10) !== leader){
                    bool = false;
                }
            }else{
                var leader = parseInt(getStyle(ele,k)) || 0;
                var step = (json[k]-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader + "px";
                if(json[k] !== leader){
                    bool = false;
                }
            }
        }
        if(bool){
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    },30);
}
function getStyle(ele,attr){
    if(ele.currentStyle !== undefined){
        return ele.currentStyle[attr];
    }else{
        return window.getComputedStyle(ele,null)[attr];
    }
}






//幻影鼠标
var imgsb = document.getElementsByClassName("sb")
setInterval(function () {
    for (var i = imgsb.length - 1; i > 0; i--) {
        imgsb[i].style.left = imgsb[i - 1].style.left
        imgsb[i].style.top = imgsb[i - 1].style.top
        imgsb[i].style.opacity = (imgsb.length - i) / 10;
    }
}, 1)
document.onmousemove = function (event) {
    event = event || window.event;
    var pagex = event.pageX || scroll1().left + event.clientX;
    var pagey = event.pageY || scroll1().top + event.clientY;
    imgsb[0].style.left = pagex+25 + "px";
    imgsb[0].style.top = pagey+15 + "px";
}
function scroll1() {
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft,
        top: window.pageYOffset || document.documentElement.scrollTop
    }
}


//导航栏
var index=0;
var count = 0;
var banLiArr=$(".banner_ul").children();
banLiArr.mouseover(function(){
     index = $(this).index();
    if(index ==7){
        index=1;
    }
    if(index>0){
        $(".banner_bg").stop(true,true)
        $(".banner_bg").animate({"left":(index-1)*172},100)
        $(".banner_sp").css("color","#e3bd6f")
        $(".banner_sp1").css("color","#e3bd6f")
        $(".banner_sp3").css("color","#e3bd6f")
    }
})
banLiArr.click(function(){
    count = $(this).index()-1
})
$(".banner_ul").mouseleave(function(){
    $(".banner_bg").animate({"left":count*172},100)
    $(".banner_sp").css("color","white")
    $(".banner_sp1").css("color","#5b6650")
    $(".banner_sp3").css("color","#5b6650")
})

$(".banner_last").mouseenter(function(){
    $(".banner_sp4").stop(true,false)
    $(".banner_sp4").animate({"height":100},1000)

    $(".banner_sp5").css("color","yellow")
    $(".banner_sp6").css("color","yellow")
})
$(".banner_last").mouseleave(function(){
    $(".banner_sp4").stop(true,false)
    $(".banner_sp4").animate({"height":5},1000)

    $(".banner_sp5").css("color","#7d0d1d")
    $(".banner_sp6").css("color","#7d0d1d")
})




//第一赛季
$(".saijionef").mouseenter(function (){
    $(".saijioneb2a").stop(true,true)
    $(".saijioneb1a").animate({"opacity":1},1);
    $(".saijioneb2a").fadeIn(1000);
    $(".saijioneb1a").css("display","block")
    $(".saijioneb1a").animate({"margin-left":141},1000);
    $(".saijioneb1a").animate({"margin-top":300},1000);
    $(".saijioneb1a").animate({"margin-left":0},1000);
    $(".saijioneb1a").animate({"margin-top":0},1000);
    $(".saijioneb1a").animate({"opacity":0},1000);
})

$(".saijionef").mouseleave(function(){
    $(".saijioneb2a").stop(true,true)
    $(".saijioneb1a").css("display","none")
    $(".saijioneb2a").fadeOut(1000);
})


$(".saijionec").mouseenter(function () {
    $(".saijioneb1b").animate({"opacity":1},1);
    $(".saijioneb2b").fadeIn(1000);
    $(".saijioneb1b").css("display","block")
    $(".saijioneb1b").animate({"margin-left":141},1000);
    $(".saijioneb1b").animate({"margin-top":300},1000);
    $(".saijioneb1b").animate({"margin-left":0},1000);
    $(".saijioneb1b").animate({"margin-top":0},1000);
    $(".saijioneb1b").animate({"opacity":0},1000);
})
$(".saijionec").mouseleave(function(){
    $(".saijioneb2b").stop(true,true)
    $(".saijioneb1b").css("display","none")
    $(".saijioneb2b").fadeOut(1000);
})


$(".saijioned").mouseenter(function () {
    $(".saijioneb1c").animate({"opacity":1},1);
    $(".saijioneb2c").fadeIn(1000);
    $(".saijioneb1c").css("display","block")
    $(".saijioneb1c").animate({"margin-left":141},1000);
    $(".saijioneb1c").animate({"margin-top":300},1000);
    $(".saijioneb1c").animate({"margin-left":0},1000);
    $(".saijioneb1c").animate({"margin-top":0},1000);
    $(".saijioneb1c").animate({"opacity":0},1000);
})
$(".saijioned").mouseleave(function(){
    $(".saijioneb2c").stop(true,true)
    $(".saijioneb1c").css("display","none")
    $(".saijioneb2c").fadeOut(1000);
})

$(".saijionee").mouseenter(function () {
    $(".saijioneb1d").animate({"opacity":1},1);
    $(".saijioneb2d").fadeIn(1000);
    $(".saijioneb1d").css("display","block")
    $(".saijioneb1d").animate({"margin-left":141},1000);
    $(".saijioneb1d").animate({"margin-top":300},1000);
    $(".saijioneb1d").animate({"margin-left":0},1000);
    $(".saijioneb1d").animate({"margin-top":0},1000);
    $(".saijioneb1d").animate({"opacity":0},1000);
})
$(".saijionee").mouseleave(function(){
    $(".saijioneb2d").stop(true,true)
    $(".saijioneb1d").css("display","none")
    $(".saijioneb2d").fadeOut(1000);
})



//内容轮播
$(".conterlunbo")[0].appendChild( $(".conterlunbo")[0].children[0].cloneNode(true));
var key1= 0;
var square2=0;
clearInterval(timer2)
var timer2 = setInterval(topL2,1000)
var olLiArr=$(".conterlunboa").children();
for(var i=0;i<olLiArr.length;i++){
    //自定义属性;
    olLiArr[i].index = i;
    olLiArr[i].onmouseover = function () {
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].style.backgroundColor = "black";
        }
        this.style.backgroundColor = "#876638";
        $(".conterlunbo").animate({"left":-721*this.index})
        key1 = square2 = this.index;
    }
}



$(".conterlunbo")[0].onmouseover = function (){
    clearInterval(timer2);
}
$(".conterlunbo")[0].onmouseout= function (){
    clearInterval(timer2);
    timer2 = setInterval(topL2,1000)
}
$(".conterlunboa")[0].onmouseover = function (){
    clearInterval(timer2);
}
$(".conterlunboa")[0].onmouseout= function (){
    clearInterval(timer2);
    timer2 = setInterval(topL2,1000)
}

function topL2(){

    key1++;
    if(key1==5){
        $(".conterlunbo")[0].style.left=0;
        key1=1;
    }
    square2++;
    if(square2 === 4){
        square2 = 0;
    }
    for(var n=0;n<$(".conterlunboa")[0].children.length;n++){
        $(".conterlunboa")[0].children[n].style.backgroundColor="black";
    }
    $(".conterlunboa")[0].children[square2].style.backgroundColor="#876638";

    var left = key1*721;
    $(".conterlunbo").animate({"left":-left})
}

//右新闻区
$(".right2").mouseenter(function(){
    $(".rightlunbo").animate({"left":0},1000)
})
$(".right3").mouseenter(function(){
    $(".rightlunbo").animate({"left":-460},1000)
})

//赛前备战区
$(".sqbz4").mouseenter(
    function(){
        $(".sqbz4")[0].style.width="295px";
        $(".sqbz4")[0].style.height="170px";
        $(".sqbz4")[0].style.left="-5px";
        $(".sqbz4")[0].style.top="-5px";
        $(".naxt1").css("display","block");
        $(".naxt2").css("display","block");
        $(".naxt3").css("display","block");
        $(".naxt4").css("display","block");
        $(".naxt1").animate({"width":284},100,function(){
            $(".naxt2").animate({"height":159},100,function(){
                $(".naxt3").animate({"left":0},100,function(){
                    $(".naxt4").animate({"top":0},100)
                })
            })
        })

    }
)
$(".sqbz4").mouseleave(
    function(){

        $(".naxt1").stop(true,true)
        $(".naxt2").stop(true,true)
        $(".naxt3").stop(true,true)
        $(".naxt4").stop(true,true)
        $(".sqbz4")[0].style.width="285px";
        $(".sqbz4")[0].style.height="160px";
        $(".sqbz4")[0].style.left="0";
        $(".sqbz4")[0].style.top="0";
        $(".naxt1").css({"display":"none","width":1});
        $(".naxt2").css({"display":"none","height":1});
        $(".naxt3").css({"display":"none","left":284});
        $(".naxt4").css({"display":"none","top":159});
    }
)
$(".sqbz5").mouseenter(
    function(){
        $(".sqbz5")[0].style.width="295px";
        $(".sqbz5")[0].style.height="170px";
        $(".sqbz5")[0].style.left="-5px";
        $(".sqbz5")[0].style.top="-5px";
        $(".naxt5").css("display","block");
        $(".naxt6").css("display","block");
        $(".naxt7").css("display","block");
        $(".naxt8").css("display","block");
        $(".naxt5").animate({"width":284},100,function(){
            $(".naxt6").animate({"height":159},100,function(){
                $(".naxt7").animate({"left":0},100,function(){
                    $(".naxt8").animate({"top":0},100)
                })
            })
        })
    }
)
$(".sqbz5").mouseleave(
    function(){
        $(".naxt5").stop(true,true)
        $(".naxt6").stop(true,true)
        $(".naxt7").stop(true,true)
        $(".naxt8").stop(true,true)
        $(".sqbz5")[0].style.width="285px";
        $(".sqbz5")[0].style.height="160px";
        $(".sqbz5")[0].style.left="0";
        $(".sqbz5")[0].style.top="0";
        $(".naxt5").css({"display":"none","width":1});
        $(".naxt6").css({"display":"none","height":1});
        $(".naxt7").css({"display":"none","left":284});
        $(".naxt8").css({"display":"none","top":159});
    }
)
$(".sqbz6").mouseenter(
    function(){
        $(".sqbz6")[0].style.width="295px";
        $(".sqbz6")[0].style.height="170px";
        $(".sqbz6")[0].style.left="-5px";
        $(".sqbz6")[0].style.top="-5px";
        $(".naxt9").css("display","block");
        $(".naxt10").css("display","block");
        $(".naxt11").css("display","block");
        $(".naxt12").css("display","block");
        $(".naxt9").animate({"width":284},100,function(){
            $(".naxt10").animate({"height":159},100,function(){
                $(".naxt11").animate({"left":0},100,function(){
                    $(".naxt12").animate({"top":0},100)
                })
            })
        })
    }
)
$(".sqbz6").mouseleave(
    function(){
        $(".naxt9").stop(true,true)
        $(".naxt10").stop(true,true)
        $(".naxt11").stop(true,true)
        $(".naxt12").stop(true,true)
        $(".sqbz6")[0].style.width="285px";
        $(".sqbz6")[0].style.height="160px";
        $(".sqbz6")[0].style.left="0";
        $(".sqbz6")[0].style.top="0";
        $(".naxt9").css({"display":"none","width":1});
        $(".naxt10").css({"display":"none","height":1});
        $(".naxt11").css({"display":"none","left":284});
        $(".naxt12").css({"display":"none","top":159});
    }
)
$(".sqbz7").mouseenter(
    function(){
        $(".sqbz7")[0].style.width="295px";
        $(".sqbz7")[0].style.height="170px";
        $(".sqbz7")[0].style.left="-5px";
        $(".sqbz7")[0].style.top="-5px";
        $(".naxt13").css("display","block");
        $(".naxt14").css("display","block");
        $(".naxt15").css("display","block");
        $(".naxt16").css("display","block");
        $(".naxt13").animate({"width":284},100,function(){
            $(".naxt14").animate({"height":159},100,function(){
                $(".naxt15").animate({"left":0},100,function(){
                    $(".naxt16").animate({"top":0},100)
                })
            })
        })
    }
)
$(".sqbz7").mouseleave(
    function(){
        $(".naxt13").stop(true,true)
        $(".naxt14").stop(true,true)
        $(".naxt15").stop(true,true)
        $(".naxt16").stop(true,true)
        $(".sqbz7")[0].style.width="285px";
        $(".sqbz7")[0].style.height="160px";
        $(".sqbz7")[0].style.left="0";
        $(".sqbz7")[0].style.top="0";
        $(".naxt13").css({"display":"none","width":1});
        $(".naxt14").css({"display":"none","height":1});
        $(".naxt15").css({"display":"none","left":284});
        $(".naxt16").css({"display":"none","top":159});
    }
)

//旋转效果
$("#tiao").click(function(){
    $("body").addClass("bodya")
})

function delayURL(url,time){
    setTimeout("top.location.href='"+url+"'",time);
}
