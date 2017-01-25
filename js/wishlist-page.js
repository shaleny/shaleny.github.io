'use strict';

jQuery(function($) {
  $('.product__comment-button--show-block').click(function(event) {

    var $emergeBlock = $(event.target).closest('.product__emerge-block');
    $emergeBlock.css('left', 0);
    event.preventDefault();
    
  });

  $('.product__comment-button--hide-block').click(function(event) {

    var $emergeBlock = $(event.target).closest('.product__emerge-block');
    var $textBlock = $emergeBlock.find('.product__comment-text');
    var $input = $emergeBlock.find('.product__comment-input');
    var text = $textBlock.text();

    $input.hide();
    $textBlock.show();

    $emergeBlock.css('left', '-100%');
    event.preventDefault();
    
  });

  $('.product__comment-button--edit-comment').click(function(event) {

    var $commentBlock = $(event.target).closest('.product__comment-block');
    var $textBlock = $commentBlock.children('.product__comment-text');
    var $input = $commentBlock.children('.product__comment-input');
    var text = $textBlock.text();

    $textBlock.hide();
    $input
        .val(text)
        .show();

    event.preventDefault();
    
  });
});