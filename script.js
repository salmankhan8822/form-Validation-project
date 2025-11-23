let loginBtn = document.getElementById("loginclick");
let username = document.getElementById("userName");
let password = document.getElementById("yourPassword");
let forgotpassword = document.getElementById("forgotPassword");

loginBtn.addEventListener("click", () => {
  let userInput = username.value.trim();
  let passwordInput = password.value.trim();

  if (userInput === "" && passwordInput === "") {
    alert("Username and password are required!");
    return;
  }

  if (userInput === "") {
    alert("Username is required!");
    return;
  }

  if (passwordInput === "") {
    alert("Password is required!");
    return;
  }

  if (passwordInput.length < 8) {
    alert("Password must be at least 8 characters long!");
    return;
  }

  if (userInput.length < 8) {
    alert("username must be atleast 8 character!");
    return;
  }

  if (!/[0-9]/.test(userInput)) {
    alert("username must have contain numbers!");
    return;
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(userInput)) {
    alert("username must have contain symbols!");
    return;
  }

  if (!/[A-Z]/.test(passwordInput)) {
    alert("Password must contain at least one UPPERCASE letter!");
    return;
  }

  if (!/[a-z]/.test(passwordInput)) {
    alert("Password must contain at least one lowercase letter!");
    return;
  }

  if (!/[0-9]/.test(passwordInput)) {
    alert("Password must contain at least one number!");
    return;
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordInput)) {
    alert("Password must contain at least one special symbol!");
    return;
  }

  alert("Login Successful ✅");
  loginBtn.innerText = "Login Successfully";

  setTimeout(() => {
    loginBtn.innerText = "Login";
  }, 2000);

  localStorage.setItem("loggedUser", userInput);
});

forgotpassword.addEventListener("click", () => {
  username.value = "";
  password.value = "";
  alert("Fields cleared!");
});

window.addEventListener("load", () => {
  const currentUser = localStorage.getItem("loggedUser");
  if (currentUser) {
    alert("Welcome back, " + currentUser + "!");
  }
});
