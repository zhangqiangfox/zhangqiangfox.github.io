$(function() {

    // 页面切换效果
    $(".section .list li").each(function(index){
        var spanNode=$(this);
        $(this).click(function(){
            $(".section").children("div.importent").removeClass("importent");            
            $(".section .list li.on").removeClass("on");
            $(".section").children("div.block").eq(index).addClass("importent");
            spanNode.addClass("on");           
         });
    });
    // $(".section .list li").on('click',function(){
    //     var spanNode=$(this);
    //     spanNode.addClass("on").siblings().removeClass("on")
    // })

    //天气预报隐藏和显示效果

    $("header .nav-left .address").mouseover(function() {
        $("header .weathe").stop().show();
    }).mouseout(function() {
        $("header .weathe").stop().hide();
    });


    //侧边栏隐藏和显示效果
    $("header nav .more-product,#moreProduct").mouseover(function() {
        $("#moreProduct").stop().show();
    }).mouseout(function() {
        $("#moreProduct").stop().hide();
    });
    

    //弹出添加选项菜单
    $("#btn").click(function(){
    	$(".outstyle,.inner").css("display","block");    	
    });
    
    //添加菜单的顶部图标颜色的变化
    $(".inner .inner-top .top-right").mouseover(function(){
    	$(".inner .inner-top .top-right .top-one,.inner .inner-top .top-right .top-two").css("border","1px solid #38f");
    }).mouseout(function(){
    	$(".inner .inner-top .top-right .top-one,.inner .inner-top .top-right .top-two").css("border","1px solid #999");
    })

    //关闭添加菜单
    $(".inner .inner-top .top-right").click(function(){
    	$(".inner,.outstyle").hide();
    })

    //消息设置窗口隐藏于显示
    $("#message-btn").click(function(){
    	$(".message").toggle();
    });

    //打开、收起换肤导航栏
    $("#skin").click(function(){
    	$(".change-skin").slideDown();
    })
    $(".skin-nav ul .nav-delete").click(function(){
    	$(".change-skin").slideUp();
    });
    
    // 背景图片的切换
    var link_simg = localStorage.getItem("link_h"); //获取link_h的value值
    $("body").css("background","url("+link_simg+")");
    $(".skin-table ul li img").click(function() {
        var simg = $(this).attr("src");       
        $("body").css("background","url("+simg+")");
        localStorage.setItem("link_h", simg);
        });
    //预览效果
    $(".skin-table ul li img").mouseover(function(){
        var simg = $(this).attr("src");
        $(".preview .preview-img").css("background","url("+simg+")");
    }).mouseout(function(){
         $(".preview .preview-img").css("background","");
    })


});
