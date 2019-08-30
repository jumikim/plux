$(function() {

	// select-box
	$('.select-box button').on('click', function (){
		if(!$(this).hasClass('open')){
			$(this).addClass('open');
			$(this).parent().next().slideDown();
		} else {
			$(this).removeClass('open');
			$(this).parent().next().slideUp();
		}
	});
	$('.select-box li a').on('click', function (){
		$(this).parent().parent().slideUp();
	});

	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();
		var screenHalf = $(document).height() / 2;
		console.log(scroll, screenHalf)
		if (scroll >= 30) {
			$('#p-wrapper').addClass('hidden');
		} else if(scroll <= 30) {
			$('#p-wrapper').removeClass('hidden');
		}

		if(scroll >= screenHalf){
			$('.join-box').addClass('floating');
		} else if (scroll <= screenHalf){
			$('.join-box').removeClass('floating');
		}
	});

	// top button
	$('.top').on('click', function(){
		$('html, body').animate({scrollTop : 0}, 400);
	});

	

});



