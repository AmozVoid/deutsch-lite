// header
function Header(){
    const createHeader = document.createElement('header');
    createHeader.innerHTML = `
        <h1>Deutsch Lite</h1>
        <img src="/icons/hamburger.png" alt="hamburger menu"></img>`;
    document.body.prepend(createHeader);
    
};

// footer

function Footer() {
    const createFooter = document.createElement('footer');
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
    document.body.appendChild(createFooter);
}

function initApp(){
    Header();
    Footer();
}

initApp();