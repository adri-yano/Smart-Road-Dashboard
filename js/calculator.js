function calculate() {
  let length = document.getElementById("length").value;
  let water = length * 2; 
  document.getElementById("result").innerText = "Water needed: " + water + " L";
}