'use strict';

jQuery(function($) {
  $('.list-handlers__buttons-block').click(function(event) {
    var $target = $(event.target);
    var $catalog = $('.catalog');

    if ($target.closest('a').hasClass('list-handlers__button--horizontal')) {
      $catalog.removeClass('catalog--tiles');

    } else if ($target.closest('a').hasClass('list-handlers__button--vertical')) {
      $catalog.addClass('catalog--tiles');

    }
    
    event.preventDefault();
  });


  $('.sidebar__list').click(function(event) {
    var $target = $(event.target);

    if ($target.hasClass('sidebar__main-link')) {
      $target
        .toggleClass('sidebar__main-link--active')
        .siblings('.sidebar__sub-list')
        .slideToggle();

      event.preventDefault();
    }
  });

});