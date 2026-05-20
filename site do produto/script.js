const PLATAFORMA_URL = "https://SEU-NGROK.ngrok-free.app";
const DOWNLOAD_URL = "#";

const platformLinks = document.querySelectorAll("[data-platform-link]");
const downloadLink = document.querySelector("[data-download-link]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const typingTarget = document.querySelector("[data-typing-text]");

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

platformLinks.forEach((link) => {
  link.addEventListener("click", () => {
    window.location.href = PLATAFORMA_URL;
  });
});

if (downloadLink) {
  downloadLink.href = DOWNLOAD_URL;
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const demoText =
  "O VITOR AutoResumo prepara o texto, aguarda a confirmação e digita automaticamente de forma humanizada.";

let index = 0;

function typeLoop() {
  if (!typingTarget) return;

  typingTarget.textContent = demoText.slice(0, index);
  index += 1;

  if (index > demoText.length + 18) {
    index = 0;
  }

  const delay = index > demoText.length ? 70 : 34;
  window.setTimeout(typeLoop, delay);
}

typeLoop();
