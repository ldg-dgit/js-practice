const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const CLASSNAME_HIDDEN = "hidden";
const KEY_USERNAME = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(CLASSNAME_HIDDEN);
  const usernameFromInput = loginInput.value;
  localStorage.setItem(KEY_USERNAME, usernameFromInput);
  paintGreetings(usernameFromInput);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}

const usernameFromLocal = localStorage.getItem(KEY_USERNAME);

if (usernameFromLocal === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(usernameFromLocal);
}
