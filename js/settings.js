// Load saved settings when page opens
window.onload = function () {

  let savedMin = localStorage.getItem("minWater");
  let savedMax = localStorage.getItem("maxWater");

  if (savedMin && savedMax) {

    document.getElementById("out").innerHTML =
      `
      <strong>Saved Settings</strong><br>
      Minimum Water Level: ${savedMin}%<br>
      Maximum Water Level: ${savedMax}%
      `;
  }
};

// Save settings
function saveSettings() {

  let min = Number(document.getElementById("minWater").value);
  let max = Number(document.getElementById("maxWater").value);

  let output = document.getElementById("out");

  // Validation
  if (isNaN(min) || isNaN(max)) {
    output.innerText = "Please fill all fields!";
    return;
  }

  if (min < 0 || max <= min) {
    output.innerText =
      "Enter valid values (Max must be greater than Min)";
    return;
  }

  // SAVE TO LOCAL STORAGE
  localStorage.setItem("minWater", min);
  localStorage.setItem("maxWater", max);

  // Show saved values
  output.innerHTML =
    `
    <strong>Settings Saved Successfully</strong><br>
    Minimum Water Level: ${min}%<br>
    Maximum Water Level: ${max}%
    `;
}