import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Sobre.module.css";
import avatar from './images/perfil.png';
import html from './images/html.png';
import css from './images/css.png';
import react from './images/react.png';
import sql from './images/sql.png';
import node from './images/node.png';
import logistica from './images/logistica.png';
import transporte from './images/transporte.png';
import js from './images/js.png';
import powerbi from './images/powerbi.png';


function Sobre() {
    return (
        <section className={styles.sobre}>
        <Header />
        <Container>
            <div className={styles.bio}>
        <img src={avatar} alt="Avatar"  className={styles.avatar} />
        <div>
        <h2>Sobre</h2>
        <p>Sou <span>Rafael Pereira</span><br /><br />
        <strong>Especialista nas areas de Transportes | Logística | TI | Desenvolvedor front-end / back-end | DBA SQL | Power BI</strong></p><br />
        <p>Sou um profissional com mais de 15 anos de experiência nas áreas de TI e Logística, <br />destacando-me por minha comunicação assertiva, organização e resolução de problemas. <br />Minha trajetória é marcada por um compromisso contínuo com a eficiência operacional e a inovação.</p>
        </div>
        </div>
        <div className={styles.techs}>
            <h3>Techs</h3>
                <div className={styles.icones}>
            <img src={html} alt="Icone do html" />
            <img src={css} alt="Icone do css" />
            <img src={react} alt="Icone do react" />
            <img src={sql} alt="Icone do sql" />
            <img src={node} alt="Icone do node" />
            <img src={logistica} alt="Icone da Logistica" />
            <img src={transporte} alt="Icone do transporte" />
            <img src={js} alt="Icone gestao de js" />
            <img src={powerbi} alt="Icone gestao de powerbi" />
                </div>
        </div>
        </Container>
        <Footer />
        </section>
    );

}

export default Sobre;
