import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import styles from './Home.module.css'

function Home() {
    return (
        <>
        <Header />
        <Container>
        <section className={styles.home}>
          <div className="apresentacao">
            <p>
            Olá, Sou <br/>
            <span><b>Raphael Pereira</b></span> Especialista em: <br/>
            Dev. Front/Back - Gestão de Cargas - Logística - DBA/SQL<br/>
            & Gestão de Equipes.
            </p>
            <br/>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red} ${styles.fadeInRight}`}>
              Saiba mais sobre mim
            </Link>
          </div>
          <figure>
            <img className={styles.img_home} src="/public/dev.png" alt="Imagem do Home" />
          </figure>
        </section>
        </Container>
        <Footer />
        </>

    );
}

export default Home;
