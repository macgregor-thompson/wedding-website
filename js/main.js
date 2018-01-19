(function () {
  'use strict';

  window.swapFullImage = function (target) {
    document.getElementById(target).classList.add('image-loaded');
  };

  $('.no-link').on('click', function (e) {
    e.preventDefault();
    return false;
  });


  $('.back-to-top').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, $(window).scrollTop() / 10);
  });


  $('.scroll-to-section').on('click', function () {
    var pos = $('#' + $(this).data('section')).offset().top;
    $('html, body').animate({
      scrollTop: pos
    }, 1000);
  });

})();