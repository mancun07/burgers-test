import './scss/style.scss';

if (module.hot) {
    module.hot.accept();
}

const sidenavTrigger = document.querySelector(".navbar-extra__sidenav-trigger");
const sidenavClose = document.querySelector(".sidenav__close");
const sidenav = document.querySelector(".sidenav");
const body = document.querySelector("body");

sidenavTrigger.addEventListener("click", () => {
  sidenav.classList.add("visible");
  body.classList.add("darkened");
});

sidenavClose.addEventListener("click", () => {
  sidenav.classList.remove("visible");
  body.classList.remove("darkened");
});
