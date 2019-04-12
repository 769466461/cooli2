$("#top").load("index.html #top");
		$("header").load("index.html header");
		$("#nav").load("index.html #nav");
		$("footer").load("index.html footer");
		$(function(){
			$(".count_down").countDown({
				startTimeStr:'2019/4/11 00:00:00',//开始时间
	        	endTimeStr:'2019/4/17 23:59:59',//结束时间
	        	daySelector:".day_num",
	            hourSelector:".hour_num",
	            minSelector:".min_num",
	            secSelector:".sec_num"
			});
		})