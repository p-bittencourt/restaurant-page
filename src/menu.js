export function criarMenu() {
  let body = document.createElement("div");
  body.classList.add("container", "text-center", "p-5");

  let menuDiv = document.createElement("div");

  // Região do café da manhã
  //#region
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
  //#endregion

  // Região do almoço
  //#region
  let lunchDiv = document.createElement("div");
  lunchDiv.classList.add("meal");
  let lunchHeader = document.createElement("h2");
  lunchHeader.textContent = "Almoço";
  lunchDiv.appendChild(lunchHeader);

  let pratosAlmoco = document.createElement("div");
  pratosAlmoco.classList.add("pratos-container");

  let prato3Div = document.createElement("div");
  prato3Div.classList.add("prato");

  let img3 = document.createElement("img");
  img3.classList.add("img-fluid", "food-img");
  img3.src = "/src/assets/imgs/meals/pf-bife.jpg";
  img3.alt = "Prato feito com bife";
  prato3Div.appendChild(img3);

  let prato3Header = document.createElement("h5");
  prato3Header.textContent = "Prato feito com bife - R$ 25,00";
  prato3Div.appendChild(prato3Header);

  let p3 = document.createElement("p");
  p3.textContent = "Um clássico prato feito com bife, arroz, feijão e salada!";
  prato3Div.appendChild(p3);

  let prato4Div = document.createElement("div");
  prato4Div.classList.add("prato");

  let img4 = document.createElement("img");
  img4.classList.add("img-fluid", "food-img");
  img4.src = "/src/assets/imgs/meals/strogonoff-frango.jpg";
  img4.alt = "Strogonoff de frango";
  prato4Div.appendChild(img4);

  let prato4Header = document.createElement("h5");
  prato4Header.textContent = "Strogonoff de frango - R$ 23,00";
  prato4Div.appendChild(prato4Header);

  let p4 = document.createElement("p");
  p4.textContent = "Um especial strogonoff de frango com arroz e batata palha!";
  prato4Div.appendChild(p4);

  pratosAlmoco.appendChild(prato3Div);
  pratosAlmoco.appendChild(prato4Div);
  lunchDiv.appendChild(pratosAlmoco);
  menuDiv.appendChild(lunchDiv);
  //#endregion

  // Região do happy hour
  //#region
  let happyHourDiv = document.createElement("div");
  happyHourDiv.classList.add("meal");
  let happyHourHeader = document.createElement("h2");
  happyHourHeader.textContent = "Happy Hour";
  happyHourDiv.appendChild(happyHourHeader);

  let pratosHappyHour = document.createElement("div");
  pratosHappyHour.classList.add("pratos-container");

  let prato5Div = document.createElement("div");
  prato5Div.classList.add("prato");

  let img5 = document.createElement("img");
  img5.classList.add("img-fluid", "food-img");
  img5.src = "/src/assets/imgs/meals/bolinho-carne-seca.jpg";
  img5.alt = "Bolinho de carne seca";
  prato5Div.appendChild(img5);

  let prato5Header = document.createElement("h5");
  prato5Header.textContent = "Bolinho de carne seca - R$ 38,00";
  prato5Div.appendChild(prato5Header);

  let p5 = document.createElement("p");
  p5.textContent = "Não deixe de provar nosso delicioso bolinho de carne seca!";
  prato5Div.appendChild(p5);

  let prato6Div = document.createElement("div");
  prato6Div.classList.add("prato");

  let img6 = document.createElement("img");
  img6.classList.add("img-fluid", "food-img");
  img6.src = "/src/assets/imgs/meals/fish-and-chips.jpg";
  img6.alt = "Fish and chips";
  prato6Div.appendChild(img6);

  let prato6Header = document.createElement("h5");
  prato6Header.textContent = "Fish and chips - R$ 40,00";
  prato6Div.appendChild(prato6Header);

  let p6 = document.createElement("p");
  p6.textContent = "Experimente nosso fish and chips com uma cerveja gelada!";
  prato6Div.appendChild(p6);

  pratosHappyHour.appendChild(prato5Div);
  pratosHappyHour.appendChild(prato6Div);
  happyHourDiv.appendChild(pratosHappyHour);
  menuDiv.appendChild(happyHourDiv);
  //#endregion

  body.appendChild(menuDiv);

  return body;
}
