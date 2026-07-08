// import type { Project } from "@/types/project";
// import { ArrowUpRight } from "lucide-react";

// type ProjectCardProps = {
//     project: Project;
// }

// export function ProjectCard({ project }: ProjectCardProps) {
//     return (
//         <article className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.055]">
//             <div className="relative mb-6 overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">
//                 <div className="absolute left-4 top-4 z-10 rounded-lg border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
//                     {project.number}
//                 </div>

//                 <div className="flex h-64 items-center justify center bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.32),transparent_34%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]">
//                     <div className="flex gap-3">
//                         <div className="h-44 w-20 rotate-[-7deg] rounded-[1.4rem] border border-white/15 bg-black p-2 shadow-2xl">
//                             <div className="h_full rounded-[1rem] bg-gradient-to-b from-slate-800 to-slate-950" />
//                         </div>
                        
//                         <div className="h-52 w-24 rounded-[1.6rem] border border-white/20 bg-black p-2 shadow-2xl">
//                             <div className="flex h-full items-center justify-center rounded-[1.1rem] bg-gradient-to-b from-blue-950 via-slate-950 to-black px-3 text-center text-xs font-semibold text-slate-300">
//                                 {project.imagePlaceholder}
//                             </div>
//                         </div>

//                         <div className="h-44 w-20 rotate-[7deg] rounded-[1.4rem] border border-white/15 p-2 shadow-2xl">
//                             <div className="h-full rounded-[1rem] bg-gradient-to-b from-slate-800 to-slate-950" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
//                 {project.category}
//             </p>

//             <div className="mb-3 flex items-start justify-between gap-4">
//                 <h3 className="text-xl font-semibold text-white">{project.title}</h3>

//                 <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-blue-300" />
//             </div>

//             <p className="min-h-20 text-sm leading-6 text-slate-400">
//                 {project.description}
//             </p>

//             <div className="mt-5 flex flex-wrap gap-2">
//                 {project.tech.map((item) => (
//                     <span
//                         key={item}
//                         className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300"
//                     >
//                         {item}
//                     </span>
//                 ))}
//             </div>
//         </article>
//     );
// }


import type { Project } from "@/types/project";
import { ArrowUpRight, Lock } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left shadow-[0_20px_70px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.055] focus:outline-none focus:ring-2 focus:ring-blue-500/60"
    >
      <div className="relative mb-6 overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">
        <div className="absolute left-4 top-4 z-10 rounded-lg border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
          {project.number}
        </div>

        {project.isPrivate && (
          <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-lg border border-white/10 bg-black/50 px-3 py-1 text-xs font-semibold text-slate-300 backdrop-blur">
            <Lock size={12} />
            Private
          </div>
        )}

        <div className="flex h-64 items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.32),transparent_34%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]">
          <div className="flex gap-3">
            <div className="h-44 w-20 rotate-[-7deg] rounded-[1.4rem] border border-white/15 bg-black p-2 shadow-2xl">
              <div className="h-full rounded-[1rem] bg-gradient-to-b from-slate-800 to-slate-950" />
            </div>

            <div className="h-52 w-24 rounded-[1.6rem] border border-white/20 bg-black p-2 shadow-2xl">
              <div className="flex h-full items-center justify-center rounded-[1.1rem] bg-gradient-to-b from-blue-950 via-slate-950 to-black px-3 text-center text-xs font-semibold text-slate-300">
                {project.imagePlaceholder}
              </div>
            </div>

            <div className="h-44 w-20 rotate-[7deg] rounded-[1.4rem] border border-white/15 bg-black p-2 shadow-2xl">
              <div className="h-full rounded-[1rem] bg-gradient-to-b from-slate-800 to-slate-950" />
            </div>
          </div>
        </div>
      </div>

      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
        {project.category}
      </p>

      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>

        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-blue-300" />
      </div>

      <p className="min-h-20 text-sm leading-6 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </button>
  );
}