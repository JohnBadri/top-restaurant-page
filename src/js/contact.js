export const contactSection = () => {
  const section = document.createElement("section");
  section.classList.add("hero-image-contact");

  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");
  section.appendChild(heroContainer);

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  heroContainer.appendChild(contentContainer);

  const subHeading = document.createElement("h3");
  subHeading.classList.add("hero-content");
  subHeading.textContent =
    "Whiskey & Cigars: Elevate Your Moments, Savor the Experience";
  contentContainer.appendChild(subHeading);

  const heading = document.createElement("h2");
  heading.classList.add("hero-content");
  heading.textContent = "The Temple Bar";
  contentContainer.appendChild(heading);

  const button = document.createElement("button");
  button.classList.add("hero-content", "hero-button");
  button.type = "button";
  button.textContent = "Bit lazy to create the form - goes back to menu";
  contentContainer.appendChild(button);

  return section;
};
