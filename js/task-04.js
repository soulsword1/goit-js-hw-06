const refs = {
  spanEl: document.querySelector("span"),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  btnDecrement: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

function incrementSpanValue() {
  counterValue = Number(refs.spanEl.textContent);
  refs.spanEl.textContent = counterValue + 1;
}

function decrementSpanValue() {
  counterValue = Number(refs.spanEl.textContent);
  refs.spanEl.textContent = counterValue - 1;
}

refs.btnIncrement.addEventListener("click", incrementSpanValue);
refs.btnDecrement.addEventListener("click", decrementSpanValue);
