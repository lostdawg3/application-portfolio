// import {ArrowRight } from "lucide-react";
// import { projects } from "@/data/projects";
// import { ProjectCard } from "@/components/ProjectCard";

// export function FeaturedProjects() {
//     return (
//         <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
//             <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
//                 <div>
//                     <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-400">
//                         Featured Work
//                     </p>

//                     <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
//                         Recent Projects
//                     </h2>

//                     <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
//                         A selection of mobile and systems projects I&apos;ve designed and 
//                         engineered end-to-end.
//                     </p>
//                 </div>

//                 <a 
//                     href="#"
//                     className="inline w-fit items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-500/50 hover:bg-blue-500/10"
//                 >
//                     View All Projects
//                     <ArrowRight size={16} />
//                 </a>
//             </div>

//             <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
//                 {projects.map((project) => (
//                     <ProjectCard key={project.id} project={project} />
//                 ))}
//             </div>
//         </section>
//     )
// }


"use client";

import { useState } from "react";
import type { Project } from "@/types/project";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectShowcaseModal } from "@/components/ProjectShowcaseModal";

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-400">
              Featured Work
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Recent Projects
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              A selection of mobile and systems projects I&apos;ve designed and
              engineered end-to-end.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-500/50 hover:bg-blue-500/10"
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </section>

      <ProjectShowcaseModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}