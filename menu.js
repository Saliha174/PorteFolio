document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const accueil = document.getElementById("accueil");
  const menu = document.getElementById("menu");
  const logo = document.getElementById("logo");
  const projet = document.getElementById("projet");
  const header = document.querySelector("header");
  const voile = document.getElementById("voile");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    accueil.classList.toggle("littleAccueil");
    voile.classList.toggle("active");
    // competence.classList.toggle("active");
    logo.classList.toggle("petit");
    header.classList.toggle("active");
  });
});
