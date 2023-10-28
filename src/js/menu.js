// Importing images
import bourbon from "../images/bourbon.jpg";
import brew from "../images/brew.jpg";
import gin from "../images/gin.jpg";
import whiskey from "../images/whiskey.jpg";

export const menuSection = () => {
  const section = document.createElement("section");
  section.classList.add("menu-image");

  const div = document.createElement("div");
  div.classList.add("menu-collection");
  section.appendChild(div);

  const heading = document.createElement("h2");
  heading.textContent = "Our Drinks Menu";
  div.appendChild(heading);

  const drinkImages = [whiskey, bourbon, gin, brew];

  const drinksNames = [
    "Whiskey Wonders",
    "Bourbon Bliss",
    "Gin Gems",
    "Brewed Beauties",
  ];

  for (let i = 0; i < 4; i++) {
    const drink = document.createElement("div");
    drink.classList.add("drink-item");

    const imgDrink = document.createElement("img");
    imgDrink.classList.add("drink-img");
    imgDrink.src = drinkImages[i];

    const textDrink = document.createElement("h3");
    textDrink.classList.add("drink-text");
    textDrink.textContent = drinksNames[i];

    div.appendChild(drink);
    drink.appendChild(imgDrink);
    drink.appendChild(textDrink);
  }

  return section;
};
