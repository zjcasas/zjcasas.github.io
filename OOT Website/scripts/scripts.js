$(window).ready(function() {
    // change image to hover version on mouseover
    $("#Members span img").on('mouseover',function() {
        var src = $(this).attr('src').replace('.png', '-hover.png');
        $(this).attr("src", src);
    });
    // change image back on mouseout
    $("#Members span img").on('mouseout',function() {
        var src = $(this).attr('src').replace('-hover', '');
        $(this).attr("src", src);
    });


    var dropDown;
    $('nav span').on('click', function() {
        if(dropDown){
            $('nav div').css('display', 'none');
            $('nav div a').css('display', 'none');
            dropDown = 0;
        }
        else {
            $('nav div').css('display', 'grid');
            $('nav div a').css('display', 'inline-block');
            dropDown = 1;
        }
    });

    // set initial hyperlink color
    var color = ['red', 'orange', 'green', 'blue', 'purple'] ;
    $('main section div a').each(function() {
        var num = Math.floor(5*Math.random());
        $(this).css('color',color[num]);
    });
    // set new color on mouseout
    $('main section div a').on('mouseout',function() {
        var num = Math.floor(5*Math.random());
        $(this).css('color',color[num]);
    });
    // set to default on mouseover
    $('main section div a').on('mouseover',function() {
        $(this).css('color','black');
    });
    // set new color on mouseover
    $('#hamburger').on('mouseover',function() {
        var num = Math.floor(5*Math.random());
        $('nav span').children().css('color',color[num]);
    });
    // set to default on mouseover
    $('#hamburger').on('mouseout',function() {
        $('nav span').children().css('color','black');
    });


    // when resizing window, fix nav
    $(window).on('resize', function(){
        var width = $(window).width();
         if (width <= 778) {
             $('nav div').css('display', 'none');
             $('nav div a').css('display', 'none');
             dropDown = 0;
         }
         else {
             $('nav div').css('display', 'block');
             $('nav div a').css('display', 'inline-block');
         }
	});

});
