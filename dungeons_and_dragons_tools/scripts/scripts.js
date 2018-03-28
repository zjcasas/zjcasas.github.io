$(window).ready(function(){

	//if home page, scroll down slowly. else. just start scrolled down
	if ( $(document).find("title").text() === 'D&D Tools') {
		// The home page will scroll down upon the page loading
		// only if width > 800 px
		var width = $(window).width();
		if (width > 778) {
			var page = $("html, body");
			page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
				page.stop();
			});
			page.animate({scrollTop: "201px"}, 2500, 'swing', function(){
				page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
			});
		}
	}
    else {
        //all pages except the home page will load already scrolled
        var width = $(window).width();
        var scroll =$(window).scrollTop();
        if (scroll < 201 && width > 778){
            window.scrollBy(0, 201);
        }
    }

	// To override browser's ability to save the scroll position on refresh.
	// This is necessary for the auto scroll to work.
	// If user scrolls past 201, the position is remembered.
	$(window).on('scroll', function() {
		// only if width > 800 px
		var width = $(window).width();
		if (width > 778) {
			var scroll =$(window).scrollTop();
			if (scroll <= 201) {
				if ('scrollRestoration' in history) {
					history.scrollRestoration = 'manual';
				}
			}
			else {
				if ('scrollRestoration' in history) {
					history.scrollRestoration = 'auto';
				}
			}
		}
	});

	// This function is for adjusting the positioning of the header background
    // image
    function ajustBackground() {
        var newScroll =$(window).scrollTop();
        if (newScroll <= 200 && newScroll >= 90) {
            $('header').css('background-position', '50% ' + 'calc(50% + ' + (newScroll - 90) + 'px)');
        }
        else if (newScroll < 90){
            $('header').css('background-position', '50% 50%');
        }
        else {
            $('header').css('background-position', '50% calc(50% + 110px');
        }
    }

	// when resizing window, adjust header background
    $(window).on('resize', function(){
        var width = $(window).width();
        if (width <= 778) {
            $('header').css('background-position', '50% 50%');
        }
        else {
            ajustBackground();
        }
	});

	// Call adjust header when scrolling
	$(window).on ('scroll', function() {
		// only if width > 800 px
		// why is it 778? I've seen this before
        var width = $(window).width();
        if (width > 778) {
            ajustBackground();
        }
	});

	//show/hide nav on hamburger clicked
	$('.hamburger').on('click', function() {
		if ($('.links').css('display') === 'block') {
			$('.links').css('display', 'none');
		}
		else {
			$('.links').css('display', 'block');
		}
	});

	// The next 4 click functions are for showing and hiding information when
	// headers are clicked on the Races, Classes, and Spells pages
	$('.details h4').on('click', function() {
		var shown = $(this).next('section').css('display');
		if (shown === "none") {
			$(this).next('section').slideDown();
			$(this).find('span').addClass('turn');
		}
		else {
			$(this).next('section').slideUp();
			$(this).find('span').removeClass('turn');
		}
	});
	$('.details h5').on('click', function() {
		var shown = $(this).next('section').css('display');
		if (shown === "none") {
			$(this).next('section').slideDown();
			$(this).next('.levelFeatures').css('display', 'grid');
			$(this).find('span').addClass('turn');
		}
		else {
			$(this).next('section').slideUp();
			$(this).find('span').removeClass('turn');
		}
	});
	$('.spells').on('click',' h4', function() {
		var shown = $(this).next('section').css('display');
		if (shown === "none") {
			$(this).next('section').slideDown();
			$(this).next('.levelFeatures').css('display', 'grid');
			$(this).find('span').addClass('turn');
		}
		else {
			$(this).next('section').slideUp();
			$(this).find('span').removeClass('turn');
		}
	});
	$('.feats h4').on('click', function() {
		var shown = $(this).next('section').css('display');
		if (shown === "none") {
			$(this).next('section').slideDown();
			$(this).next('.levelFeatures').css('display', 'grid');
			$(this).find('span').addClass('turn');
		}
		else {
			$(this).next('section').slideUp();
			$(this).find('span').removeClass('turn');
		}
	});
	$('.levels h4').on('click', function() {
		var shown = $(this).next('section').css('display');
		if (shown === "none") {
			$(this).next('section').slideDown();
			$(this).find('span').addClass('turn');
		}
		else {
			$(this).next('section').slideUp();
			$(this).find('span').removeClass('turn');
		}
	});

	$('#collapse').on('click', function(){
		$('h4').next('section').slideUp();
		$('h4').find('span').removeClass('turn');
	});
	$('#expand').on('click', function(){
		$('h4').next('section').slideDown();
		$('h4').find('span').addClass('turn');
	});

	// this click function displays the filter options for each filter
	$('.filter').on('click', function() {
		var shown = $(this).find('.filterlist').css('display');
		if (shown === "none") {
			$('.levels .filterlist').css('display', 'grid');
			$('.filterlist').hide();
			$('.levelfilterlist').hide();
			$(this).find('.filterlist').show();
			$('.levels .filterlist').css('display', 'grid');
		}
		else {
			$(this).find('.filterlist').hide();
		}
	});
	$('.filterlist div ').on('click', function() {
		$(this).parent().hide();
	});
	// this click function is different than the previous because I didn't want
	// the filter options for Levels to hide after the user selected one because
	// there is the option to select more than one level.
	$('.filter span:contains("Level")').on('click', function() {
		var shown = $('.levelfilterlist').css('display');
		if (shown === "none") {
			$('.filterlist').hide();
			$('.levelfilterlist').show();
		}
		else {
			$('.levelfilterlist').hide();
		}
	});

	$(window).click(function() {
		$('.filterlist').hide();
		$('.levelfilterlist').hide();
		var width = $(window).width();
		if (width <=778) {
			$('.links').hide();
		}
	});
	$('.filterlist').click(function(event){
	    event.stopPropagation();
	});
	$('.levelfilterlist').click(function(event){
	    event.stopPropagation();
	});
	$('.filter').click(function(event){
	    event.stopPropagation();
	});
	$('.hamburger').click(function(event){
		var width = $(window).width();
		if (width <=778) {
	    event.stopPropagation();
		}
	});
	$('.links').click(function(event){
		var width = $(window).width();
		if (width <=778) {
	    event.stopPropagation();
		}
	});

});
