import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";




function Contatos() {
    return (
        <>
        <Header />
        <Container>
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em Contato</h3>
            <p>Para mais informações.</p>
            <br/>
            <div className={styles.icones}>

            <a href='mailto:mynameisraphax@gmail.com' target='_blank'
            rel='noopener noreferrer'>
            <GoMail className={styles.icone}/>
            </a>

            <a href='https://www.instagram.com/byraphathedev/' target='_blank'
            rel='noopener noreferrer'>
            <FaInstagram className={styles.icone}/>
            </a>

            <a href='https://www.linkedin.com/in/mynameisrafaelpereira/' target='_blank'
            rel='noopener noreferrer'>
            <AiOutlineLinkedin className={styles.icone}/>
            </a>

            <a href='https://api.whatsapp.com/send?phone=5511910946097&text=Ol%C3%A1%2C%20tudo%20bem%3F!%0AGostaria%20de%20conversar%20sobre%20sua%20disponibilidade%20para%20colabora%C3%A7%C3%A3o!' target='_blank'
            rel='noopener noreferrer'>
            <FaWhatsapp className={styles.icone}/>
            </a>

            <a href='https://github.com/mynameisraphax/' target='_blank'
            rel='noopener noreferrer'>
            <FiGithub className={styles.icone}/>
            </a>
            </div>
            </section>
        </Container>
        <Footer />
        </>
    );

}

export default Contatos;
