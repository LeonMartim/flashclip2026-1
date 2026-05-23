export interface Sponsor {
  name: string;
  tier: "diamante" | "prata" | "bronze";
  description: string;
  logo: string;
  website: string;
  instagram: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "Sublime - Comunicação Inteligente",
    tier: "bronze",
    description:
      "Empresa especializada na confecção de uniformes personalizados, atuando com excelência em diversos segmentos: corporativo, escolar, esportivo, promocional e profissional.",
    logo: "/patrocinadores/SublimeLogo.webp",
    website: "",
    instagram: "https://www.instagram.com/sublime.to",
  },
];
