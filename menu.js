document.addEventListener("DOMContentLoaded", () => {
  const btnOpen = document.querySelector(".logoAccueil");
  const btnClose = document.querySelector(".logoMenu");
  const accueil = document.getElementById("accueil");
  const menu = document.getElementById("menu");

  btnOpen.addEventListener("click", () => {
    menu.classList.add("active");
    accueil.classList.add("littleAccueil");
  });

  btnClose.addEventListener("click", () => {
    menu.classList.remove("active");
    accueil.classList.remove("littleAccueil");
  });
});
