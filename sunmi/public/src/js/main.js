$(function() {

	// select-box
	$('.select-box button').on('click', function (){
		$(this).parent().next().slideDown();
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

});



