// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Statistics Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 200; // The lower the slower

const animateCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace(",", "").replace("+", ""); // Clean current text

      // Lower increment to slow and higher for fast
      const inc = target / speed;

      if (count < target) {
        // Format numbers for display (e.g., 5000 -> 5,000)
        counter.innerText = Math.ceil(count + inc).toLocaleString();
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString() + "+";
      }
    };
    updateCount();
  });
};

// Intersection Observer to start animation when stats section is visible
let animated = false;
const statsSection = document.querySelector(".stats-section");

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !animated) {
      animateCounters();
      animated = true;
    }
  },
  { threshold: 0.5 }
);

observer.observe(statsSection);
