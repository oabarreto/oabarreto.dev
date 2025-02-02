import { create } from "zustand";

type Language = "en" | "pt";

interface I18nStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useI18nStore = create<I18nStore>((set) => ({
  language: "pt",
  setLanguage: (language) => set({ language }),
}));

export const translations = {
  en: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    role: "Front-end / Mobile Developer",
    aboutText:
      "Front-end Developer constantly improving my stack and complementary knowledge. Skilled in graphic design tools, focused on developing skills and expanding my professional experience.",
    contactMe: "Get in touch",
    viewProject: "View Project",
    stars: "stars",
    forks: "forks",
    me: "Me",
  },
  pt: {
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
    role: "Desenvolvedor Front-end / Mobile",
    aboutText:
      "Desenvolvedor Front-end em constante aprimoramento de minha stack e conhecimentos complementares. Hábil no uso de ferramentas de design gráfico, focado em desenvolver habilidades e expandir minha experiência profissional.",
    contactMe: "Entre em Contato",
    viewProject: "Ver Projeto",
    stars: "estrelas",
    forks: "forks",
    me: "Início",
  },
} as const;
