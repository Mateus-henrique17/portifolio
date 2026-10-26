export const technologiesData = [
  {
    name: "React",
    src: "img/Tecnologias/React.svg",
    alt: "logo React",
    hidden: false,
  },
  {
    name: "Next.js",
    src: "img/Tecnologias/NextJs.svg",
    alt: "logo Next.js",
    hidden: false,
  },
  {
    name: "Consumo de APIs",
    src: "img/Tecnologias/api-rest.svg",
    alt: "logo API REST",
    hidden: false,
  },
  {
    name: "NodeJS",
    src: "img/Tecnologias/NodeJs.svg",
    alt: "logo NodeJS",
    hidden: false,
  },
  {
    name: "JS",
    src: "img/Tecnologias/JavaScript.svg",
    alt: "logo JavaScript",
    hidden: false,
  },
  {
    name: "CSS Modules",
    src: "img/Tecnologias/css-modules-logo.svg",
    alt: "logo CSS Modules",
    isDarkThemeLogo: true,
    hidden: false,
  },
  {
    name: "CSS",
    src: "img/Tecnologias/CSS3.svg",
    alt: "logo CSS",
    hidden: true,
  },
  {
    name: "HTML",
    src: "img/Tecnologias/HTML5.svg",
    alt: "logo HTML",
    hidden: true,
  },
  {
    name: "VS Code",
    src: "img/Tecnologias/VScode.svg",
    alt: "logo VS code",
    hidden: true,
  },
  {
    name: "Git",
    src: "img/Tecnologias/Git.svg",
    alt: "logo Git",
    hidden: true,
  },
  {
    name: "GitHub",
    src: "img/Tecnologias/GitHub.svg",
    alt: "logo GitHub",
    isDarkThemeLogo: true,
    hidden: true,
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Portifólio pessoal",
    description:
      "Site desenvolvido para apresentação de projetos e informações profissionais. Inclui alternância de tema (dark/light) com persistência local e formulário de contato com validação e envio de mensagens por meio do EmailJS.",
    srcDark: "img/Cards/card-portifolio/card-portifolio-dark.webp",
    srcLight: "img/Cards/card-portifolio/card-portifolio-light.webp",
    defaultSrc: "img/Cards/cards-portifolio/card-portifolio-dark.jpg",
    alt: "Imagem do site Portifólio pessoal",
    stack: ["React", "CSS Modules"],
    repoUrl: "https://github.com/Mateus-henrique17/portifolio",
    siteUrl: null,
  },
  {
    id: 2,
    title: "To Do List",
    description:
      "Aplicação de gerenciamento de tarefas desenvolvida com React, com persistência de dados via localStorage. Permite adicionar, concluir e remover tarefas, mantendo o estado salvo no navegador.",
    defaultSrc:
      "img/Cards/card-to-do-list/lista-de-tarefas-para-mudar-sua-vida.webp",
    alt: "Imagem do projeto To Do List",
    stack: ["React", "JS"],
    repoUrl: "https://github.com/Mateus-henrique17/todolist",
    siteUrl: "https://mateus-henrique17.github.io/todolist/",
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description:
      "Aplicação de gerenciamento financeiro desenvolvida em JavaScript puro, com persistência de dados via localStorage. Permite cadastrar, editar e remover transações com cálculo automático de saldo em tempo real.",
    defaultSrc: "img/Cards/card-finance-app/card-finance-app.jpeg",
    alt: "Imagem do projeto Personal Finance Tracker",
    stack: ["HTML", "CSS", "JS"],
    repoUrl: "https://github.com/Mateus-henrique17/Personal-Finance-Tracker",
    siteUrl: "https://mateus-henrique17.github.io/Personal-Finance-Tracker/",
  },
  {
    id: 4,
    title: "Rick and Morty Explorer",
    description:
      "Aplicação web desenvolvida em React para exploração de personagens. O projeto realiza requisições assíncronas à API pública, implementa gerenciamento dinâmico de estados e apresenta uma interface responsiva.",
    defaultSrc: "img/Cards/card-rick-and-morty/rick-morty.jpeg",
    alt: "Imagem do site Rick and Morty Explorer",
    stack: ["React", "Rest Api", "JS"],
    repoUrl: "https://github.com/Mateus-henrique17/Rick-and-Morty-explorer",
    siteUrl: "https://mateus-henrique17.github.io/Rick-and-Morty-explorer/",
  },
];
