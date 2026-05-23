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

import cppIcon     from "@/assets/languages/cpp.png";
import jsIcon      from "@/assets/languages/javascript.png";
import goIcon      from "@/assets/languages/go.webp";
import juliaIcon   from "@/assets/languages/julia.webp";
import elixirIcon  from "@/assets/languages/elixir.png";
import phpIcon     from "@/assets/languages/php.png";
import prologIcon  from "@/assets/languages/prolog.png";

export const courses: Course[] = [
  {
    id: 1,
    category: "C++",
    title: "Programação em C++",
    description:
      "Aprenda os fundamentos de C++, uma linguagem poderosa usada em sistemas críticos e jogos.",
    duration: "3 horas",
    instructors: [
      "João Vitor Araujo",
      "Edoardo",
      "Guilherme Moreira",
      "Artur Murada",
      "Nicollas",
      "Vinicius Felipe",
    ],
    prerequisite: "Nenhum",
    image: cppIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-cpp))",
    accentHex: "#1E90FF",
  },
  {
    id: 2,
    category: "JavaScript",
    title: "JavaScript Essencial",
    description:
      "Domine JavaScript e crie aplicações web interativas do zero.",
    duration: "3 horas",
    instructors: [
      "Luiz Arthur",
      "Guilherme Motta",
      "Gabriel Lopes",
      "Matheus Carvalho",
      "Thiago Silva",
      "Samuel Abade",
    ],
    prerequisite: "Nenhum",
    image: jsIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-js))",
    accentHex: "#F7DF1E",
  },
  {
    id: 3,
    category: "Go",
    title: "Desenvolvimento com Go",
    description:
      "Aprenda Go e desenvolva aplicações modernas e performáticas com uma linguagem eficiente.",
    duration: "3 horas",
    instructors: [
      "Bruno",
      "Crispim",
      "Felipe",
      "Jorge Leon",
      "Matheus",
    ],
    prerequisite: "Nenhum",
    image: goIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-go))",
    accentHex: "#00ADD8",
  },
  {
    id: 4,
    category: "Elixir",
    title: "Programação Funcional com Elixir",
    description:
      "Explore o mundo da programação funcional com Elixir, uma linguagem moderna e escalável.",
    duration: "3 horas",
    instructors: [
      "Gabriel",
      "Kariny Ferreira",
      "Felipe Sousa",
      "Ana Carolina",
      "Larissa",
      "Deborah",
    ],
    prerequisite: "Nenhum",
    image: elixirIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-elixir))",
    accentHex: "#00D1FF",
  },
  {
    id: 5,
    category: "PHP",
    title: "Desenvolvimento Web com PHP",
    description:
      "Aprenda PHP e construa aplicações web dinâmicas e poderosas.",
    duration: "3 horas",
    instructors: [
      "Lucas Leal",
      "Jonas",
      "Igor",
      "Samuel Matsukami",
      "Eduardo",
    ],
    prerequisite: "Nenhum",
    image: phpIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-php))",
    accentHex: "#8892BF",
  },
  {
    id: 6,
    category: "Prolog",
    title: "Desvendando a Lógica com Prolog",
    description:
      "Mergulhe no mundo da programação lógica e aprenda a resolver problemas complexos usando Prolog.",
    duration: "3 horas",
    instructors: [
      "Ana Laressa",
      "Taylanne",
      "João Pedro",
      "Daniel Martins",
      "Rodrigo Folha",
    ],
    prerequisite: "Nenhum",
    image: prologIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-prolog))",
    accentHex: "#00A8FF",
  },
  {
    id: 7,
    category: "Julia",
    title: "Desenvolvimento com Julia",
    description:
      "Explore Julia e desenvolva aplicações de alta performance para ciência de dados e computação numérica.",
    duration: "3 horas",
    instructors: [
      "Carlos Eduardo",
      "Claudio Junior",
      "Euclides",
      "Joao Vithor",
      "Pedro Felipe",
    ],
    prerequisite: "Nenhum",
    image: juliaIcon,
    soldOut: false,
    accentColor: "hsl(var(--color-julia))",
    accentHex: "#9558B2",
  },
];
