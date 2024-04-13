export function criarMenu() {
  let body = document.createElement("div");
  body.classList.add("container", "text-center", "p-5");

  let menuDiv = document.createElement("div");

  let breakfastDiv = document.createElement("div");
  breakfastDiv.classList.add("meal");
  let breakfastHeader = document.createElement("h2");
  breakfastHeader.textContent = "Café da manhã";
  breakfastDiv.appendChild(breakfastHeader);

  let pratosCafe = document.createElement("div");
  pratosCafe.classList.add("pratos-container");

  let prato1Div = document.createElement("div");
  prato1Div.classList.add("prato");

  let img1 = document.createElement("img");
  img1.classList.add("img-fluid", "food-img");
  img1.src = "/src/assets/imgs/meals/cafe-pao-de-queijo.jpg";
  img1.alt = "Café com pão de queijo";
  prato1Div.appendChild(img1);

  let prato1Header = document.createElement("h5");
  prato1Header.textContent = "Café com pão de queijo - R$ 8,00";
  prato1Div.appendChild(prato1Header);

  let p1 = document.createElement("p");
  p1.textContent = "Venha provar nosso delicioso café com pão de queijo!";
  prato1Div.appendChild(p1);

  let prato2Div = document.createElement("div");
  prato2Div.classList.add("prato");

  let img2 = document.createElement("img");
  img2.classList.add("img-fluid", "food-img");
  img2.src = "/src/assets/imgs/meals/sanduiche-com-suco.jpg";
  img2.alt = "Sanduíche com suco";
  prato2Div.appendChild(img2);

  let prato2Header = document.createElement("h5");
  prato2Header.textContent = "Sanduíche com suco - R$ 18,00";
  prato2Div.appendChild(prato2Header);

  let p2 = document.createElement("p");
  p2.textContent =
    "Experimente nosso sanduíche com suco de laranja fresquinho!";
  prato2Div.appendChild(p2);

  pratosCafe.appendChild(prato1Div);
  pratosCafe.appendChild(prato2Div);
  breakfastDiv.appendChild(pratosCafe);
  menuDiv.appendChild(breakfastDiv);

  let lunchDiv = document.createElement("div");
  lunchDiv.classList.add("meal");
  let lunchHeader = document.createElement("h2");
  lunchHeader.textContent = "Almoço";
  lunchDiv.appendChild(lunchHeader);

  let pratosAlmoco = document.createElement("div");
  pratosAlmoco.classList.add("pratos-container");

  let prato3Div = document.createElement("div");
  prato3Div.classList.add("prato");
  let p3 = document.createElement("p");
  p3.textContent = "Prato 3: R$ 30,00";
  prato3Div.appendChild(p3);

  let prato4Div = document.createElement("div");
  prato4Div.classList.add("prato");
  let p4 = document.createElement("p");
  p4.textContent = "Prato 4: R$ 35,00";
  prato4Div.appendChild(p4);

  pratosAlmoco.appendChild(prato3Div);
  pratosAlmoco.appendChild(prato4Div);
  lunchDiv.appendChild(pratosAlmoco);
  menuDiv.appendChild(lunchDiv);

  let happyHourDiv = document.createElement("div");
  happyHourDiv.classList.add("meal");
  let happyHourHeader = document.createElement("h2");
  happyHourHeader.textContent = "Happy Hour";
  happyHourDiv.appendChild(happyHourHeader);

  let pratosHappyHour = document.createElement("div");
  pratosHappyHour.classList.add("pratos-container");

  let prato5Div = document.createElement("div");
  prato5Div.classList.add("prato");
  let p5 = document.createElement("p");
  p5.textContent = "Prato 5: R$ 40,00";
  prato5Div.appendChild(p5);

  let prato6Div = document.createElement("div");
  prato6Div.classList.add("prato");
  let p6 = document.createElement("p");
  p6.textContent = "Prato 6: R$ 45,00";
  prato6Div.appendChild(p6);

  pratosHappyHour.appendChild(prato5Div);
  pratosHappyHour.appendChild(prato6Div);
  happyHourDiv.appendChild(pratosHappyHour);
  menuDiv.appendChild(happyHourDiv);

  body.appendChild(menuDiv);

  return body;
}
