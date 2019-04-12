require.config({
	baseUrl:"module",
	paths:{
		"jq":"../libs/jquery.2.2.4",
		"nav":"nav",
		"aside":"aside",
		"user":"user",
		"cookie":"cookie",
		"search":"search",
		"index":"index"
	}
})

require(["jq","nav","aside","user","cookie","search","index"],function(_,nav,aside,user,cookie,search,index){
	
//	var achildUl = $(".box").children("ul").find("ul");
//	
////	console.log(new nav.mynav());?
////	console.log(new tab.mytab());
//	
//	var n = new nav.mynav({
//		achildUl:achildUl
//	});
//	
//	var t = new tab.mytab({
//		ali:n.ali
//	})
    new Nav();
    new IptSearch();

})