import './Projetos.css';
import logogithub from '../../assets/github-pq.svg';
import linkPag from '../../assets/link.svg';
import { listaDeProjetos } from './CardsProjetos';

const Projetos = () => {

    const cardModelo = listaDeProjetos.map(({card, repo, pagina, imagemCard, titulo, linguagens}) => (
        <div className={card}>
            <div className="icones-projeto">
                <a href={repo} target="_blank" rel="noreferrer"><img src={logogithub} alt="logo do github para entrar no repositório do projeto" /></a>
                <a href={pagina} target="_blank" rel="noreferrer"><img src={linkPag} alt="botão para entrar na página do projeto" /></a>
            </div> 
            <div>
                <img className="img-projeto" src={imagemCard} alt="" />
            </div>
            <div>
                <h5>{titulo}</h5>
                <p>{linguagens}</p>
            </div> 
        </div>  
    ))

    return (
        <section id="projetos">
            <div>
                <h2>PROJETOS</h2>
                <div className="grid-projetos">
                    {cardModelo}
                </div>
            </div>
        </section>
    )
}

export default Projetos;