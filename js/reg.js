//一、先做前端的表单验证（正则时讲过），
// 表单验证：非空判断，格式是否正确


//二、后端验证：
//  发送请求，在数据库中查找用户名是否存在


//三、以上验证都没有问题，才进行注册。
// -----------------------
// 一、先做前端的表单验证
//功能：所有前端的验证；
function isTest() {
    return isUserID() && isUserName() && isPass();
}

//1、手机号码的前端验证
function isUserID() {
    //1)、非空判断
    if ($("#userid").val() == "") {
        return false;
    }
    //2)、格式判断
    // 用户名有数字，字母下划线组成，但不能以数字开头，2-10位
    let reg = /^1\d{10}$/;
    if (!reg.test($("#userid").val())) {
        return false;
    }
    return true;
}

//2、用户名的前端验证
function isUserName() {
    //1)、非空判断
    if ($("#username").val() == "") {
        return false;
    }
    //2)、格式判断
    // 用户名有数字，字母下划线组成，但不能以数字开头，2-10位
    let reg = /^[a-zA-Z_]\w{1,9}$/;
    if (!reg.test($("#username").val())) {
        return false;
    }
    return true;
}

//3、密码的前端验证
function isPass() {
    //1)、非空判断
    if ($("#userpass").val() == "") {
        return false;
    }
    //2)、格式判断
    // 数字，6-16位
    let reg = /^\d{6,16}$/;
    if (!reg.test($("#userpass").val())) {
        return false;
    }
    return true;
}

//二、后端验证

let hasId = false;//该手机号码不存在
function hasIDBack() {
    //后端验证手机号码是否存在
    $.get("../php/checkUser.php", { "userid": $("#userid").val() }, function (data) {
        if (data == "0") {
            $("#tishi").css({ "display": "block" });
            $("#tishi>span").html("手机号码已经存在，请重新思考！");
            hasId = true;
        } else {
            $("#tishi").css({ "display": "block" });
            $("#tishi>span").html("手机号码可以使用，请注册吧！");
            hasId = false;
        }
    })

}

let hasUser = false;//该用户名不存在
function hasUserBack() {
    //后端验证用户名是否存在
    $.get("../php/checkUsername.php", { "username": $("#username").val() }, function (data) {
        if (data == "0") {
            $("#tishi").css({ "display": "block" });
            $("#tishi>span").html("用户名已经存在，请重新思考！");
            hasUser = true;
        } else {
            $("#tishi").css({ "display": "block" });
            $("#tishi>span").html("用户名可以使用，请注册吧！");
            hasUser = false;
        }
    })
}


$(function () {
    $("#username").blur(function () {
        //1、前端验证
        if (isUserName() == false) {
            $("#tishi").css({ "display": "block" });
            $("#tishi>span").html("用户名格式错误"); $
            return;
        }
        //2、后端的验证
        hasUserBack();
    });

    $("#userid").blur(function () {
        //1、前端验证
        if (isUserID() == false) {
            $("#tishi").css({ "display": "block" });
            $("#tishi>span").html("手机号码格式错误");
            return;
        }
        //2、后端的验证
        hasIDBack();
    });

    $("#userpass").blur(function () {
        //1、前端验证
        if (isPass() == false) {
            $("#tishi").css({ "display": "block" });
            $("#tishi>span").html("密码格式不正确错误");
            return;
        } else {
            $("#tishi").css({ "display": "none" });
        }
    });

    $("#btn").click(function () {
        //1、前端验证
        if (isTest() == false) {
            $("#tishi").css({ "display": "block" });
            $("#tishi>span").html("您的信息输入不完整");
            return;
        }
        //2、用户名是否存在(后端验证)
        if (hasUser) {
            return;
        }
        //2、手机号码是否存在(后端验证)
        if (hasId) {
            return;
        }

        $.post(
            "../php/addUser.php",
            {
                "userid": $("#userid").val(),
                "username": $("#username").val(),
                "userpass": $("#userpass").val()
            },
            function (data) {
                if (data == "success") {
                    //保存cookie：
                    saveCookie("username",$("#username").val(),7);
                    setTimeout(() => {
                        location.href = "登录.html";
                    }, 200);
                } else if (data == "fail") {
                    $("#tishi").css({ "display": "block" });
                    $("#tishi>span").html("不好意思，注册失败!");
                } else {
                    $("#tishi").css({ "display": "block" });
                    $("#tishi>span").html("不好意思，服务器出问题了!");
                }
            }
        );
    });
});
