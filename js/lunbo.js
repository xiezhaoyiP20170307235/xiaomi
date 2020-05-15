
        // 轮播图
        let ord = 0
        let myTime = null
        $img = $(".img-box>img")
        $li = $(".lis>a")
        let hrefs = ["https://www.baidu.com",
            "http://www.1000phone.com",
            "https://www.baidu.com",
            "http://www.1000phone.com",
            "https://www.baidu.com"]


        function autoPlay() {
            myTime = setInterval(function () {
                // 跳转到下一张图片
                goImg(ord + 1)
            }, 3000)

        }

        function goImg(transOrd) {
            // 一、数据处理
            // 1、见状性
            if (transOrd == ord) {
                return  //结束函数的执行
            }

            // 二、逻辑
            // 1、数据处理
            // outOrd是要淡出的图片  transOrd是要淡入的图片
            let outOrd = ord
            ord = transOrd

            // 2、边界处理
            if (ord > $img.length - 1) {
                ord = 0
            } else if (ord < 0) {
                ord = $img.length - 1
            }

            // 3、外观
            // 3.1、一张图片淡出，一张图片淡入
            $img.eq(outOrd).animate({ "opacity": 0 }, 1000)
            $img.eq(ord).animate({ "opacity": 1 }, 1000)
            // 3.2、变豆豆
            $li.eq(outOrd).css({ "background-color": "#333" })
            $li.eq(ord).css({ "background-color": "#fff" })
        }

        function stopPlay() {
            window.clearInterval(myTime)
            myTime = null

        }

        $(function () {
            // 1、自动播放
            autoPlay()


            // 2、点击豆豆跳转到对应的图片上
            $(".banner-r>.lis>a").click(function () {
                stopPlay()
                goImg($(this).index())
            })

            // 3、鼠标放入停止播放
            $("#banner-wrap").mousemove(function () {
                stopPlay()
            })


            // 4、鼠标离开继续播放
            $("#banner-wrap").mouseout(function () {
                autoPlay()
            })

            // 5、左右箭头
            let $span = $("#banner-wrap>i")

            // 左箭头
            $span.eq(0).click(function () {
                stopPlay()
                goImg(ord - 1)
            })

            // 右箭头
            $span.eq(1).click(function () {
                stopPlay()
                goImg(ord + 1)
            })

            // 6、超链
            $(".img-box").click(function () {
                window.open(hrefs[ord])
            })


        })