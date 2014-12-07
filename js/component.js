$(document).ready(function() {   
    
    /* Magazine homepage */
    $("#list-magazine").carouFredSel({
        circular: true,
        infinite: false,
        auto: false,
        items: {
            width: '100%',
            height: 'variable',
            visible: {
                min: 1,
                max: 999
            }
        },
        responsive: false,
        prev: {
            button: "#mag_prev",
            key: "left"
        },
        next: {
            button: "#mag_next",
            key: "right"
        },
        
        width: '100%',  
        swipe: {
            onMouse: true,
            onTouch: true
        },          
        pagination  : "#mag_pag"                        
    });
    /* end magazine */

    /* action on support details page */
	$('#click-no').click(function() {
		$('#box-helpusbetter').modal('show');
	});	
    /* End */
    
    /* all textbox placeholder */
	$('input[type=text], textarea').placeholder();
    /* end */

    /* Accordion site search page */
	$('.panel-collapse').on('show.bs.collapse',function(){
	    $(this).prev('.panel-heading').addClass("active-panel");
	});
	
	$('.panel-collapse').on('hide.bs.collapse',function(){
	    $(this).prev('.panel-heading').removeClass("active-panel");
	});		
    /* End Accordion */

    /* Load comment list article page */
    $(".item-comment").slice(0, 2).show(); 
    $("#load-comment").click(function(e){
        e.preventDefault();
        $(".item-comment:hidden").slice(0, 2).show();
    });
    /* End comment */     

    /* Highlight List */
    $('.show-all').hide();
    $('.list-highlight:gt(3)').hide();
    $('.show-item').click(function() {
        $('.list-highlight:gt(3)').slideDown( "slow", function() {
            $(this).show();
             $('.show-all').show();
        });
        $(this).hide();
    }); 
    // End highlight
    
    /* Cross browser css3 for IE */
    $(".image-container").css({backgroundSize: "cover"});
    if (window.PIE) {
        $('.circle, .btn, .box-icon, #magazine > ul > li, .box-title > h3, .block-images > .ribbon > span, input, .dropdown-menu, .shrink').each(function() {
            PIE.attach(this);
        });
    }  
    //End

    // Rules Form Register //
    jQuery.validator.addMethod("alphanumeric", function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
    });  

    jQuery.validator.addMethod("lettersonly", function(value, element) {
      return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please"); 

    $("#registration-form").validate({
        rules: {
            telkomid: {alphanumeric:true, required: true, minlength:5, maxlength:127},
            email: {email:true, required: true, maxlength:127},
            fname: {lettersonly:true, required: true, maxlength:127},
            lname: {lettersonly:true, required: true, maxlength:127},
            password: {required:true, maxlength:127},
            password_confirm: {required:true, maxlength:127, equalTo:"#password"},
            captcha: {required:true, maxlength:127},
        },
        messages: {
            telkomid : "Telkom ID only consist of Alphabet and numbers up to 10 chars. No Special Character.",
            email: "Email will have to be emails format",
            fname: "First Name alphabet only",
            lname: "Last Name alphabet only",
            lname: "Last Name alphabet only",
            password_confirm: "password and confirm password need to have the same value",
            captcha: "The field is mandatory"
        },
        tooltip_options: {
            telkomid: {trigger:'focus', placement:'bottom'},
            email: {trigger:'focus', placement:'bottom'},
            fname: {trigger:'focus', placement:'bottom'},
            lname: {trigger:'focus', placement:'bottom'},
            password: {trigger:'focus', placement:'bottom'},
            password_confirm: {trigger:'focus', placement:'bottom'},
            captcha: {trigger:'focus', placement:'bottom'},
        },
        highlight: function (element) {
            $(element).addClass('error').removeClass('valid')
                .closest('.form-group').addClass('error').removeClass('valid');
        },
        unhighlight: function (element) {
            $(element).addClass('valid').removeClass('error')
                .closest('.form-group').addClass('valid').removeClass('error');
        }
    });    
}); 