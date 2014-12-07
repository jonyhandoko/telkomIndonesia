var ww = $(window).width();

$(document).ready(function() {
    //button top on mobile version //
	$("#top-page").click(function(){
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});
    // end // 
    if (ww >= 320 && ww <= 540) {   
        mobileScreen(); 
        $('body').append('<div class="modal"></div>');
        $body = $("body");
        $(document).on({
            ajaxStart: function() { $body.addClass("loading");    },
             ajaxStop: function() { $body.removeClass("loading"); }    
        });        
        
    } 	
    else if (ww > 540 && ww <= 1024) { 
        tabletScreen();  
        $('body').append('<div class="modal"></div>');
        $body = $("body");
        $(document).on({
            ajaxStart: function() { $body.addClass("loading");    },
             ajaxStop: function() { $body.removeClass("loading"); }    
        });          
    }    
});

function mobileScreen(){ 
    $(window).scroll(function() {
        if (jQuery(this).scrollTop() == 0) {
            jQuery('#header').css({
                    'box-shadow': 'none',
                    '-moz-box-shadow' : 'none',
                    '-webkit-box-shadow' : 'none' });
        }
        else {
            jQuery('#header').css({
                    'box-shadow': '5px 5px 5px rgba(0, 0, 0, 0.25)',
                    '-moz-box-shadow' : '5px 5px 5px rgba(0, 0, 0, 0.25)',
                    '-webkit-box-shadow' : '5px 5px 5px rgba(0, 0, 0, 0.25)' });
        }
    });
    jQuery("#home-mob" ).insertBefore( "#nav-left" );
    jQuery("#nav-mob" ).insertBefore( "#nav-left" );
    jQuery("#box-search" ).insertAfter( "#nav-mob" );
    jQuery("#logo" ).insertAfter( "#box-search" );
    jQuery("#logo-support" ).insertAfter( "#home-mob" );
    jQuery("#foot-subscribe").insertAfter( "#foot-socmed" );
    jQuery("#back-mob" ).insertBefore( "#foot-support" );
    jQuery("#language-selector" ).insertAfter( "#back-mob" );		
    jQuery(".soc-like-support" ).insertAfter( ".helpfull-box" );	
    jQuery("#search-box").insertAfter('.block-top');
    jQuery(".suggest-box").insertAfter('#search-box');
    jQuery("#sidebar-article").insertAfter('#sharing-article');
    jQuery(".activate-register .box-images").insertAfter('.activate-register .text-content');
    jQuery('.item-paket .box-ket').each(function() {
        $(this).insertBefore( $(this).prev('.spaces') );
    });        
    jQuery('.mob-ord.box-ket').insertAfter('.mob-ord.icons');
    jQuery("#trending-nav").click(function(){
        jQuery('#popular-article').css('display', 'none');
        jQuery('#trending-article').css('display', 'block');
        jQuery('.drop-article').html('Trending Articles');
        jQuery('#list-1').css('display','none');
        jQuery('#list-2').css('display','block');
    });
    jQuery("#popular-nav").click(function(){
        jQuery('#trending-article').css('display', 'none');
        jQuery('#popular-article').css('display', 'block');
        jQuery('.drop-article').html('Popular How-to');
        jQuery('#list-1').css('display','block');
        jQuery('#list-2').css('display','none');
    });
    jQuery("#top-comments").click(function(){
        jQuery('#list-comment').css('display', 'none');
        jQuery('#top-comment').css('display', 'block');
        jQuery('.drop-comment').html('Top Commenter');
        jQuery('#list-1').css('display','none');
        jQuery('#list-3').css('display','block');
        jQuery('#list-2').css('display','block');
    });
    jQuery("#login-comments").click(function(){
        jQuery('#top-comment').css('display', 'none');
        jQuery('#list-comment').css('display', 'none');
        jQuery('#login-comment').css('display', 'block');
        jQuery('.drop-comment').html('Login Comment');
        jQuery('#list-1').css('display','block');
        jQuery('#list-2').css('display','none');
        jQuery('#list-3').css('display','block');
    }); 
    jQuery("#list-comments").click(function(){
        jQuery('#top-comment').css('display', 'none');
        jQuery('#list-comment').css('display', 'block');
        jQuery('#login-comment').css('display', 'none');
        jQuery('.drop-comment').html('Discussions (100 comments)');
        jQuery('#list-1').css('display','block');
        jQuery('#list-2').css('display','block');
        jQuery('#list-3').css('display','none');
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

    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });		

    jQuery(".ui-menu").insertAfter('.suggest-box');
    $('#nav-mob').click(function(){
        jQuery('#search-box').slideUp();
    });
    jQuery('.navbar-collapse').click('li', function() {
      jQuery('.navbar-collapse').collapse('hide');
      jQuery('#search-box').slideUp();
    });
    jQuery('#top-left-menu').click(function(){
        $('.navbar-collapse').removeClass('in');
        jQuery('#search-box').slideUp();	
    }); 
    $("#box-form-search").not(".binded").addClass("binded").click(function () {
        $("#search-box, .suggest-box").slideToggle();
        $('.navbar-collapse').removeClass('in');
    });      
    jQuery('.side-find').insertAfter('.bottoms');
    jQuery('.side-find').insertAfter('.errors');  
    jQuery('.show-all').hide();
    jQuery('.list-highlight:gt(3)').hide();
    jQuery('.show-item').click(function() {
        jQuery('.list-highlight:gt(3)').slideDown( "slow", function() {
            jQuery(this).show();
            jQuery('.show-all').show();
        });
        jQuery(this).hide();
    });  
}
        
