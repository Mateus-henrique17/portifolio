import { useState } from "react";
import { technologiesData } from "../../data/portifolioData.js";
import styles from "./Technologies.module.css";

export default function Technologies() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section id="tecnologias">
      <h2>Minhas tecnologias</h2>
      <ul
        className={styles.tecnologias}
        id="lista-tecnologias"
        aria-label="Tecnologias"
      >
        {technologiesData.map((tech) => {
          if (tech.hidden && !showAll) return null;

          return (
            <li key={tech.name} className={styles.tecnologia}>
              <img
                src={tech.src}
                alt=""
                className={`${styles.logoTecnologia} ${tech.isDarkThemeLogo ? "logo-darkTheme" : ""}`}
                loading="lazy"
              />
              <p>{tech.name}</p>
            </li>
          );
        })}
      </ul>
      <div className={styles.btnContains}>
        <button
          type="button"
          className={styles.btnHidden}
          id="hiddenBtn"
          aria-expanded={showAll}
          aria-controls="lista-tecnologias"
          onClick={toggleShowAll}
        >
          {showAll ? "Ver menos" : "Ver mais"}
        </button>
      </div>
    </section>
  );
}
