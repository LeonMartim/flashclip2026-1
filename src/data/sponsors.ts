export interface Sponsor {
  name: string;
  tier: "diamante" | "ouro" | "prata" | "bronze";
  description: string;
  logo?: string;
  website?: string;
  instagram?: string;
  whatsapp?: string;
  productLink?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "Sublime - Comunicação Inteligente",
    tier: "bronze",
    description:
      "Empresa especializada na confecção de uniformes personalizados, atuando com excelência em diversos segmentos: corporativo, escolar, esportivo, promocional e profissional.",
    logo: "/patrocinadores/SublimeLogo.webp",
    instagram: "https://www.instagram.com/sublime.to",
  },

  {
    name: "Atenttus Consultoria Contábil e Agronômica",
    tier: "bronze",
    description:
      "A Atenttus Consultoria Contábil e Agronômica oferece soluções em contabilidade, planejamento tributário e consultoria para empresas e produtores rurais, unindo experiência, inovação e atendimento personalizado.",
    logo: "/patrocinadores/atenttus.webp",
    instagram: "https://www",
  }, 

  {
    name: "Líder Palmas Refrigeração",
    tier: "bronze",
    description:
      "A Líder Palmas Refrigeração reúne mais de 40 anos de experiência no segmento de refrigeração e eletrodomésticos, oferecendo peças, suporte especializado e soluções de confiança para técnicos e consumidores.",
    logo: "/patrocinadores/lider.webp",
    instagram: "https://www",
  },

  {
    name: "FamPro Seguros",
    tier: "bronze",
    description:
      "A FamPro Seguros oferece soluções em seguros e proteção financeira para pessoas e empresas, com atendimento especializado e foco na segurança de seus clientes.",
    logo: "/patrocinadores/fampro.jpeg",
    instagram: "https://www.instagram.com/sublime.to",
  },

  {
    name: "Seja nosso patrocinador - Prata 1",
    tier: "prata",
    description: "Exposição na Home em Nossos Parceiros e presença digital com link ativo.",
    instagram: "https://www.instagram.com/sejapatrocinador1",
    website: "https://example.com/patrocinador-prata-1",
  },
  {
    name: "Seja nosso patrocinador - Prata 2",
    tier: "prata",
    description: "Marca visível para estudantes e visitantes com link para sua página ou rede social.",
    instagram: "https://www.instagram.com/sejapatrocinador2",
    website: "https://example.com/patrocinador-prata-2",
  },
  {
    name: "Seja nosso patrocinador - Ouro 1",
    tier: "ouro",
    description: "Apoio com destaque maior na Home e no página de patrocinadores, além de contato direto via WhatsApp.",
    instagram: "https://www.instagram.com/sejapatrocinador3",
    website: "https://example.com/patrocinador-ouro-1",
    whatsapp: "https://wa.me/559999999991",
  },
  {
    name: "Seja nosso patrocinador - Ouro 2",
    tier: "ouro",
    description: "Contato WhatsApp ativo, divulgação nas redes do evento e logo em evidência.",
    instagram: "https://www.instagram.com/sejapatrocinador4",
    website: "https://example.com/patrocinador-ouro-2",
    whatsapp: "https://wa.me/559999999992",
  },
  {
    name: "Seja nosso patrocinador - Diamante 1",
    tier: "diamante",
    description: "Patrocinador principal com posicionamento de destaque premium e divulgação exclusiva.",
    instagram: "https://www.instagram.com/sejapatrocinador5",
    website: "https://example.com/patrocinador-diamante-1",
    whatsapp: "https://wa.me/559999999993",
    productLink: "https://example.com/produto-diamante-1",
  },
  {
    name: "Seja nosso patrocinador - Diamante 2",
    tier: "diamante",
    description: "Marca líder com presença máxima no site, redes sociais e abertura do evento.",
    instagram: "https://www.instagram.com/sejapatrocinador6",
    website: "https://example.com/patrocinador-diamante-2",
    whatsapp: "https://wa.me/559999999994",
    productLink: "https://example.com/produto-diamante-2",
  },
];
