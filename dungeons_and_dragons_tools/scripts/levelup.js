$(window).ready(function(){
    // 1-9 after 10-20 because otherwise, 10-20 will display 1 and 2.
    $('.levels .filterlist div').on('click', function() {
        var shown = $(this).text();
        if (shown.indexOf('10') >= 0) {
            $(this).parent().siblings().text('Level 10');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level10').show();
        }
        else if (shown.indexOf('11') >= 0) {
            $(this).parent().siblings().text('Level 11');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level11').show();
        }
        else if (shown.indexOf('12') >= 0) {
            $(this).parent().siblings().text('Level 12');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level12').show();
        }
        else if (shown.indexOf('13') >= 0) {
            $(this).parent().siblings().text('Level 13');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level13').show();
        }
        else if (shown.indexOf('14') >= 0) {
            $(this).parent().siblings().text('Level 14');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level14').show();
        }
        else if (shown.indexOf('15') >= 0) {
            $(this).parent().siblings().text('Level 15');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level15').show();
        }
        else if (shown.indexOf('16') >= 0) {
            $(this).parent().siblings().text('Level 16');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level16').show();
        }
        else if (shown.indexOf('17') >= 0) {
            $(this).parent().siblings().text('Level 17');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level17').show();
        }
        else if (shown.indexOf('18') >= 0) {
            $(this).parent().siblings().text('Level 18');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level18').show();
        }
        else if (shown.indexOf('19') >= 0) {
            $(this).parent().siblings().text('Level 19');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level19').show();
        }
        else if (shown.indexOf('20') >= 0) {
            $(this).parent().siblings().text('Level 20');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level20').show();
        }
        else if (shown.indexOf('1') >= 0) {
            $(this).parent().siblings().text('Level 1');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level1').show();
        }
        else if (shown.indexOf('2') >= 0) {
            $(this).parent().siblings().text('Level 2');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level2').show();
        }
        else if (shown.indexOf('3') >= 0) {
            $(this).parent().siblings().text('Level 3');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level3').show();
        }
        else if (shown.indexOf('4') >= 0) {
            $(this).parent().siblings().text('Level 4');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level4').show();
        }
        else if (shown.indexOf('5') >= 0) {
            $(this).parent().siblings().text('Level 5');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level5').show();
        }
        else if (shown.indexOf('6') >= 0) {
            $(this).parent().siblings().text('Level 6');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level6').show();
        }
        else if (shown.indexOf('7') >= 0) {
            $(this).parent().siblings().text('Level 7');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level7').show();
        }
        else if (shown.indexOf('8') >= 0) {
            $(this).parent().siblings().text('Level 8');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level8').show();
        }
        else if (shown.indexOf('9') >= 0) {
            $(this).parent().siblings().text('Level 9');
            $(this).parent().siblings().addClass('selected');
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.timeline-container').hide();
            $('#level9').show();
        }
    });

    $('.js-timeline').Timeline();
});
