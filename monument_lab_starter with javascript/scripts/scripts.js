$(document).ready(function(){
	//show and hide nav links when hamburger is clicked
	$('.hamburger').click(function() {
		var shown = $('.links').css('display')
		if (shown == 'none') {
			$('.links').css('display', 'block');
		}
		else {
			$('.links').css('display', 'none');
		}
	});
	//hide nav links when a link is clicked when hamburger is currently displayed
	$('.links').click(function() {
		var shown = $('.links').css('display')
		if (shown == 'block') {
			$('.links').css('display', 'none');
		}
	});

	// format nav based on screen width. This replaces the media query from the actual assignment
	(function($) {
		formatNav = function() {
			var width =$(document).width();
			if (width > 783) { // I think these are 783 and not 800 because the scrollbar is 17px wide
				$('nav').css('padding', '15px');
				$('.hamburger').css('display', 'none');
				$('.links').css('display', 'inline');
				$('.links').css('display', ' 50px');
				$('.links').css('padding', '0');
				$('.links').css('margin', '50px');
			}
			if (width <= 783) {
				$('nav').css('height', '49px');
				$('nav').css('padding', '10px 0');
				$('.hamburger').css('display', 'block');
				$('.links').css('display', 'none');
				$('.links').css('margin', '0');
				$('.links').css('padding', '20px');
				$('.links').css('width', '100%');
				$('.links').css('padding', '20px');
				$('.links').css('width', '100%');
				$('.links').css('text-align', 'right');
			}
		}
	})(jQuery);

	//call formatNav when the window is resized
	$(window).on('resize', function(){
		formatNav();
	});
});
