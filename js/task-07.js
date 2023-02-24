const inputFontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputFontSizeEl.addEventListener("input", fontChange);

function fontChange() {
  textEl.style.fontSize = inputFontSizeEl.value + "px";
}
