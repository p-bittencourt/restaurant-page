// Imported images
//#region
import breakfast1 from "/src/assets/imgs/meals/cafe-pao-de-queijo.jpg";
import breakfast2 from "/src/assets/imgs/meals/sanduiche-com-suco.jpg";
import lunch1 from "/src/assets/imgs/meals/pf-bife.jpg";
import lunch2 from "/src/assets/imgs/meals/strogonoff-frango.jpg";
import happyHour1 from "/src/assets/imgs/meals/bolinho-carne-seca.jpg";
import happyHour2 from "/src/assets/imgs/meals/fish-and-chips.jpg";
//#endregion
export function criarMenu() {
  let body = document.createElement("div");
  body.classList.add("container", "text-center", "p-5");

  let menuDiv = document.createElement("div");

  // Região do café da manhã
  //#region
  let breakfastDiv = document.createElement("div");
  breakfastDiv.classList.add("meal");
  let breakfastHeader = document.createElement("h2");
  breakfastHeader.textContent = "Breakfast";
  breakfastDiv.appendChild(breakfastHeader);

  let pratosCafe = document.createElement("div");
  pratosCafe.classList.add("pratos-container");

  let prato1Div = document.createElement("div");
  prato1Div.classList.add("prato");

  let img1 = document.createElement("img");
  img1.classList.add("img-fluid", "food-img");
  img1.src = breakfast1;
  img1.alt = "Coffee and traditional brazilian cheese bread";
  prato1Div.appendChild(img1);

  let prato1Header = document.createElement("h5");
  prato1Header.textContent = "Coffee and Cheese Bread - $ 8";
  prato1Div.appendChild(prato1Header);

  let p1 = document.createElement("p");
  p1.textContent = "Come try our traditional brazilian cheese bread!";
  prato1Div.appendChild(p1);

  let prato2Div = document.createElement("div");
  prato2Div.classList.add("prato");

  let img2 = document.createElement("img");
  img2.classList.add("img-fluid", "food-img");
  img2.src = breakfast2;
  img2.alt = "Sandwich and juice";
  prato2Div.appendChild(img2);

  let prato2Header = document.createElement("h5");
  prato2Header.textContent = "Sandwich and Fresh Juice - $ 12";
  prato2Div.appendChild(prato2Header);

  let p2 = document.createElement("p");
  p2.textContent = "Try our sandwich and some freshly squeezed juice!";
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
  lunchHeader.textContent = "Lunch";
  lunchDiv.appendChild(lunchHeader);

  let pratosAlmoco = document.createElement("div");
  pratosAlmoco.classList.add("pratos-container");

  let prato3Div = document.createElement("div");
  prato3Div.classList.add("prato");

  let img3 = document.createElement("img");
  img3.classList.add("img-fluid", "food-img");
  img3.src = lunch1;
  img3.alt = "Classical Brazilian Lunch";
  prato3Div.appendChild(img3);

  let prato3Header = document.createElement("h5");
  prato3Header.textContent = "Brazilian Meal with Steak - $ 20";
  prato3Div.appendChild(prato3Header);

  let p3 = document.createElement("p");
  p3.textContent =
    "Classical Brazilian lunch with rice, beans, fries, salad and a tasty steak!";
  prato3Div.appendChild(p3);

  let prato4Div = document.createElement("div");
  prato4Div.classList.add("prato");

  let img4 = document.createElement("img");
  img4.classList.add("img-fluid", "food-img");
  img4.src = lunch2;
  img4.alt = "Chicken Strogonoff";
  prato4Div.appendChild(img4);

  let prato4Header = document.createElement("h5");
  prato4Header.textContent = "Chicken Strogonoff - $ 20";
  prato4Div.appendChild(prato4Header);

  let p4 = document.createElement("p");
  p4.textContent =
    "A Brazilian take on a classical european dish, the Strogonoff.";
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
  img5.src = happyHour1;
  img5.alt = "Jerk Beef Dumpling";
  prato5Div.appendChild(img5);

  let prato5Header = document.createElement("h5");
  prato5Header.textContent = "Jerk Beef Dumpling - $ 25";
  prato5Div.appendChild(prato5Header);

  let p5 = document.createElement("p");
  p5.textContent = "Don't forget to try our special Jerk Beef Dumpling!";
  prato5Div.appendChild(p5);

  let prato6Div = document.createElement("div");
  prato6Div.classList.add("prato");

  let img6 = document.createElement("img");
  img6.classList.add("img-fluid", "food-img");
  img6.src = happyHour2;
  img6.alt = "Fish and chips";
  prato6Div.appendChild(img6);

  let prato6Header = document.createElement("h5");
  prato6Header.textContent = "Fish and chips - $29";
  prato6Div.appendChild(prato6Header);

  let p6 = document.createElement("p");
  p6.textContent = "Our Fish and Chips match well with a nice cold beer!";
  prato6Div.appendChild(p6);

  pratosHappyHour.appendChild(prato5Div);
  pratosHappyHour.appendChild(prato6Div);
  happyHourDiv.appendChild(pratosHappyHour);
  menuDiv.appendChild(happyHourDiv);
  //#endregion

  body.appendChild(menuDiv);

  return body;
}
