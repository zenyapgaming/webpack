export default function loadMenu() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";

  const p = document.createElement("p");
  p.textContent = "Dish 1, Dish 2, Dish 3";

  content.append(h1, p);
}