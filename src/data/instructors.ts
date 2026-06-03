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
    { name: "Matheus Campos",            photo: "/instructors/go/matheus.webp" },
  ],
  "Julia": [
    { name: "Carlos Eduardo",     photo: "/instructors/julia/carloseduardo.webp" },
    { name: "Claudio Junior",     photo: "/instructors/julia/claudiojunior.webp" },
    { name: "Euclides",           photo: "/instructors/julia/euclides.webp" },
    { name: "João Vithor",        photo: "/instructors/julia/joaovithor.webp" },
    { name: "Pedro Felipe",       photo: "/instructors/julia/pedrofelipe.webp" },
  ],
  "C": [
    { name: "Carlos Eduardo",      photo: "/instructors/c/carloseduardo.webp" },
    { name: "Cauã Evaristo",               photo: "/instructors/c/caua.webp" },
    { name: "Gabriela Areis",       photo: "/instructors/c/gabrielareis.webp" },
    { name: "João Pedro Montelo",   photo: "/instructors/c/joaopedromontelo.webp" },
    { name: "Yngrid",             photo: "/instructors/c/yngrid.webp" },
  ],
  "Kotlin": [
    { name: "Arthur Gabriel",      photo: "/instructors/kotlin/arthurgabriel.webp" },
    { name: "Henrique",           photo: "/instructors/kotlin/henrique.webp" },
    { name: "Leydson",            photo: "/instructors/kotlin/leydson.webp" },
    { name: "Marcos",             photo: "/instructors/kotlin/marcos.webp" },
    { name: "Savio",              photo: "/instructors/kotlin/savio.webp" },
    { name: "Zidanny",            photo: "/instructors/kotlin/zidanny.webp" },
  ],
  "Haskell": [
    { name: "Lucas Jardim",        photo: "/instructors/haskell/lucasjardim.webp" },
    { name: "Matheus José",        photo: "/instructors/haskell/matheusjose.jpg" },
    { name: "Samuel Ramos",        photo: "/instructors/haskell/samuelramos.webp" },
    { name: "William Dias",        photo: "/instructors/haskell/williamdias.webp" },
    { name: "Peutry",              photo: "/instructors/haskell/peutry.webp" },
  ],
  "Dart": [
    { name: "João Miguel",         photo: "/instructors/dart/joaomiguel.jpg" },
    { name: "Luis Gustavo",        photo: "/instructors/dart/luisgustavo.jpg" },
    { name: "Marcus Pires",        photo: "/instructors/dart/marcuspires.webp" },
    { name: "Antonio Paulo",      photo: "/instructors/dart/antoniopaulo.webp" },
  ],
  "Lua": [
    { name: "Andre",              photo: "/instructors/lua/andre.webp" },
    { name: "Joaby",              photo: "/instructors/lua/joaby.webp" },
    { name: "Karyta",             photo: "/instructors/lua/karyta.webp" },
    { name: "Pedro",              photo: "/instructors/lua/pedro.webp" },
    { name: "Rafael",             photo: "/instructors/lua/rafael.webp" },
  ],
  "Rust": [
    { name: "João Pedro Abrantes",  photo: "/instructors/rust/joaopedroabrantes.webp" },
    { name: "Leonardo Bezerra",    photo: "/instructors/rust/leonardobezerra.webp" },
    { name: "Werner Heerdt",       photo: "/instructors/rust/wernerheerdt.webp" },
    { name: "Leonidas Araújo",       photo: "/instructors/rust/leonidasaraujo.webp" },
  ],
  "TypeScript": [
    { name: "Murillo",            photo: "/instructors/typescript/murillo.webp" },
    { name: "Yasmin",             photo: "/instructors/typescript/yasmin.webp" },
    { name: "Corina",             photo: "/instructors/typescript/corina.webp" },
    { name: "Ana Clara",             photo: "/instructors/typescript/anaclara.webp" },
  ],
  "Swift": [
    { name: "Heitor Mota",        photo: "/instructors/swift/heitormota.webp" },
    { name: "Igor Evangelista",   photo: "/instructors/swift/igorevangelista.webp" },
    { name: "Paulo vitor",        photo: "/instructors/swift/paulovitor.webp" },
    { name: "Pedro Leony",        photo: "/instructors/swift/pedroleony.webp" },
    { name: "Sergio",             photo: "/instructors/swift/sergio.webp" },
  ],
};
