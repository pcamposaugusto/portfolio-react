import './Footer.css';
import logoLinkedin from '../../assets/linkedin.svg';
import logoGithub from '../../assets/github.svg';
import setaUp from '../../assets/Up.png';

const Footer = () => {

    const generateDateString = () => {
        const creationYear = "2021";
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
    }

    return (
        <section id="#footer">
            <div className="container-fluid d-flex flex-column footer">
                <div className="p2">
                    <a href="https://www.linkedin.com/in/pcamposaugusto" target="_blank" rel="noreferrer"><img className="icones-footer" src={logoLinkedin} alt="logo linkedin" /></a>
                    <a href="https://github.com/pcamposaugusto" target="_blank" rel="noreferrer"><img className="icones-footer" src={logoGithub} alt="logo github" /></a>
                </div>
                <div className="p2 footer-links1">
                    <a href="#navbar">Home</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#contato">Contato</a> 
                </div>
                <div className="p2 copyright">
                    <div className="up">
                        <a href="#top"><img src={setaUp} alt="botão para voltar para o início da página" /></a>
                    </div>
                    <p>Developed by Paula Augusto.</p> 
                    <p>&copy;Copyright {generateDateString()}. All Right Reserved.</p> 
                </div>
            </div>
        </section>
    )
}

export default Footer;