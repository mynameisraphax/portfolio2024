import styles from './Card.module.css';

function Card() {
    return (
        <section className={styles.card}>
            <h3>Titulos do projetos</h3>
            <p>texto descritivo do projeto</p>
            <div className={styles.card.footer}>
                <div className={styles.card_icones}>
                    html
                </div>
                <button className={styles.botao}>
                    seta
                </button>
            </div>
        </section>
    );
}

export default Card;
