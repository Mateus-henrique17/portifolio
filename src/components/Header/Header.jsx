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
      <nav>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.show : ""}`}>
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
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          ☰
        </button>

        <div className={styles.btnTheme}>
          <input
            type="checkbox"
            id="chk-theme"
            className={styles.chkTheme}
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <label className={styles.labelTheme} htmlFor="chk-theme">
            <i className={`fa-solid fa-moon ${styles.iconMoon}`}></i>
            <i className={`fa-solid fa-sun ${styles.iconSun}`}></i>
            <div className={styles.ballTheme}></div>
          </label>
        </div>
      </nav>
    </header>
  );
}
