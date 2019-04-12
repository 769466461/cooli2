
class IptSearch{
	constructor(){
		this.init();
		this.display();
	}
	init(){
		$("#list").on("click","li",function(event){
			var target = $(event.target);
			$("#iptSearch").val(target.html());
		})
	}
	display(){
		$(document).on("click",function(){
			$("#list li").remove();
		})
	}
}

