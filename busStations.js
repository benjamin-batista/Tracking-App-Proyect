// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
let markersStations = [];

function Stations(){
  loadStations();
}

function loadStations () { // We need to wrap the loop into an async function for this to work
    for (let i = 0; i < stations.length; i++) {
      const stat = stations[i];
      const imagess= {
        url: "./images/station.png",
        // This marker is 20 pixels wide by 32 pixels high.
        // size: new google.maps.Size(20, 32),
        scaledSize: new google.maps.Size(30, 30),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32),
      };
      addMarkerStations({ lat: stat[1], lng: stat[2] }, stat[0],imagess)
    }
  }

// Adds a marker to the map and push to the array.
function addMarkerStations(locationStations, name, images) {
  const stations = new google.maps.Marker({
    position: locationStations,
    map: map,
    title: name,
    icon: images,
  });
  console.log(stations)
  markersStations.push(stations);
}

// Sets the map on all markers in the array.
function setMapOnAllStations(map) {
  for (let i = 0; i < markersStations.length; i++) {
    markersStations[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkersStations() {
    console.log(markersStations)
  setMapOnAllStations(null);
}

// Shows any markers currently in the array.
function showMarkersStations() {
  setMapOnAllStations(map);
}
