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
}

const timer = ms => new Promise(res => setTimeout(res, ms))
async function load () { // We need to wrap the loop into an async function for this to work
    for (let i = 0; i < beaches.length; i++) {
      const beach = beaches[i];
      const beach2 = beaches2[i];
      const beach3 = beaches3[i];
      const images= {
        url: "./images/bus-2.png",
        // This marker is 20 pixels wide by 32 pixels high.
        // size: new google.maps.Size(20, 32),
        scaledSize: new google.maps.Size(40, 40),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        // anchor: new google.maps.Point(0, 32),
      };
      addMarker({ lat: beach[1], lng: beach[2] },beach[0], images)
      addMarker({ lat: beach2[1], lng: beach2[2] },beach2[0], images)
      addMarker({ lat: beach3[1], lng: beach3[2] },beach3[0], images)
      // setMapOnAll(null);
      // beach.setMap(null);
      await timer(1000); // then the created Promise can be awaited
    }
  }

  async function loadSigle1 () { // We need to wrap the loop into an async function for this to work
    for (let i = 0; i < beaches.length; i++) {
      const beach = beaches[i];
      const images= {
        url: "./images/bus-2.png",
        // This marker is 20 pixels wide by 32 pixels high.
        // size: new google.maps.Size(20, 32),
        scaledSize: new google.maps.Size(40, 40),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        // anchor: new google.maps.Point(0, 32),
      };
      addMarker({ lat: beach[1], lng: beach[2] },beach[0], images)
      // setMapOnAll(null);
      // beach.setMap(null);
      await timer(1000); // then the created Promise can be awaited
    }
  }

  async function loadSigle2 () { // We need to wrap the loop into an async function for this to work
    for (let i = 0; i < beaches.length; i++) {
      const beach2 = beaches2[i];
      const images= {
        url: "./images/bus-2.png",
        // This marker is 20 pixels wide by 32 pixels high.
        // size: new google.maps.Size(20, 32),
        scaledSize: new google.maps.Size(40, 40),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        // anchor: new google.maps.Point(0, 32),
      };
      addMarker({ lat: beach2[1], lng: beach2[2] },beach2[0], images)
      // setMapOnAll(null);
      // beach.setMap(null);
      await timer(1000); // then the created Promise can be awaited
    }
  }

  async function loadSigle3 () { // We need to wrap the loop into an async function for this to work
    for (let i = 0; i < beaches.length; i++) {
      const beach3 = beaches3[i];
      const images= {
        url: "./images/bus-2.png",
        // This marker is 20 pixels wide by 32 pixels high.
        // size: new google.maps.Size(20, 32),
        scaledSize: new google.maps.Size(40, 40),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        // anchor: new google.maps.Point(0, 32),
      };
      addMarker({ lat: beach3[1], lng: beach3[2] },beach3[0], images)
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
function addMarker(location, name, images) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: name,
    icon: images,
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
