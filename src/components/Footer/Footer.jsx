import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.rodape}>
      <div className={styles.rodapeConteudo}>
        <p className={styles.copyright}>
          &copy; {currentYear} Mateus Henrique. Todos os direitos reservados.
        </p>

        <div className={styles.redesSociais}>
          <a
            href="https://github.com/Mateus-henrique17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mateushenrique-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}