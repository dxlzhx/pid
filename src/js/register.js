require(["config"], function(){
	require(["load"], function(){
		function test_user(text){
		var reg = /[^\d](\w|\d|_){4,20}/
		return reg.test(text)		
	}
	function test_pass(text){
		var reg = /(\w|\d|_){6,32}/i
		return reg.test(text)
	}
	//点击事件 => 判断两个正则同时为true=> 为成功 注册 
	
	$("#txt").blur(function(){
		if(test_user($("#txt").val())){
			$(".mark1").html("正确")
					}else{
						$(".mark1").html("错误")						
					}
	})
	
	$("#txt1").blur(function(){
		if(test_pass($("#txt1").val())){
			$(".mark2").html("正确")	
		}else{
			$(".mark2").html("错误")		
		}
	})
	$("#btn").click(function(){
		if(test_user($("#txt").val()) && test_pass($("#txt1").val())){
					alert("信息成功")
				}else{
					confirm("1")
					alert("登陆错误")

				}
	})
	});
});