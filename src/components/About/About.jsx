import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.sobre} id="sobre">
      <h2>Sobre mim</h2>
      <p>
        Sou Desenvolvedor Front-End com foco na criação de aplicações web
        modernas utilizando React e JavaScript. Também trabalho com consumo de
        APIs REST, Git e GitHub, tudo para desenvolvimento de interfaces
        eficientes, responsivas e bem estruturadas.
      </p>
      <p>
        Possuo domínio de HTML semântico e CSS moderno, aplicando boas
        práticas de acessibilidade, responsividade e organização de código.
        Busco desenvolver interfaces intuitivas e de fácil manutenção,
        utilizando componentização e padrões amplamente adotados no
        desenvolvimento front-end atual.
      </p>
      <p>
        Desenvolvo projetos práticos para aprimorar continuamente minhas
        habilidades técnicas, trabalhando com integração de APIs, manipulação
        de dados e implementação de funcionalidades interativas. Tenho como
        objetivo criar soluções que unam experiência do usuário, qualidade de
        código e boas práticas de desenvolvimento.
      </p>
    </section>
  );
}