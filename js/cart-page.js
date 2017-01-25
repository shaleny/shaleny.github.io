'use strict';

jQuery(function($) {
  $('.purchase__product-quantity-handlers').click(function(event) {
    var $target = $(event.target);
    var $input = $target.parent('.purchase__product-quantity-handlers').siblings('.purchase__product-quantity');
    var inputValue = $input.val();

    if ($target.hasClass('purchase__product-quantity-handler--increase')) {
      inputValue++;
    } else if ($target.hasClass('purchase__product-quantity-handler--decrease')) {
      inputValue--;
    }

    event.preventDefault();

    if (inputValue < 0) return;
    
    $input.val(inputValue);
    
  });

});