
window.onload = function(){
	setTimeout(()=>{
		new Magnifier();
		new Add();
	},1000)
	function Magnifier(){
	//				1.选元素,存属性
					this.sbox = document.querySelector(".img-box");
					this.pbox = this.sbox.children[1];
					this.bbox = document.querySelector(".Magnifier");
					this.bimg = this.bbox.children[0];
					
	//				2.绑定进入离开事件
					this.addEvent();
				}
				Magnifier.prototype.addEvent = function(){
					var that = this;
	//				正在绑定....
					this.sbox.onmouseover = function(){
	//					3-1.显示
						that.show();
					}
					this.sbox.onmouseout = function(){
	//					3-2.隐藏
						that.hide()
					}
				}
				Magnifier.prototype.show = function(){
					this.pbox.style.display = "block";
					this.bbox.style.display = "block";
	//				4.绑定移动事件
					this.addMove()
				}
				Magnifier.prototype.hide = function(){
					this.pbox.style.display = "none";
					this.bbox.style.display = "none";
				}
				Magnifier.prototype.addMove = function(){
					var that = this;
	//				正在绑定....
					this.sbox.onmousemove = function(eve){
						var e = eve || window.event;
	//					5.色块跟随移动,同时计算比例
						that.pBoxMove(e)
					}
				}
				Magnifier.prototype.pBoxMove = function(e){
					this.l = e.offsetX - this.pbox.offsetWidth/2;
					this.t = e.offsetY - this.pbox.offsetHeight/2;
					
					if(this.l < 0) this.l = 0;
					if(this.t < 0) this.t = 0;
	                if(this.l>this.sbox.offsetWidth-this.pbox.offsetWidth){
	                	this.l = this.sbox.offsetWidth-this.pbox.offsetWidth;
	                }
					if(this.t>this.sbox.offsetHeight-this.pbox.offsetHeight){
	                	this.t = this.sbox.offsetHeight-this.pbox.offsetHeight;
	                }
					this.pbox.style.left = this.l + "px";
					this.pbox.style.top = this.t + "px";
					
					this.x = this.l / (this.sbox.offsetWidth - this.pbox.offsetWidth);
					this.y = this.t / (this.sbox.offsetHeight - this.pbox.offsetHeight);
					
	//				6.大图跟据比例移动
					this.move()
				}
				Magnifier.prototype.move = function(){
					this.bimg.style.left = -this.x * (this.bimg.offsetWidth - this.bbox.offsetWidth) + "px";
					this.bimg.style.top = -this.y * (this.bimg.offsetHeight - this.bbox.offsetHeight) + "px";
				}
				new Magnifier()
				
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
	
}
			


