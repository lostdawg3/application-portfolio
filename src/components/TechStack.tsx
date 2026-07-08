const techStack = [
    "Swift",
    "Kotlin",
    "React Native",
    "TypeScript",
    "Node.js",
    "Supabase",
    "PostgreSQL",
    "Git",
    "AWS",
    "Docker",
    "Figma",
];

export function TechStack() {
    return (
        <section className="mx-auto max-w-7xl px-6 pb-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                    Technologies & Tools
                </p>

                <h2 className="mb-6 text-2xl font-semibold text-white">
                    What I Build With
                </h2>

                <div className="flex flex-wrap gap-3">
                    {techStack.map((item) => (
                        <span 
                            key={item}
                            className="rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm font-medium text-slate-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}