const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if(email.value === "" || password.value === ""){
    alert("Please, fill in all fields");
  }else{
    const user = {
      email: email.value,
      password: password.value
    }
    console.log(user);
    e.currentTarget.reset();
  }
}
