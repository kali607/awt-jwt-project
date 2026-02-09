function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

function showLogin() {
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

/* REGISTER */
function register() {
  const email_input = document.getElementById("regEmail");
  const password_input = document.getElementById("regPassword");
  const errorBox = document.getElementById("registerErrors");

  const email = email_input.value.trim();
  const password = password_input.value;

  let errors = [];
  errorBox.innerHTML = "";

  if (email === "" || email == null) {
    errors.push("Email is required");
  }

  if (password === "" || password == null) {
    errors.push("Password is required");
  }

  if (password.length < 8) {
    errors.push("Password must have at least 8 characters");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must include at least one uppercase letter");
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push("Password must include at least one special character");
  }

  if (errors.length > 0) {
    errors.forEach(err => {
      const li = document.createElement("li");
      li.textContent = err;
      errorBox.appendChild(li);
    });
    return;
  }

  showLogin();
}

/* LOGIN */
function login() {
  const email_input = document.getElementById("loginEmail");
  const password_input = document.getElementById("loginPassword");
  const errorBox = document.getElementById("loginErrors");

  const email = email_input.value.trim();
  const password = password_input.value;

  let errors = [];
  errorBox.innerHTML = "";

  if (email === "" || email == null) {
    errors.push("Email is required");
  }

  if (password === "" || password == null) {
    errors.push("Password is required");
  }

  if (errors.length > 0) {
    errors.forEach(err => {
      const li = document.createElement("li");
      li.textContent = err;
      errorBox.appendChild(li);
    });
    return;
  }

  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("landingBox").classList.remove("hidden");
}