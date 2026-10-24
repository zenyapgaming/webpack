export default function loadContact() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Contact";

  const p = document.createElement("p");
  p.textContent = "Phone: 012-345 6789, Email: hello@restaurant.com";

  content.append(h1, p);
}