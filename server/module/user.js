class User{
	constructor(){		
		this.init()
	}
	
	init(){
		function getcookie() {
		  //获取传递过来的localStorage
		  console.log(window.localStorage.getItem('user'))
		}	
	}
}

new User()
