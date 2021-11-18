import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import Sobre from './components/Sobre/Sobre.jsx';
import Projetos from './components/Projetos/Projetos.jsx';
import Contato from './components/Contato/Contato.jsx';
import Footer from './components/Footer/Footer.jsx';
import whats from './assets/zap.svg';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <div>
          <a alt="ícone para entrar no Whatsapp" href="https://api.whatsapp.com/send?phone=+5571987942100" target="_blank">
            <img id="whatsapp" src={whats} />
          </a>
        </div>
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
