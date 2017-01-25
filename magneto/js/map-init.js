var map;

function initMap() {
    var styles = [
        {
            stylers: [
                {hue: "#162934"},
                {saturation: -50},
                {lightness: -20},
                {gamma: 1.51},
                {invert_lightness: true}
            ]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {lightness: 80},
                {visibility: "simplified"},
                {color: '#2a556d'}
            ]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [
                {visibility: "off"},
            ]
        }
    ];

    var beaches = [
        ['Днепровская набережная, 14', 50.4018264, 30.6141222, 1],
        ['Мишуги, 10', 50.39699479, 30.63641131, 2]

    ];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 50.3999, lng: 30.62},
        styles: styles

    });
    var image = {
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
    };
    for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];
        var marker = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            title: beach[0],
            zIndex: beach[3],
        });
    }
    var mapDiv = document.getElementById('map');


}