$(document).ready(function() {

	// Map View
	$('#map_canvas').gmap().bind('init', function() { 
		var image = new google.maps.MarkerImage('../img/pin-locator.png',
					new google.maps.Size(38, 47),
					new google.maps.Point(0,0),
					new google.maps.Point(18, 42)
		);
		$.getJSON( 'http://localhost:8000/js/json/default-location.txt', function(data) { 
			$.each( data.telkomlocation, function(i, marker) {
				$('#map_canvas').gmap('addMarker', { 
					'position': new google.maps.LatLng(marker.latitude, marker.longitude), 
					'bounds': true,
				    'icon': image,
				    'zoom':0
				}).click(function() {
					$('#map_canvas').gmap('openInfoWindow', {'content': marker.content }, this);
				});
			});
		});
	});
	// End Map

});