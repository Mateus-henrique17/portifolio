import { projectsData } from "../../data/portifolioData.js";
import styles from "./Projects.module.css";

export default function Projects({ theme = "dark" }) {
  return (
    <section className={styles.projetos} id="projetos">
      <h2>Meus projetos</h2>

      <div className={styles.cardsProjetos}>
        {projectsData.map((project) => {
          // Seleciona a imagem de acordo com o tema ou usa a imagem padrão do projeto
          const imgSrc =
            project.srcDark && project.srcLight
              ? theme === "dark"
                ? project.srcDark
                : project.srcLight
              : project.defaultSrc;

          return (
            <div key={project.id} className={styles.card}>
              <img
                src={imgSrc}
                alt={project.alt}
                className={styles.imgCard}
                loading="lazy"
              />
              <div className={styles.descricao}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.stack}>
                  {project.stack.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>

                <div className={styles.botoes}>
                  {project.siteUrl && (
                    <a
                      href={project.siteUrl}
                      className={styles.btn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Site
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      className={styles.btn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Repositório
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
