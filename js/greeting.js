const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const CLASSNAME_HIDDEN = "hidden";
const KEY_USERNAME = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(CLASSNAME_HIDDEN);
  localStorage.setItem(KEY_USERNAME, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(KEY_USERNAME);
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}

if (savedUsername === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
