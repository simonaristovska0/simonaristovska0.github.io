const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav_Toggle"),
    navItem = document.querySelectorAll(".navItem"),
    header = document.getElementById("header");

// Hobbies listanje

const HobbiesListanje = new Swiper(".karti", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

// Header skrolanje

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("headerSkrolanje");
  } else {
    header.classList.remove("headerSkrolanje");
  }
});

// Scrollanimacii

const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

sr.reveal(".tekst_centar, .about_sodrzina");
sr.reveal(".jas_slika", { origin: "top" });

sr.reveal(
    ".zaJs_info, .skills_naslov, .skills_sodrzina, .educatoin_naslov, .zaJs_education, .karti, .footer_sodrzina",
    {
      delay: 500,
      interval: 100,
    }
);

sr.reveal(".contact_sodrzina", {
  origin: "left",
});

sr.reveal(".kopce, .contact_kopce", { origin: "right" });