import { useEffect, useRef } from "react";
import styles from "./ProjectModal.module.css";

export default function ProjectModal({ project, imageSrc, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const closeDialog = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby={`project-dialog-title-${project.id}`}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
    >
      <article className={styles.content}>
        <header className={styles.header}>
          <h2 id={`project-dialog-title-${project.id}`}>{project.title}</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeDialog}
            aria-label="Fechar detalhes do projeto"
            autoFocus
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </header>

        <img className={styles.image} src={imageSrc} alt={project.alt} />
        <p className={styles.description}>
          {project.details || project.description}
        </p>

        <h3>Tecnologias utilizadas</h3>
        <ul className={styles.stack}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          {project.siteUrl && (
            <a
              href={project.siteUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver site
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver repositório
            </a>
          )}
        </div>
      </article>
    </dialog>
  );
}
