const chkTheme = document.getElementById("chk-theme");
const root = document.documentElement;

/* recuperar tema salvo */

const temaSalvo = localStorage.getItem("theme");

if (temaSalvo === "light") {
  root.setAttribute("data-theme", "light");
  chkTheme.checked = true;
}

/* alternar tema */

chkTheme.addEventListener("change", () => {
  if (chkTheme.checked) {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");

    const expanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", !expanded);
  });

  menu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      menu.classList.remove("show");

      menuToggle.setAttribute("aria-expanded", false);
    }
  });
});
