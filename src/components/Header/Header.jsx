import './Header.css';

const Header = () => {
    return (
        <section id="#header">
            <div className=".bg-secondary parallax bloco-parallax container-fluid">
                <div className="container">
                    <div className="bloco-header">
                        <h1 className="display-6">Portfolio</h1>
                        <p>Paula Augusto</p>
                    </div>
                    <p className="lead lead-header">Desenvolvedora Front-end Júnior</p>
                    <div className="btn-group mb-5" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary"><a alt="button linkedin de Paula" href="https://www.linkedin.com/in/pcamposaugusto" target="_blank" rel="noreferrer">LinkedIn</a></button>
                        <button type="button" className="btn btn-primary"><a alt="button github de Paula" href="https://github.com/pcamposaugusto" target="_blank" rel="noreferrer">Github</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;