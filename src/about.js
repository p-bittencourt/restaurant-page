import aboutImg from "/src/assets/imgs/7794689.jpg";

export function criarAbout() {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("container", "text-center", "p-5");

  const aboutInnerContainer = document.createElement("div");
  aboutInnerContainer.classList.add("restaurant-info");
  aboutContainer.appendChild(aboutInnerContainer);
  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "Sobre Nós";
  aboutInnerContainer.appendChild(aboutTitle);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("row", "justify-content-center");
  aboutInnerContainer.appendChild(infoContainer);

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("col-md-6", "p-3");
  const aboutParagraph = document.createElement("p");
  aboutParagraph.classList.add("lead", "p-3", "mt-4");
  aboutParagraph.textContent =
    "O 'Sabores do Dia' é mais do que apenas um restaurante, é a realização de um sonho compartilhado por quatro amigos apaixonados por culinária. Cada prato servido é o resultado de anos de experiência, experimentação e, acima de tudo, uma profunda paixão por compartilhar a alegria da comida bem feita. Nossos amigos, agora chefs, trazem suas habilidades únicas e estilos culinários distintos para criar um menu diversificado e delicioso. Cada refeição é preparada com amor e dedicação, refletindo a amizade e camaradagem que formam a base do 'Sabores do Dia'. Venha experimentar a hospitalidade calorosa e a comida deliciosa que tornam o nosso restaurante um lugar especial.";
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
