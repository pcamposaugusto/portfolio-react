import toDoList from '../../assets/toDoList.png';
import ecommerce from '../../assets/ecommerce.png';
import sudaca from '../../assets/sudaca.png';
import bd_brasilFilmes from '../../assets/BD.png';
import livrariaCosac from '../../assets/livrariaCosac.png';

const projetoToDoList = {
    card: "grid-item", 
    repo: "https://github.com/pcamposaugusto/Projeto-To-Do", 
    pagina: "https://dh-front-end-02-checkpoint-02.github.io/Projeto-To-Do/", 
    imagemCard: toDoList, 
    titulo: "To do List", 
    linguagens: "API - HTML|CSS - JS"
}

const projetoEcommerce = {
    card: "grid-item", 
    repo: "https://github.com/pcamposaugusto/dh-frontend-sudaca", 
    pagina: "https://thaysgama.github.io/dh-frontend-sudaca/", 
    imagemCard: ecommerce, 
    titulo: "E-commerce", 
    linguagens: "HTML|CSS - JS"
}

const projetoSudaca = {
    card: "grid-item", 
    repo: "https://github.com/pcamposaugusto/checkpoint-1-front-end-II", 
    pagina: "https://eduardoaraujogomes.github.io/checkpoint-1-front-end-II/", 
    imagemCard: sudaca, 
    titulo: "Sudaca Filmes", 
    linguagens: "HTML|CSS"
}

const projetoBrasilFilmes = {
    card: "grid-item", 
    repo: "https://github.com/pcamposaugusto/CTD-2021-Bimestre1/tree/main/CTD-BancoDeDados/CheckpointsBD-Criacao-do-BD%20brasil_filmes", 
    pagina: "", 
    imagemCard: bd_brasilFilmes, 
    titulo: "BD - Brasil Filmes", 
    linguagens: "MySQL|SQL"
}

const projetoLivrariaCosac = {
    card: "grid-item", 
    repo: "https://github.com/pcamposaugusto/CheckpointPOO", 
    pagina: "", 
    imagemCard: livrariaCosac, 
    titulo: "POO - Livraria Cosac", 
    linguagens: "Java"
}


export const listaDeProjetos = [projetoToDoList, projetoEcommerce, projetoSudaca, projetoBrasilFilmes, projetoLivrariaCosac];