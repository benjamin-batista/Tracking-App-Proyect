// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
let map;
let markers = [];

function initMap() {
  const haightAshbury = { lat: 28.639321, lng: -106.073284 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: haightAshbury,
  });
  // This event listener will call addMarker() when the map is clicked.
  map.addListener("click", (event) => {
    both();
    Stations();
    Locations();
  });
}

const timer = ms => new Promise(res => setTimeout(res, ms))
async function load () { // We need to wrap the loop into an async function for this to work
    for (let i = 0; i < beaches.length; i++) {
      const beach = beaches[i];
      const beach2 = beaches2[i];
      addMarker({ lat: beach[1], lng: beach[2] })
      addMarker({ lat: beach2[1], lng: beach2[2] })
      // setMapOnAll(null);
      // beach.setMap(null);
      await timer(1000); // then the created Promise can be awaited
    }
  }

  async function loadSigle () { // We need to wrap the loop into an async function for this to work
    for (let i = 0; i < beaches.length; i++) {
      const beach = beaches[i];
      const beach2 = beaches2[i];
      addMarker({ lat: beach[1], lng: beach[2] })
      // setMapOnAll(null);
      // beach.setMap(null);
      await timer(1000); // then the created Promise can be awaited
    }
  }

  async function loadd () { // We need to wrap the loop into an async function for this to work
    for (let i = 0; i < beaches.length; i++) {
        deleteMarkers()
        // setMapOnAll(null);
        // beach.setMap(null);
        await timer(1300); // then the created Promise can be awaited
      }
  }

// Adds a marker to the map and push to the array.
function addMarker(location) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}
