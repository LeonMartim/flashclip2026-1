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
  "C": [
    { name: "Carloseduardo",      photo: "/instructors/c/carloseduardo.webp" },
    { name: "Caua",               photo: "/instructors/c/caua.webp" },
    { name: "Gabrielareis",       photo: "/instructors/c/gabrielareis.webp" },
    { name: "Joaopedromontelo",   photo: "/instructors/c/joaopedromontelo.webp" },
    { name: "Yngrid",             photo: "/instructors/c/yngrid.webp" },
  ],
  "Kotlin": [
    { name: "Arthurgabriel",      photo: "/instructors/kotlin/arthurgabriel.webp" },
    { name: "Henrique",           photo: "/instructors/kotlin/henrique.webp" },
    { name: "Leydson",            photo: "/instructors/kotlin/leydson.webp" },
    { name: "Marcos",             photo: "/instructors/kotlin/marcos.webp" },
    { name: "Savio",              photo: "/instructors/kotlin/savio.webp" },
    { name: "Zidanny",            photo: "/instructors/kotlin/zidanny.webp" },
  ],
  "Raskell": [
    { name: "Lucasjardim",        photo: "/instructors/raskell/lucasjardim.webp" },
    { name: "Matheusjose",        photo: "/instructors/raskell/matheusjose.jpg" },
    { name: "Samuelramos",        photo: "/instructors/raskell/samuelramos.webp" },
    { name: "Williamdias",        photo: "/instructors/raskell/williamdias.webp" },
  ],
};
