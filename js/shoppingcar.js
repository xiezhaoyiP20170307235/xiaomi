
$(function () {
    let htmlStr = `
    ${getCookie("username")}
    `
    $("#getuserid").html(htmlStr)

})
// 获取购物车的数据
function getShoppingCar(cb) {
    //从cookie中获取用户名
    $.get("../php/getShoppingCart.php", { "vipName": getCookie("username") }, function (datas) {
        let htmlStr = `
        <table cellspacing="0">
        <tr class="t-title">
            <td>
                <input type="checkbox" >全选
            </td>
            <td>编号</td>
            <td>商品名称</td>
            <td>价格</td>
            <td>数量</td>
            <td>金额</td>
            <td>操作</td>
        </tr>
        `;

        datas.forEach(goods => {
            htmlStr += `
                        <tr class="item-box">
                        <td> 
                            <input class="tdinp" type="checkbox" >
                        </td>
                        <td class="goodsId">${goods.goodsId}</td>
                        <td>${goods.goodsName}<a><img src="${goods.goodsImg}"></a></td>
                        <td>${goods.goodsPrice}</td>
                        <td class="item-num">
                                <input type="button" class="reduceBtn" value="-">
                                <span id="item-count">${goods.goodsCount}</span>
                                <input type="button" class="addBtn" value="+">
                        </td>
                        <td>${goods.goodsPrice * goods.goodsCount}</td>
                        <td>
                            <i class="iconfont icon-cuo delBtn"></i>
                        </td>
                    </tr>
            `;
        });

        htmlStr += `
                    <tr class="car-b">
                    <td colspan="6" >
                        合计：<span>0</span>元
                    </td>
                    <td><input type="button" id="gobtn" value="去结算"></td>
                    
                </tr>
                </table>
                `;
        // 把产生html字符串放在html页面上
        $("#car-box").html(htmlStr);
        cb(); //给dom元素添加事件
    }, "json")
}

//修改购物车中商品的数量()
// 参数:
// 商品编号，修改后的商品数量
function updateCount(goodsId, goodsCount, cb) {
    //从cookie中获取用户名
    $.get("../php/updateGoodsCount.php", {
        "vipName": getCookie("username"),
        "goodsId": goodsId,
        "goodsCount":goodsCount
    }, function (data) {
        if (data == "0") {
            alert("服务器出错：修改数量失败");
        } else {
            // 前端修改数量
            cb();
        }
    });
}

//删除购物车中商品
function deleteCount(goodsId) {
    $.get("../php/deleteGoods.php", {
        "vipName": getCookie("username"),
        "goodsId": goodsId
    }, function (data) {
        if (data == "0"){
            alert("服务器出错：删除商品失败");
        } else {
        }

    })
}

$(function () {
    getShoppingCar(addEvent);
});

//添加事件 
function addEvent() {
    $("table :checkbox:eq(0)").check($("table :checkbox:gt(0)"));
    $(":checkbox").click(function () {
        totalMoney();
    });
    $(".addBtn").click(function () {
        //一、修改后端的数量
        let goodsId = $(this).parent().parent().find(".goodsId").html();
        let count = $(this).prev().html();
        count++;
        updateCount(goodsId, count, () => {
            //二、修改前端的数量
            // 数量            
            $(this).prev().html(count);
            // 单价
            let price = $(this).parent().prev().html();
            // 计算金额
            let money = price * count;
            $(this).parent().next().html(money);

            // 总金额
            totalMoney();
        });
    });
    $(".reduceBtn").click(function () {
        //一、修改后端的数量
        let goodsId = $(this).parent().parent().find(".goodsId").html();
        let count = $(this).next().html();
        count--;
        if (count < 1) {
            count = 0;
        }
        updateCount(goodsId, count, () => {
            // 二、修改前端的数量
            // 数量 
            $(this).next().html(count);
            // 单价
            let price = $(this).parent().prev().html();
            // 计算金额
            let money = price * count;
            $(this).parent().next().html(money);

            // 同时改变当前行的复选框的状态
            if (count == 0) {
                $(this).parent().parent().find(":checkbox").prop("checked", false);
                // $(this).parent().parent().remove();
            }
            // 总金额
            totalMoney();
        })
    });
    $(".delBtn").click(function () {
        if (confirm("亲，您真的要删除吗？")) {
            $(this).parent().parent().remove();
            //删除购物车中商品

             let goodsId = $(this).parent().parent().find(".goodsId").html();
            deleteCount(goodsId)
                
        }
    });
}

// 感觉用户体验不怎么好，
// 其实应该点击 + 或者 - 的时候或者点击选框的弟弟们任何一个时就触发选框的事件，
// - 到 0 的时候就不选中选框了
// 计算总金额
function totalMoney() {
    // 
    let money = 0;
    let $tr = $("table tr:gt(0)").not("table tr:last");
    $tr.each(function () {
        // 复选框是不是选中了
        if ($(this).find(":checkbox").prop("checked")) {
            money += parseFloat($(this).find("td").eq(5).html());
        }
    });
    $("table tr:last").find("span").html(money);
}
