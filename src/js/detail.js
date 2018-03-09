require(["config"], function(){
	require(["load"], function(){
		$(".ima").mousemove(function(){
			$(".im1").hide()
			$(".im").show()
		})
		$(".imag").mousemove(function(){
			$(".im").hide()
			$(".im1").show()
		})
	
	})
});