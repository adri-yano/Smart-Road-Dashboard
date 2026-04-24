function showLogin() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("buttons").style.display = "none";
}

function showSignup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("buttons").style.display = "none";
}

// SIGNUP
function signup() {
  let user = document.getElementById("signupUser").value;
  let pass = document.getElementById("signupPass").value;

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  document.getElementById("msg").innerText = "Signup successful! Redirecting...";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

// LOGIN
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    window.location.href = "index.html";
  } else {
    document.getElementById("msg").innerText = "Invalid login!";
  }
}
//back
document.getElementById('backBtn').addEventListener('click', () => {
    window.history.back();
});