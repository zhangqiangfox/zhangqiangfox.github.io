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
    
    //点击新闻标题列表得到相应的新闻
    $(".nav-btn").bind("click",function(){
        navClick($(this).attr('value'));
    })
    //页面加载得到新闻页面
    function navClick(classfyName){
        $(".con-list").empty();
        $.ajax({
            url:'/select',
            dataType:'json',
            type:'post',
            data:{
                "classfy":classfyName
            },
            success:function(data){
                // console.log(data);
                for(var i=0; i<data.length; i++){

                    var conListMainDiv=$("<div class='con-list-main'></div>");                   
                    var conListMainA=$("<a></a>");
                    conListMainA.attr('href',data[i]['content_url']);
                    conListMainDiv.append(conListMainA);

                    var conListMainImg=$("<div class='list-main-img'></div>");
                    conListMainA.append(conListMainImg);

                    var conListMainImages=$("<img>");
                    conListMainImages.attr('src',data[i]['pic_url']);
                    conListMainImg.append(conListMainImages);

                    var conListMainText=$("<div class='list-main-text'></div>");
                    conListMainA.append(conListMainText);

                    var conListMainTextTitle=$("<div class='list-main-text-title'></div>");
                    conListMainTextTitle.text(data[i].title);
                    conListMainText.append(conListMainTextTitle);

                    var conListMainTextAbs=$("<div class='list-main-text-abs'></div>");
                    conListMainTextAbs.text(data[i]['descrip']);
                    conListMainText.append(conListMainTextAbs);

                    var conListMainBottom=$("<div class='list-main-bottom'></div>");
                    conListMainBottom.text(moment(data[i].time).format('YYYY-MM-DD HH:mm:ss'));
                    conListMainA.append(conListMainBottom);

                    $(".con-list").append(conListMainDiv);


                }
            }
        })
    }
    var modify=$("#recom").attr('value');
    window.onload=navClick(modify);
})
