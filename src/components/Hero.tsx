import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Database,
  Mail,
  TabletSmartphone,
  Users,
} from "lucide-react";
import { HeroDevices } from "./HeroDevices";

const stats = [
  {
    icon: Users,
    value: "8+",
    label: "Years Experience",
  },
  {
    icon: TabletSmartphone,
    value: "Mobile",
    label: "iOS / Android",
  },
  {
    icon: Code2,
    value: "Cross-platform",
    label: "React Native / KMP",
  },
  {
    icon: Database,
    value: "Backend",
    label: "Data / Cloud / APIs",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_16%_18%,rgba(20,184,166,0.09),transparent_28%)]" />

      <div className="relative mx-auto max-w-[1440px] px-6 pt-12 xl:pt-14 pb-16 lg:px-10 lg:py-20 xl:px-12 xl:py-24">
        {/* <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,560px)_minmax(0,700px)] xl:justify-between"> */}
         <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,540px)_minmax(0,1fr)]">
          {/* Left content */}
          <div className="relative z-10 min-w-0">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />

              Senior Mobile / Product Systems Engineer
            </div>

            <h1 className="max-w-[560px] text-5xl font-bold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl xl:text-[64px]">
              Building scalable mobile and{" "}
              <span className="text-blue-500">
                backend-connected products.
              </span>
            </h1>

            <p className="mt-7 max-w-[560px] text-lg leading-8 text-slate-300">
              I design and engineer high-performance mobile experiences and
              robust systems that solve real problems and scale beautifully.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.42)] transition hover:bg-blue-500"
              >
                View My Work
                <ArrowRight size={17} />
              </a>

              <a
                href="mailto:greg.gt33@yahoo.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Mail size={17} />
                Get In Touch
              </a>
            </div>

            {/* Skill pillars */}
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 xl:grid-cols-[90px_110px_170px_130px] xl:gap-x-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const showBorder = index < stats.length - 1;

                return (
                  <div
                    key={stat.label}
                    className={`min-w-0 pr-4 ${
                      showBorder
                        ? "xl:border-r xl:border-white/10"
                        : ""
                    }`}
                  >
                    <Icon
                      aria-hidden="true"
                      className="mb-3 h-5 w-5 text-blue-400"
                    />

                    <p className="whitespace-nowrap text-xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-sm leading-5 text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Professional rendered laptop and phone */}
          

          <div className="relative hidden min-h-[510px] items-center justify-end xl:flex">
            <HeroDevices />
          </div>
        </div>
      </div>
    </section>
  );
}