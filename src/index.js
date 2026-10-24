import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

loadHome();

document.querySelector("#home").addEventListener("click", loadHome);
document.querySelector("#menu").addEventListener("click", loadMenu);
document.querySelector("#contact").addEventListener("click", loadContact);