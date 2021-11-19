import './Sobre.css';
import cv from '../../assets/CV-PaulaAugusto-ultimaversao.pdf'

const Sobre = () => {
    return (
        <section id="#sobre">
            <div className="container-fluid sobre">
                <div className="intro">
                    <h2>SEJA BEM-VINDO(A)!</h2>
                    <p>Oi, tudo bem?</p>
                    <p>Eu me chamo <strong>Paula Augusto</strong> e sou graduada e pós-graduada na área de Letras. Já trabalhei como revisora, editora e professora (ah! e, quase me esqueço, também como cantora!)</p>
                    <p>Recentemente, me apaixonei pela área de <strong>tecnologia</strong> e, por isso, resolvi investir em uma formação complementar nesse campo. Imagina a loucura né!?</p>
                    <p>Desde maio de 2021, sou aluna do curso <strong>Certified Tech Developer</strong>, da Edtech <strong><cite><a className="link-DH" href="https://www.digitalhouse.com/br/" target="_blank" rel="noreferrer">Digital House</a></cite></strong>, que terá duração de dois anos.</p>
                    <p>Aqui, você poderá encontrar e conhecer os meus projetos como desenvolvedora.</p>
                    <p>Espero que aproveite a visita e curta a página!</p>
                    <button type="button" className="btn-cv">
                        <a href={cv} target="_blank" rel="noreferrer">Acesse meu CV! ;D</a>
                    </button>   
                </div>
                <div className="skills container-fluid">
                    <div data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center" className="conhecimentos">
                        <h5>Possuo conhecimento em:</h5>
                        <ul>
                            <li>Git e Github</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>Bootstrap, Sass</li>
                            <li>Design Thinking, Figma, UX/UI</li>
                            <li>Bancos de dados relacionais (Workbench MySQL) - SQL</li>
                            <li>Programação Orientada a Objetos (POO), Design Patterns</li>
                            <li>Java</li>
                            <li>Metodologias Ágeis</li>
                            <li>SOs: Windows e MacOs</li>
                        </ul>
                    </div>
                    <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center" className="aprendendo">
                        <h5>Estou aprendendo:</h5>
                        <ul>
                            <li>Computação em nuvem e ferramentas de DevOps (AWS, Ansible, Terraform e Docker)</li>
                            <li>Testes unitários (JUnit, Jest, Robot Framework, Selenium, Postman, log4J)</li>
                            <li>React.js</li>
                            <li>Spring Boot e Padrão MVC</li>
                            <li>API REST</li>
                        </ul>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Sobre;