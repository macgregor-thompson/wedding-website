(function () {
    'use strict';

    window.swapFullImage = function (target) {
        document.getElementById(target).classList.add('image-loaded');
    };


    $('.animateToTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, "slow");
    });

})();