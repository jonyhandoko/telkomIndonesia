$(document).ready(function() {

	// Map View
	$('#map_canvas').gmap().bind('init', function() { 
		var image = new google.maps.MarkerImage('../img/pin-locator.png',
					new google.maps.Size(38, 47),
					new google.maps.Point(0,0),
					new google.maps.Point(18, 42)
		);
		$.getJSON( 'http://localhost:8000/js/json/storelocation.txt', function(data) { 
			$.each( data.telkomlocation, function(i, marker) {
				$('#map_canvas').gmap('addMarker', { 
					'position': new google.maps.LatLng(marker.latitude, marker.longitude), 
					'bounds': true,
				    'icon': image
				}).click(function() {
					$('#map_canvas').gmap('openInfoWindow', {'content': marker.content }, this);
				});
			});
		});
	});
	// End Map

	// Responsive 
	var ww = $(window).width();
	if (ww >= 320 && ww <= 480) { 

        jQuery("#list-nav").click(function(){
        	$('#map-loc').css('display', 'none');
        	$('#list-loc').css({
        		'display':'block', 
        		// 'margin-top':'100px',
        	});
        	$('#content-store-location').css('padding-top','70px');
        	$('.drop-location').html('List view');
        	$('#loc-1').css('display','none');
        	$('#loc-2').css('display','block');
        });
        jQuery("#map-nav").click(function(){
        	$('#list-loc').css('display', 'none');
        	$('#map-loc').css('display', 'block');
        	$('#content-store-location').css('padding-top','70px');
        	$('.drop-location').html('Map view');
        	$('#loc-1').css('display','block');
        	$('#loc-2').css('display','none');     	
        });

	}
	else if (ww > 481 && ww <= 1024) {
		$('#tab-location').removeClass('tabs-left');
	}

});