$(function() {

  $(window).on("load",function(){
  	 imgLocation(); 
     var dateImg={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"}]}
     window.onscroll=function(){
        if (scrollside()) {
        	$.each(dateImg.data,function(index,value){
        		var box=$("<div>").addClass("box").appendTo($("#container"));
        		var content=$("<div>").addClass("content").appendTo(box);
        		$("<img>").attr("src","./images/"+$(value).attr("src")).appendTo(content);
        	});
              imgLocation();
        };
     };
  });
  $(window).on("resize",function(){
  	 imgLocation(); 
  })
});
//滚动加载
function scrollside(){
	var box=$(".box");
	var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentHeight=$(document).height();
	var scrollHeight=$(window).scrollTop();
	return(lastboxHeight<scrollHeight+documentHeight)?true:false;
}
function imgLocation(){
	var box=$(".box");
	var boxWidth=box.eq(0).width();//获得图片盒子的宽度，宽度都相同
	var num=Math.floor($(window).width()/boxWidth);//获取屏幕的宽度并且除以图片的宽度得到每行图片的个数
	// console.log(boxWidth);
	var boxArr=[];
	box.each(function(index,value){//value是html中的相对应index的div对象
		value.style.cssText="";
		var boxHeight=box.eq(index).height();//获得图片的高度
		if (index<num) {
			boxArr[index]=boxHeight;//将图片的高度传入数组
		}else{
			var minboxHeight=Math.min.apply(null,boxArr);//获取数组中图片的最小高度
			var minboxIndex=$.inArray(minboxHeight,boxArr);//获取数组中图片的最小高度的位置
			$(value).css({ //定位下一行图片在最小高度图片下方
				"position":"absolute",
				"top":minboxHeight,
				"left":box.eq(minboxIndex).position().left
			});
			boxArr[minboxIndex]+=box.eq(index).height();//重新计入最小高度
		}
	})
}