'use strict';

jQuery(function($) {

  var $window = $(window);

  productWrapperResize();

  $window.resize(productWrapperResize);

  $window.scroll(function(event) {

    var $breadcrumbs = $('.breadcrumbs');
    var $footer = $('.footer');
    var scrollValue = $(window).scrollLeft();

    $breadcrumbs.css('left', scrollValue);
    $footer.css('left', scrollValue);
    
  });

  function productWrapperResize() {

    var windowWidth = $window.width();

    if (windowWidth < 768) {
      $('.comparison__product-wrapper').css('width', windowWidth / 2 - 2 * 10);
    } else {
      $('.comparison__product-wrapper').removeAttr('style');
    }
  }

});