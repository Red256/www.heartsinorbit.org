// Modern Website Functionality
window.addEventListener('DOMContentLoaded', () => {
  const navHTML = `
    <ul>
      <li><a href="index.html" class="nav-link">Home</a></li>
      <li><a href="team.html" class="nav-link">Team</a></li>
      <li><a href="photos.html" class="nav-link">Photos</a></li>
      <li><a href="projects.html" class="nav-link">Projects</a></li>
      <li><a href="research.html" class="nav-link">Research</a></li>
      <li><a href="blog.html" class="nav-link">Blog</a></li>
      <li><a href="join.html" class="nav-link">Join</a></li>
    </ul>
  `;

  const footerHTML = `
    <div class="footer-content">
      <div class="contact">
        <h4>CONTACT</h4>
        <p><strong>Email:</strong> heartsinorbit.project@gmail.com</p>
        <p><strong>Instagram:</strong> <u><a href="https://www.instagram.com/heartsinorbitt/">@heartsinorbitt</a></u></p>
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

  // Add scroll effect to navigation
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (nav) {
      if (currentScrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    
    lastScrollY = currentScrollY;
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add active class to current page navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const currentPageName = currentPage === '' ? 'index.html' : currentPage;
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    // Remove any existing active class first
    link.classList.remove('active');
    
    // Check if this link matches the current page
    if (linkHref === currentPageName || 
        (currentPageName === 'index.html' && linkHref === 'index.html') ||
        (currentPageName === 'team.html' && linkHref === 'team.html') ||
        (currentPageName === 'photos.html' && linkHref === 'photos.html') ||
        (currentPageName === 'projects.html' && linkHref === 'projects.html') ||
        (currentPageName === 'research.html' && linkHref === 'research.html') ||
        (currentPageName === 'blog.html' && linkHref === 'blog.html') ||
        (currentPageName === 'join.html' && linkHref === 'join.html')) {
      link.classList.add('active');
    }
  });

  // Theme Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check for saved theme preference or default to light
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Update icon based on current theme
  updateThemeIcon(currentTheme);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  function updateThemeIcon(theme) {
    if (themeIcon) {
      if (theme === 'light') {
        // Sun icon for light theme
        themeIcon.innerHTML = `
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        `;
      } else {
        // Moon icon for dark theme
        themeIcon.innerHTML = `
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        `;
      }
    }
  }

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
    .querySelectorAll('.slide-right.hidden, .slide-left.hidden, .slide-stagger, .post-card.hidden')
    .forEach(el => observer.observe(el));
});
