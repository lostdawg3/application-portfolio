"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/types/project";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Lock,
  X,
} from "lucide-react";

type ProjectShowcaseModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectShowcaseModal({
  project,
  onClose,
}: ProjectShowcaseModalProps) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  useEffect(() => {
    setActiveScreenIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const currentProject = project;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        setActiveScreenIndex((currentIndex) =>
          currentIndex === currentProject.screens.length - 1 ? 0 : currentIndex + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveScreenIndex((currentIndex) =>
          currentIndex === 0 ? currentProject.screens.length - 1 : currentIndex - 1
        );
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  const currentProject = project;
  const activeScreen = currentProject.screens[activeScreenIndex];

  function goToPreviousScreen() {
    setActiveScreenIndex((currentIndex) =>
      currentIndex === 0 ? currentProject.screens.length - 1 : currentIndex - 1
    );
  }

  function goToNextScreen() {
    setActiveScreenIndex((currentIndex) =>
      currentIndex === currentProject.screens.length - 1 ? 0 : currentIndex + 1
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label={`${currentProject.title} showcase`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
        aria-label="Close project showcase"
      />

      <section className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#050b16] shadow-[0_40px_120px_rgba(0,0,0,0.75)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.24),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(20,184,166,0.12),transparent_26%)]" />

        <div className="relative flex max-h-[92vh] flex-col overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#050b16]/85 px-6 py-5 backdrop-blur-xl">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                {currentProject.category}
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-white">
                {currentProject.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid gap-8 p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                    Screen Showcase
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {activeScreen.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                    {activeScreen.subtitle}
                  </p>
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={goToPreviousScreen}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                    aria-label="Previous screen"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={goToNextScreen}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                    aria-label="Next screen"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.28),transparent_34%),linear-gradient(135deg,#07111f,#020711)]">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="relative h-[370px] w-[185px] rounded-[2.3rem] border border-white/20 bg-black p-3 shadow-[0_30px_90px_rgba(0,0,0,0.75)]">
                  <div className="flex h-full flex-col rounded-[1.8rem] bg-[#07111f] p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400">
                        9:41
                      </span>
                      <span className="h-5 w-16 rounded-full bg-black" />
                    </div>

                    <div className="flex-1">
                      <div className="mb-4 h-24 rounded-2xl border border-white/10 bg-blue-500/10" />

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                        {project.title}
                      </p>

                      <h4 className="mt-3 text-2xl font-semibold leading-tight text-white">
                        {activeScreen.title}
                      </h4>

                      <p className="mt-3 text-xs leading-5 text-slate-400">
                        {activeScreen.subtitle}
                      </p>

                      <div className="mt-6 space-y-2">
                        <div className="h-3 w-full rounded-full bg-white/10" />
                        <div className="h-3 w-4/5 rounded-full bg-white/10" />
                        <div className="h-3 w-2/3 rounded-full bg-white/10" />
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-4 gap-2">
                      {currentProject.screens.map((screen, index) => (
                        <button
                          key={screen.id}
                          type="button"
                          onClick={() => setActiveScreenIndex(index)}
                          className={`h-2 rounded-full transition ${
                            index === activeScreenIndex
                              ? "bg-blue-400"
                              : "bg-white/15 hover:bg-white/30"
                          }`}
                          aria-label={`View ${screen.title}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 sm:hidden">
                <button
                  type="button"
                  onClick={goToPreviousScreen}
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="Previous screen"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={goToNextScreen}
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="Next screen"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
                    {currentProject.status}
                  </span>

                  {currentProject.isPrivate && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200">
                      <Lock size={12} />
                      Source private
                    </span>
                  )}
                </div>

                <p className="text-sm leading-7 text-slate-300">
                  {currentProject.longDescription}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                  Engineering Highlights
                </p>

                <div className="space-y-3">
                  {currentProject.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <p className="text-sm leading-6 text-slate-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                  Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  View Case Study
                  <ExternalLink size={16} />
                </a>

                <a
                  href="mailto:greg.gt33@yahoo.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Discuss in Interview
                </a>
              </div>

              {currentProject.isPrivate && (
                <p className="text-xs leading-5 text-slate-500">
                  Full source code, unreleased product visuals, and proprietary
                  product mechanics are intentionally private. This showcase
                  focuses on architecture, implementation decisions, and
                  transferable engineering proof.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}