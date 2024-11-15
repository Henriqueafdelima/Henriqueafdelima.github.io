import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Sou estudante de Ciência de Dados e Inteligência Artificial com paixão por tecnologia e programação. Estou focado em me tornar um cientista de dados, especializando-me em automação de processos, análise de dados e machine learning. Aos poucos construindo uma base sólida em linguagens de programação como Python e ferramentas como SQL, AWS e Excel, busco aplicar técnicas avançadas de análise de dados para resolver problemas reais.`;

export const ABOUT_TEXT = `Atualmente fazendo uma graduação de Ciência de Dados e Inteligência Artificial na PUC São Paulo, estagiando no time de dados da consultoria pessoas do banco Itau, atuando em desafios de automatizar processos e melhorar o desempenho nas frentes de produtividade.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Estagiário de Dados",
    company: "Itau Unibanco.",
    description: `Atuando em projetos de automação e acessibilidade de dados na consultoria pessoas para gerar insights para o negócio e melhorias nos procesos internos.`,
    technologies: ["Python", "Excel", "SQL", "AWS"],
  },
  {
    year: "2019 - 2020",
    role: "Customer Service Agent",
    company: "Decolar",
    description: `Resolução de tickets de atendimento ao cliente, com foco em solucionar problemas e garantir a satisfação do cliente. Trabalho em equipe para atingir metas de qualidade e produtividade.`,
    technologies: ["Excel"],
  },
  {
    year: "2017 - 2019",
    role: "SAC Agent",
    company: "Avianca Brasil",
    description: `Atendimento ao cliente e trativa de reclamações`,
    technologies: ["Excel"],
  },
];

export const PROJECTS = [
  {
    title: "Otimização de Nutrientes",
    image: project1,
    description:
      "Ferramenta gráfica de geração de dietas de acordo com caracteristicas e objetivo do usuário",
    technologies: ["Python"],
    link: "https://github.com/Henriqueafdelima/Otimizacao-de-Nutrientes",
  },
  {
    title: "Rolezou",
    image: project2,
    description:
      "Aplicativo que permite tanto a procura quanto submissão de eventos.",
    technologies: ["Python", "SQL","HTML","CSS"],
    link: "https://github.com/Henriqueafdelima/Rolezou",
  },
  {
    title: "Portfolio em JavaScrpt",
    image: project3,
    description:
      "Portifólio de projetos que fornece uma visão clara de experiências e projetos de forma clara.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
    link: "https://github.com/Henriqueafdelima/Henriqueafdelima.github.io",
  },

];

export const CONTACT = {
  email: "Henriqueafdelima@gmail.com",
};
