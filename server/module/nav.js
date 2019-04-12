
class Nav{
	
	constructor(s){
		this.display();		
	}
	display(){
		
		$("#banner7").hover(function(){
			$("#more_hover").css("display","block")
		},function(){
			$("#more_hover").css("display","none")
		})
	
		$("#banner8").hover(function(){
			$("#cooli_allpinp").css("display","block")
		},function(){
			$("#cooli_allpinp").css("display","none")
		})
	}
	
}

//class Parent{
//			constructor(s){
//				this.skill = s
//			}
//			show(){
//				alert(this.skill)
//			}
//		}
