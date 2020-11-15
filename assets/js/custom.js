// custom js

$(window).scroll(function(){
	if($(this).scrollTop()>5) {
		$(".cn-stick-nav").addClass("navbar navbar-expand-lg navbar-dark fixed-top");
	}

	else {
		$(".cn-stick-nav").removeClass("navbar navbar-expand-lg navbar-dark fixed-top");
	}
});

// 

$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>5) {
			$('.navbar .navbar-brand img').attr("src","assets/img/logo.png");
		}

		else {
			$('.navbar .navbar-brand img').attr("src","assets/img/logo-white.png");
		}
	});
});