$(document).ready(function(){
    	$('.modal').modal();

    	$('#modal2').on('shown.bs.modal', function () 
		{
		    google.maps.event.trigger(map, "resize");
		});
  });
          

var center = new google.maps.LatLng(30.2953758,-97.74336929999998);
var center2 = new google.maps.LatLng(30.2872554,-97.7250153);
var center3 = new google.maps.LatLng(30.2789954,-97.74239169999998);

function initMap() {

    var mapOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: center
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    var marker = new google.maps.Marker({
        map: map,
        position: center
    });

    map2 = new google.maps.Map(document.getElementById('map_canvas2'), mapOptions);

    var marker2 = new google.maps.Marker({
        map: map2,
        position: center2
    });

    map3 = new google.maps.Map(document.getElementById('map_canvas3'), mapOptions);

    var marker3 = new google.maps.Marker({
        map: map3,
        position: center3
    });
}

initMap();