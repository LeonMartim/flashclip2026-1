// Single Source of Truth for course data.
// Both Home.tsx and Cursos.tsx import from here.

export interface Course {
  id: number;
  category: string;
  title: string;
  description: string;
  duration: string;
  instructors: string[];
  prerequisite: string;
  image: string;
  soldOut: boolean;
  /** Tailwind-compatible HSL CSS variable name, e.g. "var(--color-cpp)" */
  accentColor: string;
  /** Hex for inline styles where Tailwind can't be used */
  accentHex: string;
}

import goIcon      from "@/assets/languages/go.webp";
import juliaIcon   from "@/assets/languages/julia.webp";

export const courses: Course[] = [
  {
    id: 1,
    category: "Go",
    title: "Desenvolvimento com Go",
    description:
      "Aprenda Go e desenvolva aplicações modernas e performáticas com uma linguagem eficiente.",
    duration: "3 horas",
    instructors: ["Bruno", "Crispim", "Felipe", "Jorge Leon", "Matheus"],
    prerequisite: "Nenhum",
    image: goIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-go))",
    accentHex: "#00ADD8",
  },
  {
    id: 2,
    category: "Julia",
    title: "Desenvolvimento com Julia",
    description:
      "Explore Julia e desenvolva aplicações de alta performance para ciência de dados e computação numérica.",
    duration: "3 horas",
    instructors: ["Carlos Eduardo", "Claudio Junior", "Euclides", "Joao Vithor", "Pedro Felipe"],
    prerequisite: "Nenhum",
    image: juliaIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-julia))",
    accentHex: "#9558B2",
  },
];
