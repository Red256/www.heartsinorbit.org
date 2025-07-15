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
document.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      if (entry.target.classList.contains('slide-stagger')) {
        Array.from(entry.target.children).forEach((child, i) => {
          child.style.animationDelay = `${i * 0.2}s`;
          child.classList.add('visible');
        });
      } 
      else {
        entry.target.classList.add('visible');
      }

      obs.unobserve(entry.target);
    });
  }, options);

  document
    .querySelectorAll('.slide-right.hidden, .slide-left.hidden, .slide-stagger')
    .forEach(el => observer.observe(el));
});

