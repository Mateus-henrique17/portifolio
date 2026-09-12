export const technologiesData = [
  {
    name: 'React',
    src: 'img/Tecnolgias/React.png',
    alt: 'logo React',
    hidden: false,
  },
  {
    name: 'Consumo de APIs',
    src: 'img/Tecnolgias/api-rest.png',
    alt: 'logo API REST',
    hidden: false,
  },
  {
    name: 'CSS Modules',
    src: 'img/Tecnolgias/css-modules-logo.png',
    alt: 'logo CSS Modules',
    isDarkThemeLogo: true,
    hidden: false,
  },
  {
    name: 'JS',
    src: 'img/Tecnolgias/JavaScript.png',
    alt: 'logo JavaScript',
    hidden: false,
  },
  {
    name: 'CSS',
    src: 'img/Tecnolgias/CSS3.png',
    alt: 'logo CSS',
    hidden: false,
  },
  {
    name: 'HTML',
    src: 'img/Tecnolgias/HTML5.png',
    alt: 'logo HTML',
    hidden: false,
  },
  {
    name: 'Git',
    src: 'img/Tecnolgias/Git.png',
    alt: 'logo Git',
    hidden: true,
  },
  {
    name: 'GitHub',
    src: 'img/Tecnolgias/GitHub.png',
    alt: 'logo GitHub',
    isDarkThemeLogo: true,
    hidden: true,
  },
];

export const projectsData = [
  {
    id: 1,
    title: 'Portifólio pessoal',
    description:
      'Site desenvolvido para apresentação de projetos e informações profissionais. Inclui alternância de tema (dark/light) com persistência local e formulário de contato com validação e envio de mensagens por meio do EmailJS.',
    srcDark: 'img/Cards/card-portifolio/card-portifolio-dark.webp',
    srcLight: 'img/Cards/card-portifolio/card-portifolio-light.webp',
    defaultSrc: 'img/Cards/cards-portifolio/card-portifolio-dark.jpg',
    alt: 'Imagem do site Portifólio pessoal',
    stack: ['HTML', 'CSS Modules', 'React'],
    repoUrl: 'https://github.com/Mateus-henrique17/portifolio',
    siteUrl: null,
  },
  {
    id: 2,
    title: 'To Do List',
    description:
      'Aplicação de gerenciamento de tarefas desenvolvida com React, com persistência de dados via localStorage. Permite adicionar, concluir e remover tarefas, mantendo o estado salvo no navegador.',
    defaultSrc: 'img/Cards/card-to-do-list/lista-de-tarefas-para-mudar-sua-vida.webp',
    alt: 'Imagem do projeto To Do List',
    stack: ['HTML', 'CSS', 'JS', 'React'],
    repoUrl: 'https://github.com/Mateus-henrique17/todolist',
    siteUrl: 'https://mateus-henrique17.github.io/todolist/',
  },
  {
    id: 3,
    title: 'Personal Finance Tracker',
    description:
      'Aplicação de gerenciamento financeiro desenvolvida em JavaScript puro, com persistência de dados via localStorage. Permite cadastrar, editar e remover transações com cálculo automático de saldo em tempo real.',
    defaultSrc: 'img/Cards/card-finance-app/card-finance-app.jpeg',
    alt: 'Imagem do projeto Personal Finance Tracker',
    stack: ['HTML', 'CSS', 'JS'],
    repoUrl: 'https://github.com/Mateus-henrique17/Personal-Finance-Tracker',
    siteUrl: 'https://mateus-henrique17.github.io/Personal-Finance-Tracker/',
  },
  {
    id: 4,
    title: 'Rick and Morty Explorer',
    description:
      'Aplicação web desenvolvida em React para exploração de personagens. O projeto realiza requisições assíncronas à API pública, implementa gerenciamento dinâmico de estados e apresenta uma interface responsiva.',
    defaultSrc: 'img/Cards/card-rick-and-morty/rick-morty.jpeg',
    alt: 'Imagem do site Rick and Morty Explorer',
    stack: ['React', 'JS', 'Rest Api', 'CSS'],
    repoUrl: 'https://github.com/Mateus-henrique17/Rick-and-Morty-explorer',
    siteUrl: 'https://mateus-henrique17.github.io/Rick-and-Morty-explorer/',
  },
];