document.addEventListener("DOMContentLoaded", () => {
  const btnOpen = document.querySelector(".logoAccueil");
  const btnClose = document.querySelector(".logoCroix");
  const accueil = document.getElementById("accueil");
  const menu = document.getElementById("menu");

  btnOpen.addEventListener("click", () => {
    menu.classList.add("active");
    accueil.classList.add("littleAccueil");
    //   setTimeout(() => {
    //     window.location.href = link.href;
    //   }, 500);
  });

  btnClose.addEventListener("click", () => {
    menu.classList.remove("active");
    accueil.classList.remove("littleAccueil");
  });
});
