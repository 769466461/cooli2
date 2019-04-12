$("aside .aside").children("li").click(function(){
			
			
//			拿到索引,计算选择器的数字
			var index = $(this).index();
			
//			根据选择器选择到标签,获取距离顶部的位置
			var t = ($(".title1").position().top + (($(".c1").get(0).offsetHeight)+($(".title1").get(0).offsetHeight))*index)
//			设置动画
			$("html").animate({
				scrollTop:t
			})
			
		})
