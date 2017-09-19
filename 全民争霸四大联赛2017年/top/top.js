/**
 * Created by Administrator on 2017/4/7 0007.
 */
//¿Ú·çÇÙ
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

//¶¥²¿ÂÖ²¥
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

