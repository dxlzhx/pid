require(["config"], function(){
	require(["load"], function(){
		function test_user(text){
		var reg = /[^\d](\w|\d|_){4,20}/
		return reg.test(text)		
	}
		function test_phone(text){
		var reg = /(\w|\d|_){13}/i
		return reg.test(text)
	}
		function test_mail(text){
		var reg = /(\w|\d|_){5,20}/i
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
		if(test_phone($("#txt2").val())){
			$("#t2").html("正确")	
		}else{
			$("#t2").html("错误")		
		}
	})
	$("#txt3").blur(function(){
		if(test_mail($("#txt2").val())){
			$("#t3").html("正确")	
		}else{
			$("#t3").html("错误")		
		}
	})
	
	
	$("#btn").click(function(){
		if(test_user($("#txt1").val()) && test_phone($("#txt2").val()) && test_mail($("#txt2").val()) ){
					console.log("提交成功")
				}else{
					console.log("提交失败")
				}
	})
	
	
	})
});