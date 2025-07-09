document.addEventListener('DOMContentLoaded', function() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the .visible class to trigger the animation
        entry.target.classList.add('visible');
        // Stop observing once it's visible
        obs.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.fade-slide.hidden')
    .forEach(el => observer.observe(el));
});
