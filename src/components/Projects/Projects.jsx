import { useState } from "react";
import { projectsData } from "../../data/portifolioData.js";
import ProjectModal from "../ProjectModal/ProjectModal.jsx";
import styles from "./Projects.module.css";

function getProjectImage(project, theme) {
  if (project.srcDark && project.srcLight) {
    return theme === "dark" ? project.srcDark : project.srcLight;
  }

  return project.defaultSrc;
}

export default function Projects({ theme = "dark" }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className={styles.projetos} id="projetos">
      <h2>Meus projetos</h2>

      <ul className={styles.cardsProjetos}>
        {projectsData.map((project) => (
          <li key={project.id} className={styles.card}>
            <article className={styles.cardContent}>
              <img
                src={getProjectImage(project, theme)}
                alt={project.alt}
                className={styles.imgCard}
                loading="lazy"
              />
              <div className={styles.descricao}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul
                  className={styles.stack}
                  aria-label="Tecnologias utilizadas"
                >
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className={styles.cardTrigger}
                aria-label={`Ver detalhes do projeto ${project.title}`}
                aria-haspopup="dialog"
                onClick={() => setSelectedProject(project)}
              />
            </article>
          </li>
        ))}
      </ul>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          imageSrc={getProjectImage(selectedProject, theme)}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
