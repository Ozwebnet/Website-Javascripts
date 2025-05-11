document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-underline');
        observer.unobserve(entry.target); // Remove to play only once
      }
    });
  }, {
    threshold: 0.6
  });

  document.querySelectorAll('.trigger-underline').forEach(el => {
    observer.observe(el);
  });
});
