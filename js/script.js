// Navbar and Footer
window.addEventListener('DOMContentLoaded', () => {
  const navHTML = `
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="team.html">Team</a></li>
      <li><a href="photos.html">Photos</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="research.html">Research</a></li>
      <li><a href="join.html">Join</a></li>
    </ul>
  `;

  const footerHTML = `
    <div class="footer-content">
      <div class="contact">
        <h4>CONTACT</h4>
        <p><strong>Email:</strong> heartsinorbit.project@gmail.com</p>
        <p><strong>Instagram:</strong> @heartsinorbit2025</p>
      </div>
      <div class="footer-nav">
        <h4>NAVIGATION</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="photos.html">Photos</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="research.html">Research</a></li>
          <li><a href="join.html">Join</a></li>
        </ul>
      </div>
    </div>
  `;

  // replace the contents of every <nav>
  document.querySelectorAll('nav').forEach(nav => {
    nav.innerHTML = navHTML;
  });

  // replace the contents of every <footer>
  document.querySelectorAll('footer').forEach(footer => {
    footer.innerHTML = footerHTML;
  });
});

// Animations
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
