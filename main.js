
"use strict";

const navbar = document.querySelector(".navbar");
const menuTogglersContainer = document.querySelector(".menu-togglers");
const bxMenu = document.querySelector(".bx-menu");

menuTogglersContainer.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});
