import { ArrowRight, Mail, Star, Users, BriefcaseBusiness, Blocks } from "lucide-react";


const stats = [
    {
        icon: Users,
        value: "8+",
        label: "Years Experience",
    },
    {
        icon: BriefcaseBusiness,
        value: "30+",
        label: "Projects Delivered"
    },
    {
        icon: Blocks,
        value: "10M+",
        label: "Users Impacted",
    },
    {
        icon: Star,
        value: "4.9",
        label: "Client Rating",
    }
];

export function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.26),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.12),transparent_30%)]" />
        
            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1fr_0.95fr] lg:py-24">
                <div>
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border bordder-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rbga(52, 211, 153, 0.9)]" />
                        Senior Mobile / Product Systems Engineer
                    </div>

                    <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                        Building scalable mobile and{" "}
                        <span className="text-blue-500">backend-connected products.</span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                        I design and engineer high-performance mobile experiences and robust 
                        systems that solve real problems and scale beautifully.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <a
                            href="#Projects"
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.45)] transition hover:bg-blue-500"
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

                    <div className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
                        {stats.map((stat) => {
                            const Icon = stat.icon;

                            return (
                                <div key={stat.label} className="border-white/10 sm:border-r last:border-r-0">
                                    <Icon className="mb-3 h-5 w-5 text-blue-400" />
                                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                                    <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="relative hidden min-h-[420px] lg:block">
                    <div className="absolute right-0 top-10 h-72 w-[520px] rounded-full bg-blue-500/10 blur-3xl" />

                    <div className="absolute right-0 top-8 h-[330px] w-[520px] rounded-[2rem] border border-white/10 bg-white/10 bg-white/[0.04] shadow-2xl backdrop-blur">
                        <div className="h-full rounded-[2rem] bg-[linear-gradient(135deg, rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
                            <div className="h-full rounded-2xl border border-white/10 bg-[#050b16] p-5">
                                <div className="mb-4 flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-400" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                                </div>
                                    <pre className="overflow-hidden text-xs leading-6 text-slate-300">
{`const engineer = {
name: "Greg Turner",
focus: ["Mobile", "Backend", "Product"],
builds: "real-world systems",
stack: ["Swift", "Kotlin", "React Native", "Supabase"],
mindset: "ship, measure, improve"
};`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    
                    
                    <div className="absolute bottom-0 left-8 h-[360px] w-[185px] rounded-[2.4rem] border border-white/15 bg-black p-3 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
                        <div className="flex h-full flex-col justify-between rounded-[2rem] bg-[#07111f] p-6">
                            <div className="text-lg font-bold text-blue-400">GT</div>

                            <div>
                                <p className="text-2xl font-semibold leading-tight text-white">
                                    Engineer.
                                    <br />
                                    <span className="text-blue_400">Builder.</span>
                                    <br />
                                    <span className="text-cyan-300">Problem Solver.</span>
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    Available for new projects
                                </div>
                            </div>

                            <button className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-200">
                                Let&apos;s Connect
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}