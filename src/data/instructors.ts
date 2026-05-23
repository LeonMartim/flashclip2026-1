// Instructor data keyed by language category.
// Used in Cursos.tsx (Avatar Groups) and Instrutores.tsx (full cards).

export interface Instructor {
  name: string;
  photo: string;
}

export const instructorsByLanguage: Record<string, Instructor[]> = {
  "C++": [
    { name: "João Vitor Araujo",  photo: "https://i.ibb.co/ch8GcLS3/joao.png" },
    { name: "Edoardo",            photo: "https://i.ibb.co/20gtyCWX/edoardo-tombolesi.png" },
    { name: "Guilherme Moreira",  photo: "https://i.ibb.co/ymShqJbL/guilherme-moreira.png" },
    { name: "Artur Murada",       photo: "https://i.ibb.co/01WP1fL/artur.png" },
    { name: "Nicollas",           photo: "https://i.ibb.co/yFgPvbmr/nicollas-souza.png" },
    { name: "Vinicius Felipe",    photo: "https://i.ibb.co/kVHvV5fM/vinicius-felipe.png" },
  ],
  "JavaScript": [
    { name: "Luiz Arthur",        photo: "https://i.ibb.co/bMvcpgTv/luis-cabral.jpg" },
    { name: "Guilherme Motta",    photo: "https://i.ibb.co/GQSPJZCL/guilherme-silva.jpg" },
    { name: "Gabriel Lopes",      photo: "https://i.ibb.co/PsBDsxvL/gabriel-lopes.jpg" },
    { name: "Matheus Carvalho",   photo: "https://i.ibb.co/B5qs67rL/matheus-carvalho.jpg" },
    { name: "Thiago Silva",       photo: "https://i.ibb.co/23N1L7J1/tiago-silva.jpg" },
    { name: "Samuel Abade",       photo: "https://i.ibb.co/LzXQrmZb/samuel-abade.jpg" },
  ],
  "Elixir": [
    { name: "Gabriel",            photo: "https://i.ibb.co/GvtdHLdv/gabriel.png" },
    { name: "Kariny Ferreira",    photo: "https://i.ibb.co/xKjf724b/kariny-ferreira.png" },
    { name: "Felipe Sousa",       photo: "https://i.ibb.co/4wgpCvx5/felipe-sousa.png" },
    { name: "Ana Carolina",       photo: "https://i.ibb.co/ynXBZvG4/ana-carolina.jpg" },
    { name: "Larissa",            photo: "https://i.ibb.co/WNPPDfvb/larissa.jpg" },
    { name: "Deborah",            photo: "https://i.ibb.co/MxvCdrm6/deborah.png" },
  ],
  "PHP": [
    { name: "Lucas Leal",         photo: "https://i.ibb.co/YrX3Tf7/lucas-leal.png" },
    { name: "Jonas",              photo: "https://i.ibb.co/PZmfRx83/jonas.png" },
    { name: "Igor",               photo: "https://i.ibb.co/277rktvn/igor.png" },
    { name: "Samuel Matsukami",   photo: "https://i.ibb.co/hxPqYkzP/samuel-matsukami.png" },
    { name: "Eduardo",            photo: "https://i.ibb.co/KpZ7cyMr/eduardo.png" },
  ],
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
  "Prolog": [
    { name: "Ana Laressa",        photo: "https://i.ibb.co/7dQwq61r/ana-laressa.png" },
    { name: "Taylanne",           photo: "https://i.ibb.co/Y7f6qbNH/taylanne.png" },
    { name: "Daniel Martins",     photo: "https://i.ibb.co/93mFMYPX/daniel-martins.png" },
    { name: "Rodrigo Folha",      photo: "https://i.ibb.co/VWKZndkT/rodrigo-folha.png" },
  ],
};
