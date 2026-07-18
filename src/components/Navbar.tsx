import { Download } from "lucide-react";

const navItems = ["Home", "About", "Projects", "Tech Stack", "Experience", "Contact"];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-[#020711]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <a href="#" className="flex items-center gap-3">
                    <div className="text-3xl font-black tracking-tight text-blue_500">GT</div>

                    <div className="leading-tight">
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                            Greg-Turner
                        </p>
                        <p className="text-xs text-slate-400">
                            Senior Mobile / Product Systems Engineer
                        </p>
                    </div>
                </a>

                <nav className="hidden items-center gap-9 text-sm text-slate-300 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="relative transition hover:text-white"
                        >
                            {item}
                            {item === "Home" && (
                                <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-blue-500" />
                            )}
                        </a>
                    ))}
                </nav>

                <a
                    href="/resume.pdf"
                    className="hidden items-center gap-2 rounded-xl border border-blue-500/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500/10 md:flex"
                >
                    <Download size={16} />
                    Request Resume
                </a>
            </div>
        </header>
    )
}