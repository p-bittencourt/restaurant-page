export function criarHome() {
  let body = document.createElement("div");
  body.classList.add("container", "text-center", "p-5");

  let h1 = document.createElement("h1");
  h1.textContent = "Nome do Restaurante";
  body.appendChild(h1);

  let restaurantInfoDiv = document.createElement("div");
  let p1 = document.createElement("p");
  p1.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ratione sint harum dolore sapiente nisi corrupti deleniti labore quisquam non.";
  restaurantInfoDiv.appendChild(p1);
  body.appendChild(restaurantInfoDiv);

  let hoursDiv = document.createElement("div");
  let h2 = document.createElement("h3");
  h2.textContent = "Horário de Funcionamento";
  hoursDiv.appendChild(h2);
  let p2 = document.createElement("p");
  p2.textContent = "Terça - Sexta: 9am - 5pm";
  hoursDiv.appendChild(p2);
  let p3 = document.createElement("p");
  p3.textContent = "Sábado - Domingo: 10am - 3pm";
  hoursDiv.appendChild(p3);
  let p4 = document.createElement("p");
  p4.textContent = "Segunda: Fechado";
  hoursDiv.appendChild(p4);
  body.appendChild(hoursDiv);

  let locationDiv = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = "Localização";
  locationDiv.appendChild(h3);
  let p5 = document.createElement("p");
  p5.textContent = "Rua dos Bobos, 0";
  locationDiv.appendChild(p5);
  let p6 = document.createElement("p");
  p6.textContent = "Curitiba - Paraná";
  locationDiv.appendChild(p6);
  let p7 = document.createElement("p");
  p7.textContent = "CEP: 80000-000";
  locationDiv.appendChild(p7);
  let p8 = document.createElement("p");
  p8.textContent = "Telefone: (41) 99999-9999";
  locationDiv.appendChild(p8);
  body.appendChild(locationDiv);

  return body;
}
