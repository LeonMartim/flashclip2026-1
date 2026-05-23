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
import haskellIcon from "@/assets/languages/logohaskell.webp";
import dartIcon    from "@/assets/languages/logodart.webp";
import luaIcon     from "@/assets/languages/logolua.webp";
import rustIcon    from "@/assets/languages/logorust.webp";
import swiftIcon   from "@/assets/languages/logoswift.webp";
import typescriptIcon from "@/assets/languages/logotypescript.webp";

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
    accentHex: "#00ADD8",
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
    accentHex: "#F4C430",
  },
  {
    id: 4,
    category: "Haskell",
    title: "Introdução ao Haskell",
    description:
      "Conheça Haskell, uma linguagem funcional/experimental para soluções reativas e de alto desempenho.",
    duration: "3 horas",
    instructors: ["Lucasjardim", "Matheusjose", "Samuelramos", "Williamdias"],
    prerequisite: "Nenhum",
    image: haskellIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-haskell))",
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
    accentHex: "#FFD700",
  },
  {
    id: 6,
    category: "Dart",
    title: "Desenvolvimento com Dart",
    description:
      "Aprenda Dart e construa aplicações multiplataforma com Flutter e backend escalável.",
    duration: "3 horas",
    instructors: ["Joaomiguel", "Luisgustavo", "Marcuspires"],
    prerequisite: "Nenhum",
    image: dartIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-dart))",
    accentHex: "#10B981",
  },
  {
    id: 7,
    category: "Lua",
    title: "Programação com Lua",
    description:
      "Descubra Lua, uma linguagem leve e poderosa para scripts, games e aplicações embarcadas.",
    duration: "3 horas",
    instructors: ["Andre", "Joaby", "Karyta", "Pedro", "Rafael"],
    prerequisite: "Nenhum",
    image: luaIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-lua))",
    accentHex: "#22C55E",
  },
  {
    id: 8,
    category: "Rust",
    title: "Desenvolvimento com Rust",
    description:
      "Conheça Rust, uma linguagem de sistemas moderna com segurança de memória garantida.",
    duration: "3 horas",
    instructors: ["Joaopedroabrantes", "Leonardobezerra", "Wernerheerdt"],
    prerequisite: "Nenhum",
    image: rustIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-rust))",
    accentHex: "#22C55E",
  },
  {
    id: 9,
    category: "Swift",
    title: "Desenvolvimento com Swift",
    description:
      "Aprenda Swift e crie aplicações modernas para iOS, macOS e outros ecossistemas Apple.",
    duration: "3 horas",
    instructors: [],
    prerequisite: "Nenhum",
    image: swiftIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-swift))",
    accentHex: "#F4C430",
  },
  {
    id: 10,
    category: "TypeScript",
    title: "Desenvolvimento com TypeScript",
    description:
      "Domine TypeScript e desenvolva aplicações JavaScript robustas com tipagem estática.",
    duration: "3 horas",
    instructors: ["Murillo", "Yasmin"],
    prerequisite: "Nenhum",
    image: typescriptIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-typescript))",
    accentHex: "#3178C6",
  },
];
