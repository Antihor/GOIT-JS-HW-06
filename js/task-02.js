const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");
/*const item = document.createElement('li')
item.className = 'item'
item.textContent = component*/

const compList = ingredients.map((component) => {
  const item = document.createElement("li");
  item.classList.add = "item";
  item.textContent = component;

  return item;
});

listRef.append(...compList);
//console.log(listRef);
