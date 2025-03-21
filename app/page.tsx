"use client";

import { useEffect, useState } from "react";
import { Github, Mail, Linkedin, MapPin, Star, GitFork } from "lucide-react";
import { BiLogoGithub, BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import Image from "next/image";
import { useI18nStore, translations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import SkillsLoop from "@/components/SkillsLoop";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const { language } = useI18nStore();
  const t = translations[language];

  const [githubData, setGithubData] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);

    // Fetch user data
    fetch("https://api.github.com/users/oabarreto")
      .then((res) => res.json())
      .then((data) => setGithubData(data));

    // Fetch repositories
    fetch(
      "https://api.github.com/users/oabarreto/repos?sort=updated&per_page=6"
    )
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#111827] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-md px-6 py-3 shadow-lg z-50">
        <div className="flex items-center gap-4">
          <Link href="#hero">
            <Button variant="link" size="sm" onClick={() => {}}>
              {t.me}
            </Button>
          </Link>
          <Link href="#projects">
            <Button variant="link" size="sm" onClick={() => {}}>
              {t.projects}
            </Button>
          </Link>
          <Link href="#skills">
            <Button variant="link" size="sm" onClick={() => {}}>
              {t.skills}
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="link" size="sm" onClick={() => {}}>
              {t.contact}
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4" id="hero">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {githubData?.avatar_url && (
              <Image
                src={githubData.avatar_url}
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-lg"
              />
            )}
          </div>
          <h1 className="text-4xl font-bold mb-4">Otávio Barreto</h1>
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
      <section className="py-16 px-4 bg-white dark:bg-gray-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-12 text-center">Skills</h3>
          <SkillsLoop />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4" id="projects">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">{t.projects}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform"
              >
                <h4 className="font-bold mb-2 truncate">{repo.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 h-10">
                  {repo.description || "No description available"}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>
                      {repo.stargazers_count} {t.stars}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>
                      {repo.forks_count} {t.forks}
                    </span>
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
      <section className="py-16 px-4" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">{t.contactMe}</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/oabarreto"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition-transform"
            >
              <BiLogoGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/oabarreto"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition-transform"
            >
              <BiLogoLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:oabarret@gmail.com"
              className="p-3 rounded-md bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition-transform"
            >
              <BiLogoGmail className="w-6 h-6 " />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
