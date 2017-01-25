'use strict';

jQuery(function($) {
  $(window).on('swipeleft', function(event) {
    $('.order-data__order-block').toggleClass('order-data__order-block--active');

    event.preventDefault();
  });

});