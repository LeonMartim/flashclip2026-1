export type SponsorPlanTier = "bronze" | "prata" | "ouro" | "diamante";

export interface SponsorPlan {
  id: SponsorPlanTier;
  title: string;
  subtitle: string;
  valueRange: string;
  tagline: string;
  benefits: string[];
  details: string[];
  icon: "Handshake" | "Medal" | "Trophy" | "Gem";
  contactLabel: string;
}

export const sponsorPlans: SponsorPlan[] = [
  {
    id: "bronze",
    title: "Bronze",
    subtitle: "participar",
    valueRange: "R$ 100 a R$ 199",
    tagline: "Apoio inicial com visibilidade na página de patrocinadores.",
    benefits: [
      "Logo no site apenas na página Patrocinadores",
      "Pequeno texto sobre a empresa e área de atuação",
      "Exposição para público universitário",
      "Apoio ao evento com presença digital",
    ],
    details: [
      "Visibilidade para empresas que estão começando a apoiar o FlashClip.",
      "Presença básica na seção de patrocinadores sem links externos obrigatórios.",
      "Ideal para pequenas empresas, produtores locais e projetos acadêmicos.",
    ],
    icon: "Handshake",
    contactLabel: "Quero apoiar Bronze",
  },
  {
    id: "prata",
    title: "Prata",
    subtitle: "ser visto",
    valueRange: "R$ 200 a R$ 349",
    tagline: "Maior alcance com presença em Home e redes sociais.",
    benefits: [
      "Tudo do Bronze",
      "Logo na Home em 'Nossos Parceiros'",
      "Link para Instagram",
      "Divulgação de cartazes/panfletos nas salas dos minicursos",
      "Acesso a menções em materiais do evento",
    ],
    details: [
      "A cota Prata chega ao público do evento e à comunidade de tecnologia.",
      "Link direto para o perfil ou site da sua empresa.",
      "Vantagem para quem deseja ser visto pela comunidade acadêmica.",
    ],
    icon: "Medal",
    contactLabel: "Quero apoiar Prata",
  },
  {
    id: "ouro",
    title: "Ouro",
    subtitle: "ser lembrado",
    valueRange: "R$ 350 a R$ 499",
    tagline: "Destaque premium com presença ampliada e divulgação ativa.",
    benefits: [
      "Tudo do Prata e do Bronze",
      "Botão para WhatsApp da empresa",
      "Logo com maior destaque na Home e na página Patrocinadores",
      "Logo no banner de entrada do evento",
      "Post individual de agradecimento nas redes sociais do FlashClip",
    ],
    details: [
      "A cota Ouro garante presença superior e reconhecimento junto ao público.",
      "Marca mais visível no site com destaque estético e ação de contato.",
      "Ideal para empresas que desejam reforçar autoridade na comunidade.",
    ],
    icon: "Trophy",
    contactLabel: "Quero apoiar Ouro",
  },
  {
    id: "diamante",
    title: "Diamante",
    subtitle: "dominar a atenção",
    valueRange: "R$ 500 ou mais",
    tagline: "Apoio de elite com destaque máximo em todas as frentes.",
    benefits: [
      "Tudo do Ouro",
      "Botão para site ou produto específico da empresa",
      "Destaque supremo no site, maior do que Ouro",
      "Marca associada como apoiadora principal do FlashClip 2026",
      "Menção especial no inicio dos mini cursos do evento e post exclusivo nas redes sociais",
    ],
    details: [
      "A cota Diamante é a principal vitrine do evento FlashClip 2026.",
      "Sua marca recebe tratamento premium em todos os canais.",
      "Perfeita para empresas que querem dominar a atenção do público.",
    ],
    icon: "Gem",
    contactLabel: "Quero apoiar Diamante",
  },
];
