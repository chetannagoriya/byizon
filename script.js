const nav = document.querySelector(".nav-shell");
const menuToggle = document.querySelector(".menu-toggle");
const menuButtons = document.querySelectorAll(".has-menu > button");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

menuButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const item = button.closest(".has-menu");
    const wasOpen = item.classList.contains("is-open");
    document.querySelectorAll(".has-menu.is-open").forEach((openItem) => {
      if (openItem !== item) openItem.classList.remove("is-open");
    });
    item.classList.toggle("is-open", !wasOpen);
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".has-menu")) {
    document.querySelectorAll(".has-menu.is-open").forEach((item) => item.classList.remove("is-open"));
  }
});

document.querySelectorAll(".dropdown a, .nav-links > a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".has-menu.is-open").forEach((item) => item.classList.remove("is-open"));
  });
});
