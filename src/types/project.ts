export type ProjectScreen = {
    id: string;
    title: string;
    subtitle: string;
}

export type Project = {
    id: string;
    number: string;
    title: string;
    category: string;
    description: string;
    longDescription: string;
    tech: string[];
    imageAlt: string;
    imagePlaceholder: string;
    screens: ProjectScreen[];
    highlights: string[];
    status: "Public Demo" | "Private Product" | "Case Study" | "Prototype";
    isPrivate: boolean;
}