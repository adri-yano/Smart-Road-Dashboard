window.onload = function () {

  let rainfall = Math.floor(Math.random() * 1500);
  let water = Math.floor(Math.random() * 800);
  let cleaning = Math.floor(Math.random() * 50);

  document.getElementById("rain").innerText = rainfall;
  document.getElementById("water").innerText = water;
  document.getElementById("clean").innerText = cleaning;

  // NEW: Efficiency
  let efficiency = ((water / rainfall) * 100).toFixed(1);
  document.getElementById("efficiency").innerText = efficiency + "%";
};