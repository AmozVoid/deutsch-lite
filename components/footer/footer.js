export function Footer(){
    const link = document.createElement('link');
    link.rel = 'Stylesheet';
    link.href = './components/footer/footer.css';
    document.head.appendChild(link);
    const footer = document.createElement('footer');

    footer.innerHTML = ` 
     <p>all is well...</p>`

    document.body.appendChild(footer);
}