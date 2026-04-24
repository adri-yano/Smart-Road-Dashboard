function saveSchedule() {
  let clean = document.getElementById("cleanTime").value;
  let irrigate = document.getElementById("irrigationTime").value;

  document.getElementById("msg").innerText =
    "Saved: Cleaning every " + clean + " hrs, Irrigation every " + irrigate + " hrs";
}