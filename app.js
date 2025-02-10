// header
function Header(){
    const createHeader = document.createElement('header');
    createHeader.innerHTML = `
        <h1>Deutsch Lite</h1>
        <img src="/icons/hamburger.png" alt="hamburger menu"></img>`;
    document.body.prepend(createHeader);
    
};

// footer

function Footer(){
    const createFooter = document.createElement('footer');
    createFooter.innerHTML = `<p>all is well...</p>`;
    document.body.appendChild(createFooter);
};

function initApp(){
    Header();
    Footer();
}

initApp();