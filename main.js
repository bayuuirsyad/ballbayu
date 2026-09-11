// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.innerHTML = '<i class="ri-sun-line"></i>';
  } else {
    themeBtn.innerHTML = '<i class="ri-moon-line"></i>';
  }
});

// =========================
// MENU HP
// =========================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuBtn.innerHTML = '<i class="ri-close-line"></i>';
  } else {
    menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
  }
});

// Menutup menu ketika link diklik

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");

    menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
  });
});
