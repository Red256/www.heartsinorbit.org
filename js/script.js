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

  // Replace the contents of the first <nav>
  const nav = document.querySelector('nav');
  if (nav) nav.innerHTML = navHTML;

  // Replace the contents of the first <footer>
  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = footerHTML;

  // Animations
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  function waitForImages(el) {
    const imgs = [];

    if (el.tagName === 'IMG') {
      imgs.push(el);
    }
    imgs.push(...el.querySelectorAll('img'));

    const promises = imgs.map(img =>
      img.complete
        ? Promise.resolve()
        : new Promise(resolve => img.addEventListener('load', resolve, { once: true }))
    );

    return Promise.all(promises);
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;

      waitForImages(el).then(() => {
        if (el.classList.contains('slide-stagger')) {
          Array.from(el.children).forEach((child, i) => {
            child.style.animationDelay = `${i * 0.2}s`;
            child.classList.add('visible');
          });
        } else {
          el.classList.add('visible');
        }
      });

      obs.unobserve(el);
    });
  }, options);

  document
    .querySelectorAll('.slide-right.hidden, .slide-left.hidden, .slide-stagger')
    .forEach(el => observer.observe(el));
});
