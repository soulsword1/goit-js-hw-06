const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredients[i];
  liEl.classList.add("item");
  ulEl.append(liEl);
}
