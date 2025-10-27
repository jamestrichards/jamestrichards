// === Loading Animation ===
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
  }, 1500);
});

// === Fade-in Animation on Scroll ===
const fadeEls = document.querySelectorAll(".fade-in");

const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeEls.forEach(el => appearOnScroll.observe(el));

// === Smooth Scroll for Menu Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === Dark/Light Mode Toggle ===
const toggleBtn = document.getElementById("mode-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.textContent = document.body.classList.contains("light-mode") ? "☀" : "☾";
});

// === Back to Top Button ===
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
