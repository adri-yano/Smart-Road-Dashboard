/*function saveSchedule() {
  let clean = document.getElementById("cleanTime").value;
  let irrigate = document.getElementById("irrigationTime").value;

  localStorage.setItem("cleanTime", clean);
  localStorage.setItem("irrigationTime", irrigate);

  document.getElementById("msg").innerText = "Schedule saved!";
}

window.onload = function () {
  document.getElementById("cleanTime").value = localStorage.getItem("cleanTime") || "";
  document.getElementById("irrigationTime").value = localStorage.getItem("irrigationTime") || "";
}; */
function saveSchedule() {
  let clean = document.getElementById("cleanTime").value;
  let irrigate = document.getElementById("irrigationTime").value;

  if (clean === "" || irrigate === "") {
    document.getElementById("msg").innerText = "Please fill all fields!";
    return;
  }

  if (clean <= 0 || irrigate <= 0) {
    document.getElementById("msg").innerText =
      "Enter valid positive time values!";
    return;
  }

  // Save
  localStorage.setItem("cleanTime", clean);
  localStorage.setItem("irrigationTime", irrigate);

  // Show result
  document.getElementById("msg").innerText =
    "Saved Schedule → Cleaning: every " +
    clean +
    " hrs | Irrigation: every " +
    irrigate +
    " hrs";
}

// Load saved schedule
window.onload = function () {
  let clean = localStorage.getItem("cleanTime");
  let irrigate = localStorage.getItem("irrigationTime");

  if (clean && irrigate) {
    document.getElementById("msg").innerText =
      "Saved Schedule → Cleaning: every " +
      clean +
      " hrs | Irrigation: every " +
      irrigate +
      " hrs";
  }
};