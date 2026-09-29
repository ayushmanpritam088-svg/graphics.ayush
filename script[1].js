// Small reveal animation for a polished portfolio feel.
const items = document.querySelectorAll(".project, .service, .about-card, .stats div");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

items.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(item);
});

document.addEventListener("scroll", () => {
  document.querySelectorAll(".visible").forEach((item) => {
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";
  });
}, { passive: true });

// Also reveal items immediately when IntersectionObserver fires.
const style = document.createElement("style");
style.textContent = ".visible{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
