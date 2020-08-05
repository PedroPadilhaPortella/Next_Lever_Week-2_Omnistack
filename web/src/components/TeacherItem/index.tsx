import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/62967515?s=460&u=fc0e9e922c93beedeba4b883edd8412ef0fffabe&v=4" alt="Pedro Portella"/>
            <div>
                <strong>Pedro Portella</strong>
                <span>Matemática</span>
            </div>
        </header>

        <p>
            Consigo trabalhar com qualquer operação matemática básica ou avançada,<br/><br/>Sempre fui apaixonado por não morrer de fome.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$20,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Wattsapp"/>
                Entrar em Contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;