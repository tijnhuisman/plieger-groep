const hamburgerMenuBtn = document.getElementById("hamburger-menu-btn");
const header = document.getElementById("header");
const headerInner = document.getElementById("header-inner");
const heroHeader = document.getElementById("hero-carousel");

window.addEventListener("scroll", () => {
  checkScroll();
});

const animatedElements = document.querySelectorAll(".animate");

animatedElements.forEach((element) => {
  element.classList.add("translate-y-16");
  element.classList.add("opacity-0");

  const distance = element.getBoundingClientRect().top + window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY > distance - window.innerHeight) {
      element.classList.remove("translate-y-16");
      element.classList.remove("opacity-0");
    }
  });
});

function checkScroll() {
  if (window.scrollY > 0) {
    heroHeader.style.top = `${window.scrollY / 2}px`;
    heroHeader.style.opacity = `${(-1 * window.scrollY) / 750 + 1}`;
    header.classList.remove("bg-transparent");
    header.classList.add("backdrop-blur-xl");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("backdrop-blur-xl");
    heroHeader.style.top = "0";
    heroHeader.style.opacity = "1";
  }
}

const navbar = document.getElementById("navbar");

window.addEventListener("resize", () => {
  checkResize();
});

function checkResize() {
  if (window.innerWidth > 1024) {
    headerInner.append(navbar);
    hamburgerMenuBtn.classList.add("hidden");
    navbar.className = "flex";
  } else {
    hamburgerMenuBtn.classList.remove("hidden");
    document.body.append(navbar);
    navbar.className = `text-white translate-x-full fixed bg-[#050047] w-full left-0 top-16 transition-transform duration-500`;

    hamburgerMenuBtn.addEventListener("click", () => {
      navbar.classList.toggle("translate-x-full");
    });
  }
}

checkResize();

const heroCarousel = document.getElementById("hero-carousel");
const numberOfImages = heroCarousel.childElementCount;

function scrollCarouselLoop() {
  const imageWidth = heroCarousel.offsetWidth;
  let duration = 5;

  duration = duration * 1000;

  let currentImageIndex = 0;

  function scrollNextImage() {
    if (currentImageIndex < numberOfImages - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0;
    }

    const scrollPosition = currentImageIndex * imageWidth;
    heroCarousel.scrollLeft = scrollPosition;

    setTimeout(scrollNextImage, duration);
  }

  setTimeout(scrollNextImage, duration);
}

scrollCarouselLoop();

// Scroll animations
