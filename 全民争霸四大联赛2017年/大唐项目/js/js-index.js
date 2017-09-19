/**
 * Created by Administrator on 2017/4/4 0004.
 */



       window.onload = function () {

           var ban = document.getElementById("ban")
           var bigTu = document.getElementById("bigTu");
           ban.onmouseover = function () {
               bigTu.style.display = "block";
           }
           ban.onmouseout = function () {
               bigTu.style.display = "none";
           }

           var navUl = document.getElementById("navUl");
           var liArr = navUl.getElementsByTagName("li")
           var spanArr = navUl.getElementsByTagName("span")
           for (var i = 0; i < liArr.length; i++) {
                   liArr[i].index = i
               liArr[i].onmouseover = function () {
                   animate(spanArr[this.index], {"width":117})
               }
               liArr[i].onmouseout = function () {
                   animate(spanArr[this.index], {"width":0})
               }

           }


























       }