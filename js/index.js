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
  /* ===== menu responsivo ===== */

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
  
  /* ===== formulário ===== */

  emailjs.init("3H0sFLYcrWNClVOPn");

  const form = document.getElementById("contactForm");

  const fullName = document.getElementById("fullName");
  const emailAddress = document.getElementById("emailAddress");
  const projectType = document.getElementById("projectType");
  const message = document.getElementById("message");

  /* container de feedback */

  let formFeedback = document.createElement("div");
  formFeedback.className = "form-feedback";
  form.appendChild(formFeedback);

  /* mostrar erro de campo */

  function showError(input, text) {
    input.classList.add("input-error");

    let error = input.parentElement.querySelector(".error-message");

    if (!error) {
      error = document.createElement("div");
      error.className = "error-message";
      input.parentElement.appendChild(error);
    }

    error.textContent = text;
  }

  /* limpar erro */

  function clearError(input) {
    input.classList.remove("input-error");

    const error = input.parentElement.querySelector(".error-message");

    if (error) error.remove();
  }

  /* mostrar feedback geral */

  function showFormFeedback(message, type) {
    formFeedback.textContent = message;

    formFeedback.classList.remove("success", "error");

    if (type === "success") {
      formFeedback.classList.add("success");
    } else {
      formFeedback.classList.add("error");
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    formFeedback.textContent = "";

    [fullName, emailAddress, projectType, message].forEach(clearError);

    /* validar nome */

    if (fullName.value.trim().length < 3) {
      showError(fullName, "Digite um nome válido.");
      valid = false;
    }

    /* validar email */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailAddress.value)) {
      showError(emailAddress, "Digite um e-mail válido.");
      valid = false;
    }

    /* validar assunto */

    if (!projectType.value) {
      showError(projectType, "Selecione um assunto.");
      valid = false;
    }

    /* validar mensagem */

    if (message.value.trim().length < 10) {
      showError(message, "A mensagem deve ter pelo menos 10 caracteres.");
      valid = false;
    }

    if (!valid) return;

    /* envio do email */

    emailjs
      .send("service_2mlaesi", "template_3f6cgg8", {
        name: fullName.value,
        emailAddress: emailAddress.value,
        projectType: projectType.value,
        message: message.value,
      })
      .then(() => {
        showFormFeedback("Mensagem enviada com sucesso.", "success");
        form.reset();
      })
      .catch(() => {
        showFormFeedback("X Erro ao enviar mensagem. Tente novamente.", "error");
      });
  });
});
