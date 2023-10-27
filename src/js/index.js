// import section
import "../css/style.css";
import { headerSection } from "./header";
import { mainSection } from "./home";
import { menuSection } from "./menu";
import { contactSection } from "./contact";
import { footerSection } from "./footer";

// global properties
const mainContent = document.querySelector(".content");

mainContent.appendChild(headerSection());
mainContent.appendChild(mainSection());
