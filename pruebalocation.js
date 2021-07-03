let map;
let marker;
let watchID;
let geoLoc;

function initMap() {
    const myLatLng = {lat: 19.42847, lng: -99.12766};
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 13,
  });
  const svgMarker = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  };
  marker = new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hola mundo",
      icon: svgMarker,
  });
  getPosition();
  marker.setPosition(myLatLng);
}

function getPosition(){
    if(navigator.geolocation){
        var options = {timeout:1000};
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler, options);
    } else{
        alert("Lo sentimos el explorador no soporta geolocalizacion")
    }
}

function showLocationOnMap(position){
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    console.log("Latitud:"+ latitud + "Longitud"+ longitud);

    const myLatLng = {lat: latitud, lng: longitud};
    marker.setPosition(myLatLng);
    map.setCenter(myLatLng);
}

function errorHandler(err){
    if(err.code == 1){
        alert("Error: Acceso denegado!");
    } else if(err.code == 2){
        alert("Position no existe o no se encuentra");
    }
}