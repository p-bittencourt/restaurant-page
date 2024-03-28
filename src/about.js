export function criarAbout() {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("container", "text-center", "p-5");

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "Sobre Nós";
  aboutContainer.appendChild(aboutTitle);

  const aboutContent = document.createElement("p");
  aboutContent.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id ultrices tincidunt, nisl nunc tincidunt nunc, nec lacinia nunc nunc id nunc. Sed vitae nunc id nunc tincidunt nunc, nec lacinia nunc nunc id nunc. Sed vitae nunc id nunc tincidunt nunc, nec lacinia nunc nunc id nunc.";
  aboutContainer.appendChild(aboutContent);

  return aboutContainer;
}
