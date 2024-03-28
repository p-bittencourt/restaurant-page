export function criarMenu() {
  let body = document.createElement("div");
  body.classList.add("container", "text-center", "p-5");

  let h1 = document.createElement("h1");
  h1.textContent = "Cardápio";
  body.appendChild(h1);

  let menuDiv = document.createElement("div");
  let p1 = document.createElement("p");
  p1.textContent = "Prato 1: R$ 20,00";
  menuDiv.appendChild(p1);
  let p2 = document.createElement("p");
  p2.textContent = "Prato 2: R$ 25,00";
  menuDiv.appendChild(p2);
  let p3 = document.createElement("p");
  p3.textContent = "Prato 3: R$ 30,00";
  menuDiv.appendChild(p3);
  let p4 = document.createElement("p");
  p4.textContent = "Prato 4: R$ 35,00";
  menuDiv.appendChild(p4);
  let p5 = document.createElement("p");
  p5.textContent = "Prato 5: R$ 40,00";
  menuDiv.appendChild(p5);
  body.appendChild(menuDiv);

  return body;
}
