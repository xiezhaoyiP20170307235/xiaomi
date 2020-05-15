var navBox = document.getElementById("nav-top");    
var contentBox = document.getElementById("content-box");

// 页面滚动事件
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;    


    if(scrollTop>=140){
        // 让nav-box 固定定位，top设置为0px；
        navBox.style.position = "fixed"; //脱离文档流
        navBox.style.top = "0px";
        // 因为设置nav-box为固定定位后，会脱离文档流，为了保证脱离文档流后，content-box还保持原来的位置
        // 所以，设置content-box 的margin-top 为nav-box 的高度 150px；
        contentBox.style.marginTop = "63px";
    }else{
        navBox.style.position = "static"; //定位的默认属性        
        contentBox.style.marginTop = "0";
    }
}
