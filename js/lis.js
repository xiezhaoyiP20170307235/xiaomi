// 从厚度那获取所有的商品
function getGoods() {
    $.get("../php/getGoodsList.php","typeId=001", function (date) {
        showDateA1(date)
    }, "json")
    $.get("../php/getGoodsList.php","typeId=002", function (date) {
        showDateA2(date)
    }, "json")
    $.get("../php/getGoodsList.php","typeId=003", function (date) {
        showDateB(date)
    }, "json")
    $.get("../php/getGoodsList.php","typeId=004", function (date) {
        showDateC(date)
    }, "json")
    $.get("../php/getGoodsList.php","typeId=005", function (date) {
        showDateD(date)
    }, "json")
    $.get("../php/getGoodsList.php","typeId=006", function (date) {
        showDateE(date)
    }, "json")
}

// 明星产品1
function showDateA1(date) {
    let htmlStr = ''
    date.forEach(item => {
        htmlStr += `
        <div class="main-box">
        <div class="box-img">
        <a href="详情页面.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}" alt=""></a>
    </div>
    <div class="box-text">
        <h3>${item.goodsName}</h3>
        <p>${item.goodsDesc}</p>
        <p><span>${item.goodsPrice}</span>元起</p>
        <p>
            <a href="详情页面.html?goodsId=${item.goodsId}">立即购买 </a>
        </p>
    </div>
    </div>
        `
    }); 
    console.log(date[0])
    $("#main-box").html(htmlStr)
}
// 明星产品2
function showDateA2(date) {
    let htmlStr = ''
    date.forEach(item => {
        htmlStr += `
        <div class="m-box">
            <div class="m-img">
                <a href="详情页面.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}" alt=""></a>
            </div>
            <h3>${item.goodsName}</h3>
            <p>${item.goodsDesc}</p>
            <p><span>${item.goodsPrice}</span>元起</p>
        </div>
      
        `
    });
    $("#main-box02").html(htmlStr)
}
// 小米手机
function showDateB(date) {
    let htmlStr = ''
    date.forEach(item => {
        htmlStr += `
        <div class="m-box">
            <div class="m-img">
                <a href="详情页面.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}" alt=""></a>
            </div>
            <h3>${item.goodsName}</h3>
            <p>${item.goodsDesc}</p>
            <p><span>${item.goodsPrice}</span>元起</p>
        </div>
      
        `
    });
    $("#main-box03").html(htmlStr)
}
// 红米手机
function showDateC(date) {
    let htmlStr = ''
    date.forEach(item => {
        htmlStr += `
        <div class="m-box">
            <div class="m-img">
                <a href="详情页面.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}" alt=""></a>
            </div>
            <h3>${item.goodsName}</h3>
            <p>${item.goodsDesc}</p>
            <p><span>${item.goodsPrice}</span>元起</p>
        </div>
      
        `
    });
    $("#main-box04").html(htmlStr)
}
// 平板
function showDateD(date) {
    let htmlStr = ''
    date.forEach(item => {
        htmlStr += `
        <div class="box-img">
        <a href="详情页面.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}" alt=""></a>
    </div>
    <div class="box-text">
        <h3>${item.goodsName}</h3>
        <p>${item.goodsDesc}</p>
        <p><span>${item.goodsPrice}</span>元起</p>
        <p>
            <a href="详情页面.html?goodsId=${item.goodsId}">立即购买 </a>
        </p>
    </div>
        `
    }); 
    $("#main-box05").html(htmlStr)
}
// 骁龙865
function showDateE(date) {
    let htmlStr = ''
    date.forEach(item => {
        htmlStr += `
        <div class="m-box">
            <div class="m-img">
                <a href="详情页面.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}" alt=""></a>
            </div>
            <h3>${item.goodsName}</h3>
            <p>${item.goodsDesc}</p>
            <p><span>${item.goodsPrice}</span>元起</p>
        </div>
      
        `
    });
    $("#main-box06").html(htmlStr)
}

// 调用
$(function(){
    getGoods()
})