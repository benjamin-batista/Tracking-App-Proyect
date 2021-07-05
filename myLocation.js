let markersLocations = [];
let watchID;
let geoLoc;

function Locations(){
  getLocation();
}

function getLocation(){
    if(navigator.geolocation){
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler);
    } else{
        alert("Lo sentimos el explorador no soporta geolocalizacion")
    }
}

function showLocationOnMap(position){
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    const imageloc= {
      url: "./images/location.png",
      // This marker is 20 pixels wide by 32 pixels high.
      // size: new google.maps.Size(20, 32),
      scaledSize: new google.maps.Size(40, 40),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      // anchor: new google.maps.Point(0, 32),
    };
    console.log("Latitud:"+ latitud + "Longitud"+ longitud);

    addMarkerLocations({lat: latitud, lng: longitud}, imageloc)
    marker.setPosition(myLatLng);
    // map.setCenter(myLatLng);
}

function errorHandler(err){
    if(err.code == 1){
        alert("Error: Acceso denegado!");
    } else if(err.code == 2){
        alert("Position no existe o no se encuentra");
    }
}

// Adds a marker to the map and push to the array.
function addMarkerLocations(locationLocations, imageloc) {
  const locations = new google.maps.Marker({
    position: locationLocations,
    map: map,
    title: "My location",
    icon: imageloc,
  });
  console.log(locations)
  markersLocations.push(locations);
}

// Sets the map on all markers in the array.
function setMapOnAllLocations(map) {
  for (let i = 0; i < markersLocations.length; i++) {
    markersLocations[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkersLocations() {
    console.log(markersLocations)
  setMapOnAllLocations(null);
}

// Shows any markers currently in the array.
function showMarkersLocations() {
  setMapOnAllLocations(map);
}
