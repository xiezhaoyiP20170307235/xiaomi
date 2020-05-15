function getData(goodsId) {

    // 获取地址栏上的商品编号
    // location.search: 获取地址栏中 文件名后面的字符串，即问号后面的东西
    // http://localhost/nz2001taobao/goodsdetail.html?goodsId=01001
    // let str = location.search;//?goodsId=01001
    // let arr = str.split("="); //["?goodsId","01001"]   
    // let goodsId = arr[1];

    $.get("../php/getGoodsInfo.php", {
        "goodsId":goodsId,
    }, function (data) {
        showData(data);
    }, "json");

}

function showData(data) {
    // let htmlStr=`
    //     <h1>${data.goodsName}的商品详情</h1>
    //     <img src="${data.goodsImg}" alt="">
    //     <p>价格：${data.goodsPrice}</p>
    //     <p>数量：${data.goodsCount}</p>
    //     <p>颜色：${data.beiyong2}</p> 
    // `;
    let htmlStr01 = `
        <h2>${data.goodsName}</h2>
        <div class="nav-title">
                <div class="nav-l">
                    <span>|</span>
                    <a href="#">小米手机</a>
                </div>
                <div class="nav-r">
                    <a href="#">概述</a><span>|</span>
                    <a href="#">F码通道</a><span>|</span>
                    <a href="#">咨询客服</a><span>|</span>
                    <a href="#">用户评价</a>
                </div>
            </div>
    `
    $(".navT-wrap").html(htmlStr01);

    let htmlStr02 = `
        <img src="${data.goodsImg}" alt="">
        <img src="../img/lbo02.jpg" alt="">
        <img src="../img/lbo03.jpg" alt="">
        <img src="../img/lbo04.jpg" alt="">
        <img src="../img/lbo05.jpg" alt="">
    `
    $("#l-img").append(htmlStr02);

    let htmlStr03 = `
        <h1>${data.goodsName}</h1>
    `
    $("#title-text").html(htmlStr03)

    let htmlStr04 = `
    <span>「+1元得镜面视窗保护套，信用卡分期享24期免息，低至5.6元起/天」</span>
    ${data.goodsDesc}
    `
    $("#text-cont").html(htmlStr04)

    let htmlStr05 = `
    <span>${data.goodsPrice}元</span>
    `
    $(".t-price").html(htmlStr05)


    let htmlStr06 = `
        <li><a href="#">
            <span>8GB+256GB </span>
            <span> ${data.goodsPrice}元 </span>
        </a></li>
        <li><a href="#">
            <span>8GB+128GB </span>
            <span> ${data.goodsPrice}元 </span>
        </a></li>
        <li><a href="#">
            <span>12GB+256GB </span>
            <span> ${data.goodsPrice}元 </span>
        </a></li>
    `
    $(".wrap-ul").html(htmlStr06)

    let htmlStr07 = `
    <ul>
        <li>${data.goodsName} 8GB+256GB 钛银黑
            <span> ${data.goodsPrice}元 </span>
            </li>
        <li> 总计 ： ${data.goodsPrice}元 </li>
        </ul>
    `
    $(".zonji").html(htmlStr07)

}

//把指定商品 添加到购物车
function addShoppingCar(goodsId) {
    $.post("../php/addShoppingCart.php", {
        "vipName": getCookie("username"),
        "goodsId": goodsId,
        "goodsCount": 1
    }, (data) => {
        if (data === "0") {
            alert("添加失败");
        } else {
            alert("添加成功");
        }
    });
}


$(function () {
    let goodsId = location.search.split("=")[1];
    getData(goodsId);


    $("#gocar").click(function () {
        addShoppingCar(goodsId);
    });


    $("#gocar").click(function () {
        location.href = "./购物车.html";
    });
})


