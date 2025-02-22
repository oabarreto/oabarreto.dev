"use client";

import Image from "next/image";

import { FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoSass,
  BiLogoBootstrap,
  BiLogoGit,
  BiLogoFirebase,
} from "react-icons/bi";

export default function SkillsLoop() {
  const skills = [
    {
      name: "React Native",
      icon: FaReact,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "TypeScript",
      icon: BiLogoTypescript,
    },
    {
      name: "Tailwind",
      icon: BiLogoTailwindCss,
    },
    {
      name: "Sass",
      icon: BiLogoSass,
    },
    {
      name: "Bootstrap",
      icon: BiLogoBootstrap,
    },
    {
      name: "Git",
      icon: BiLogoGit,
    },
    {
      name: "Firebase",
      icon: BiLogoFirebase,
    },
    {
      name: "Figma",
      icon: FaFigma,
    },
  ];

  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-row gap-3 items-center">
            <skill.icon className="h-8 w-8 text-gray-800 dark:text-gray-400" />
            <span className="font-semibold text-lg mb-1 text-gray-800 dark:text-gray-300 whitespace-nowrap">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-row gap-3 items-center">
            <skill.icon className="h-8 w-8 text-gray-800 dark:text-gray-400" />
            <span className="font-semibold text-lg mb-1 text-gray-800 dark:text-gray-300 whitespace-nowrap">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
