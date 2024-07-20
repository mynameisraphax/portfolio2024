import styles from './Page404.module.css';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';


function Page404() {
    return (
        <>
        <Header />
        <Container>
            <h2 className={styles.titulo2}>Algo deu errado!</h2>
            <div className={styles.divsoria}>
                <span className={styles.textogrande}>404</span><br/>
                <strong className={styles.textovermelho}>Página Não Encontrada!</strong>
            </div>
        </Container>
        <Footer />
        </>

    );
}

export default Page404;
