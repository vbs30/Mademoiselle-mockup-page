$(document).ready(function(){
    $('.shades-category .shade').on("click", function(e) {
        $('.shades-category .shade').removeClass('active');
        $(this).addClass('active');
    });

    $('.thumbnail-gallery .thumbnail-gallery-item').on("click", function(e) {
        $('.thumbnail-gallery .thumbnail-gallery-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.minus-btn').on('click', function() {
        var $quantityInput = $(this).siblings('.quantity-input');
        var currentVal = parseInt($quantityInput.val());
        if (!isNaN(currentVal) && currentVal > 1) {
            $quantityInput.val(currentVal - 1); // Decrease value but not below 1
        }
    });

    $('.plus-btn').on('click', function() {
        var $quantityInput = $(this).siblings('.quantity-input');
        var currentVal = parseInt($quantityInput.val());
        if (!isNaN(currentVal)) {
            $quantityInput.val(currentVal + 1); // Increase value
        } else {
            $quantityInput.val(1); // If input is invalid, reset to 1
        }
    });
});
