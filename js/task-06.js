const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", checkValidation);

function checkValidation(e) {
  const validLength = inputEl.getAttribute("data-length");
  const currentInputLength = e.currentTarget.value.length;

  if (currentInputLength < validLength) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
    return;
  }
  inputEl.classList.add("valid");
  inputEl.classList.remove("invalid");
}
