import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
            <span>RaphaelPereira.dev</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/Cursos">Certificados</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>

    );
}

export default Header;
