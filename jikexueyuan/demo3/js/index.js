define(['require', 'index'], function(require) {
    var index = {};
    index = {
            //下拉导航栏定义函数
            init: function() {

                //下拉导航栏的显示与隐藏
                $(".nav .list-left,.nav-down").mouseover(function() {
                    $(".nav-down").stop().show();
                }).mouseout(function() {
                    $(".nav-down").stop().hide();
                });

                //下拉导航栏的背景颜色的改变
                $("nav .nav .list-left li").each(function(index) {
                    $(this).mouseover(function() {
                        $("nav .nav-down").children("ul.foucs").removeClass("foucs");
                        if (index == 0) {
                            index == null;
                        } else {
                            $("nav .nav-down").children("ul").eq(index - 1).addClass("foucs");
                        }
                    }).mouseout(function() {
                        $("nav .nav-down").children("ul.foucs").removeClass("foucs");
                    });
                });
            }, //init函数结束

            //左侧导航栏定义函数
            list: function() {
                  $(".con .con-nav ul>li").each(function(index){
                    $(this).mouseover(function(){
                        $(".con .con-nav ul>li div.nav-aside").eq(index).stop().show();
                        var top=-((index+1)*38+1);
                         $(".con .con-nav ul>li div.nav-aside").css({marginTop:top})
                    }).mouseout(function(){
                        $(".con .con-nav ul>li div.nav-aside").stop().hide();
                    })
                  })
               
            }, //list函数结束

            // 中心图片轮播定义函数
            pic: function() {
                //手动控制轮播
                $(".img li").eq(0).show();
                $(".num li").eq(0).addClass("active")
                $(".num li").mouseover(function() {
                    $(this).addClass("active").siblings().removeClass("active"); //siblings()筛选同辈其他元素，得到一个数组
                    var index = $(this).index(); //index()得到索引值
                    i = index;
                    $(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300); //eq()过滤，得到第N个元素
                })

                //自动控制轮播
                var i = 0;
                var t = setInterval(move, 1500);

                //定时器的开始于结束
                $(".pic").hover(function() {
                    clearInterval(t);
                }, function() {
                    t = setInterval(move, 1500);
                });

                //核心向右运动的函数
                function move() {
                    i++;
                    if (i == 4) {
                        i = 0;
                    };
                    $(".num li").eq(i).addClass("active").siblings().removeClass("active");
                    $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
                };
                //核心向左运动的函数
                function moveL() {
                    i--;
                    if (i == -1) {
                        i = 3;
                    };
                    $(".num li").eq(i).addClass("active").siblings().removeClass("active");
                    $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
                };

                //两边按钮的点击事件
                $(".pic .right").click(function() { move() });
                $(".pic .left").click(function() { moveL() });
            }, //pic函数结束

            // 中间热门推荐等导航栏的实现
            hot: function() {
                $(".hot .hot-content ul li").each(function(index) {
                    // 图片的拉伸
                    $(this).mouseover(function() {
                        $(".hot .hot-content .lesson-infor").eq(index).css("height", "170px");
                        $(".hot .hot-content .lesson-infor p").eq(index).css("display", "block");
                        $(".hot .hot-content .lesson-infor .lesson-instr .icon-p").eq(index).css("top", "150px");
                        $(".hot .hot-content .lesson-infor .lesson-instr .p-num").eq(index).css("display", "block");
                    }).mouseout(function() {
                        $(".hot .hot-content .lesson-infor").eq(index).css("height", "88px");
                        $(".hot .hot-content .lesson-infor p").eq(index).css("display", "none");
                        $(".hot .hot-content .lesson-infor .lesson-instr .icon-p").eq(index).css("top", "55px");
                        $(".hot .hot-content .lesson-infor .lesson-instr .p-num").eq(index).css("display", "none");
                    });

                });
                // 导航条与对应项目的改变
                $(".hot .hot-nav ul li").each(function(index) {
                    $(this).mouseover(function() {
                        $(this).addClass("on").siblings().removeClass("on");
                        $(this).addClass("on");
                        $(".hot").children("div.hot-hide").removeClass("hot-hide");
                        $(".hot").children("div").eq(index + 1).addClass("hot-hide");
                    })
                })
            }, //hot函数结束

            learn: function() {
                $(".learn .learn-list a").each(function(index) {
                    $(this).mouseover(function() {
                        $(this).addClass("b-color").siblings().removeClass("b-color");
                        $(this).addClass("b-color");
                        $("button").addClass("greenbtn").removeClass("greenbtn");
                        $(this).children("button").addClass("greenbtn");
                    }).mouseout(function() {
                        $("button").addClass("greenbtn").removeClass("greenbtn");
                        $(this).addClass("b-color").removeClass("b-color")
                    });
                });
                $(".konw .konw-list div.transform").each(function(index) {
                    $(this).mouseover(function() {
                        $(".konw .konw-list div.transform .font").eq(index).css("transform", "rotateY(90deg)")
                    }).mouseout(function() {
                        $(".konw .konw-list div.transform .font").eq(index).css("transform", "rotateY(0deg)")
                    });
                });

                //精品系列课程
                $(".subject .subject-list div.sub-l").each(function(index){
                    $(this).mouseover(function(){
                        $(".subject .subject-list div.sub-back").eq(index).stop().show()
                    }).mouseout(function(){
                        $(".subject .subject-list div.sub-back").eq(index).stop().hide()
                    });
                });
                //wiki中看一看的显示与隐藏
                $(".wiki a.wiki-link").each(function(index){
                    $(this).mouseover(function(){
                        $(".wiki span.wiki-look").eq(index).stop().show()
                    }).mouseout(function(){
                        $(".wiki span.wiki-look").eq(index).stop().hide()
                    })
                })
         
            },

            // 底部合作图片手动轮播
            scrol: function() {
                var i = 0;
                var clone = $(".job .job-list .pic-list a").first().clone(); //在最后复制第一张图片
                $(".job .job-list .pic-list").append(clone); //在最后粘贴
                var size = $(".job .job-list .pic-list a").size(); //获取数量

                //向左
                $(".job .job-lbtn").click(function() {
                    i++;
                    if (i == size - 5) {
                        // i=0;
                        $(".job .job-list .pic-list").css({ left: 0 });
                        i = 1;
                    };
                    $(".job .job-list .pic-list").stop().animate({ left: -i * 159.667 }, 500)
                });
                // 向右
                $(".job .job-rbtn").click(function() {
                    i--;
                    if (i == -1) {
                        // i=size-1
                        $(".job .job-list .pic-list").css({ left: -(size - 1) * 159.667 });
                        i = size - 6;

                    };
                    $(".job .job-list .pic-list").stop().animate({ left: -i * 159.667 }, 500)
                });
                // 底部院校合作图片手动轮播
                var j=0;
                var clonel = $(".school .school-list .pic-list a").first().clone(); //在最后复制第一张图片
                $(".school .school-list .pic-list").append(clonel); //在最后粘贴
                var sizel = $(".school .school-list .pic-list a").size(); //获取数量

                //向左
                $(".school .school-lbtn").click(function() {
                    j++;
                    if (j == sizel - 6) {
                        // i=0;
                        $(".school .school-list .pic-list").css({ left: 0 });
                        j = 1;
                    };
                    $(".school .school-list .pic-list").stop().animate({ left: -j * 136.857 }, 500)
                });
                // 向右
                $(".school .school-rbtn").click(function() {
                    j--;
                    if (j == -1) {
                        // i=size-1
                        $(".school .school-list .pic-list").css({ left: -(sizel - 1) * 136.857 });
                        j = sizel - 8;

                    };
                    $(".school .school-list .pic-list").stop().animate({ left: -j * 136.857 }, 500)
                });

              // 底部媒体报道图片手动轮播
                var k=0;
                var clonek = $(".video .video-list .pic-list a").first().clone(); //在最后复制第一张图片
                $(".video .video-list .pic-list").append(clonek); //在最后粘贴
                var sizek = $(".video .video-list .pic-list a").size(); //获取数量

                //向左
                $(".video .video-lbtn").click(function() {
                    k++;
                    if (k == sizek - 5) {
                        // i=0;
                        $(".video .video-list .pic-list").css({ left: 0 });
                        k = 1;
                    };
                    $(".video .video-list .pic-list").stop().animate({ left: -k * 159.667 }, 500)
                });
                // 向右
                $(".video .video-rbtn").click(function() {
                    k--;
                    if (k == -1) {
                        // i=size-1
                        $(".video .video-list .pic-list").css({ left: -(sizek - 1) * 159.667 });
                        k = sizek - 6;

                    };
                    $(".video .video-list .pic-list").stop().animate({ left: -k * 159.667 }, 500)
                }); 


            }

        } //index对象结束
    return index;
});
