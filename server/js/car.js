$("#top").load("index.html #top");
		$("header").load("index.html header");
		$("#nav").load("index.html #nav");
		$("footer").load("index.html footer");
		
		class Car{
			constructor(options){
				this.url = options.url;
				this.tbody = options.tbody;
				this.dele = options.dele;
				this.allnum = options.allnum;
				this.allprice = options.allprice;
				this.tab = options.tab;
				this.allcheck = options.allcheck;
				this.Allnum = 0;				
				this.load();
				this.addEvent();
			}
			load(){
				let that = this;
				ajax({
					url:this.url,
					success:function(res){
						that.res = JSON.parse(res);
						that.getCookie()
					}
				})
			}
			getCookie(){
				this.goods = JSON.parse(getCookie("goods"));
				this.display()
			}
			display(){
				let str = []
				for(let i = 0;i<this.res.length;i++){
					for(let j = 0;j<this.goods.length;j++){
						if(this.res[i].goodsId == this.goods[j].id){
							str += `<tr>
										<td><input type="checkbox" class="checkes" name="checks" id="check"  value="" checked /></td>
										<td><img src="${this.res[i].src}"/></td>
										<td>${this.res[i].name}</td>
										<td>¥<span class="myprice">${this.res[i].price}</span></td>
										<td><input type="number" value="${this.goods[j].num}" min = 1 class = "mynum"></td>
										<td><em data-index="${this.res[i].goodsId}">删除</em></td>
									</tr>`
							
						}
					}
				}
				this.tbody.innerHTML = str;
				var cnum = 0;
				var cprice  = 0;
				for(var i=0;i<$(".checkes").length;i++){
						if($(".checkes")[i].checked == true){
							cnum += parseInt($(".mynum")[i].value);
							$("#allnum").html(cnum);
							cprice += ($(".myprice")[i].innerHTML)*($(".mynum")[i].value);
							$("#allprice").html(cprice);
						}
					}
			}
			addEvent(){
			
				let that = this;

				this.tbody.addEventListener("input",function(eve){
					let e = eve || window.event;
					if(e.target.type == "number" && e.target.parentNode.parentNode.children[0].children[0].checked == true){
						that.value = e.target.value;
						that.id = e.target.parentNode.nextElementSibling.children[0].getAttribute("data-index");
					that.changeCookie(function(index){
						that.goods[index].num = that.value;
					})
//					设置总数量
					that.Allnum = 0;
					for(let i=0;i<that.goods.length;i++){
						that.Allnum += parseInt(that.goods[i].num)
					}
					that.allnum.innerHTML = that.Allnum;
                   
					}
				})
				this.dele.addEventListener("click",function(){
					that.tbody.innerHTML = "";
					console.log(that.goods)
					removeCookie(document.cookie) 
				})
				
				
				this.tbody.addEventListener("click",function(eve){
					let e = eve || window.event;
				 	let allprice = 0;
                    for(let i=0;i<that.goods.length;i++){
                    	for(let j=0;j<that.res.length;j++){
                    		if(that.res[j].goodsId == that.goods[i].id){
                    			allprice += parseInt(that.res[j].price*that.goods[i].num)
                    		}
                    	}	
					}
                    
                    that.allprice.innerHTML = allprice;
                    if(e.target.nodeName != "EM"){
                    	
						var anum = 0;
						var aprice = 0;
						for(var i=0;i<$(".checkes").length;i++){
							if($(".checkes")[i].checked == false){
								$("#allcheck")[0].checked = false;
							}
						}
						for(var i=0;i<$(".checkes").length;i++){
							if($(".checkes")[i].checked == true){
								anum += parseInt($(".mynum")[i].value);
								$("#allnum").html(anum);
								aprice += ($(".myprice")[i].innerHTML)*($(".mynum")[i].value);
								$("#allprice").html(aprice);
							}
						}
						if(anum ==0){
							var allcheck = true;
							if(allcheck){
								for(var i=0;i<$(".checkes").length;i++){
	//								if($(".checkes")[i].checked == true){
	//									anum += parseInt($(".mynum")[i].value);
										$("#allnum").html(anum);
	//									aprice += ($(".myprice")[i].innerHTML)*($(".mynum")[i].value);
										$("#allprice").html(aprice);
	//								}
								}
							}
						}
                    }
//					------------------------------
					
					if(e.target.nodeName == "EM"){
						that.id = e.target.getAttribute("data-index");
						e.target.parentNode.parentNode.remove();
						that.changeCookie(function(index){
							that.goods.splice(index,1)
						})
						var dnum = 0;
						var dprice = 0;
						for(var i=0;i<$(".checkes").length;i++){
							if($(".checkes")[i].checked == true){
								dnum += parseInt($(".mynum")[i].value);
								$("#allnum").html(dnum);
								dprice += ($(".myprice")[i].innerHTML)*($(".mynum")[i].value);
								$("#allprice").html(dprice);
							}
						}
					}
				})
				
				$("#allcheck").on("click",function(){
					var bnum = 0;
					var bprice = 0;
					if($("#allcheck")[0].checked == true){						
						for(var i=0;i<$(".checkes").length;i++){
							$(".checkes")[i].checked = true;
						}
					}
					for(var i=0;i<$(".checkes").length;i++){
						if($(".checkes")[i].checked == true){
							bnum += parseInt($(".mynum")[i].value);
							$("#allnum").html(bnum);
							bprice += ($(".myprice")[i].innerHTML)*($(".mynum")[i].value);
							$("#allprice").html(bprice);
						}
					}
				})
					
			}
			
			
			changeCookie(callback){
//				7.找到cookie中符合条件的数据
				for(var i=0;i<this.goods.length;i++){
					if(this.goods[i].id == this.id){
						break;
					}
				}
				callback(i);
				
//				9.再设置回去
//				12.再设置回去
				setCookie("goods",JSON.stringify(this.goods))
			}
		}
		new Car({
			url:"./data/goods.json",
			tbody:document.getElementById("tbody"),
			dele:document.getElementById("dele"),
			allnum:document.getElementById("allnum"),
			allprice:document.getElementById("allprice"),
			tab:document.getElementById("tab"),
			allcheck:document.getElementById("allcheck")
		})