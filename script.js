console.log("Portfolio loaded successfully.");

const revealElements = document.querySelectorAll(
  ".section, .stats, .hero-text, .hero-img"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const revealOnScroll = () => {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);