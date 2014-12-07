$(document).ready(function() {
	
	$('input[type=text], textarea').placeholder();	
	
	$('#chat-form').click(function(event) {
	    event.preventDefault();
	    window.open($(this).attr("href"),"LiveChat","width=420,height=512,scrollbars=yes");
	});	

	$('#chat-form-mobile').click(function(event) {
	    event.preventDefault();
	    window.open($(this).attr("href"),"LiveChat","width="+screen.width+",height="+screen.height+",scrollbars=yes");
	});
	
	$(window).load(function(){
		$('#box-helpusbetter').modal('show');
	});	
    
});
