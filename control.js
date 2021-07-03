
function both(){
    load();
    loadd();
  }
  
function single(){
    loadSigle();
    loadd();
  }

function hideStations(){
    clearMarkersStations();
  }

function showStations(){
    loadStations();
    showMarkersStations();
  }

function hideLocations(){
    clearMarkersLocations();
}

function showLocations(){
    getLocation();
    showMarkersLocations();
  }
