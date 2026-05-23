import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Instagram, Globe, Diamond, Shield, Award } from "lucide-react";
import { sponsors } from "@/data/sponsors";

const tierConfig = {
  diamante: {
    label: "Diamante",
    icon: Diamond,
    gradient: "from-cyan-400 to-blue-500",
    borderColor: "border-cyan-500/40",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-300",
    glow: "hover:shadow-[0_0_24px_hsl(185_100%_60%_/_0.35)]",
  },
  prata: {
    label: "Prata",
    icon: Shield,
    gradient: "from-slate-300 to-slate-500",
    borderColor: "border-slate-400/40",
    bgColor: "bg-slate-400/10",
    textColor: "text-slate-300",
    glow: "hover:shadow-[0_0_20px_rgba(148,163,184,0.25)]",
  },
  bronze: {
    label: "Bronze",
    icon: Award,
    gradient: "from-orange-400 to-amber-600",
    borderColor: "border-orange-500/40",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-300",
    glow: "hover:shadow-[0_0_20px_rgba(251,146,60,0.25)]",
  },
};

const filterOptions = ["todos", "diamante", "prata", "bronze"] as const;
type Filter = (typeof filterOptions)[number];

const Patrocinadores = () => {
  const [filter, setFilter] = useState<Filter>("todos");

  const filtered =
    filter === "todos" ? sponsors : sponsors.filter((s) => s.tier === filter);

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 relative z-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="label-mono mb-3 opacity-60">// apoiadores do evento</p>
          <h1 className="text-gradient mb-4">Nossos Patrocinadores</h1>
          <p className="text-xl text-muted-foreground">
            Conheça as empresas que tornam o FlashClip possível
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filterOptions.map((tier) => {
            const active = filter === tier;
            const cfg = tier !== "todos" ? tierConfig[tier] : null;
            return (
              <button
                key={tier}
                id={`filter-${tier}`}
                onClick={() => setFilter(tier)}
                className={`
                  relative font-mono text-xs uppercase tracking-widest px-5 py-2 rounded-lg
                  border transition-all duration-300
                  ${
                    active
                      ? cfg
                        ? `${cfg.borderColor} ${cfg.bgColor} ${cfg.textColor} ${cfg.glow}`
                        : "border-primary/50 bg-primary/15 text-primary glow-neon"
                      : "border-white/10 bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground"
                  }
                `}
              >
                {tier.charAt(0).toUpperCase() + tier.slice(1)}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-current" />
                )}
              </button>
            );
          })}
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((sponsor, i) => {
            const cfg = tierConfig[sponsor.tier as keyof typeof tierConfig];
            const Icon = cfg.icon;

            return (
              <div
                key={i}
                className={`
                  card-cyber p-0 overflow-hidden animate-fade-up
                  ${cfg.glow} transition-all duration-300
                `}
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                {/* Tier accent top bar */}
                <div
                  className={`flex items-center gap-2 px-4 py-2 border-b border-white/5 ${cfg.bgColor}`}
                >
                  <Icon size={12} className={cfg.textColor} />
                  <span className={`font-mono text-xs font-bold uppercase tracking-widest ${cfg.textColor}`}>
                    {cfg.label}
                  </span>
                </div>

                <div className="p-6 flex flex-col items-center text-center">
                  {/* Logo */}
                  <div className="w-32 h-32 flex items-center justify-center mb-5 p-4 rounded-xl bg-white/5">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <h3 className="text-lg font-bold mb-2">{sponsor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                    {sponsor.description}
                  </p>

                  {/* Links */}
                  <div className="flex gap-2 w-full">
                    {sponsor.website && (
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-white/10 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
                      >
                        <Globe size={13} />
                        Site
                      </a>
                    )}
                    <a
                      href={
                        sponsor.instagram.startsWith("http")
                          ? sponsor.instagram
                          : `https://instagram.com/${sponsor.instagram.replace("@", "")}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-white/10 text-xs font-mono text-muted-foreground hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/5 transition-all"
                    >
                      <ExternalLink size={13} />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 card-cyber p-8 text-center animate-fade-up" style={{ "--delay": "400ms" } as React.CSSProperties}>
          <p className="label-mono mb-3 opacity-60">// seja um apoiador</p>
          <h3 className="text-2xl font-bold mb-3">Quer ser um patrocinador?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Entre em contato e descubra como sua empresa pode apoiar o FlashClip
          </p>
          <Button size="lg" className="glow-neon hover:glow-neon-strong font-mono uppercase tracking-wide text-sm transition-all hover:scale-105">
            <ExternalLink className="mr-2" size={16} />
            Fale Conosco
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Patrocinadores;
