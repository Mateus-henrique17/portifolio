import { useState } from 'react';
import { technologiesData } from '../../data/portifolioData.js';
import styles from './Technologies.module.css';

export default function Technologies() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section id="tecnologias">
      <h2>Minhas tecnologias</h2>
      <div className={styles.tecnologias}>
        {technologiesData.map((tech, index) => {
          if (tech.hidden && !showAll) return null;

          return (
            <div key={index} className={styles.tecnologia}>
              <img
                src={tech.src}
                alt={tech.alt}
                className={`${styles.logoTecnologia} ${tech.isDarkThemeLogo ? 'logo-darkTheme' : ''}`}
                loading="lazy"
              />
              <p>{tech.name}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.btnContains}>
        <button
          type="button"
          className={styles.btnHidden}
          id="hiddenBtn"
          onClick={toggleShowAll}
        >
          {showAll ? 'Ver menos' : 'Ver mais'}
        </button>
      </div>
    </section>
  );
}