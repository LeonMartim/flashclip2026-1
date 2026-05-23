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
import cIcon       from "@/assets/languages/logoc.webp";
import kotlinIcon  from "@/assets/languages/logokotlin.webp";
import raskellIcon from "@/assets/languages/logoraskell.webp";

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
    category: "C",
    title: "Programação em C",
    description:
      "Fundamentos de programação em C, abordando estruturas, ponteiros e gerenciamento de memória.",
    duration: "3 horas",
    instructors: ["Carloseduardo", "Caua", "Gabrielareis", "Joaopedromontelo", "Yngrid"],
    prerequisite: "Nenhum",
    image: cIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-c))",
    accentHex: "#1E88E5",
  },
  {
    id: 3,
    category: "Kotlin",
    title: "Desenvolvimento com Kotlin",
    description:
      "Aprenda Kotlin e construa aplicações modernas para Android e backend com sintaxe concisa e segura.",
    duration: "3 horas",
    instructors: ["Arthurgabriel", "Henrique", "Leydson", "Marcos", "Savio", "Zidanny"],
    prerequisite: "Nenhum",
    image: kotlinIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-kotlin))",
    accentHex: "#FF6D00",
  },
  {
    id: 4,
    category: "Raskell",
    title: "Introdução ao Raskell",
    description:
      "Conheça Raskell, uma linguagem funcional/experimental para soluções reativas e de alto desempenho.",
    duration: "3 horas",
    instructors: ["Lucasjardim", "Matheusjose", "Samuelramos", "Williamdias"],
    prerequisite: "Nenhum",
    image: raskellIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-raskell))",
    accentHex: "#10B981",
  },
  {
    id: 5,
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
