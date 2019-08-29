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

	$('.btn-menu').on('click', function(){
		$('body').addClass('dim');
		$('.mobile-nav').animate({'top': 0}, 500);
		$('html').addClass('nav-open');
	});
	$('.mobile-nav .close, .mobile-nav a').on('click', function(){
		$('body').removeClass('dim');
		$('.mobile-nav').animate({'top': '-100%'}, 500);
		$('html').removeClass('nav-open');
	});

	$(window).on('scroll', function(){
		// console.log('z')
		var scroll = $(window).scrollTop();
		if (scroll >= 30) {
			$('#p-wrapper').addClass('hidden');
		} else if(scroll <= 30) {
			$('#p-wrapper').removeClass('hidden');
		}
	});

	

});



