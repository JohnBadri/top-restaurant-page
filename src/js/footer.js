export const footerSection = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyRight = document.createElement("p");
  copyRight.classList.add("copyright");
  copyRight.textContent = "© 2023 The Temple Bar. All Rights Reserved.";
  footer.appendChild(copyRight);

  return footer;
};
