const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  email.value === "" || password.value === ""
    ? alert("Please, fill in all fields")
    : console.log(`Email: ${email.value}, Password: ${password.value}`);

  e.currentTarget.reset();
}
