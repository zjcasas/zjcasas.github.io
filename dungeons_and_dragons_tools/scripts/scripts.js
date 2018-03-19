$(window).ready(function(){

	// This function is for adjusting the positioning of the header background
	// image so that the image stays with the header text as the user scrolls
	$(window).on ('scroll', function() {
		var newScroll =$(window).scrollTop();

		if (newScroll <= 200 && newScroll >= 90) {
			$('header').css('background-position', '50% ' + 'calc(50% + ' + (newScroll - 90) + 'px)');
		}
		else if (newScroll < 90){
			$('header').css('background-position', '50% 50%');
		}
		else {
			$('header').css('background-position', '50% calc( 50% + 110px');
		}
	});

	// This function is for calculating all of the dice rolling math
	$('button[name="roll"]').on('click', function() {
		var typeDice = parseInt($('select[name="typeDice"]').val().replace("d", ""));
		// sets default number of dice to 1 if the user doesn't select anything
		var numDice = $('input[name="numDice"]').val();
		if (numDice.length === 0) {
			numDice = 1;
			$('input[name="numDice"]').val('1');
		}
		numDice= parseInt(numDice);
		// sets the default mod to +0 if the user doesn't select anything
		var modNum = $('input[name="modNum"]').val();
		if (modNum.length === 0) {
			modNum = 0;
			$('input[name="modNum"]').val('+0');
		}
		modNum= parseInt(modNum);
		// random numbers for each dice roll
		var rolls = [];
		for (i = 0; i < numDice; i++) {
			var roll = Math.ceil(Math.random() * typeDice);
			rolls.push(roll);
		}
		// definition of rules.
		var modrolls;
		var rule = $('select[name="rule"]').val();
		// first rule selects the highest roll and adds the modifier
		if (rule === "adv") {
			max = Math.max.apply(Math, rolls);
			modrolls = max + modNum;
		}
		// second rule selects the lowest roll and adds the modifier
		else if (rule === "dis") {
			var min = Math.min.apply(Math, rolls);
			modrolls = min + modNum;
		}
		// third rule drops the lowest roll, adds the rest and adds the modifier
		else if (rule === "drop") {
			var min = Math.min.apply(Math, rolls);
			rolls.splice($.inArray(min, rolls), 1);
			var rollstotal = 0;
			for (i = 0; i < rolls.length; i++) {
				rollstotal = rollstotal + rolls[i];
			}
			modrolls = rollstotal + modNum;
		}
		// default rule is None and just adds all of the rolls and modifier
		// Also sets the rule to None if the user doesn't select anything
		else {
			$('select[name="rule"]').val('none');
			var rollstotal = 0;
			for (i = 0; i < rolls.length; i++) {
				rollstotal = rollstotal + rolls[i];
			}
			modrolls = rollstotal + modNum;
		}

		var rollsspace = rolls.join(', ');
		$('#rolls').text('Rolls: ' + rollsspace);

		// sets the lowest roll possible to 1
		if (modrolls < 1){
			modrolls = 1;
		}

		$('#rollTotal').text('Roll Total: ' + modrolls);
	});

	// adds a "+" sign to all positive (and 0) modifier values
	$('input[name="modNum"]').blur(function() {
		var modNum = $(this).val();
		var hasPlus = modNum.indexOf('+');
		if (modNum.length === 0) {
		}
		else if (!isFinite(modNum)) {
			$(this).val('');
		}
		else if (modNum >= 0 && hasPlus < 0) {
			$(this).val('+' + modNum);
		}
	});

	// created my own up and down buttons for the number of dice and modifier
	// number so that I could have the "+" sign since the input type "number"
	// only allows numbers and the "-" sign
	$('#diceUp').on('click', function() {
		var numDice = $('input[name="numDice"]').val();
		if (numDice.length === 0) {
			$('input[name="numDice"]').val('1');
		}
		else {
			numDice = parseInt(numDice) + 1;
			$('input[name="numDice"]').val(numDice);
		}
	});
	$('#diceDown').on('click', function() {
		var numDice = $('input[name="numDice"]').val();
		if (numDice.length === 0) {
		}
		else if (numDice > 1){
			numDice = parseInt(numDice) - 1;
			$('input[name="numDice"]').val(numDice);
		}
	});
	$('#modUp').on('click', function() {
		var modNum = $('input[name="modNum"]').val();
		var hasMinus = modNum.indexOf('-');
		if (modNum.length === 0) {
			$('input[name="modNum"]').val('+1');
		}
		else if (hasMinus >= 0 && modNum < -1){
			modNum = parseInt(modNum) + 1;
			$('input[name="modNum"]').val(modNum);
		}
		else {
			modNum = parseInt(modNum) + 1;
			$('input[name="modNum"]').val('+' + modNum);
		}
	});
	$('#modDown').on('click', function() {
		var modNum = $('input[name="modNum"]').val();
		if (modNum.length === 0) {
			$('input[name="modNum"]').val('-1');
		}
		else if (modNum > 0 ){
			modNum = parseInt(modNum) - 1;
			$('input[name="modNum"]').val('+' + modNum);
		}
		else {
			modNum = parseInt(modNum) - 1;
			$('input[name="modNum"]').val(modNum);
		}
	});

	// because I added my own up and down buttons, I had to change the shadow to
	// go around those as well when the input box was in focus
	$('input[name="numDice"]').focus(function() {
		$('#diceUp').css('border-top', '1px solid rgb(173,51,34)');
		$('#diceUp').css('border-right', '1px solid rgb(173,51,34)');
		$('#diceDown').css('border-bottom', '1px solid rgb(173,51,34)');
		$('#diceDown').css('border-right', '1px solid rgb(173,51,34)');
	});
	$('input[name="numDice"]').blur(function() {
		$('#diceUp').css('border-top', '1px solid rgb(50, 50, 50)');
		$('#diceUp').css('border-right', '1px solid rgb(50, 50, 50)');
		$('#diceDown').css('border-bottom', '1px solid rgb(50, 50, 50)');
		$('#diceDown').css('border-right', '1px solid rgb(50, 50, 50)');
	});
	$('input[name="modNum"]').focus(function() {
		$('#modUp').css('border-top', '1px solid rgb(173,51,34)');
		$('#modUp').css('border-right', '1px solid rgb(173,51,34)');
		$('#modDown').css('border-bottom', '1px solid rgb(173,51,34)');
		$('#modDown').css('border-right', '1px solid rgb(173,51,34)');
	});
	$('input[name="modNum"]').blur(function() {
		$('#modUp').css('border-top', '1px solid rgb(50, 50, 50)');
		$('#modUp').css('border-right', '1px solid rgb(50, 50, 50)');
		$('#modDown').css('border-bottom', '1px solid rgb(50, 50, 50)');
		$('#modDown').css('border-right', '1px solid rgb(50, 50, 50)');
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
	$('.spells h4').on('click', function() {
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


	// The next large section of code (the rest of the document as of 2/18/18)
	// here deals with the filter that I created for the Spells page. I am not
	// sure it is the best way to do it. For each of the 3 filters, I gave each
	// spell an empty span. When a filter was selected, it would add text to
	// that span indicating which filter was set. When a filter was deselected,
	// it would remove that text from the span. If all 3 spans for a spell are
	// empty, then the spell is shown. If any of them have any text, the spell
	// is hidden. I did this because my original filters were overwriting each
	// other. I'd select the desired Class filter, but when I clicked the
	// desired School filter, it would show all of the spells from that school,
	// and not the spells from that school that my desired Class could perform.
	// This way, there is a tag on each spell that keeps track of what is
	// filtering it.

	// this click function displays the filter options for each filter
	$('.filter').on('click', function() {
		var shown = $(this).find('.filterlist').css('display');
		if (shown === "none") {
			$('.filterlist').hide();
			$('.levelfilterlist').hide();
			$(this).find('.filterlist').show();
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


	// This function checks each spell's filter spans for text and hides or
	// shows the spell depending on the content of each span
	function checkFilter () {
		$('.spells div').each(function() {
			var classhidevar= $(this).find('.classhidevar').html();
			var schoolhidevar= $(this).find('.schoolhidevar').html();
			var levelhidevar= $(this).find('.levelhidevar').html();

			if (!classhidevar && !levelhidevar && !schoolhidevar) {
				$(this).show();
			}
			else {
				$(this).hide();
			}
		})
	}

	// the following 8 click functions set the Class filter span values based on
	// the selected Class filter and then call checkFilter()
	$('#bardspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Bard') >= 0) {
			$('.classhidevar').html('');
			$(this).parent().siblings().text('Class');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.classhidevar').html('bard');
			$('.bard .classhidevar').html('');
			$(this).parent().siblings().text('Bard');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#clericspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Cleric') >= 0) {
			$('.classhidevar').html('');

			$(this).parent().siblings().text('Class');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.classhidevar').html('cleric');
			$('.cleric .classhidevar').html('');

			$(this).parent().siblings().text('Cleric');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#druidspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Druid') >= 0) {
			$('.classhidevar').html('');

			$(this).parent().siblings().text('Class');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.classhidevar').html('druid');
			$('.druid .classhidevar').html('');

			$(this).parent().siblings().text('Druid');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#paladinspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Paladin') >= 0) {
			$('.classhidevar').html('');

			$(this).parent().siblings().text('Class');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.classhidevar').html('paladin');
			$('.paladin .classhidevar').html('');

			$(this).parent().siblings().text('Paladin');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#rangerspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Ranger') >= 0) {
			$('.classhidevar').html('');

			$(this).parent().siblings().text('Class');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.classhidevar').html('ranger');
			$('.ranger .classhidevar').html('');

			$(this).parent().siblings().text('Ranger');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#sorcerorspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Sorceror') >= 0) {
			$('.classhidevar').html('');

			$(this).parent().siblings().text('Class');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.classhidevar').html('sorceror');
			$('.sorceror .classhidevar').html('');

			$(this).parent().siblings().text('Sorceror');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#warlockspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Warlock') >= 0) {
			$('.classhidevar').html('');

			$(this).parent().siblings().text('Class');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.classhidevar').html('warlock');
			$('.warlock .classhidevar').html('');

			$(this).parent().siblings().text('Warlock');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#wizardspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Wizard') >= 0) {
			$('.classhidevar').html('');

			$(this).parent().siblings().text('Class');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.classhidevar').html('wizard');
			$('.wizard .classhidevar').html('');

			$(this).parent().siblings().text('Wizard');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});

	// the following 8 click functions set the School filter span values based
	// on the selected School filter and then call checkFilter()
	$('#abjurationspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Abjuration') >= 0) {
			$('.schoolhidevar').html('');

			$(this).parent().siblings().text('School');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.schoolhidevar').html('abjuration');
			$('.abjuration .schoolhidevar').html('');

			$(this).parent().siblings().text('Abjuration');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#conjurationspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Conjuration') >= 0) {
			$('.schoolhidevar').html('');

			$(this).parent().siblings().text('School');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.schoolhidevar').html('conjuration');
			$('.conjuration .schoolhidevar').html('');

			$(this).parent().siblings().text('Conjuration');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#divinationspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Divination') >= 0) {
			$('.schoolhidevar').html('');

			$(this).parent().siblings().text('School');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.schoolhidevar').html('divination');
			$('.divination .schoolhidevar').html('');

			$(this).parent().siblings().text('Divination');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#enchantmentspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Enchantment') >= 0) {
			$('.schoolhidevar').html('');

			$(this).parent().siblings().text('School');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.schoolhidevar').html('enchantment');
			$('.enchantment .schoolhidevar').html('');

			$(this).parent().siblings().text('Enchantment');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#evocationspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Evocation') >= 0) {
			$('.schoolhidevar').html('');

			$(this).parent().siblings().text('School');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.schoolhidevar').html('evocation');
			$('.evocation .schoolhidevar').html('');

			$(this).parent().siblings().text('Evocation');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#illusionspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Illusion') >= 0) {
			$('.schoolhidevar').html('');

			$(this).parent().siblings().text('School');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.schoolhidevar').html('illusion');
			$('.illusion .schoolhidevar').html('');

			$(this).parent().siblings().text('Illusion');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#necromancyspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Necromancy') >= 0) {
			$('.schoolhidevar').html('');

			$(this).parent().siblings().text('School');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.schoolhidevar').html('necromancy');
			$('.necromancy .schoolhidevar').html('');

			$(this).parent().siblings().text('Necromancy');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});
	$('#transmutationspells').on('click', function() {
		var shown = $(this).parent().siblings().text();
		if (shown.indexOf('Transmutation') >= 0) {
			$('.schoolhidevar').html('');

			$(this).parent().siblings().text('School');
			$(this).parent().siblings().css('color', 'rgb(50, 50, 50)');
			$(this).css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.schoolhidevar').html('transmutation');
			$('.transmutation .schoolhidevar').html('');

			$(this).parent().siblings().text('Transmutation');
			$(this).parent().siblings().css('color', 'rgb(133, 38, 23)');
			$(this).css('color', 'rgb(133, 38, 23)');
			$(this).siblings().css('color', 'rgb(50, 50, 50)');
		}
		checkFilter();
	});


	//if no or all levels in level filter are checked
		// show all spells
	// else if [specify level(s)]
		// show only specified level(s)
	function levelFilterLogic () {
		var levelFilterTracker = 0;
		$('.levelfilterlist div').each(function() {
			var filterVar= $(this).find('input').is(':checked');
			if (!filterVar) {
			}
			else {
				levelFilterTracker = 1;
			}
		});

		if (levelFilterTracker === 0) {
			$('.levelhidevar').html('');
		}
	}

	var displayedLevels = [];
	function removeFromList(remove) {
		for (i = 0; i < displayedLevels.length; i++) {
			if (displayedLevels[i] === remove) {
				displayedLevels.splice(i, remove);
			}
		}
	}

	function setLevelsFilterTitle() {
		var titleString = "";
		for (i = 0; i < displayedLevels.length; i++) {
			if (displayedLevels.length === 10) {
				titleString = "All Levels";
			}
			else if (i === displayedLevels.length-1) {
				titleString = titleString + displayedLevels[i];
			}
			else {
				titleString = titleString + displayedLevels[i] + ", ";
			}
		}
		if (!titleString) {
			$('.levelfilterlist').siblings().text("Level");
			$('.levelfilterlist').siblings().css('color', 'rgb(50, 50, 50)');
		}
		else {
			$('.levelfilterlist').siblings().text(titleString);
			$('.levelfilterlist').siblings().css('color', 'rgb(133, 38, 23)');
		}
		var filterTitleLength= titleString.length;
		if (titleString === "All Levels") {
			$('#filters').css("max-width", "450px");
			$('.levelfilterlist').css("left", "15px");
		}
		else if (titleString === "Cantrips") {
			$('#filters').css("max-width", "420px");
			$('.levelfilterlist').css("left", "0px");
		}
		else if (filterTitleLength > 6) {
			var width = 400 + 6.5*(filterTitleLength - 6);
			$('#filters').css("max-width", width + "px");
			var left = -10 + 3.25*(filterTitleLength - 6);
			$('.levelfilterlist').css("left", left + "px");
		}
		else {
			$('#filters').css("max-width", "400px");
			$('.levelfilterlist').css("left", "-10px");
		}

	}

	// the following 10 click functions set the Level filter span values based
	// on the selected Level filters and then call checkFilter()

	// if no levels selected
		//display "Levels"
	//else
		// display the selected levels
	$('.levelfilterlist div').on('click', function() {
		displayedLevels = []; // empty array
		if ($(this).find('input').is(':checked')) {
			$(this).find('input').prop('checked', false);
			$(this).css("color", "rgb(50, 50, 50)");
		}
		else {
			$(this).find('input').prop('checked', true);
			$(this).css("color", "rgb(133, 38, 23)");
		}

		if ($('input#cantripspells').is(':checked')) {
			$('.cantrip .levelhidevar').empty();
			displayedLevels.push('Cantrips');
		}
		else {
			$('.cantrip .levelhidevar').append('cantrip');
			removeFromList('Cantrips');
		}

		if ($('input#level1spells').is(':checked')) {
			$('.level1 .levelhidevar').empty();
			displayedLevels.push('1st');
		}
		else {
			$('.level1 .levelhidevar').append('level1');
			removeFromList('1st');
		}

		if ($('input#level2spells').is(':checked')) {
			$('.level2 .levelhidevar').empty();
			displayedLevels.push('2nd');
		}
		else {
			$('.level2 .levelhidevar').append('level2');
			removeFromList('2nd');
		}

		if ($('input#level3spells').is(':checked')) {
			$('.level3 .levelhidevar').empty();
			displayedLevels.push('3rd');
		}
		else {
			$('.level3 .levelhidevar').append('level3');
			removeFromList('3rd');
		}

		if ($('input#level4spells').is(':checked')) {
			$('.level4 .levelhidevar').empty();
			displayedLevels.push('4th');
		}
		else {
			$('.level4 .levelhidevar').append('level4');
			removeFromList('4th');
		}

		if ($('input#level5spells').is(':checked')) {
			$('.level5 .levelhidevar').empty();
			displayedLevels.push('5th');
		}
		else {
			$('.level5 .levelhidevar').append('level5');
			removeFromList('5th');
		}

		if ($('input#level6spells').is(':checked')) {
			$('.level6 .levelhidevar').empty();
			displayedLevels.push('6th');
		}
		else {
			$('.level6 .levelhidevar').append('level6');
			removeFromList('6th');
		}

		if ($('input#level7spells').is(':checked')) {
			$('.level7 .levelhidevar').empty();
			displayedLevels.push('7th');
		}
		else {
			$('.level7 .levelhidevar').append('level7');
			removeFromList('7th');
		}

		if ($('input#level8spells').is(':checked')) {
			$('.level8 .levelhidevar').empty();
			displayedLevels.push('8th');
		}
		else {
			$('.level8 .levelhidevar').append('level8');
			removeFromList('8th');
		}

		if ($('input#level9spells').is(':checked')) {
			$('.level9 .levelhidevar').empty();
			displayedLevels.push('9th');
		}
		else {
			$('.level9 .levelhidevar').append('level9');
			removeFromList('9th');
		}
		setLevelsFilterTitle();
		levelFilterLogic();
		checkFilter();
	});
});
