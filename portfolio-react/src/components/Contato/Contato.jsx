import './Contato.css';
import logoEmail from '../../assets/email.svg';

const Contato = () => {
    return (
        <section id="contato">
            <div className="container-fluid contato">
                <h2>CONTATO</h2>
                <p>Além de poder me encontrar nas minhas redes sociais profissionais (LinkedIn e Github), você poderá me contatar via e-mail ou enviando uma mensagem por aqui:</p>
                <p><img src={logoEmail} alt="logo e-mail" />paulaocaugusto@gmail.com</p>
                <form id="form1" name="form1" action="recebe_form.php" method="POST">
                <div className="mb-3">
                    <label for="nome" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nome" placeholder="Coloque aqui o seu nome" maxlength="50" required />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" placeholder="email@email.com" maxlength="50" required />
                </div>
                <div className="mb-3">
                    <label for="assunto" className="form-label">Assunto</label>
                    <input type="text" className="form-control" id="assunto" placeholder="Escreva aqui o assunto da mensagem" maxlength="50" required />
                </div>
                <div className="mb-3">
                    <label for="mensagem" className="form-label">Mensagem</label>
                    <textarea className="form-control" id="mensagem" placeholder="Escreva aqui a sua mensagem" maxlength="1000" required rows="3"></textarea>
                </div>
                <div>
                    <button className="btn-form" type="submit">Enviar</button>
                    <button className="btn-form" type="reset">Cancelar</button>
                </div>
                </form>
            </div>
        </section>
    )
}

export default Contato;