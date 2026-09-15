const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

/* ==========================================
       OPEN MENU
    ========================================== */

function openMenu() {
  mobileMenu.classList.add("active");

  /*
           Freeze the webpage exactly where
           the user is currently looking.
        */

  document.body.classList.add("menu-open");

  hamburger.setAttribute("aria-expanded", "true");
}

/* ==========================================
       CLOSE MENU
    ========================================== */

function closeMobileMenu() {
  mobileMenu.classList.remove("active");

  document.body.classList.remove("menu-open");

  hamburger.setAttribute("aria-expanded", "false");
}

/* Hamburger */

hamburger.addEventListener("click", openMenu);

/* X button */

closeMenu.addEventListener("click", closeMobileMenu);

/* Navigation links */

mobileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    closeMobileMenu();
  });
});

/* ==========================================
       ESCAPE KEY
    ========================================== */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

/* ==========================================
       REVEAL ANIMATIONS
    ========================================== */

const revealElements = document.querySelectorAll(
  ".role-card, .skill-box, .project-card, .qualification, .contact-container",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});
