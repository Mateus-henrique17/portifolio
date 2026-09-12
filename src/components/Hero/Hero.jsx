import styles  from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.perfil} id="inicio">
      <img
        src="img/Perfil/foto-perfil.jpg"
        alt="Foto de Mateus Henrique, desenvolvedor front-end"
        className={styles.foto}
        loading="lazy"
      />
      <h2>Mateus Henrique</h2>
      <p className={styles.dev}>Desenvolvedor Front-End</p>
      <p className={styles.heroDescricao}>
        Desenvolvo interfaces web modernas, responsivas e focadas na
        experiência do usuário utilizando React, JavaScript (ES6+) e consumo
        de APIs REST.
      </p>
      <div className={styles.heroBotoes}>
        <a href="#projetos" className={styles.btn}>
          Ver projetos
        </a>
        <a href="#contato" className={styles.btn}>
          Contato
        </a>
      </div>
    </section>
  );
}