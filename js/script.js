// Get the hamburger icon and mobile menu elements
const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle the visibility of the mobile menu when the hamburger icon is clicked
hamburgerIcon.addEventListener("click", () => {
  // Toggle the 'hidden' class, which controls the visibility of the menu
  mobileMenu.classList.toggle("hidden");
});
// Carousel Functionality
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    slide.style.opacity = i === index ? "1" : "0";
    slide.style.zIndex = i === index ? "10" : "0";
  });
}

document.getElementById("next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Auto-slide every 6 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 6000);

// Initial show
showSlide(currentSlide);

const productSection = document.querySelector(".animate-fadeInUp");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      productSection.classList.add("animate-fadeInUp");
      observer.unobserve(productSection); // Optional: animate only once
    }
  },
  {
    threshold: 0.1,
  }
);

observer.observe(productSection);

const carousel = document.getElementById("carousel");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    function scrollLeft() {
      console.log("Scrolling left");
      carousel.scrollBy({ left: -260, behavior: "smooth" });
    }

    function scrollRight() {
      console.log("Scrolling right");
      carousel.scrollBy({ left: 260, behavior: "smooth" });
    }

    function toggleArrows(show) {
      leftArrow.style.opacity = show ? "1" : "0";
      rightArrow.style.opacity = show ? "1" : "0";
    }
    const toggleBtn = document.getElementById('searchToggle');
    const searchBar = document.getElementById('searchBar');
  
    toggleBtn.addEventListener('click', () => {
      searchBar.classList.toggle('hidden');
    });