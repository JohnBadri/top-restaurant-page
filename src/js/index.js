// import section
import "../css/style.css";
import { headerSection } from "./header";
import { mainSection } from "./home";
import { menuSection } from "./menu";
import { contactSection } from "./contact";
import { footerSection } from "./footer";

// global properties
const mainContent = document.querySelector(".content");

const switchSection = (newSection) => {
  mainContent.innerHTML = "";
  mainContent.appendChild(headerSection());
  mainContent.appendChild(newSection());
  mainContent.appendChild(footerSection());
  attachEventListeners();
};

// Function to attach event listeners to header links
const attachEventListeners = () => {
  document
    .getElementById("link-0")
    .addEventListener("click", () => switchSection(mainSection));
  document
    .getElementById("link-1")
    .addEventListener("click", () => switchSection(menuSection));
  document
    .getElementById("link-2")
    .addEventListener("click", () => switchSection(contactSection));
  document
    .querySelector(".hero-button")
    .addEventListener("click", () => switchSection(menuSection));
};

// Initially show main section and header
switchSection(mainSection);
