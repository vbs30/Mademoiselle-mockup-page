$(document).ready(function(){
    $('.shades-category .shade').on("click", function(e) {
        $('.shades-category .shade').removeClass('active');
        $(this).addClass('active');
    });

    $('.thumbnail-gallery .thumbnail-gallery-item').on("click", function(e) {
        $('.thumbnail-gallery .thumbnail-gallery-item').removeClass('active');
        $(this).addClass('active');
    });
});