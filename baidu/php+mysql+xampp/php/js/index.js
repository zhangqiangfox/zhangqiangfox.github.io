$(function () {
	// 添加按钮的显示与隐藏
	$("#bttn").click(function(){
		$(".add").toggle();
    $("body").css("background-color","#ddd")
	});
    //推荐中的新闻内容
		$.ajax({
		url:'../h5/php/h5.php',
		type:'get',
        dataType:'json',
        success:function(data){
          for (var i = 0; i < data.length; i++) {
                    var row = $("#tr").first().clone();
                    row.addClass("tr");
                    row.appendTo("table");
                    var idd=data[i].id;
                    row.find(".td-1").text(data[i].id);
                    row.find(".td-2").text(data[i].title);
                    row.find(".td-3").text(data[i].descrip);
                    row.find(".td-4").text(data[i].time);
                    row.find(".td-5").html("<a href='' class='update'>修改</a> <a href='' class='dele'>删除</a>"); 
                    row.find(".dele").attr("href","phpnews/delete.php?id="+idd);
                    row.find(".update").attr("href","phpnews/edituser.php?id="+idd)                
                }    
        },
        error:function(){
        	alert("加载失败！")
        }
	})
    //点击得到百家中的新闻内容
        $("#family").click(function(){
        	$.ajax({
		        url:'../h5/php/h5-2.php',
		        type:'get',
                dataType:'json',
                success:function(data){
            	   $(".tr").remove();
            	   $(".add form").attr("action","phpnews/adduser2.php")
            	   for (var i = 0;i<data.length ; i++) {
            	   	   var row = $("#tr").first().clone();
                       row.addClass("tr");
                       row.appendTo("table");
                       var idd=data[i].id;
                       row.find(".td-1").text(data[i].id);
                       row.find(".td-2").text(data[i].title);
                       row.find(".td-3").text(data[i].descrip);
                       row.find(".td-4").text(data[i].time);
                       row.find(".td-5").html("<a href='' class='update'>修改</a> <a href='' class='dele'>删除</a>"); 
                       row.find(".dele").attr("href","phpnews/delete2.php?id="+idd);
                       row.find(".update").attr("href","phpnews/edituser2.php?id="+idd)
            	   }
            },
            error:function(){
        	    alert("加载失败！");
            }
	     })
    })
	//点击得到推荐中的新闻内容
	$("#select").click(function(){
        	$.ajax({
		        url:'../h5/php/h5.php',
		        type:'get',
                dataType:'json',
                success:function(data){
            	    $(".tr").remove();
            	   $(".add form").attr("action","phpnews/adduser.php")
            	   for (var i = 0;i<data.length ; i++) {
            	   	   var row = $("#tr").first().clone();
                       row.addClass("tr");
                       row.appendTo("table");
                       var idd=data[i].id;
                       row.find(".td-1").text(data[i].id);
                       row.find(".td-2").text(data[i].title);
                       row.find(".td-3").text(data[i].descrip);
                       row.find(".td-4").text(data[i].time);
                       row.find(".td-5").html("<a href='' class='update'>修改</a> <a href='' class='dele'>删除</a>"); 
                     
                       row.find(".dele").attr("href","phpnews/delete.php?id="+idd);
                       row.find(".update").attr("href","phpnews/edituser.php?id="+idd)
            	   }
            },
            error:function(){
        	    alert("加载失败！");
            }
	     })
    })

  
})