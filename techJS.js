const menuBtn = document.querySelector(".mobileSubMenuImage");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".closeMenuBtn img");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

// Clicar fora fecha o menu lateral
overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});
