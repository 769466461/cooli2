
	
	class Add{
		constructor(){
			this.oIpt = document.getElementById("iptcount");
			this.oJia = document.querySelector(".jia");
			this.oJian = document.querySelector(".jian");
			this.v = parseInt(this.oIpt.value);
			this.init()
		}
		init(){
			this.jia();
			this.jian();
		}
		jia(){
			var that  = this;
			this.oJia.onclick = function(){
				that.v += 1;
				that.oIpt.value = that.v;
				if(that.oIpt.value >= 10){
					that.oIpt.value = 10;
					that.v = 10;
				}
			}
		}
		jian(){
			var that  = this;
			this.oJian.onclick = function(){
				that.v -= 1;
				that.oIpt.value = that.v;
				if(that.oIpt.value <= 1){
					that.oIpt.value = 1;
					that.v = 1;
				}
			}
		}
	}
	new Add()





