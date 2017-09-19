/**
 * Created by Administrator on 2017/4/3.
 */
$(function(){


    $("#lv").append($("#lv li").eq(0).clone(true));
    var index =  $("#lv").children().index()
    setInterval(function () {
            index++
            if(index==9){
                index=1;
                $("#lv").css({"top":0})
            }
             $("#lv").animate({"top":-index*148})
         },1500)
    var lunboindex=0
    var $ul1=$("#lc ul").append($("#lc ul li").eq(0).clone(true));


    setInterval(function(){
        lunboindex++
        if(lunboindex==2){
            lunboindex=1;
            $ul1.css({"top":0});
        }
        $ul1.animate({"top":-lunboindex*55})
    },2500)

    $("#lc ul li").mouseenter(function () {
        $("#lc  span").stop(true,true);
        $("#lc  span").animate({"width":115});
    })
    $("#lc ul li").mouseleave(function(){
        $("#lc  span").stop(true,true);
        $("#lc  span").animate({"width":0});
    })
        //思路：鼠标在整个页面上移动，图片总是跟随；
        var img = document.getElementById("no");

        setInterval(function(){
            document.onmousemove = function (event) {
                //获取鼠标在整个页面的坐标赋值给图片；
                //兼容获取事件对象
                event = event || window.event;
                var pagex = event.pageX || scroll1().left + event.clientX;
                var pagey = event.pageY || scroll1().top + event.clientY;
                //给图片赋值;让鼠标在小天使中心; 赋值的时候减去图片的宽高一半;
                img.style.left = pagex + img.offsetWidth-8 + "px";
                img.style.top = pagey +img.offsetHeight-17  + "px";
            }
        },1)


        function scroll1(){
            return {
                left: window.pageXOffset || document.documentElement.scrollLeft,
                top: window.pageYOffset || document.documentElement.scrollTop
            };
        }


})

