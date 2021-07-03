let markersLocations = [];
let watchID;
let geoLoc;

function Locations(){
  getLocation();
}

// function loadLocations () { // We need to wrap the loop into an async function for this to work
//     for (let i = 0; i < stations.length; i++) {
//       const stat = stations[i];
//       addMarkerStations({ lat: stat[1], lng: stat[2] })
//     }
//   }

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
    console.log("Latitud:"+ latitud + "Longitud"+ longitud);

    addMarkerLocations({lat: latitud, lng: longitud})
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
function addMarkerLocations(locationLocations) {
  const locations = new google.maps.Marker({
    position: locationLocations,
    map: map,
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
