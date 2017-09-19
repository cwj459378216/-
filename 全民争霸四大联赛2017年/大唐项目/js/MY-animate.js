/**
 *
 * Created by Administrator on 2017/4/4 0004.
 */
//��װһ������,���ݹ�ȥ��������,Ԫ��/����/ֵ!
function animate(ele,json,fn){
    //Ҫ�ö�ʱ��,���嶨ʱ��
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //һ����forѭ��֮��,�����ܳ�����ʱ��֮��
        var bool = true;
        for(var k in json){
            //Ҫ���ݺܶ�����,��Ҫ�ж�����ֵ��ʲô,Ȼ������߼�;
            //�ж�:�������ʱz-index;
            if(k === "z-index"){
                //����ǲ㼶������ֱ����ߵ���ߡ���Ҫһ��һ�����ӣ�
                ele.style.zIndex = json[k];
                //�����ʱ���Ͳ㼶�޹أ�

                //�ж�:�������ʱopacity;(һ����С��)
            }else if(k === "opacity"){
                //opacity������Խ��ܵĶ���С����С���������׳��־��ȶ�ʧ��
                //�����ȷŴ�10����Ȼ�����,������ϸ�ֵ��ʱ������С10��;
                var leader = parseInt(getStyle(ele,k)*10) || 10;//getStyle();�ķ���ֵ��һ�����д�Ϊ���ַ���
                var step = (parseInt(json[k]*10)-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;//��һ������Ҫ����λ��
                //��ֵ��ʱ��Ҫ��С10��,����Ҫ��λ;
                ele.style[k] = leader/10;
                //����ie678:
                ele.style.filter = "alpha(opacity="+leader*10+")";
                //�����ʱ��;
                if(parseInt(json[k]*10) !== leader){
                    bool = false;
                }
            }else{
                //��������,����һ���߼�
                var leader = parseInt(getStyle(ele,k)) || 0;//getStyle();�ķ���ֵ��һ�����д�Ϊ���ַ���
                var step = (json[k]-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;//��һ������Ҫ����λ��
                ele.style[k] = leader + "px";
                //�����ʱ��;
                if(json[k] !== leader){
                    bool = false;
                }
            }
        }
        //���������ʱ��������forѭ��֮��,����Ҫ�ж�;
        console.log(1);
        if(bool){
            clearInterval(ele.timer);
            //�����ʱ��֮��,������������ִ����ϵ�ʱ��,��ʱ���ҾͿ���ִ����һ��������
            if(fn){
                fn();
            }
        }
    },1);
}


function getStyle(ele,attr){
    //�ж�:������Ƿ�֧��ĳ������,֧�־͵���,��֧�־�������һ��
    if(ele.currentStyle !== undefined){//��������Բ����ڷ���ֵ����undefined
        return ele.currentStyle[attr];//�����Ż�ȡ����ֵ,�Ƚ����,����ʲô����ʲô
    }else{
        //����ȸ�ie9+֧�ֵķ���
        return window.getComputedStyle(ele,null)[attr];
    }
}






function getStyle(ele,attr){
    //�ж�:������Ƿ�֧��ĳ������,֧�־͵���,��֧�־�������һ��
    if(ele.currentStyle !== undefined){//��������Բ����ڷ���ֵ����undefined
        return ele.currentStyle[attr];//�����Ż�ȡ����ֵ,�Ƚ����,����ʲô����ʲô
    }else{
        //����ȸ�ie9+֧�ֵķ���
        return window.getComputedStyle(ele,null)[attr];
    }
}






    function boxR(ele){
    ele.onmousemove = function (){
        ele.id = "box_shadow";
    }
    ele.onmouseout = function (){
        ele.id = "";
    }
}
//盒子高亮
var wsspz =document.getElementsByClassName("wsspz")[0];
var wstj =document.getElementsByClassName("wstj")[0];
var bigpz =document.getElementsByClassName("bigpz")[0];
var wstp =document.getElementsByClassName("wstp")[0];
var index_4 =document.getElementsByClassName("index_4")[0];
var wstpbox =document.getElementsByClassName("wstpbox")[0];
var index_a =document.getElementsByClassName("index_a")[0];
boxR(wsspz);
boxR(wstj);
boxR(bigpz);
boxR(wstp);
boxR(index_4);
boxR(wstpbox);
boxR(index_a);




var imga =document.getElementById("imga");
var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
imga.onmouseover = function(){
     //animate(img1,{"width":200,"height":120})
    img1.style.width="200px";
    img1.style.height="123px";
    img1.style.left="-3px";
    img1.style.top="-3px";
    img2.style.display="none";
}
imga.onmouseout = function(){
     //animate(img1,{"width":200,"height":120})
    img1.style.width="194px";
    img1.style.height="117px";
    img1.style.left="0";
    img1.style.top="0";
    img2.style.display="block";
}




