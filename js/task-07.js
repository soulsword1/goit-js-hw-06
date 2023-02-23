const inputFontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputFontSizeEl.addEventListener("change", fontChange);

function fontChange() {
  textEl.style.fontSize = inputFontSizeEl.value + "px";
}
