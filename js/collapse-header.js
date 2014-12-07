$(window).on("load resize scroll",function(e){
    
    var shrinkHeader = 100;
    var scroll = getCurrentScroll();      
    
    if($(this).width() >= 320 && $(this).width() <= 540) {
      if ( scroll >= shrinkHeader ) {
            $('#banner-shop, #banner-site-search').css({'margin-top':'60px'});
            $('.block-nav').css({
                'padding-top':'0',
                'min-height':'0px',
                'margin-top':'0px'
            });	
            $('.block-nav ul li').css({'border-right':'none'});
            $('#breadcrumb').hide();  
            $('.block-top, .nav-top, .language, .expand-menu').show();  
            $('#search-box').insertAfter('.language');
            $('.suggest-box').insertAfter('#search-box');
            $('.navigation').css({
                'width':'auto'
            });	          
            $('#header').css({'min-height':'60px'});
            $('.collapse-menu').css('display','block');	
            $('#header').removeClass('shrink'); 
        }     
        else {
            $('#header').css({'min-height':'60px'});
            $('.block-nav').css({
                'padding-top':'0px',
                'min-height':'0px',
                'margin-top':'0px'
            });	
            $('.block-nav ul li').css({'border-right':'none'});
        }
    }
    if($(this).width() > 540 && $(this).width() <= 1024) {
      if ( scroll >= shrinkHeader ) {
            $('#banner-shop, #banner-site-search').css({'margin-top':'69px'});
            $('.block-nav').css({
                'padding-top':'0',
                'min-height':'0px',
                'margin-top':'0px'
            });		 
            $('.block-nav ul li').css({'border-right':'none'});
            $('#breadcrumb').hide();  
            $('.block-top, .nav-top, .language, .expand-menu').show();  
            $('#search-box').insertAfter('.language');
            $('.suggest-box').insertAfter('#search-box');
            $('.navigation').css({
                'width':'auto'
            });	          
            $('#header').css({'min-height':'69px'});
            $('.collapse-menu').css('display','block');	
            $('#header').removeClass('shrink'); 
        }
        else {
            $('#header').css({'min-height':'69px'});
            $('.block-nav').css({
                'padding-top':'0px',
                'min-height':'0px',
                'margin-top':'0px'
            });	 
            $('.block-nav ul li').css({'border-right':'none'});
        }
    }
    if($(this).width() > 1024) {
        if ( scroll >= shrinkHeader ) {
           $('#header').addClass('shrink');
           $('#banner-shop, #banner-site-search').css({'margin-top':'100px'});
           $('#header').css({
                'min-height':'70px', 'top' :'0px' });      
           $('.block-top, .nav-top, .language, .expand-menu, #breadcrumb').hide();       
           $('#search-box').insertAfter('.navigation');
           $('.block-nav').css({
                'padding-top':'0px',
                'min-height':'35px',
                'margin-top':'15px'
           });
            $('.block-nav ul li').css({'border-right':'1px solid #e5e5e5'});
            $('.block-nav ul li:last-child').css({'border-right':'none'});
           $('.collapse-menu').css('display','block');
            $('.navigation').css({
                'width':'50%'
            });	
            $('.suggest-box').insertAfter('#search-box');
        }
        else {
            if ($('#breadcrumb').length > 0) { 
                $('#banner-shop, #banner-site-search').css({'margin-top':'-98px'});    
            }
            else {
                $('#banner-shop, #banner-site-search').css({'margin-top':'-25px'});
            }
            
            $('.block-nav').css({
                'padding-top':'20px',
                'min-height':'50px',
                'margin-top':'0px'
            });		 
            $('.block-top, .nav-top, .language, .expand-menu, #breadcrumb').show();  
            $('#search-box').insertAfter('.language');
            $('.suggest-box').insertAfter('#search-box');
            $('.navigation').css({
                'width':'83.33333333%'
            });	          
            $('#header').css({
                    'min-height':'70px'});
            $('.collapse-menu').css('display','none');	
            $('#header').removeClass('shrink');   
            $('.block-nav ul li').css({'border-right':'1px solid #e5e5e5'});
            $('.block-nav ul li:last-child').css({'border-right':'none'});
        }     
    }
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }     
});

