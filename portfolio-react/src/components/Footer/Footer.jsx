import './Footer.css';

const Footer = () => {

    const generateDateString = () => {
        const creationYear = "2021";
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
    }

    return (
        <section id="#footer">
            <div class="container container-footer">
                <div class="container">
                    <a href="https://www.linkedin.com/in/paula-augusto-009a6a139" target="_blank"><img class="icones-footer" src="img/linkedin.svg" alt="logo linkedin" /></a>
                    <a href="https://github.com/pcamposaugusto" target="_blank"><img class="icones-footer" src="img/github.svg" alt="logo github" /></a>
                </div>
                <ul class="container footer-links1">
                <li>
                    <a href="#">Home</a>
                </li>
                <li> 
                    <a href="#sobre">Sobre</a>
                </li>
                <li>
                    <a href="#projetos">Projetos</a> 
                </li>
                <li>
                    <a href="#contato">Contato</a> 
                </li>
                </ul>
                <ul class="container footer-links2">
                <li>
                    <a href="">Programação</a> 
                </li>
                <li>
                    <a href="">Banco de Dados</a> 
                </li>
                <li>
                    <a href="">Front-end</a> 
                </li>
                </ul>  
            </div>
            <p>Developed by Paula Augusto. &copy;Copyright {generateDateString()}. All Right Reserved.</p>
        </section>
    )
}

export default Footer;