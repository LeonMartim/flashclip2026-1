// Instructor data keyed by language category.
// Used in Cursos.tsx (Avatar Groups) and Instrutores.tsx (full cards).

export interface Instructor {
  name: string;
  photo: string;
}

export const instructorsByLanguage: Record<string, Instructor[]> = {
  "Go": [
    { name: "Bruno",              photo: "/instructors/go/bruno.webp" },
    { name: "Crispim",            photo: "/instructors/go/crispim.webp" },
    { name: "Felipe",             photo: "/instructors/go/felipe.webp" },
    { name: "Jorge Leon",         photo: "/instructors/go/jorgeleon.webp" },
    { name: "Matheus",            photo: "/instructors/go/matheus.webp" },
  ],
  "Julia": [
    { name: "Carlos Eduardo",     photo: "/instructors/julia/carloseduardo.webp" },
    { name: "Claudio Junior",     photo: "/instructors/julia/claudiojunior.webp" },
    { name: "Euclides",           photo: "/instructors/julia/euclides.webp" },
    { name: "Joao Vithor",        photo: "/instructors/julia/joaovithor.webp" },
    { name: "Pedro Felipe",       photo: "/instructors/julia/pedrofelipe.webp" },
  ],
};
