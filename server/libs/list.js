		$("#top").load("index.html #top");
		$("header").load("index.html header"); 
		$("footer").load("index.html footer");
		
		window.onload = function(){
	        new Lazy()
	    };	
		class List{
			constructor(options){
//				1.解析参数
				this.cont = options.cont;
				this.url = options.url;
				
//				2.请求数据
				this.load();
				
//				5.绑定事件
				this.addEvent();
			}
			load(){
				var that = this;
				ajax({
					url:this.url,
					success:function(res){
//						3.请求成功之后解析数据,并渲染页面
						that.res = JSON.parse(res)
						that.display()
					}
				})
			}
			display(){
//				4.遍历数据,拼接结构,渲染页面
				var str = "";
				for(var i=0;i<this.res.length;i++){
					str +=`<div class="box" index="${this.res[i].goodsId}">
						<a href="#" class="details"><img class="details" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4207478317,1345614248&fm=15&gp=0.jpg" data-lazy="${this.res[i].src}"/></a>
						<p>${this.res[i].name}</p>
						<p class="goods_id">${this.res[i].goodsId}</p>
						<span>酷爱价：¥<strong class="goods_price">${this.res[i].price}</strong></span>
						<div class="car">
							<a href="#" class = "addcar">加入购物车</a>
							<p class="details">查看商品详情</p>
						</div>
					</div>`
				}
				this.cont.innerHTML = str;
			}
			addEvent(){
				var that = this;
				this.cont.addEventListener("click",function(eve){
					if(eve.target.className == "addcar"){
//						6.被点击时,获取货号,存cookie
						that.id = eve.target.parentNode.parentNode.getAttribute("index");
						that.setCookie()
					}
					if(eve.target.className == "details"){
						that.id = eve.target.parentNode.parentNode.getAttribute("index");
						removeCookie("goods2");
						that.setCookie2()
						window.open("goods.html");
					}
				})
				
				
			}
			setCookie(){
//				因为要使用一条cookie存商品,所以数据选择数组里面放对象[{},{}]
				this.goods = getCookie("goods");
//				情况1:第一次添加
				if(this.goods == ""){
					this.goods = [{
						id:this.id,
						num:1
					}];
				}else{
//					情况2:不是第一次添加
					this.goods = JSON.parse(this.goods);
					
//					新情况1：这次点击的是老数据
					var onoff = true;
					this.goods.forEach((v)=>{
						if(v.id == this.id){
							v.num++
							onoff = false;
						}
					})
					
//					新情况2：这次点击的是新数据
					if(onoff){
						this.goods.push({
							id:this.id,
							num:1
						})
					}
				}
//				所有关于数组的操作结束之后,将数组转成字符再设置到cookie中
				setCookie("goods",JSON.stringify(this.goods))
			}
			
			setCookie2(){
				
//				因为要使用一条cookie存商品,所以数据选择数组里面放对象[{},{}]
				this.goods2 = getCookie("goods2");
//				情况1:第一次添加
				if(this.goods2 == ""){
					this.goods2 = [{
						id:this.id,
						num:1
					}];
				}else{
//					情况2:不是第一次添加
					this.goods2 = JSON.parse(this.goods2);
					
//					新情况1：这次点击的是老数据
					var onoff = true;
					this.goods2.forEach((v)=>{
						if(v.id == this.id){
							v.num++
							onoff = false;
						}
					})
					
//					新情况2：这次点击的是新数据
					if(onoff){
						this.goods2.push({
							id:this.id,
							num:1
						})
					}
				}
				
//				所有关于数组的操作结束之后,将数组转成字符再设置到cookie中
				setCookie("goods2",JSON.stringify(this.goods2))
				console.log(this.goods2)
			}
		}
		
		new List({
			cont:document.getElementById("cont"),
			url:"http://127.0.0.1:8020/%E7%AC%AC%E4%BA%8C%E9%98%B6%E6%AE%B5/gulp/local/data/goods.json"
		})