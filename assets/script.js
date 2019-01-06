$(function() {
	$('.nav-link, .back-to-top, .button').click(function() {
		$('html, body').animate(
			{
				scrollTop: $($(this).attr('href')).offset().top
			},
			900
		);
	});
	$('.menu-button').click(function() {
		$('.nav-menu').toggleClass('nav-menu-open');
	});
});
