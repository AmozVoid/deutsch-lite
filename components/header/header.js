export class Header{
    addHeaderStyles(){
        const link = document.createElement('link');

        link.rel = 'stylesheet';
        link.href = '../components/header/header.css';
        

        document.head.appendChild(link);
    }
    createHeader(){
        const header = document.createElement('header');

        header.innerHTML =  `
        <h1>Deutsch Lite</h1>
        <img src="icons/hamburger.png" alt="hamburger menu">`;

        return header;
    }

    render(){
        this.addHeaderStyles();

        document.body.prepend(this.createHeader());
    }
}