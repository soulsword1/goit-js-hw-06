const itemEl = document.querySelectorAll("#categories .item");
const categoriesNum = itemEl.length;

console.log(`Number of categories: ${categoriesNum}`);

itemEl.forEach(el => {
  const h2ElText = el.firstElementChild.textContent;
  const liElQty = el.lastElementChild.children.length;
  console.log(`Category: ${h2ElText}`);
  console.log(`Elements: ${liElQty}`);
})