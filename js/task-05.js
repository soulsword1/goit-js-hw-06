const inputEl = document.querySelector('#name-input');
const spanNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', addSpanName);

function addSpanName(){
    inputEl.value === '' ? spanNameEl.textContent ='Anonymous' :spanNameEl.textContent = inputEl.value;
}