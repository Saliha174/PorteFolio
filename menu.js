document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const accueil = document.getElementById("accueil");
  const menu = document.getElementById("menu");
  const projet = document.getElementById("projet");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    accueil.classList.toggle("littleAccueil");
  });
});
