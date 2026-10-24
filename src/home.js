import foodImg from "./images.jpeg";

export default function loadHome() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant Name";

  const p = document.createElement("p");
  p.textContent = "Fresh food, warm vibes, and the best meals in town.";

  const img = document.createElement("img");
  img.src = foodImg;
  img.alt = "Restaurant food";

  content.append(h1, p, img);
}