$(document).ready(function() {
    
    var ww = $(window).width();
    if (ww >= 501 && ww <= 1024) {            
        $("#list-news").carouFredSel({
            items               : 2,
            direction           : "left",
            auto: {
              play:false,
            },
            scroll : {
                items           : 2,
                duration        : 1000,                         
                pauseOnHover    : true
            }, 
			swipe: {
				onTouch: true,
				onMouse: true
			},             
            prev    : { 
                button  : "#news-prev",
                key     : "left"
            },
            next    : { 
                button  : "#news-next",
                key     : "right"
            }
        });         
    } 
    else if(ww < 501) {
        $("#list-news").carouFredSel({
			width: "82%",
			height: "auto",
			responsive: true,
            items               : 1,
            direction           : "left",
            auto: {
              play:false,
            },
            scroll : {
                items           : 1,
                duration        : 1000,                         
                pauseOnHover    : true
            }, 
			swipe: {
				onTouch: true,
				onMouse: true
			},
            prev    : { 
                button  : "#news-prev",
                key     : "left"
            },
            next    : { 
                button  : "#news-next",
                key     : "right"
            }			
        });                 
    }
    else {       
        $("#list-news").carouFredSel({
            items               : 3,
            direction           : "left",
            auto: {
              play:false,
            },
            scroll : {
                items           : 3,
                duration        : 1000,                         
                pauseOnHover    : true
            },  
            prev    : { 
                button  : "#news-prev",
                key     : "left"
            },
            next    : { 
                button  : "#news-next",
                key     : "right"
            }
        });               
    }
    
});