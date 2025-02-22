import Skill from "./Skill";

const skills = [
  {
    name: "React & React Native",
    icon: "",
  },
  {
    name: "Next.js",
    icon: "",
  },
  {
    name: "TypeScript",
    icon: "",
  },
  {
    name: "Tailwind & Sass",
    icon: "Layout",
  },
  {
    name: "Git",
    icon: "",
  },
  {
    name: "UI Libraries",
    icon: "",
  },
  {
    name: "StencilJS",
    icon: "Cpu",
  },
  {
    name: "Firebase",
    icon: "",
  },
  {
    name: "Figma",
    icon: "",
  },
  {
    name: "Design Systems",
    icon: "",
  },
];

export default function SkillsLoop() {
  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {skills.map((skill, index) => (
          <Skill {...skill} key={`${skill.name}-${index}`} />
        ))}
      </div>
      <div
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {skills.map((skill, index) => (
          <Skill {...skill} key={`${skill.name}-${index}`} />
        ))}
      </div>
    </div>
  );
}
