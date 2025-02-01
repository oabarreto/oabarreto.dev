"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Github, Mail, Linkedin, MapPin, Code2, Blocks, FileCode, GitBranch, Palette, Cpu, Database, Layout, Globe, BookOpen, Star, GitFork } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const translations = {
  en: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    role: "Front-end Developer",
    aboutText: "Front-end Developer constantly improving my stack and complementary knowledge. Skilled in graphic design tools, focused on developing skills and expanding my professional experience.",
    contactMe: "Contact Me",
    viewProject: "View Project",
    stars: "stars",
    forks: "forks"
  },
  ptBr: {
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
    role: "Desenvolvedor Front-end",
    aboutText: "Desenvolvedor Front-end em constante aprimoramento de minha stack e conhecimentos complementares. Hábil no uso de ferramentas de design gráfico, focado em desenvolver habilidades e expandir minha experiência profissional.",
    contactMe: "Entre em Contato",
    viewProject: "Ver Projeto",
    stars: "estrelas",
    forks: "forks"
  }
};

const skills = [
  { 
    name: "React & React Native",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "from-[#61DAFB] to-[#00B4D8]" 
  },
  { 
    name: "Next.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "from-[#000000] to-[#404040]" 
  },
  { 
    name: "TypeScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "from-[#3178C6] to-[#5C9EED]" 
  },
  { 
    name: "Tailwind",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    color: "from-[#38BDF8] to-[#818CF8]" 
  },
  { 
    name: "Git",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "from-[#F05032] to-[#FF7B54]" 
  },
  { 
    name: "UI Libraries",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    color: "from-[#7C3AED] to-[#C084FC]" 
  },
  { 
    name: "StencilJS",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stencyl/stencyl-original.svg",
    color: "from-[#4F46E5] to-[#818CF8]" 
  },
  { 
    name: "Firebase",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "from-[#FFCA28] to-[#FFA000]" 
  },
  { 
    name: "Figma",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "from-[#F24E1E] to-[#FF7262]" 
  },
  { 
    name: "Design Systems",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
    color: "from-[#0EA5E9] to-[#38BDF8]" 
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<"en" | "ptBr">("ptBr");
  const { theme, setTheme } = useTheme();
  const [githubData, setGithubData] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  
  useEffect(() => {
    setMounted(true);
    
    // Fetch user data
    fetch('https://api.github.com/users/oabarreto')
      .then(res => res.json())
      .then(data => setGithubData(data));
    
    // Fetch repositories
    fetch('https://api.github.com/users/oabarreto/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  if (!mounted) return null;

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#111827] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-4 right-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full px-4 py-3 shadow-lg z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setLang(lang === 'en' ? 'ptBr' : 'en')}
                  className="text-sm font-medium">
            {lang === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {githubData?.avatar_url && (
              <Image
                src={githubData.avatar_url}
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-lg"
              />
            )}
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Otávio Barreto
          </h1>
          <h2 className="text-2xl mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text font-bold">
            {t.role}
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
            <MapPin className="w-4 h-4" />
            <span>{githubData?.location || "Loading..."}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.aboutText}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">{t.skills}</h3>
          <div className="relative">
            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex gap-6 min-w-max px-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex-none w-48 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:scale-105 transition-transform">
                    <div className={`flex justify-center mb-3 bg-gradient-to-r ${skill.color}`}>
                      <Image
                        src={skill.iconUrl}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="font-medium text-center">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#FAFAFA] dark:from-[#111827] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FAFAFA] dark:from-[#111827] to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">{t.projects}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div key={repo.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform">
                <h4 className="font-bold mb-2 truncate">{repo.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 h-10">
                  {repo.description || "No description available"}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stargazers_count} {t.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks_count} {t.forks}</span>
                  </div>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t.viewProject}
                  <Github className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">{t.contactMe}</h3>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/oabarreto" 
               target="_blank"
               rel="noopener noreferrer"
               className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:oabarret@gmail.com"
               className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/oabarreto"
               target="_blank"
               rel="noopener noreferrer"
               className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}