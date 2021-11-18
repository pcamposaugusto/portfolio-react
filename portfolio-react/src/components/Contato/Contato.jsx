const Contato = () => {
    return (
        <section id="contato">
            <div class="container-fluid contato">
                <h2>CONTATO</h2>
                <p>Além de poder me encontrar nas minhas redes sociais profissionais (LinkedIn e Github), você poderá me contatar via e-mail ou enviando uma mensagem por aqui:</p>
                <p><img src="img/email.svg" />paulaocaugusto@gmail.com</p>
                <form action="recebe_form.php" method="POST">
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" placeholder="Coloque aqui o seu nome" maxlength="50" required />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" maxlength="50" required />
                </div>
                <div class="mb-3">
                    <label for="assunto" class="form-label">Assunto</label>
                    <input type="text" class="form-control" id="assunto" placeholder="Escreva aqui o assunto da mensagem" maxlength="50" required />
                </div>
                <div class="mb-3">
                    <label for="mensagem" class="form-label">Mensagem</label>
                    <textarea class="form-control" id="mensagem" placeholder="Escreva aqui a sua mensagem" maxlength="1000" required rows="3"></textarea>
                </div>
                <div>
                    <button class="btn-form" type="submit">Enviar</button>
                    <button class="btn-form" type="reset">Cancelar</button>
                </div>
                </form>
            </div>
        </section>
    )
}

export default Contato;