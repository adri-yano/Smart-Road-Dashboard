function saveSettings() {
  let min = document.getElementById("minWater").value;
  let max = document.getElementById("maxWater").value;

  document.getElementById("out").innerText =
    "Settings saved: Min " + min + "%, Max " + max + "%";
}