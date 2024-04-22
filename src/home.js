export function criarHome() {
  let body = document.createElement("div");
  body.classList.add("container", "text-center", "p-5");

  let restaurantInfoDiv = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.textContent = "Flavors of the Day";
  restaurantInfoDiv.appendChild(h1);
  let p1 = document.createElement("p");
  p1.textContent =
    "At 'Flavors of the Day', we believe that each day is a new opportunity to savor life. We start early, with breakfast options ranging from simple and tasty toast to more elaborate options to start the day off right. Our lunch offers dishes made with fresh and local ingredients, prepared with care and attention to detail. Come visit us and discover the flavors that each day has to offer!";
  restaurantInfoDiv.appendChild(p1);
  restaurantInfoDiv.classList.add("restaurant-info");
  p1.classList.add("lead");
  body.appendChild(restaurantInfoDiv);

  let hoursDiv = document.createElement("div");
  let h2 = document.createElement("h3");
  h2.textContent = "Working Hours";
  hoursDiv.appendChild(h2);
  let p2 = document.createElement("p");
  p2.textContent = "Monday - Friday: 9am - 5pm";
  hoursDiv.appendChild(p2);
  let p3 = document.createElement("p");
  p3.textContent = "Saturday - Sunday: 10am - 3pm";
  hoursDiv.appendChild(p3);
  hoursDiv.classList.add("restaurant-info");
  body.appendChild(hoursDiv);

  let locationDiv = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = "Location";
  locationDiv.appendChild(h3);
  let p5 = document.createElement("p");
  p5.textContent = "Silly Street, 0";
  locationDiv.appendChild(p5);
  let p6 = document.createElement("p");
  p6.textContent = "Los Angeles, CA";
  locationDiv.appendChild(p6);
  let p7 = document.createElement("p");
  p7.textContent = "90210";
  locationDiv.appendChild(p7);
  let p8 = document.createElement("p");
  p8.textContent = "Phone: (310) 555-0123";
  locationDiv.appendChild(p8);
  locationDiv.classList.add("restaurant-info");
  body.appendChild(locationDiv);

  return body;
}
