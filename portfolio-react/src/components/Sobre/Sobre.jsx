import './Sobre.css';

const Sobre = () => {
    return (
        <section id="#sobre">
            <div className="container-fluid sobre">
                <h2>SEJA BEM-VINDO(A)!</h2>
                <p>Oi, tudo bem? ;D</p>
                <p>Eu me chamo <strong>Paula Augusto</strong> e sou graduada e pós-graduada na área de Letras. Já trabalhei como revisora, editora e professora (ah! e, quase me esqueço, também como cantora!)</p>
                <p>Recentemente, me apaixonei pela área de <strong>tecnologia</strong> e, por isso, resolvi investir em uma formação complementar nesse campo. Imagina a loucura né!?</p>
                <p>Desde maio de 2021, sou aluna do curso <strong>Certified Tech Developer</strong>, da Edtech <strong><cite><a className="link-DH" href="https://www.digitalhouse.com/br/" target="_blank">Digital House</a></cite></strong>, que terá duração de dois anos.</p>
                <p>Aqui, você poderá encontrar e conhecer os meus projetos como desenvolvedora.</p>
                <p>Espero que aproveite a visita e curta a página!</p>
            </div>
            <div className="skills">
                <div className="conhecimentos">
                    <h4>Possuo conhecimento em:</h4>
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
                <div className="aprendendo">
                    <h4>Estou aprendendo:</h4>
                    <ul>
                        <li>Computação em nuvem e ferramentas de DevOps (AWS, Ansible, Terraform e Docker)</li>
                        <li>Testes unitários (JUnit, Jest, Robot Framework, Selenium, Postman, log4J)</li>
                        <li>React.js</li>
                        <li></li>
                    </ul>
                </div>
                <button type="button" className="btn-cv">Acesse meu CV!<a href=".../../assets/CV-PaulaAugusto-ultimaversao.pdf"></a></button>
              
              
          </div>
          <div>

          </div>
        </section>
    )
}

export default Sobre;