// 鼠标划过logo显示二级菜单
let logo01 = document.getElementsByClassName("logo-li")
let logo02 = document.getElementsByClassName("logo-02")
console.log(logo02)
for (var i = 0; i < logo01.length; i++) {
    let j = i
    logo01[i].onmouseover = function () {
        logo02[j].style.display = "block"
    }
    logo01[i].onmouseout = function () {
        logo02[j].style.display = "none"
    }
    logo02[j].onmouseover = function () {
        this.style.display = "block"
    }
    logo02[j].onmouseout = function () {
        this.style.display = "none"
    }
}
// 鼠标划过banner li显示二级菜单
let banner01 = document.getElementsByClassName("banner-l01")[0].children
let banner02 = document.getElementsByClassName("banner-l02")
let banner = document.getElementById("banner-wrap")
let bannerL = document.getElementsByClassName("banner-l")[0]
console.log(banner01)
console.log(banner02)
for (var i = 0; i < banner01.length; i++) {
    let j = i
    banner01[i].onmouseover = function () {
        banner02[j].style.display = "block"
        bannerL.style.opacity = "1";
        banner02[j].style.opacity = "1";
    }
    banner01[i].onmouseout = function () {
        banner02[j].style.display = "none"
    }
    banner02[j].onmouseover = function () {
        this.style.display = "block"
    }
    banner02[j].onmouseout = function () {
        this.style.display = "none"
    }

}

$(function(){
    if(getCookie("username")){
            let htmlStr=`
    <li><a>${getCookie("username")}</a></li>
    <li><a href="#" class="clear_border">消息通知</a></li>
    `
    $("#h-ul").html(htmlStr)
    }


})