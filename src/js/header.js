export const headerSection = () => {
  const header = document.createElement("div");
  header.classList.add("header");

  const linkTexts = ["Home Page", "Menu", "Contact Us"];

  for (let i = 0; i < 3; i++) {
    const link = document.createElement("a");
    link.classList.add("menu-link");
    link.id = `link-${i + 1}`;
    link.textContent = linkTexts[i];
    header.appendChild(link);
  }

  return header;
};
