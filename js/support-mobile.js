$(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
        $('#header').css({
                'box-shadow': 'none',
                '-moz-box-shadow' : 'none',
                '-webkit-box-shadow' : 'none' });
    }
    else {
        $('#header').css({
                'box-shadow': '5px 5px 5px rgba(0, 0, 0, 0.25)',
                '-moz-box-shadow' : '5px 5px 5px rgba(0, 0, 0, 0.25)',
                '-webkit-box-shadow' : '5px 5px 5px rgba(0, 0, 0, 0.25)' });
    }
});
$(document).ready(function(){	
	var wh = $(window).height();
	var navHeader = $('#header').height();
	var modalHeader = $('.modal-header').height();
	var modalFooter = $('.modal-footer').height();
	var modalOptions = $('.modal-body-options').height();
	var footSupport = $('#foot-support').height();
	var heightChat = wh - navHeader - modalHeader - modalFooter - modalOptions - footSupport - 150;
	var heightChat2 = wh - navHeader - footSupport - 40;

	$('.modal-body-message').css('height', heightChat+'px');
	$('#box-feedback-1').css('height', heightChat2+'px');

	$(window).load(function(){
		$('#box-helpusbetter').modal('show');
	});		
	var offset = 220;
	var duration = 500;
	$(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});
	
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	});		
});
