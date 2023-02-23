const refs = {
  divBoxesEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('input'),
  createBtnEl: document.querySelector('button[data-create]'),
  destroyBtnEl: document.querySelector('button[data-destroy]'),
}

refs.createBtnEl.addEventListener('click',createElements);
refs.destroyBtnEl.addEventListener('click',destroyElements);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount){
  let boxes = '';
  let size = 30;

  for(let i = 0; i < amount; i += 1){
    const color = getRandomHexColor();
    boxes += `<div style="background-color:${color};width: ${size}px;height: ${size}px; margin-bottom: 10px"></div>`
    size += 10;
  }

  return boxes;
}

function createElements(){
  const amount = Number(refs.inputEl.value);
  const boxesToAdd = createBoxes(amount);
  refs.divBoxesEl.insertAdjacentHTML('beforeend',boxesToAdd);
}

function destroyElements(){
  refs.divBoxesEl.innerHTML = '';
}