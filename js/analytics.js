window.onload = function () {
  // Fake data simulation
  let rainfall = Math.floor(Math.random() * 1500);
  let water = Math.floor(Math.random() * 800);
  let cleaning = Math.floor(Math.random() * 50);

  document.getElementById("rain").innerText = rainfall;
  document.getElementById("water").innerText = water;
  document.getElementById("clean").innerText = cleaning;
};