window.onload=function () {
    $("#apc").on("click","div",function () {
        $(".u-active").removeClass("u-active")        
        $(this).addClass("u-active")
    })
    // 轮播事件
    function name() {
        var div=$("div[id]")
        // console.log($div.length);
        
        if ($("#b1").is(`.sbcq1`)) {
            for(var i=1;i<=div.length;i++){
                var n=i+1
                if (n>5) {
                    n=1
                }
                $("#b"+i).removeClass().addClass("sbcq"+n)
                
            }
        }else if ($("#b1").is('.sbcq2')) {
            for(var i=1;i<=div.length;i++){
                var n=i+2
                if (n>5) {
                    n=i-3
                }
                // console.log(n);
                
                $("#b"+i).removeClass().addClass("sbcq"+n)
            } 
        }else if($("#b1").is('.sbcq3')){
            for(var i=1;i<=div.length;i++){
                var n=i+3
                if (n>5) {
                    n=i-2
                }
                // console.log(n);
                
                $("#b"+i).removeClass().addClass("sbcq"+n)
            } 
        }else if($("#b1").is('.sbcq4')){
            for(var i=1;i<=div.length;i++){
                var n=i+4
                if (n>5) {
                    n=i-1
                }
                // console.log(n);
                $("#b"+i).removeClass().addClass("sbcq"+n)
            } 
        }else if($("#b1").is('.sbcq5')){
            for(var i=1;i<=div.length;i++){
                $("#b"+i).removeClass().addClass("sbcq"+i)
            } 
        }
    }

    // ul调用事件
    function n2(id) {
        var div=$("div[data-id]")
        var div1=$("div[data-id]")[id]
        var n=div.length
        var x=$(div1).prevAll().length
        var y=$(div1).nextAll().length

        for(var i=0;i<y;i++){
            // console.log((y-i)+"|"+(n-i)+"|"+(n-x));
            $(div[y-i-1]).removeClass().addClass('sbcq'+(n-i))
        }
        for(var i=0;i<=x;i++){
            // console.log(n-i+"|"+(n-i));
            $(div[n-i-1]).removeClass().addClass('sbcq'+(x-i+1))
        }
    }
    // li鼠标移入事件
    $(".u1").on("mouseenter","li",function () {
        var lg=$(".lg")
        lg.removeClass("lg")
        $(this).addClass("lg")
        var id=$(this)[0].id
        n2(id-1)
        name1(1)
        clearInterval(t1)
        clearInterval(t2)
    })
    // li样式轮播
    function name1(n) {
        if (n!=1) {
            if($(".lg").is($(".u1 li:last"))){
                $(".lg").removeClass("lg")
                $(".u1 li:first").addClass("lg")
            }else{
                $(".lg").removeClass("lg").next().addClass("lg")
            }
        }
    }
    // 图片样式移入暂停定时器
    $(".c1").on("mouseenter","div",function () {
        clearInterval(t1)
        clearInterval(t2)
    })
    // 图片移出启动定时器
    $(".c1").on("mouseleave","div",function () {
        t1=setInterval(name,2000)
        t2=setInterval(name1,2000)
    })
    // 鼠标移出启动定时器
    $(".u1").on("mouseleave","li",function () {
        t1=setInterval(name,2000)
        t2=setInterval(name1,2000)
    })
    // 图片定时器
    var t1=setInterval(name,2000)
    // ul定时器
    var t2=setInterval(name1,2000)
    
}