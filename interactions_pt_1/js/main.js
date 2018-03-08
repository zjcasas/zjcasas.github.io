//if clickme is clicked, menu slides slides downs
//if clickme is clicked again, menu slides up
$('#openDropDown').on('click', function() {
    var dropDownDisplay = $('#dropDownMenu').css('display');

    if (dropDownDisplay === 'none') {
        $('#dropDownMenu').slideDown(400);
    }
    else {
        $('#dropDownMenu').slideUp(400);
    }
});
// if FAQs are clicked, it expands it's div and hides the others.
// if FAQs are clicked, the background of it should turn yellow and the background of the other should turn grey
$('#question1').on('click', function() {
    $('#answer1').slideDown(400);
    $('#answer2').slideUp(400);
    $(this).css('background', '#ffd800');
    $('#question2').css('background', '#e5e5e5');
});
$('#question2').on('click', function() {
    $('#answer2').slideDown(400);
    $('#answer1').slideUp(400);
    $(this).css('background', '#ffd800');
    $('#question1').css('background', '#e5e5e5');
});

//if show only yellow is clicked, blue are hidden and yellow are shown
//if only blue is shown, hide blue and fadein yellow.
$('#showYellowCircles').on('click', function() {
    var blueShown = $('.blue').css('display');
    var yellowShown = $('.yellow').css('display');

    if (yellowShown !== 'none' && blueShown !== 'none') {
        $('.blue').hide();
    }
    else if (blueShown !== 'none') {
        $('.yellow').hide();
        $('.blue').hide();
        $('.yellow').fadeIn(200);
    }
});
//if show only blue is clicked, yellow are hidden and blue are shown
//if only yellow is shown, hide yellow and fadein blue.
$('#showBlueCircles').on('click', function() {
    var blueShown = $('.blue').css('display');
    var yellowShown = $('.yellow').css('display');

    if (yellowShown !== 'none' && blueShown !== 'none') {
        $('.yellow').hide();
    }
    else if (yellowShown !== 'none') {
        $('.blue').hide();
        $('.yellow').hide();
        $('.blue').fadeIn(200);
    }
});
