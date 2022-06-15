const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add("hidden");
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
