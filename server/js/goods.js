class Goods{
			constructor(options){
//				1.解析参数
				this.box = options.box;
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
						that.res = JSON.parse(res);
//						3.获取cookie
						that.getCookie();
					}
				})
			}
			getCookie(){
//				获取cookie
				this.goods = JSON.parse(getCookie("goods2"));
//				4.渲染页面
				this.display()
			}
			display(){
				this.box.innerHTML = ""
				var str = "";
//				比对cookie和总数据
				for(var i=0;i<this.res.length;i++){
					for(var j=0;j<this.goods.length;j++){
						if(this.res[i].goodsId == this.goods[j].id){
							str = `<div class="goods-main">
									    	<div class="g-m-l">
										    		<img class="Mimg3" src="${this.res[i].src}"/>
									    		<div class="img-box">
										    		<img class="Mimg1" src="${this.res[i].src}"/>
										    		<span></span>
													<p></p>
									    		</div>
									    		<div class="Magnifier">
									    			<img class="Mimg2" src="${this.res[i].src}"/>
									    		</div>
									    	</div>
									    	
									    	
									    	<div class="g-m-r">
									    		<div class="bigcomm_intro showProdut">
									                    <div class="saleouter">
									                        <p>货 号：<span>${this.res[i].name}</span>   </p>
									                        <p>酷 爱 价：<span id="itemPriceDSpan">¥${this.res[i].price}<a href="#"><font color="#005aa0">(降价通知)</font></a></span></p>                        
									                        <div id="SaleListDiv"></div>
									                        <p>
									                            品 牌：<a href="#" style="text-decoration: none; color: #0066FF">耐克 Nike</a>
									                            分类：<a href="#">男鞋</a>
									                        </p>
									                        <p>销 量：<em id="itemSaleQty" style="">1536 件</em></p>
									                    </div>
									                    <div style="background: none" class="saleouter info">
									                        <div class="clear"></div>
									                        <div class="buyBox yh_show_"><div class="count"><label>我&nbsp;&nbsp;要&nbsp;&nbsp;买：</label><a href="javascript:;" control="-" class="jian"></a><input type="text" value="1" id="iptcount" min="1"><a href="#;" control="+" class="jia"></a> 件</div><div class="buyBtn"><a href="#" class="add_cart_action"></a></div></div>
									                    </div>
									                </div>
									    	</div>
									    </div>`
									    
							$('.img3').attr('src',this.res[i].src)		    
						}
					}
				}
				
				this.box.innerHTML = str;
			}
			addEvent(){
				var that = this;
			}
			changeCookie(callback){
//				7.找到cookie中符合条件的数据
				for(var i=0;i<this.goods2.length;i++){
					if(this.goods[i].id == this.id){
						break;
					}
				}
				
				callback(i);
				
//				9.再设置回去
//				12.再设置回去
				setCookie("goods2",JSON.stringify(this.goods))
			}
		}
		
//		new Goods({
//			url:"./data/goods.json",
//			box:document.getElementById("goods_box"),
//		})
		$("#top").load("index.html #top");
		$("header").load("index.html header");
		$("#nav").load("index.html #nav");
		$("footer").load("index.html footer");
		
//		console.log($(".img3")[0].src)
//		$(".img3").attr('src',$(".Mimg3")[0].src); 
//		$(".img3")[0].src = "${this.res[i].src}";
		
		$("#img1").on("click",function(){
			$(".Mimg1")[0].src = $("#img1")[0].src;
			$(".Mimg2")[0].src = $("#img1")[0].src;
		})
		$("#img2").on("click",function(){
			$(".Mimg1")[0].src = $("#img2")[0].src;
			$(".Mimg2")[0].src = $("#img2")[0].src;
		})
//		console.log($(".Mimg3")[0].src;) 
		$(".img3").on("click",function(){
			$(".Mimg1")[0].src = $(".Mimg3")[0].src;
			$(".Mimg2")[0].src = $(".Mimg3")[0].src;
		})