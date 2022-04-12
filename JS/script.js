const openMenu = () => {
  const elemen = document.querySelector("#dropdown");
  elemen.style.display = "block";
  const closeButton = document.querySelector("#close-menu-button");
  const openButton = document.querySelector("#open-menu-button");
  closeButton.style.display = "block";
  openButton.style.display = "none";
};
const closeMenu = () => {
  const elemen = document.querySelector("#dropdown");
  elemen.style.display = "none";
  const closeButton = document.querySelector("#close-menu-button");
  const openButton = document.querySelector("#open-menu-button");
  closeButton.style.display = "none";
  openButton.style.display = "block";
};
