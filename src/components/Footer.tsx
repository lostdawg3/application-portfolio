import { Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Greg Turner. All rights reserved.</p>

            <div className="flex items-center gap-5">
                <a 
                    href="#" 
                    className="text-sm font-medium transition hover:text-white"
                     aria-label="Github"
                >
                    Github
                </a>

                <a
                    href="#"
                    className="text-sm font-medium transition hover:text-white"
                    aria-label="LinkedIn"
                >
                    LinkedIn
                </a>

                <a
                    href="mailto:greg.gt33@yahoo.com"
                    className="transition hover:text-white"
                    aria-label="Email"
                >
                    <Mail size={20} />
                </a>
            </div>
        </footer>
    );
}