$(window).ready(function(){

	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
	    $('nav .links').css('left', '10%');
		$('.filter .filterlist').css('left', 'calc(50% - 65px)');
		$('.filter .levelfilterlist').css('left', 'calc(50% - 65px)');

		if ((window.matchMedia('(max-height: 540px)').matches) && (window.matchMedia('(min-width: 400px)').matches)) {
			console.log('entered');
			$('.filter .filterlist').css('left', 'calc(50% - 210px)');
			$('.filter .levelfilterlist').css('left', 'calc(50% - 210px)');
			$('.filter .filterlist').css('width', '400px');
			$('.filter .levelfilterlist').css('width', '400px');
			$('.filter .filterlist').css('display', 'grid');
			$('.filter .levelfilterlist').css('display', 'grid');
			$('.filter .filterlist').css('grid-template-columns', '1fr 1fr 1fr 1fr');
			$('.filter .levelfilterlist').css('grid-template-columns', '1fr 1fr 1fr 1fr 1fr');
		}
	}

	//if home page, scroll down slowly. else. just start scrolled down
	if ($(document).find("title").text() === 'D&D Tools') {
		// The home page will scroll down upon the page loading
		// only if width > 800 px
		if ((window.matchMedia('(min-width: 801px)').matches) && (window.matchMedia('(min-height: 581px)').matches)) {
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
		var scroll =$(window).scrollTop();
        if (scroll < 201 && (window.matchMedia('(min-width: 801px)').matches) && (window.matchMedia('(min-height: 581px)').matches)){
            window.scrollBy(0, 201);
        }
    }

	// To override browser's ability to save the scroll position on refresh.
	// This is necessary for the auto scroll to work.
	// If user scrolls past 201, the position is remembered.
	$(window).on('scroll', function() {
		// only if width > 800 px
		if ((window.matchMedia('(min-width: 801px)').matches) && (window.matchMedia('(min-height: 581px)').matches)) {
			var scroll =$(window).scrollTop();
			if (scroll <= 201 || $(document).find("title").text() === 'D&D Tools') {
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
        if ((window.matchMedia('(max-width: 800px)').matches) || (window.matchMedia('(max-height: 580px)').matches)) {
            $('header').css('background-position', '50% 50%');
        }
        else {
            ajustBackground();
        }
	});

	// Call adjust header when scrolling
	$(window).on('scroll', function() {
		// only if width > 800 px
        if ((window.matchMedia('(min-width: 801px)').matches) && (window.matchMedia('(min-height: 581px)').matches)) {
            ajustBackground();
        }
	});

	//show/hide nav on hamburger clicked
	$('.hamburger').on('click', function() {
		if ($('.links').css('display') === 'grid') {
			$('.links').css('display', 'none');
		}
		else {
			$('.links').css('display', 'grid');
		}
	});

	var pageName = $(document).find("title").text();
	if (pageName.indexOf("Races") > 0 || pageName.indexOf("Dragonborn") > 0 || pageName.indexOf("Dwarf") > 0 || pageName.indexOf("Elf") > 0 || pageName.indexOf("Gnome") > 0 || pageName.indexOf("Half-Elf") > 0 || pageName.indexOf("Half-Orc") > 0 || pageName.indexOf("Halfling") > 0 || pageName.indexOf("Human") > 0 || pageName.indexOf("Tiefling") > 0) {
		$(".links a:contains('Races')").css("color", "#141414");
	}
	else if (pageName.indexOf("Classes") > 0 || pageName.indexOf("Barbarian") > 0 || pageName.indexOf("Bard") > 0 || pageName.indexOf("Cleric") > 0 || pageName.indexOf("Druid") > 0 || pageName.indexOf("Fighter") > 0 || pageName.indexOf("Monk") > 0 || pageName.indexOf("Paladin") > 0 || pageName.indexOf("Ranger") > 0 || pageName.indexOf("Rogue") > 0 || pageName.indexOf("Sorceror") > 0 || pageName.indexOf("Warlock") > 0 || pageName.indexOf("Wizard") > 0) {
		$(".links a:contains('Classes')").css("color", "#141414");
	}
	else if (pageName.indexOf("Spells") > 0) {
		$(".links a:contains('Spells')").css("color", "#141414");
	}
	else if (pageName.indexOf("Feats") > 0) {
		$(".links a:contains('Feats')").css("color", "#141414");
	}
	else if (pageName.indexOf("Level Up") > 0) {
		$(".links a:contains('Level Up')").css("color", "#141414");
	}

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
			$(this).find('span').addClass('turn');
		}
		else {
			$(this).next('section').slideUp();
			$(this).find('span').removeClass('turn');
		}
	});
	$('.feats').on('click',' h4', function() {
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

	$(window).on('click', function() {
		$('.filterlist').hide();
		$('.levelfilterlist').hide();
		if ((window.matchMedia('(max-width: 800px)').matches) || (window.matchMedia('(max-height: 580px)').matches)) {
			$('.links').hide();
		 }
	});
	$('.filterlist').on('click', function(event){
	    event.stopPropagation();
	});
	$('.levelfilterlist').on('click', function(event){
	    event.stopPropagation();
	});
	$('.filter').on('click', function(event){
	    event.stopPropagation();
	});
	$('.hamburger').on('click', function(event){
		if ((window.matchMedia('(max-width: 800px)').matches) || (window.matchMedia('(max-height: 580px)').matches)) {
	    event.stopPropagation();
		}
	});
	$('.links').on('click', function(event){
		if ((window.matchMedia('(max-width: 800px)').matches) || (window.matchMedia('(max-height: 580px)').matches)) {
	    event.stopPropagation();
		}
	});

});
