import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Cursos.module.css";

function Cursos() {
    return (

        <>
        <Header />
        <Container>
            <section className={styles.cursos}>
        <h2>Cursos</h2>
        <div className={styles.cursoslist}>
        <h3>TI Cursos Certificados: </h3>
            <ul>
                <li>Curso: React | <span>Certificado</span></li>
                <li>Curso: Desenvolvedor web front-end | <span>Certificado</span></li>
                <li>Curso: Desenvolvedor web back-end | <span>Certificado</span></li>
                <li>Curso: Database Administrator - DBA | <span>Certificado</span></li>
                <li>Curso: Curso Completo de Banco de Dados Oracle DBA | <span>Certificado</span></li>
                <li>Curso: Curso Completo de Oracle Database - Programe em SQL e PL/SQL | <span>Certificado</span></li>
                <li>Curso: Microsoft Power BI Business Intelligence e Data Science | <span>Certificado</span></li>
                <li>Curso: Advanced Databases and SQL Querying | <span>Certificado</span></li>
                <li>Curso: Programação de Banco de Dados | <span>Certificado</span></li>
                <li>Curso: SQL Server | <span>Certificado</span></li>
                <li>Curso: Linux Avançado | <span>Certificado</span></li>
                <li>Curso: Network Support and Security | <span>Certificado</span></li>
                <li>Curso: Redes de Computadores | <span>Certificado</span></li>
                <li>Curso: Segurança digital/cibersegurança | <span>Certificado</span></li>
                <li>Curso: Azure & AWS | <span>Certificado</span></li>
            </ul><br />
            <h3>Logística & Transporte Cursos Certificados: </h3>
            <ul>
                <li>Cruso: Administração de frotas | <span>Certificado</span></li>
                <li>Cruso: Gestão de frete no transporte de cargas | <span>Certificado</span></li>
                <li>Cruso: Gestão de nível de serviço logístico | <span>Certificado</span></li>
                <li>Cruso: Gestão do transporte e da frota | <span>Certificado</span></li>
                <li>Cruso: Administração de terminais e armazéns | <span>Certificado</span></li>
                <li>Cruso: Logística e Administração de Materiais | <span>Certificado</span></li>
                <li>Cruso: Logística em comercio eletrônico | <span>Certificado</span></li>
                <li>Cruso: Logística integrada: suprimentos, distribuição e supply chain | <span>Certificado</span></li>
                <li>Cruso: Logística: conceitos e aplicações | <span>Certificado</span></li>
                <li>Cruso: Administração Financeira | <span>Certificado</span></li>
                <li>Cruso: Gestão Financeira | <span>Certificado</span></li>
                <li>Cruso: Gestão da Produção | <span>Certificado</span></li>
                <li>Cruso: Gestão de Equipes de Alta Performance | <span>Certificado</span></li>
                <li>Cruso: Administração de Posto de Gasolina | <span>Certificado</span></li>
            </ul>
        </div>
        <br />
        </section>
        </Container>
        <Footer />
        </>
    );

}

export default Cursos;
