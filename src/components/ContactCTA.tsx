import { ArrowRight, Mail } from "lucide-react";

export function ContactCTA() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-8">
            <div className="rounded-2xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 to-blue-700/20 p-8 shado-[0_0_60px_rgba(37,99,235,0.12)]">
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                            <Mail size={26} />
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-white">
                                Let&apos;s build something impactful.
                            </h2>
                            <p className="mt-2 text-sm text-slate-300">
                                I&apos;m currently available for new opportunities and exciting projects.
                            </p>
                        </div>
                    </div>

                    <a
                        href="mailto:greg.gt33@yahoo.com"
                        className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
                    >
                        Get In Touch
                        <ArrowRight size={17} />
                    </a>
                </div>
            </div>
        </section>
    );
}