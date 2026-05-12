/*function saveSettings() {
  let min = document.getElementById("minWater").value;
  let max = document.getElementById("maxWater").value;

  localStorage.setItem("minWater", min);
  localStorage.setItem("maxWater", max);

  document.getElementById("out").innerText = "Settings saved!";
}

window.onload = function () {
  document.getElementById("minWater").value = localStorage.getItem("minWater") || "";
  document.getElementById("maxWater").value = localStorage.getItem("maxWater") || "";
};*/
function saveSettings() {
  let min = document.getElementById("minWater").value;
  let max = document.getElementById("maxWater").value;

  if (min === "" || max === "") {
    document.getElementById("out").innerText = "Please fill all fields!";
    return;
  }

  if (min < 0 || max <= min) {
    document.getElementById("out").innerText =
      "Enter valid values (Max > Min, no negatives)";
    return;
  }

  // Save to localStorage
  localStorage.setItem("minWater", min);
  localStorage.setItem("maxWater", max);

  // Display saved values
  document.getElementById("out").innerText =
    "Saved Settings → Min: " + min + "% | Max: " + max + "%";
}

// Load saved values on page load
window.onload = function () {
  let min = localStorage.getItem("minWater");
  let max = localStorage.getItem("maxWater");

  if (min && max) {
    document.getElementById("out").innerText =
      "Saved Settings → Min: " + min + "% | Max: " + max + "%";
  }
};