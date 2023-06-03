const searchButton = document.querySelector("nav .desktop-nav .link-search");
const searchContainer = document.querySelector(".search-container");
const closeButton = document.querySelector(".search-container .link-close");

searchButton.addEventListener("click", () => {
  searchContainer.classList.add("open");
  overlay.classList.add("show");
});

closeButton.addEventListener("click", () => {
  searchContainer.classList.remove("open");
  overlay.classList.remove("show");
});

// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});

const searchBar = document.querySelector(
  ".mobile-search-container .search-bar"
);
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(
  ".mobile-search-container .cancel-btn"
);

searchInput.addEventListener("click", () => {
  searchBar.classList.add("active");
  nav.classList.add("move-up");
  desktopNav.classList.add("move-down");
});

cancelBtn.addEventListener("click", () => {
  searchBar.classList.remove("active");
  nav.classList.remove("move-up");
  desktopNav.classList.remove("move-down");
});
