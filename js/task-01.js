const itemEl = document.querySelectorAll("#categories .item");
const categoriesNum = itemEl.length;

console.log(`Number of categories: ${categoriesNum}`);

for (let i = 0; i < itemEl.length; i += 1) {
  const h2ElText = itemEl[i].firstElementChild.textContent;
  const liElQty = itemEl[i].lastElementChild.children.length;
  console.log(`Category: ${h2ElText}`);
  console.log(`Elements: ${liElQty}`);
}
