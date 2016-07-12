$(function() {
	//导航条的显示与隐藏
	$(".more-list").click(function(){
		$(".list-hide").show();
		$(".more").hide();
		$(".internet").show();
		$(".down-trange").hide();
		$(this).find("span").removeClass("cur");
		$("table tbody td span").eq(0).addClass("cur");
	});
	$(".less").click(function(){
		$(".list-hide").hide();
		$(".more").show();
		$(".internet").hide();
		$(".down-trange").show();
	});
    $("table tbody td span").each(function(index){
    	$(this).click(function(){
    		$("table tbody td span").removeClass("cur");
    		$(this).addClass("cur");
    	})
    });
    // 图片的轮播
    var i=0;
    var clone=$("#content .pic-list ul li").first().clone();
    $("#content .pic-list ul").append(clone);
    var size=$("#content .pic-list li").size();
    var t=setInterval(moveL,2000);
    function moveL(){
    	i++;
    	if (i==size) {
    		$("#content .pic-list").css({left:0});
    		i=1;
    	};
    	$("#content .pic-list").stop().animate({left:-i*393},500);
    }
    
    var j=0;
    var cl=$(".hot-word .list-img ul li").first().clone();
    $(".hot-word .list-img ul").append(cl);
    var sizeT=$(".hot-word .list-img ul li").size();
    var l=setInterval(moveT,1800);
    function moveT(){
    	j++;
    	if (j==sizeT) {
    		$(".hot-word .list-img ul").css({top:0});
    		j=1;
    	};
    	$(".hot-word .list-img ul").stop().animate({top:-j*30},500);
    }
    
    //页面加载得到推荐页面
    $.ajax({
        // 路径
		url:'../h5/php/h5.php',
		dataType:'json',
		type:'get',
		success:function(data){
			    $(".con-list .con-list-main a").attr("href",data[0].content_url);
			    $(".con-list .con-list-main img").attr("src",data[0].pic_url);
			    $(".con-list .con-list-main .list-main-text-title").text(data[0].title);
			    $(".list-main-text-abs").text(data[0].descrip);
                $(".list-main-bottom").text(data[0].time);    
                for (var i = 1; i < data.length; i++) {
                    var row = $(".con-list-main").first().clone();
                    row.addClass("con-main")
                    row.appendTo(".con-list");
                    row.find("img").attr("src",data[i].pic_url);
                    row.find("a").attr("href",data[i].content_url);
                    row.find(".list-main-text .list-main-text-title").text(data[i].title);
                    row.find(".list-main-text-abs").text(data[i].descrip);
                    row.find(".list-main-bottom").text(data[i].time);                    
                }  
            },
        error:function(){
        	alert("链接错误！")
        }
    })
    // 点击推荐的到该页面
    $("#good").click(function(){
    	$.ajax({
		url:'../h5/php/h5.php',
		dataType:'json',
		type:'get',
		success:function(data){
                $(".con-main").remove();
			    $(".con-list .con-list-main a").attr("href",data[0].content_url);
                $(".con-list .con-list-main img").attr("src",data[0].pic_url);
                $(".con-list .con-list-main .list-main-text-title").text(data[0].title);
                $(".list-main-text-abs").text(data[0].descrip);
                $(".list-main-bottom").text(data[0].time);    
                for (var i = 1; i < data.length; i++) {
                    var row = $(".con-list-main").first().clone();
                    row.addClass("con-main");
                    row.appendTo(".con-list");
                    row.find("img").attr("src",data[i].pic_url);
                    row.find("a").attr("href",data[i].content_url);
                    row.find(".list-main-text .list-main-text-title").text(data[i].title);
                    row.find(".list-main-text-abs").text(data[i].descrip);
                    row.find(".list-main-bottom").text(data[i].time);                    
                }  
            },
        error:function(){
        	alert("链接错误！")
        }
      })
	})
    // 点击百家得到该页面中的新闻内容
    $("#family").click(function(){
    	$.ajax({
		url:'../h5/php/h5-2.php',
		dataType:'json',
		type:'get',
		success:function(data){
                $(".con-main").remove();
			    $(".con-list .con-list-main a").attr("href",data[0].content_url);
                $(".con-list .con-list-main img").attr("src",data[0].pic_url);
                $(".con-list .con-list-main .list-main-text-title").text(data[0].title);
                $(".list-main-text-abs").text(data[0].descrip);
                $(".list-main-bottom").text(data[0].time);    
                for (var i = 1; i < data.length; i++) {
                    var row = $(".con-list-main").first().clone();
                    row.addClass("con-main");
                    row.appendTo(".con-list");
                    row.find("img").attr("src",data[i].pic_url);
                    row.find("a").attr("href",data[i].content_url);
                    row.find(".list-main-text .list-main-text-title").text(data[i].title);
                    row.find(".list-main-text-abs").text(data[i].descrip);
                    row.find(".list-main-bottom").text(data[i].time);                    
                }  
  

            },
        error:function(){
        	alert("链接错误！")
        }
      })
	})

})
