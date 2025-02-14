// header
function Header() {
    const createHeader = document.querySelector('header');
    createHeader.innerHTML = `
        <h1>Deutsch Lite</h1>
        <img src="./icons/hamburger.png" alt="hamburger menu" onclick="toggleNav()"></img>`;
}

// footer
function Footer() {
    const createFooter = document.querySelector('footer');
    createFooter.innerHTML = `
      <div class="footer-content">
        <p>All is well...</p>
        <div class="footer-links">
          <a href="/index.html">Home</a> |
           <a href="/pages/explore.html">Explore</a> |
          <a href="#">About Us</a> | 
          <a href="#">Contact</a> 
        </div>
        <div class="footer-social">
          <a href="#" class="social-icon">📺 YouTube</a>
          <a href="#" class="social-icon">📸 Instagram</a>
          <a href="#" class="social-icon">✖️ X</a>
        </div>
      </div>
    `;
}

// navbar
function navbar() {
    const nav = document.createElement('nav');
    nav.id = 'myNav';
    nav.innerHTML = `
        <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/pages/explore.html">Explore</a></li>
            <li><a href="/notes.html">Notes</a></li>
        </ul>
    `;
    document.body.appendChild(nav);
}

function toggleNav() {
    const nav = document.getElementById('myNav');
    if (nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
    } else {
        nav.classList.add('nav-open');
    }
}

// Attach toggleNav to the window object to make it globally accessible
window.toggleNav = toggleNav;

function initApp() {
    Header();
    Footer();
    navbar();
}

initApp();