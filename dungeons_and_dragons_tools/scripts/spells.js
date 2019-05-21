$(window).ready(function(){
    //attempting to use ajax to pull info from csv
    //it worked, but it isn't perfect so I'll have to come back to it
    var spells;
    var spells2 = [];
    var spells3 = [];
    $.ajax({
        url:"spells.csv",
        dataType: 'text',
        success:function(data) {
            spells = data.split(/\r?\n|\r/);
            console.log("success");
            parseData();
            displayData();
        },
        fail: function(error) {
            console.log("error");
            console.log(error);
        }
    });

    function parseData() {
        for (var i = 0; i < spells.length; i++) {
            spells2.push(spells[i].split(","));

        }
        for (var i = 1; i < (spells2.length - 1); i++) {
            for (var j = 0; j <spells2[i].length; j++){
                if (j === 0) {
                    spells3[(i-1)] = '{ "' + spells2[0][0] + '":';
                    spells3[(i-1)] = spells3[(i-1)] + '"' + spells2[i][0] + '", ';
                }
                else if (j === (spells2[i].length -1)) {
                    spells3[(i-1)] = spells3[(i-1)] + '"' + spells2[0][j] + '":';
                    spells3[(i-1)] = spells3[(i-1)] + '"' + spells2[i][j] + '"}';
                }
                else {
                    spells3[(i-1)] = spells3[(i-1)] + '"' + spells2[0][j] + '":';
                    spells3[(i-1)] = spells3[(i-1)] + '"' + spells2[i][j] + '", ';
                }

            }
        }
        for (var i = 0; i < spells3.length; i++) {
            spells3[i] = JSON.parse(spells3[i]);
        }
    }

    function displayData() {
        for (var i = 0; i < spells3.length; i++) {
            var html1 = `<div class="${spells3[i].classes} ${spells3[i].level} ${spells3[i].school}">
                        <span class="classhidevar"></span>
                        <span class="levelhidevar"></span>
                        <span class="schoolhidevar"></span>
                        <h4>
                            <span class="turn">
                                <i class="fas fa-angle-down"></i>
                            </span>
                            ${spells3[i].name}
                        </h4>`
            spells3[i].classes = spells3[i].classes.split(" ").join("&#44; ");
            var html2 = `<section>
                            <span>
                                <p class="capitalize">
                                    <span>${spells3[i].level} Level ${spells3[i].school}</span>
                                </p>
                                <p class="capitalize">
                                    <span>${spells3[i].school} ${spells3[i].cantrip}</span>
                                </p>
                                <p class="capitalize">
                                    <span>Classes</span> &mdash; ${spells3[i].classes}
                                </p>
                                <p>
                                    <span>Casting Time</span> &mdash; ${spells3[i].time}
                                </p>
                                <p>
                                    <span>Range</span> &mdash; ${spells3[i].range}
                                </p>
                                <p>
                                    <span>Components</span> &mdash; ${spells3[i].components}
                                </p>
                                <p>
                                    <span>Duration</span> &mdash; ${spells3[i].duration}
                                </p>
                            </span>
                            <p>
                                ${spells3[i].p1}
                            </p>
                            <p>
                                ${spells3[i].p2}
                            </p>
                            <p>
                                ${spells3[i].p3}
                            </p>
                            <p>
                                ${spells3[i].p4}
                            </p>
                            <ul>
                                <li>
                                ${spells3[i].ul1}
                                </li>
                                <li>
                                ${spells3[i].ul2}
                                </li>
                                <li>
                                ${spells3[i].ul3}
                                </li>
                                <li>
                                ${spells3[i].ul4}
                                </li>
                                <li>
                                ${spells3[i].ul5}
                                </li>
                            </ul>
                            <p>
                                ${spells3[i].p5}
                            </p>
                            <p>
                                ${spells3[i].p6}
                            </p>
                            <p>
                                ${spells3[i].p7}
                            </p>
                            <p>
                                ${spells3[i].p8}
                            </p>
                            <p>
                                ${spells3[i].p9}
                            </p>
							<p>
								<span class="dark">At Higher Levels</span> &mdash; ${spells3[i].ahl}
							</p>
                        </section>
                    </div>`
            var html = html1 + html2;
            $('.spells').append(html);
        }
        $('li:not(:contains("-"))').hide();
        $('p:contains("cantrip")').hide();
    }

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
            $('.1st .levelhidevar').empty();
            displayedLevels.push('1st');
        }
        else {
            $('.1st .levelhidevar').append('1st');
            removeFromList('1st');
        }

        if ($('input#level2spells').is(':checked')) {
            $('.2nd .levelhidevar').empty();
            displayedLevels.push('2nd');
        }
        else {
            $('.2nd .levelhidevar').append('2nd');
            removeFromList('2nd');
        }

        if ($('input#level3spells').is(':checked')) {
            $('.3rd .levelhidevar').empty();
            displayedLevels.push('3rd');
        }
        else {
            $('.3rd .levelhidevar').append('3rd');
            removeFromList('3rd');
        }

        if ($('input#level4spells').is(':checked')) {
            $('.4th .levelhidevar').empty();
            displayedLevels.push('4th');
        }
        else {
            $('.4th .levelhidevar').append('4th');
            removeFromList('4th');
        }

        if ($('input#level5spells').is(':checked')) {
            $('.5th .levelhidevar').empty();
            displayedLevels.push('5th');
        }
        else {
            $('.5th .levelhidevar').append('5th');
            removeFromList('5th');
        }

        if ($('input#level6spells').is(':checked')) {
            $('.6th .levelhidevar').empty();
            displayedLevels.push('6th');
        }
        else {
            $('.6th .levelhidevar').append('6th');
            removeFromList('6th');
        }

        if ($('input#level7spells').is(':checked')) {
            $('.7th .levelhidevar').empty();
            displayedLevels.push('7th');
        }
        else {
            $('.7th .levelhidevar').append('7th');
            removeFromList('7th');
        }

        if ($('input#level8spells').is(':checked')) {
            $('.8th .levelhidevar').empty();
            displayedLevels.push('8th');
        }
        else {
            $('.8th .levelhidevar').append('8th');
            removeFromList('8th');
        }

        if ($('input#level9spells').is(':checked')) {
            $('.9th .levelhidevar').empty();
            displayedLevels.push('9th');
        }
        else {
            $('.9th .levelhidevar').append('9th');
            removeFromList('9th');
        }
        setLevelsFilterTitle();
        levelFilterLogic();
        checkFilter();
    });
});
