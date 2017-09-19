/**
 * Created by Administrator on 2017/4/4 0004.
 */



       window.onload = function () {

                 //导航特效开始
           $("#navUl>li").mouseenter(function () {
               var index =$(this).index()
               var spans = $("#navUl li span")
               spans.eq(index).stop(true,true);
               spans.eq(index).animate({"width":117});
                 $("#navUl>li").eq(index).addClass("color")
               $("#navUl>li>.one").eq(index).stop(true,true);
               $("#navUl>li>.one").eq(index).slideDown(300);



           })
           $("#navUl>li").mouseleave(function () {
               var index =$(this).index()
               var spans = $("#navUl li span")
               spans.eq(index).stop(true,true);
               spans.eq(index).animate({"width":0})
               //$("#navOl>li>.one").eq(index).stop(true,true);
               $("#navUl>li>.one").eq(index).slideUp(300);
               $("#navUl>li").eq(index).removeClass("color")
           })


             $("#navOl>li").mouseenter(function () {
                 var index =$(this).index()
                 var spans = $("#navOl li span")
                 spans.eq(index).stop(true,true);
                 spans.eq(index).animate({"width":117});
                 $("#navOl>li").eq(index).addClass("color")
                 $("#navOl>li>.one").eq(index).stop(true,true);
                  $("#navOl>li>.one").eq(index).slideDown(300);



             })
           $("#navOl>li").mouseleave(function () {
               var index =$(this).index()
               var spans = $("#navOl li span")
               spans.eq(index).stop(true,true);
               spans.eq(index).animate({"width":0})
               //$("#navOl>li>.one").eq(index).stop(true,true);
               $("#navOl>li>.one").eq(index).slideUp(300);
               $("#navOl>li").eq(index).removeClass("color")
           })

             //导航特效结束

            //轮播图开始

           var newli=  $("#lunbo ul li:first-child").clone(true);
           $("#lunbo ul").append(newli);
           $("#lunbo .lunbo_ol li").mouseenter(function () {
                 var index = $(this).index()
                  $("#lunbo ul").animate({"left":-446*index})
                 $(this).addClass("lunboColor")
             })
            var timer =null;
            var key =0;
            var square =0;
            timer=  setInterval(function () {
                 key++;
                square++;
                if(key ===6){

                $("#lunbo ul")[0].style.left = 0;
                    key =1;
                }
           if(square===5){
               square = 0;
           }
        $("#lunbo ol li").eq(square).siblings().removeClass("lunboColor");
             $("#lunbo ol li").eq(square).addClass("lunboColor");
                $("#lunbo ul").animate({"left":-446*key})

            },2000)


           $("#lunbo .lunbo_ol li").mouseleave(function () {
               $(this).removeClass("lunboColor")
           })

            //导航上下轮播
           var a=  $("#chongzhi a:first-child").clone(true);
           $("#chongzhi div").append(a);
           var a=  $("#chongzhi a:first-child").clone(true);
           $("#chongzhi div").append(a);
             var num = 0;
             var time =null;
            time = setInterval(function () {
                  num++;
                if(num ==3){
                    num =1;
                    $("#chongzhi")[0].style.top = 0;
                }
                $("#chongzhi").animate({"top":-num*57})
            },1000)


                    //轮播下滚动
              $("#hot .jq").mouseenter(function () {
                   var index=  $(this).index()
                  $(this).children("span").show()
                  $(this).siblings().children("span").hide(300);
                  $(this).stop(true,true)
                   $("#redian ").animate({"left":-index*425})

              })


             $("#left ul li").mouseenter(function () {
                 var  num =  $(this).index()
                  $(this).addClass("kuang");
                 $(this).siblings().removeClass("kuang");
                 $(this).stop(true,true)
                 $("#biglist").animate({"left":-num*445})

             })

           $("#left ul li").mouseleave(function () {
               $(this).siblings().removeClass("kuang");
           })



           $("#wstj img").mouseenter(function () {
               $(this).stop(true,false)
                $(this).animate({"width":260,"height":160,"left":-5,"top":-5})
           })
           $("#wstj img").mouseleave(function () {
               $(this).animate({"width":250,"height":150,"left":0,"top":0})
           })

           fn($("#l_img img"))
           fn($("#r_img img"))
            fn1($("#wstp6"))
            fn1($("#wstp7"))
            fn1($("#wstp8"))
            fn1($("#wstp9"))

             $("#centent .index_a2").addClass("bd")
           $("#centent .index_a1 li").mouseenter(function () {
               var index =   $(this).index()
               $("#centent .centent li").eq(index).show()
                  $(this).addClass("bd")
                  $(this).siblings().removeClass("bd")

               $("#centent .centent li").eq(index).siblings().hide()
           })

               setInterval(function fn() {

                   $("#main1").fadeIn(3000)
                   $("#main1").fadeOut(3000)
               },2000)


           shadow($("#game"))
           shadow($(".m_lunbo"))
           shadow($(".t_right"))
           shadow($(".ws"))
           shadow($(".wstpbox"))
           shadow($(".m_right"))
           shadow($(".index_4"))
           shadow($(".wstj"))
           shadow($(".bigpz"))
           shadow($("#wstp"))
           shadow($("#centent"))
           shadow($("#wsspz"))




       }

      function  shadow(ele){
          $(ele).mouseenter(function () {
              $(ele).addClass("shadow")
          })

          $(ele).mouseleave(function () {
              $(ele).removeClass("shadow")
          })
      }





         function  fn(ele){
             $(ele).mouseenter(function () {
                 $(this).stop(true,false)
                 $(this).animate({"width":205,"height":124,"left":-5,"top":-5})
             })
             $(ele).mouseleave(function () {
                 $(this).animate({"width":195,"height":114,"left":0,"top":0})
             })
         }

            function  fn1(ele){
                $(ele).mouseenter(function () {
                    $(this).children("img").stop(true,false)
                    $(this).children("img").animate({"width":204,"height":127,"left":-5,"top":-5},50)
                })
                $(ele).mouseleave(function () {
                    $(this).children("img").animate({"width":194,"height":117,"left":0,"top":0},50)
                })
            }