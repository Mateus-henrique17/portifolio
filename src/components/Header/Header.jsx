import { useState } from "react";
import styles from "./Header.module.css";

export default function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>Mateus Dev</h1>
      <nav aria-label="Navegação principal">
        <ul
          id="primary-navigation"
          className={`${styles.menu} ${isMenuOpen ? styles.show : ""}`}
        >
          <li>
            <a href="#inicio" onClick={closeMenu}>
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#tecnologias" onClick={closeMenu}>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={closeMenu}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>

        <button
          className={styles.menuToggle}
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span aria-hidden="true">☰</span>
        </button>

        <div className={styles.btnTheme}>
          <input
            type="checkbox"
            id="chk-theme"
            className={styles.chkTheme}
            aria-label="Tema claro"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <label className={styles.labelTheme} htmlFor="chk-theme">
            <i
              aria-hidden="true"
              className={`fa-solid fa-moon ${styles.iconMoon}`}
            ></i>
            <i
              aria-hidden="true"
              className={`fa-solid fa-sun ${styles.iconSun}`}
            ></i>
            <div aria-hidden="true" className={styles.ballTheme}></div>
          </label>
        </div>
      </nav>
    </header>
  );
}
