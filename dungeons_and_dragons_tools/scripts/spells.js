$(window).ready(function(){
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
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.classhidevar').html('bard');
            $('.bard .classhidevar').html('');
            $(this).parent().siblings().text('Bard');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#clericspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Cleric') >= 0) {
            $('.classhidevar').html('');

            $(this).parent().siblings().text('Class');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.classhidevar').html('cleric');
            $('.cleric .classhidevar').html('');

            $(this).parent().siblings().text('Cleric');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#druidspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Druid') >= 0) {
            $('.classhidevar').html('');

            $(this).parent().siblings().text('Class');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.classhidevar').html('druid');
            $('.druid .classhidevar').html('');

            $(this).parent().siblings().text('Druid');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#paladinspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Paladin') >= 0) {
            $('.classhidevar').html('');

            $(this).parent().siblings().text('Class');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.classhidevar').html('paladin');
            $('.paladin .classhidevar').html('');

            $(this).parent().siblings().text('Paladin');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#rangerspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Ranger') >= 0) {
            $('.classhidevar').html('');

            $(this).parent().siblings().text('Class');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.classhidevar').html('ranger');
            $('.ranger .classhidevar').html('');

            $(this).parent().siblings().text('Ranger');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#sorcerorspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Sorceror') >= 0) {
            $('.classhidevar').html('');

            $(this).parent().siblings().text('Class');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.classhidevar').html('sorceror');
            $('.sorceror .classhidevar').html('');

            $(this).parent().siblings().text('Sorceror');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#warlockspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Warlock') >= 0) {
            $('.classhidevar').html('');

            $(this).parent().siblings().text('Class');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.classhidevar').html('warlock');
            $('.warlock .classhidevar').html('');

            $(this).parent().siblings().text('Warlock');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#wizardspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Wizard') >= 0) {
            $('.classhidevar').html('');

            $(this).parent().siblings().text('Class');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.classhidevar').html('wizard');
            $('.wizard .classhidevar').html('');

            $(this).parent().siblings().text('Wizard');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
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
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.schoolhidevar').html('abjuration');
            $('.abjuration .schoolhidevar').html('');

            $(this).parent().siblings().text('Abjuration');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#conjurationspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Conjuration') >= 0) {
            $('.schoolhidevar').html('');

            $(this).parent().siblings().text('School');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.schoolhidevar').html('conjuration');
            $('.conjuration .schoolhidevar').html('');

            $(this).parent().siblings().text('Conjuration');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#divinationspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Divination') >= 0) {
            $('.schoolhidevar').html('');

            $(this).parent().siblings().text('School');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.schoolhidevar').html('divination');
            $('.divination .schoolhidevar').html('');

            $(this).parent().siblings().text('Divination');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#enchantmentspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Enchantment') >= 0) {
            $('.schoolhidevar').html('');

            $(this).parent().siblings().text('School');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.schoolhidevar').html('enchantment');
            $('.enchantment .schoolhidevar').html('');

            $(this).parent().siblings().text('Enchantment');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#evocationspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Evocation') >= 0) {
            $('.schoolhidevar').html('');

            $(this).parent().siblings().text('School');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.schoolhidevar').html('evocation');
            $('.evocation .schoolhidevar').html('');

            $(this).parent().siblings().text('Evocation');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#illusionspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Illusion') >= 0) {
            $('.schoolhidevar').html('');

            $(this).parent().siblings().text('School');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.schoolhidevar').html('illusion');
            $('.illusion .schoolhidevar').html('');

            $(this).parent().siblings().text('Illusion');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#necromancyspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Necromancy') >= 0) {
            $('.schoolhidevar').html('');

            $(this).parent().siblings().text('School');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.schoolhidevar').html('necromancy');
            $('.necromancy .schoolhidevar').html('');

            $(this).parent().siblings().text('Necromancy');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
        checkFilter();
    });
    $('#transmutationspells').on('click', function() {
        var shown = $(this).parent().siblings().text();
        if (shown.indexOf('Transmutation') >= 0) {
            $('.schoolhidevar').html('');

            $(this).parent().siblings().text('School');
            $(this).parent().siblings().removeClass('selected');
            $(this).removeClass('selected');
        }
        else {
            $('.schoolhidevar').html('transmutation');
            $('.transmutation .schoolhidevar').html('');

            $(this).parent().siblings().text('Transmutation');
            $(this).parent().siblings().addClass('selected');
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
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
            $('.levelfilterlist').siblings().removeClass('selected');
        }
        else {
            $('.levelfilterlist').siblings().text(titleString);
            $('.levelfilterlist').siblings().addClass('selected');
        }
        var width = $(window).width();
        if (width <=538) {
            var filterTitleLength= titleString.length;
            if (titleString === "All Levels") {
                $('#filters').css("max-width", "450px");
            }
            else if (titleString === "Cantrips") {
                $('#filters').css("max-width", "420px");
            }
            else if (filterTitleLength > 6) {
                var width = 400 + 6.5*(filterTitleLength - 6);
                $('#filters').css("max-width", width + "px");
            }
            else {
                $('#filters').css("max-width", "400px");
            }
        }
        else {
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
