import { criarHome } from "./home";
import { criarMenu } from "./menu";
import { criarAbout } from "./about";
import "../dist/assets/styles/style.css";

let content = document.querySelector(".content");
content.appendChild(criarHome());

let botaoHome = document.querySelector("#btn-home");
botaoHome.addEventListener("click", function () {
  content.innerHTML = "";
  content.appendChild(criarHome());
});

let botaoMenu = document.querySelector("#btn-menu");
botaoMenu.addEventListener("click", function () {
  content.innerHTML = "";
  content.appendChild(criarMenu());
});

let botaoAbout = document.querySelector("#btn-about");
botaoAbout.addEventListener("click", function () {
  content.innerHTML = "";
  content.appendChild(criarAbout());
});
