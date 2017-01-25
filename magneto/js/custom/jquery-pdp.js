$.fn.thumbs = function() {

    var src = $(this).find('.thumb-img').attr('src');
    $(this).closest('.image-box').find('.large-image')
        .css('background-image', 'url(' + src + ')');

    $(this).find('.thumb-img').click(function() {
        var src = $(this).attr('src');
        $(this).closest('.image-box').find('.large-image')
            .css('background-image', 'url(' + src + ')');
    });

};

$.fn.zoom = function() {

    $(this).hover(function() {
        $(this).mousemove(function(e) {
            var x = e.pageX - $(this).offset().left;
            var y = e.pageY - $(this).offset().top;

            var xPerc = x * 100 / $(this).width();
            var yPerc = y * 100 / $(this).height();

            $(this).css({
                'background-position': xPerc + '% ' + yPerc + '%',
                'background-size': '150%',
            });
        });
    }, function() {
        $(this).css({
            'background-position': 'center',
            'background-size': 'contain'
        });
    });

};

$('.thumbs').thumbs();
$('.large-image').zoom();