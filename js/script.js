/*let waterLevel = 50;
let rain = false;

let cleaningOn = false;
let irrigationOn = false;

// Rain toggle
function toggleRain() {
  rain = !rain;
  let rainText = document.getElementById("rainStatus");

  rainText.innerText = "Rain: " + (rain ? "ON" : "OFF");
  rainText.className = rain ? "status-on" : "status-off";
}

// Manual controls
function startCleaning() {
  if (waterLevel > 30) {
    cleaningOn = true;
  } else {
    alert("Not enough water!");
  }
}

function startIrrigation() {
  if (waterLevel > 20) {
    irrigationOn = true;
  } else {
    alert("Water too low!");
  }
}

// AUTOMATION LOOP
setInterval(() => {

  // Rain increases water
  if (rain && waterLevel < 100) {
    waterLevel += 2;
  }

  // Cleaning uses water
  if (cleaningOn && waterLevel > 0) {
    waterLevel -= 3;
  }

  // Irrigation uses water
  if (irrigationOn && waterLevel > 0) {
    waterLevel -= 2;
  }

  // Auto stop if low water
  if (waterLevel <= 10) {
    cleaningOn = false;
    irrigationOn = false;
  }

  // Auto irrigation
  if (waterLevel > 60) {
    irrigationOn = true;
  }

  // Auto cleaning (every few seconds)
  if (waterLevel > 70 && Math.random() > 0.7) {
    cleaningOn = true;
  }

  // Update water text
  document.getElementById("waterValue").innerText = Math.floor(waterLevel) + "%";

  // Update bar
  let bar = document.getElementById("waterBar");
  bar.style.width = waterLevel + "%";

  // Change bar color
  if (waterLevel > 60) {
    bar.style.background = "green";
  } else if (waterLevel > 30) {
    bar.style.background = "orange";
  } else {
    bar.style.background = "red";
  }

  // Update status
  let cleaning = document.getElementById("cleaning");
  let irrigation = document.getElementById("irrigation");

  cleaning.innerText = "Cleaning: " + (cleaningOn ? "ON" : "OFF");
  cleaning.className = cleaningOn ? "status-on" : "status-off";

  irrigation.innerText = "Irrigation: " + (irrigationOn ? "ON" : "OFF");
  irrigation.className = irrigationOn ? "status-on" : "status-off";

  // System info
  let info = document.getElementById("systemInfo");

  if (waterLevel < 20) {
    info.innerText = "Warning: Low Water Level";
  } else if (rain) {
    info.innerText = "Rain detected: Filling tank";
  } else {
    info.innerText = "System running normally";
  }

}, 1000);*/
let waterLevel = 50;
let rain = false;

let cleaningOn = false;
let irrigationOn = false;

// Toggle Rain
function toggleRain() {
  rain = !rain;
  updateRainUI();
}

// Manual Controls
function startCleaning() {
  if (waterLevel > 30) {
    cleaningOn = true;
  } else {
    alert("Not enough water!");
  }
}

function startIrrigation() {
  if (waterLevel > 20) {
    irrigationOn = true;
  } else {
    alert("Water too low!");
  }
}

// Reset System (VERY IMPORTANT FOR DEMO)
function resetSystem() {
  waterLevel = 50;
  rain = false;
  cleaningOn = false;
  irrigationOn = false;

  updateRainUI();
}

// Update Rain UI
function updateRainUI() {
  let rainText = document.getElementById("rainStatus");
  rainText.innerText = "Rain: " + (rain ? "ON" : "OFF");
  rainText.className = rain ? "status-on" : "status-off";
}

// MAIN AUTOMATION LOOP
setInterval(() => {

  // Rain increases water
  if (rain && waterLevel < 100) {
    waterLevel += 2;
  }

  // Cleaning consumes water
  if (cleaningOn && waterLevel > 0) {
    waterLevel -= 3;
  }

  // Irrigation consumes water
  if (irrigationOn && waterLevel > 0) {
    waterLevel -= 2;
  }

  // Prevent negative values
  if (waterLevel < 0) waterLevel = 0;

  // Auto stop if low water
  if (waterLevel <= 10) {
    cleaningOn = false;
    irrigationOn = false;
  }

  // Auto irrigation
  if (waterLevel > 60) {
    irrigationOn = true;
  }

  // Auto cleaning (random realistic behavior)
  if (waterLevel > 70 && Math.random() > 0.8) {
    cleaningOn = true;
  }

  // Update UI safely
  updateUI();

}, 1000);

// UI Update Function
function updateUI() {
  let waterText = document.getElementById("waterValue");
  let bar = document.getElementById("waterBar");
  let cleaning = document.getElementById("cleaning");
  let irrigation = document.getElementById("irrigation");
  let info = document.getElementById("systemInfo");

  if (!waterText || !bar) return;

  // Water display
  waterText.innerText = Math.floor(waterLevel) + "%";
  bar.style.width = waterLevel + "%";

  // Bar color
  if (waterLevel > 60) {
    bar.style.background = "green";
  } else if (waterLevel > 30) {
    bar.style.background = "orange";
  } else {
    bar.style.background = "red";
  }

  // Status
  cleaning.innerText = "Cleaning: " + (cleaningOn ? "ON" : "OFF");
  cleaning.className = cleaningOn ? "status-on" : "status-off";

  irrigation.innerText = "Irrigation: " + (irrigationOn ? "ON" : "OFF");
  irrigation.className = irrigationOn ? "status-on" : "status-off";

  // System message
  if (waterLevel < 20) {
    info.innerText = "⚠️ Warning: Low Water Level";
  } else if (rain) {
    info.innerText = "🌧️ Rain detected: Filling tank";
  } else {
    info.innerText = "✅ System running normally";
  }
}