const refs = {
  bodyEl: document.querySelector("body"),
  btnChangeColorEl: document.querySelector(".change-color"),
  spanColorEl: document.querySelector(".color"),
};

refs.btnChangeColorEl.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();
  refs.spanColorEl.textContent = color;
  refs.bodyEl.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