function tabletScreen() {
     
    jQuery("#home-mob" ).insertBefore( "#nav-left" );
    jQuery("#nav-mob" ).insertBefore( "#nav-left" );
    jQuery("#box-search" ).insertAfter( "#nav-mob" );
    jQuery("#logo" ).insertAfter( "#box-search" );	
    jQuery("#logo-support" ).insertAfter( "#home-mob" );
    jQuery("#sm-socmed" ).insertAfter( "#sm-links" );
    jQuery("#back-mob" ).insertBefore( "#foot-support" );
    jQuery("#language-selector" ).insertAfter( "#back-mob" );	
    jQuery("#search-box").insertAfter('.block-top');
    jQuery(".suggest-box").insertAfter('#search-box');  
    jQuery("#sidebar-article").insertAfter('#sharing-article');  
    jQuery('.share-service').appendTo('.box-pelanggan');    
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() == 0) {
            jQuery('#header').css({
                    'box-shadow': 'none',
                    '-moz-box-shadow' : 'none',
                    '-webkit-box-shadow' : 'none' });
        }
        else {
            jQuery('#header').css({
                    'box-shadow': '5px 5px 5px rgba(0, 0, 0, 0.25)',
                    '-moz-box-shadow' : '5px 5px 5px rgba(0, 0, 0, 0.25)',
                    '-webkit-box-shadow' : '5px 5px 5px rgba(0, 0, 0, 0.25)' });
        }
    }); 
    jQuery('.show-all').hide();
    jQuery('.list-highlight:gt(2)').hide();
    jQuery('.show-item').click(function() {
        jQuery('.list-highlight:gt(2)').slideDown( "slow", function() {
            jQuery(this).show();
             jQuery('.show-all').show();
        });
        jQuery(this).hide();
    });
    $('#nav-mob').click(function(){
        jQuery('#search-box').slideUp();
    });
    jQuery('.navbar-collapse').click('li', function() {
      jQuery('.navbar-collapse').collapse('hide');
      jQuery('#search-box').slideUp();
    });
    jQuery('#top-left-menu').click(function(){
        $('.navbar-collapse').removeClass('in');
        jQuery('#search-box').slideUp();
    });     
    $("#box-form-search").not(".binded").addClass("binded").click(function () {
        $("#search-box, .suggest-box").slideToggle();
        $('.navbar-collapse').removeClass('in');
    });    
}

   
//$(window).load(function() {
//
//});

$(window).resize(function() { 
    if($(this).width() >= 320 && $(this).width() <= 540) {
        mobileScreen();
        $('#banner-slider, #banner-support, #banner-services, #banner-shop, #banner-store-locator, #banner-site-search').css({'margin-top':'60px'});
    }
    else if ($(this).width() > 540 && $(this).width() < 1025) {  
        tabletScreen();  
        $('#banner-slider, #banner-support, #banner-services, #banner-shop, #banner-store-locator, #banner-site-search').css({'margin-top':'69px'});
    }
    else if ($(this).width() > 1024){
        $('#banner-slider, #banner-support, #banner-services, #banner-store-locator').css({'margin-top':'-26px'});
        $('#banner-shop, #banner-site-search').css({'margin-top':'-98px'});
        /* Highlight List */
        $('.show-all').hide();
        $('.list-highlight:gt(4)').hide();
        $('.show-item').click(function() {
            $('.list-highlight:gt(5)').slideDown( "slow", function() {
                $(this).show();
                 $('.show-all').show();
            });
            $(this).hide();
        }); 
        // End highlight        
        jQuery("#nav-mob" ).appendTo( ".block-nav" );
        jQuery("#logo" ).insertBefore( ".navigation" );
//        jQuery("#foot-subscribe").insertAfter( "#foot-socmed" );
        jQuery(".soc-like-support" ).appendTo( ".col-md-3.hidden-sm" );	
        jQuery("#search-box").insertAfter('.language');
        jQuery(".suggest-box").insertAfter('#search-box');
        jQuery("#sidebar-article").insertAfter('#article-content .col-md-7.col-xs-12.col-sm-12');
        jQuery('.item-paket .box-ket').each(function() {
            $(this).insertAfter( $(this).next('.spaces') );
        });        
        jQuery('.mob-ord.box-ket').insertAfter('.mob-ord.spaces');   
        jQuery(".activate-register .box-images").insertBefore('.activate-register h6'); 
    }
});