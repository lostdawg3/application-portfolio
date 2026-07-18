import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";

import {
  SiDocker,
  SiFigma,
  SiGit,
  SiJavascript,
  SiKotlin,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiSwift,
  SiTypescript,
} from "react-icons/si";

type Technology = {
  name: string;
  icon: IconType;
  iconClassName: string;
};

const technologies: Technology[] = [
  {
    name: "Swift",
    icon: SiSwift,
    iconClassName: "text-[#F05138]",
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
    iconClassName: "text-[#A97BFF]",
  },
  {
    name: "Kotlin Multiplatform",
    icon: SiKotlin,
    iconClassName: "text-[#7F52FF]",
  },
  {
    name: "React Native",
    icon: SiReact,
    iconClassName: "text-[#61DAFB]",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    iconClassName: "text-[#3178C6]",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    iconClassName: "text-[#F7DF1E]",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    iconClassName: "text-[#5FA04E]",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    iconClassName: "text-[#3ECF8E]",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    iconClassName: "text-[#4169E1]",
  },
  {
    name: "Git",
    icon: SiGit,
    iconClassName: "text-[#F05032]",
  },
  {
    name: "AWS",
    icon: FaAws,
    iconClassName: "text-[#FF9900]",
  },
  {
    name: "Docker",
    icon: SiDocker,
    iconClassName: "text-[#2496ED]",
  },
  {
    name: "Figma",
    icon: SiFigma,
    iconClassName: "text-[#F24E1E]",
  },
];

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="mx-auto max-w-7xl px-6 py-14 lg:px-8"
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 lg:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
          Technologies &amp; Tools
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          What I Build With
        </h2>

        <div className="mt-7 flex flex-wrap gap-3">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.name}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-[#07101f]
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-300
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-white/20
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                <Icon
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 ${technology.iconClassName}`}
                />

                <span>{technology.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}