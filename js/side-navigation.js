$(document).ready(function() {
    
    $('#ctn-support').hover(function(){
        $(this).find(".box-icon").addClass("active").css({
            'width':'82px', 'position':'absolute', 'right':'0'
        });
        $('.box-support').stop().animate({width: '480px'}, 400)
    }, function(){
        $(this).find(".box-icon").removeClass("active").css({
            'width':'80px'
        });;
        $('.box-support').stop().animate({width: '-0'}, 400)
    }); 
    
    $("#sticky-right").stick_in_parent({
        offset_top : 100
    })
    
});