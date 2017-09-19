/**
 * Created by 相春艳 on 2017/4/4.
 */

window.onload = function (){

    var a=  $(".banner_right ul li:first-child").clone(true);
    $(".banner_right ul").append(a);
    var a=  $(".banner_right ul li:first-child").clone(true);
    $(".banner_right ul").append(a);
    var num = 0;
    var time =null;
    time = setInterval(function () {
        num++;
        if(num ==3){
            num =1;
            $(".banner_right ul")[0].style.top = 0;
        }
        $(".banner_right ul").animate({"top":-num*55})
    },1000)

                                                                         //模式切换及列表区
    var ani_mode = document.getElementsByClassName("ani_mode")[0];
    var list_mode = document.getElementsByClassName("list_mode")[0];
    var mode_one = document.getElementsByClassName("mode_one")[0]
    var mode_two = document.getElementsByClassName("mode_two")[0];
        fn();
    ani_mode.onclick= function (){
        mode_one.style.display = "block";
        mode_two.style.display = "none";
        fn1();
        fn();
        ani_mode.style.background = 'url("../images/sprite.png") no-repeat 0 -29px';
        list_mode.style.background ='url("../images/sprite.png") no-repeat -46px 0';
    }

    list_mode.onclick = function(){
        mode_two.style.display = "block";
        mode_one.style.display = "none";
        this.style.background = 'url("../images/sprite.png") no-repeat -46px -29px';
        ani_mode.style.background= 'url("../images/sprite.png") no-repeat 0 0';

    }



       function fn(){
           ani_mode.style.background = 'url("../images/sprite.png") no-repeat 0 -29px';
           $(".content_box:eq(0)").animate({"margin-top":"20px","margin-left":"20px"},1000)
           $(".content_box:eq(1)").animate({"margin-top":"20px","margin-left":"340px"},1000)
           $(".content_box:eq(2)").animate({"margin-top":"20px","margin-left":"660px"},1000)
           $(".content_box:eq(3)").animate({"margin-top":"320px","margin-left":"20px"},1000)
           $(".content_box:eq(4)").animate({"margin-top":"320px","margin-left":"340px"},1000)
           $(".content_box:eq(5)").animate({"margin-top":"320px","margin-left":"660px"},1000)
           $(".content_box:eq(6)").animate({"margin-top":"620px","margin-left":"20px"},1000)
           $(".content_box:eq(7)").animate({"margin-top":"620px","margin-left":"340px"},1000)
           $(".content_box:eq(8)").animate({"margin-top":"620px","margin-left":"660px"},1000)
           $(".content_box:eq(9)").animate({"margin-top":"920px","margin-left":"20px"},1000)
           $(".content_box:eq(10)").animate({"margin-top":"920px","margin-left":"340px"},1000)
           $(".content_box:eq(11)").animate({"margin-top":"920px","margin-left":"660px"},1000)
           $(".content_box:eq(12)").animate({"margin-top":"1220px","margin-left":"20px"},1000)
           $(".content_box:eq(13)").animate({"margin-top":"1220px","margin-left":"340px"},1000)
           $(".content_box:eq(14)").animate({"margin-top":"1220px","margin-left":"660px"},1000)
       }


    function fn1(){
        ani_mode.style.background = 'url("../images/sprite.png") no-repeat 0 -29px';
        $(".content_box:eq(0)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(1)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(2)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(3)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(4)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(5)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(6)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(7)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(8)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(9)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(10)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(11)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(12)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(13)").css({"margin-top":"0px","margin-left":"0px"})
        $(".content_box:eq(14)").css({"margin-top":"0px","margin-left":"0px"})
    }




                                                                 //返回顶部小箭头
    var arrow = document.getElementsByClassName("arrow")[0];
    var $arrow = $(arrow);
    var target = 0;
    var leader = 0;
    var timer = null;
    window.onscroll = function(){
        if(scroll().top>1000){
            $arrow.show();
        }else{
            $arrow.hide();
        }
        leader = scroll().top;
    }
    arrow.onclick = function(){
        clearInterval(timer);
        timer = setInterval(function(){
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);
            if(leader === target){
                clearInterval(timer);
            }
        },30)
    }




                                                        //右边侧边栏
    var node1 = document.getElementById("node1");
    var erweima1 = document.getElementById("erweima1");
    var node2 = document.getElementById("node2");
    var erweima2 = document.getElementById("erweima2");
    var node3= document.getElementById("node3");
    var erweima3 = document.getElementById("erweima3");
    node1.onmouseover = function(){
        erweima1.style.display = "block"
    }
    node1.onmouseout = function(){
        erweima1.style.display="none"
    }
    node2.onmouseover = function(){
        erweima2.style.display = "block"
    }
    node2.onmouseout = function(){
        erweima2.style.display="none"
    }
    node3.onmouseover = function(){
        erweima3.style.display = "block"
    }
    node3.onmouseout = function(){
        erweima3.style.display="none"
    }
}


function scroll(){
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft,
        top:  window.pageYOffset || document.documentElement.scrollTop
    }
}
