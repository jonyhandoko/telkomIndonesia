$(document).ready(function() {
    
    $("#banner-slider").swiperight(function() {
        $("#banner-slider").carousel('prev');
    });
    
    $("#banner-slider").swipeleft(function() {
        $("#banner-slider").carousel('next');
    }); 
    
});