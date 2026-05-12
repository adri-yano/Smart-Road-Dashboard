function calculate() {
  let length = document.getElementById("length").value;

  if (length <= 0) {
    document.getElementById("result").innerText =
      "Please enter a valid positive number!";
    return;
  }
  if (!length) {
    alert("Enter road length!");
    return;
  }

  let cleaningWater = length * 2;
  let irrigationWater = length * 1.2;

  document.getElementById("result").innerHTML =
    "Cleaning Water: " + cleaningWater + " L<br>" +
    "Irrigation Water: " + irrigationWater + " L";
}