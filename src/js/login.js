require(["config"], function(){
	require(["load"], function(){
		$(".in1").click(function(){
			$(".ra2").hide()
			$(".ra3").show()
		})
		$(".in2").click(function(){
			$(".ra3").hide()
			$(".ra2").show()
		})
	
	function test_user(text){
		var reg = /[^\d](\w|\d|_){4,20}/
		return reg.test(text)		
	}
	function test_pass(text){
		var reg = /(\w|\d|_){6,32}/i
		return reg.test(text)
	}
	
	$("#txt1").blur(function(){
		if(test_user($("#txt1").val())){
			$("#t1").html("正确")
					}else{
						$("#t1").html("错误")						
					}
	})
	$("#txt2").blur(function(){
		if(test_pass($("#txt2").val())){
			$("#t2").html("正确")	
		}else{
			$("#t2").html("错误")		
		}
	})
	$("#btn").click(function(){
		if(test_user($("#txt1").val()) && test_pass($("#txt2").val())){
					console.log("信息成功")
				}else{
					console.log("登陆错误")
				}
	})
	});
});
	
	