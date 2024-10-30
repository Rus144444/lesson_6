const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//  Напиши скрипт, который для каждого элемента массива
// ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод
// document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список
// ul#ingredients.

const element = ingredients.map((el, idx) => {
  const liElement = document.createElement("li");
  liElement.textContent = `Это тег ${idx + 1}`;
  return liElement;
});

const el = document.querySelector("#ingredients");
el.append(...element);
