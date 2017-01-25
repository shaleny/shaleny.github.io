'use strict';
(function ($) {

    $(document).ready(function () {
        $('.js-search-button').on('click', function () {
            $('.js-search').addClass('active');
        });
        $('.js-search-more').on('click', function () {
            $('.js-search-addition').show();
            $(this).hide();
            $('.js-search-close').show();
        });
        $('.js-search-close').on('click', function () {
            $('.js-search-addition').hide();
            $(this).hide();
            $('.js-search-more').show();
        });

        $('body').on('click', function (e) {
            var container = $("header");
            if (container.has(e.target).length === 0){
                   $('.js-search').removeClass('active');
           }
        })
    });
})(jQuery);