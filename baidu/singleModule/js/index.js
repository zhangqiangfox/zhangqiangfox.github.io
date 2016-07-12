//单例模式
$(function(){
    //导航栏的js样式
	var top={
		init:function(){
			this.render();
			this.bind();
		},
		//放入所有的dom元素
		render:function(){
			var me=this;//this指的是top			
			me.btnMessage=$("#message-btn");//消息设置窗口隐藏于显示按钮
			me.btnSkin=$("#skin");//打开换肤导航栏按钮
			me.btnSkinCancel=$(".skin-nav ul .nav-delete");//收起换肤导航栏按钮
			me.btnWeathe= $("header .nav-left .address");//天气预报隐藏和显示效果
		},
		
		//给不同的dom元素绑定相应的事件
		bind:function(){
			var me=this;//this指的是top			
			me.btnMessage.click(function(){
				me.message();
			})
			me.btnSkin.click(function(){
				me.skin();
			})
			me.btnSkinCancel.click(function(){
				me.skinCancel();
			})
			me.btnWeathe.mouseover(function(){
				me.weathe();
			})
			me.btnWeathe.mouseout(function(){
				me.weatheCancel();
			})		
		},		
		message:function(){
			//消息设置窗口隐藏与显示
			$(".message").toggle();
		},
		skin:function(){
			//打开换肤导航栏
			$(".change-skin").slideDown();
		},
		skinCancel:function(){
			//收起换肤导航栏
			$(".change-skin").slideUp();
		},
		weathe:function(){
			//天气预报显示效果
			$("header .weathe").stop().show();
		},
		weatheCancel:function(){
			//天气预报隐藏效果
			$("header .weathe").stop().hide();
		},		
		
	}

    //中间主体部分的js
	var section={
		init:function(){
			this.render();
			this.bind();
		},
		//放入所有的dom元素
		render:function(){
			var me=this;//this指的是section			
			me.btnAdd=$("#btn");//弹出添加选项菜单按钮
			me.btnAddCancel=$(".inner .inner-top .top-right");//关闭添加菜单按钮
            me.btnColor=$(".inner .inner-top .top-right");//添加菜单的顶部图标颜色的变化
		},
		bind:function(){
			var me=this;//this指的是section
			me.btnAdd.click(function(){
				me.add();
			})
			me.btnAddCancel.click(function(){
				me.addCancel();
			})
            me.btnColor.mouseover(function(){
				me.changeColor();
			})
			me.btnColor.mouseout(function(){
				me.changeClose();
			})
		},
		add:function(){
			//弹出添加选项菜单
			$(".outstyle,.inner").css("display","block");
		},
		addCancel:function(){
			//关闭添加选项菜单
			$(".inner,.outstyle").hide();
		},
		changeColor:function(){
			//添加菜单的顶部图标颜色的变化
			$("#moreProduct").stop().show();
		},
		changeClose:function(){
			//添加菜单的顶部图标颜色的变化
			$("#moreProduct").stop().hide();
		}

	}

    //侧边栏的显示与隐藏
    var aside={
    	init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			var me=this;//this指的是top			
            me.btnProduct=$("header nav .more-product,#moreProduct");//侧边栏隐藏和显示效果
		},
		bind:function(){
			var me=this;//this指的是top
			me.btnProduct.mouseover(function(){
				me.productShow();
			})
			me.btnProduct.mouseout(function(){
				me.productHide();
			})
		},
		productShow:function(){
			//侧边栏显示效果
			$("#moreProduct").stop().show();
		},
		productHide:function(){
			//侧边栏隐藏效果
			$("#moreProduct").stop().hide();
		},
    }

	top.init();
	section.init();
    aside.init();


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
 
})