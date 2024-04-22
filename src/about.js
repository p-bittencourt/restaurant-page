import aboutImg from "/src/assets/imgs/7794689.jpg";

export function criarAbout() {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("container", "text-center", "p-5");

  const aboutInnerContainer = document.createElement("div");
  aboutInnerContainer.classList.add("restaurant-info");
  aboutContainer.appendChild(aboutInnerContainer);
  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "About Us";
  aboutInnerContainer.appendChild(aboutTitle);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("row", "justify-content-center");
  aboutInnerContainer.appendChild(infoContainer);

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("col-md-6", "p-3");
  const aboutParagraph = document.createElement("p");
  aboutParagraph.classList.add("lead", "p-3", "mt-4");
  aboutParagraph.textContent =
    "Come try our homemade Brazilian food. 'Flavors of the Day' is more than just a restaurant, it's the realization of a shared dream by four friends who are passionate about cooking. Each dish served is the result of years of experience, experimentation, and above all, a deep passion for sharing the joy of well-made food. Our friends, now chefs, bring their unique skills and distinct culinary styles to create a diverse and delicious menu, infused with the rich flavors and traditions of Brazilian cuisine. Each meal is prepared with love and dedication, reflecting the friendship and camaraderie that form the foundation of 'Flavors of the Day'. Come experience the warm hospitality and delicious food that make our restaurant a special place.";
  aboutContent.appendChild(aboutParagraph);
  infoContainer.appendChild(aboutContent);

  const photoContainer = document.createElement("div");
  photoContainer.classList.add(
    "col-md-6",
    "p-3",
    "d-flex",
    "flex-column",
    "justify-content-end"
  );
  const photo = document.createElement("img");
  photo.src = aboutImg;
  photo.alt = "Quatro pessoas cozinhando";
  photo.classList.add("img-fluid", "about-image");
  const photoCredit = document.createElement("a");
  photoCredit.href =
    "https://br.freepik.com/vetores-gratis/ilustracao-do-dia-internacional-do-chef_32533328.htm#fromView=search&page=1&position=9&uuid=e6236e57-e6ce-4eb2-8706-e724fffd0d25";
  photoCredit.textContent = "Imagem de freepik";
  photoCredit.target = "_blank";
  photoCredit.rel = "noopener noreferrer";
  photoContainer.appendChild(photo);
  photoContainer.appendChild(photoCredit);

  infoContainer.appendChild(photoContainer);

  return aboutContainer;
}
