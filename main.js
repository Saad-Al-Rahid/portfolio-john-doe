// ===HEADER SCROLL ANIMATION===
let nav = document.querySelector(".navbar");
console.log(nav);
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header__scrolled");
  } else {
    nav.classList.remove("header__scrolled");
  }
});

//===NAVBAR HIDE===
let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});
