var container = $('#circle-carousel'),
    centerX = container.width()/2,
    centerY = container.height()/2,
    angle = 0,
    radius = 300;

var carouselItems = $('.circle-carousel__item'),
    totalItems = carouselItems.length;

carouselItems.each(function(i, e) {
    var w2 = $(e).outerWidth(true)/2,
        h2 = $(e).outerHeight(true)/2,
        angle = 360/totalItems*i,
        x = Math.round(centerX+radius *  Math.sin(angle*Math.PI/180)),
        y = Math.round(centerY+radius * -Math.cos(angle*Math.PI/180));
    $(e).css({right:x-w2, top:y-h2});
});

var rotate = 360/totalItems;
var rotated = -rotate /2;

// Setting initial state
$('#circle-carousel').css('transform', 'rotate('+ -rotate/2 +'deg)');
$('.circle-carousel__item div').css('transform', 'rotate('+ rotate/2 +'deg)');
$('.active').prev().addClass('next-to-active');
$('.active').prev().addClass('next-to-active');

var last =  ' ';
var lastFind =  ' ';
var textName = 0;
var lastText = ' ';
$('.circle-carousel__item').click(function() {
    $('.active-text').removeClass('active-text');
    var source = $(this).attr('data-num');
    var textName = 'text-' + source;
    console.log(textName);
    if(source == '14') {
    } else {
        $(this).parent().parent().find('.img-14').removeClass('img-14');
        $(lastText).removeClass('active-text');
    }
    $(this).parent().parent().find(lastFind).removeClass(last);
    last = 'img-'+ source;
    lastFind = '.' + last;
    lastText = '.' + textName;
    $(this).addClass('img-'+ source);
    $(lastText).addClass('active-text');

    thisNum = $(this).data('num');
    currentNum = $('.active').data('num');
    numOfRotations = (thisNum - currentNum);
    if (numOfRotations < -totalItems/2) {
        numOfRotations += totalItems
    }
    if (numOfRotations > totalItems/2) {
        numOfRotations -= totalItems
    }
    rotated += (rotate * numOfRotations);
    $('#circle-carousel').css('transform', 'rotate('+ rotated +'deg)')
    $('.circle-carousel__item div').css('transform', 'rotate('+ -rotated +'deg)')
    $('.circle-carousel__item').removeClass('active').removeClass('next-to-active');

    $(this).addClass('active');
    $('.active').prev().addClass('next-to-active');
    $('.active').next().addClass('next-to-active');

});
