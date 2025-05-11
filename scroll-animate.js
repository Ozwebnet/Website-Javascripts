document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const animation = el.dataset.animate || '';
      const delay = el.dataset.delay || '0s';

      el.style.animationDelay = delay;

      switch (animation) {
        case 'underline':
          el.classList.add('animate-underline');
          break;
          /*
        case 'flip':
          el.classList.add('animate-flip');
          break;
          */
        // Add more cases here as needed
        default:
          break;
      }

      observer.unobserve(el); // Remove this line if you want re-triggering
    });
  }, {
    threshold: 0.6
  });

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
});
