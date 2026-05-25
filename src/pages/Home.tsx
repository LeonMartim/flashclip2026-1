import type { Sponsor } from "@/data/sponsors";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Clock, Users, MapPin, ChevronRight, Gem, Handshake, Star, Trophy } from "lucide-react";
import { LogoFlashClip } from "@/components/LogoFlashClip";
import Countdown from "@/components/Countdown";
import { sponsors } from "@/data/sponsors";
import { courses } from "@/data/courses";

const benefits = [
  {
    icon: BookOpen,
    num: "01",
    title: "Introdução à Programação",
    description: "Aprenda os fundamentos e dê seus primeiros passos no código",
  },
  {
    icon: Clock,
    num: "02",
    title: "Curso Rápido e Focado",
    description: "Apenas 3 horas de duração com conteúdo objetivo e prático",
  },
  {
    icon: Users,
    num: "03",
    title: "Aprendizado Colaborativo",
    description: "Aprenda de forma prática junto com seus colegas",
  },
  {
    icon: Award,
    num: "04",
    title: "Certificado Digital",
    description: "Receba um certificado para adicionar ao seu currículo",
  },
];

// Use only first 3 courses as homepage preview
const previewCourses = courses.slice(0, 3);

const sponsorTierIcons = {
  bronze: Handshake,
  prata: Star,
  ouro: Trophy,
  diamante: Gem,
} as const;

const diamondSponsors = sponsors.filter((s) => s.tier === "diamante");
const goldSponsors = sponsors.filter((s) => s.tier === "ouro");
const silverSponsors = sponsors.filter((s) => s.tier === "prata");
const bronzeSponsors = sponsors.filter((s) => s.tier === "bronze");

const getSponsorHref = (sponsor: Sponsor) => sponsor.website || sponsor.instagram || sponsor.whatsapp;

const getSponsorLabel = (tier: Sponsor["tier"]) =>
  tier === "diamante"
    ? "Diamante"
    : tier === "ouro"
    ? "Ouro"
    : tier === "prata"
    ? "Prata"
    : "Bronze";

const renderSponsorCard = (sponsor: Sponsor, highlightClass: string) => {
  const Icon = sponsorTierIcons[sponsor.tier];
  const href = getSponsorHref(sponsor);

  const content = (
    <div className={`group relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 ${highlightClass}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex flex-col items-center justify-center gap-4 text-center">
        {sponsor.logo ? (
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className="max-h-20 max-w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/80">
            <Icon size={32} className="text-cyan-400" />
          </div>
        )}

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{getSponsorLabel(sponsor.tier)}</p>
          <p className="text-sm font-semibold text-white">{sponsor.name}</p>
        </div>
      </div>
    </div>
  );

  // On the homepage we avoid rendering external links/buttons for sponsors.
  // The Patrocinadores page handles clickable actions according to tier.
  return <div key={sponsor.name} className="block">{content}</div>;
};

const Home = () => (
  <div className="min-h-screen relative">
    {/* ── Hero ──────────────────────────────────────────────── */}
    <section className="pt-36 pb-24 px-4 relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan/4 blur-[80px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 animate-fade-up"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="label-mono text-cyan/80">// flashclip.system &gt; operational</span>
        </div>

        {/* Logo */}
        <div
          className="mb-6 flex justify-center animate-fade-up"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          <LogoFlashClip
            variant="icon"
            size="xl"
            className="drop-shadow-[0_0_48px_rgba(109,74,255,0.8)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl mb-12 animate-fade-up"
          style={{ "--delay": "200ms" } as React.CSSProperties}
        >
          Conecte-se ao futuro da programação{' '}
          <span className="text-cyan font-semibold">com a Copa da Tecnologia</span>
        </p>

        {/* Countdown */}
        <div
          className="mb-14 animate-fade-up"
          style={{ "--delay": "300ms" } as React.CSSProperties}
        >
          <Countdown />
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-up"
          style={{ "--delay": "400ms" } as React.CSSProperties}
        >
          <Link to="/inscricao">
            <Button
              size="lg"
              id="hero-cta-primary"
              className="
                relative font-mono uppercase tracking-wide text-sm
                glow-neon-strong hover:scale-105 transition-all duration-300
                animate-border-sweep
              "
            >
              Inscreva-se Agora
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
          <Link to="/sobre">
            <Button
              size="lg"
              variant="outline"
              id="hero-cta-secondary"
              className="border-primary/40 hover:border-primary hover:bg-primary/10 hover:glow-neon transition-all duration-300 font-mono uppercase tracking-wide text-sm"
            >
              Saiba Mais
            </Button>
          </Link>
        </div>

        {/* Event info */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground animate-fade-up"
          style={{ "--delay": "500ms" } as React.CSSProperties}
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-cyan" />
            Ulbra Palmas, TO
          </span>
          <span className="w-px h-4 bg-border" />
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-cyan" />
            13/06/2026 às 14h
          </span>
        </div>
      </div>
    </section>

    {/* ── Partners ──────────────────────────────────────────── */}
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <p className="label-mono text-center mb-8 opacity-60">// parceiros estratégicos</p>
        <h2 className="text-center mb-12 text-gradient">Nossos Parceiros</h2>
        <div className="space-y-12">
          {diamondSponsors.length > 0 && (
            <div className="mb-10 overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-950/80 p-5">
              <p className="label-mono mb-4 text-center text-cyan-300">// destaque diamante</p>
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-slate-950/90 py-5">
                <div className="flex animate-diamond-marquee gap-8 whitespace-nowrap px-4">
                  {diamondSponsors.concat(diamondSponsors).map((sponsor) => {
                    const Icon = sponsorTierIcons[sponsor.tier];
                    const href = getSponsorHref(sponsor);
                    const content = (
                      <div className="flex h-28 min-w-[220px] items-center justify-center gap-3 rounded-3xl border border-cyan-400/20 bg-slate-950/90 px-4 text-white shadow-[0_0_50px_rgba(56,189,248,0.12)]">
                        {sponsor.logo ? (
                          <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="h-16 w-auto object-contain" loading="lazy" decoding="async" />
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-500/10">
                            <Icon size={24} className="text-cyan-300" />
                          </div>
                        )}
                        <div className="text-left">
                          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Diamante</p>
                          <p className="text-sm font-semibold">{sponsor.name}</p>
                        </div>
                      </div>
                    );

                    return href ? (
                      <a key={sponsor.name} href={href} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <div key={sponsor.name}>{content}</div>
                    );
                  })}
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 to-transparent" />
              </div>
              <style>{`@keyframes diamond-marquee {0% {transform: translateX(0);}100% {transform: translateX(-50%);}} .animate-diamond-marquee {animation: diamond-marquee 24s linear infinite;}`}</style>
            </div>
          )}

          {diamondSponsors.length > 0 && (
            <div>
              <p className="label-mono mb-4 text-center text-cyan-300">Patrocinadores Diamante</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {diamondSponsors.map((sponsor) => renderSponsorCard(sponsor, "border-cyan-400/30 bg-cyan-500/10"))}
              </div>
            </div>
          )}

          {goldSponsors.length > 0 && (
            <div>
              <p className="label-mono mb-4 text-center text-amber-300">Patrocinadores Ouro</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {goldSponsors.map((sponsor) => renderSponsorCard(sponsor, "border-amber-400/25 bg-amber-500/10"))}
              </div>
            </div>
          )}

          {silverSponsors.length > 0 && (
            <div>
              <p className="label-mono mb-4 text-center text-slate-300">Patrocinadores Prata</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {silverSponsors.map((sponsor) => renderSponsorCard(sponsor, "border-slate-400/25 bg-slate-400/10"))}
              </div>
            </div>
          )}

          {/* Bronze sponsors intentionally omitted from the Home page. They are shown only on the Patrocinadores page. */}
        </div>
      </div>
    </section>

    {/* ── Why Participate ──────────────────────────────────── */}
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <p className="label-mono text-center mb-4 opacity-60">// motivos para participar</p>
        <h2 className="text-center mb-14 text-gradient">Por que participar?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className="card-cyber p-6 animate-fade-up"
                style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
              >
                {/* Sequence number */}
                <span className="font-mono text-xs text-cyan/40 font-bold">{b.num}</span>

                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center my-4 group-hover:border-primary/50 transition-colors">
                  <Icon className="text-primary" size={22} />
                </div>

                <h3 className="text-base font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── Courses Preview ───────────────────────────────────── */}
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <p className="label-mono text-center mb-4 opacity-60">// linguagens disponíveis</p>
        <h2 className="text-center mb-14 text-gradient">Nossos Cursos</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {previewCourses.map((course, i) => (
            <div
              key={course.id}
              className="card-cyber p-6 animate-fade-up"
              style={{ "--delay": `${i * 120}ms` } as React.CSSProperties}
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                style={{ background: course.accentColor, boxShadow: `0 0 12px ${course.accentHex}60` }}
              />

              {/* Sold out badge */}
              {course.soldOut && (
                <span className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                  ESGOTADO
                </span>
              )}

              <div className="w-24 h-24 flex items-center justify-center mb-5 mx-auto">
                <img
                  src={course.image}
                  alt={`${course.title} logo`}
                  className="w-full h-full object-contain"
                  style={{ filter: `drop-shadow(0 0 8px ${course.accentHex}80)` }}
                />
              </div>

              <span
                className="inline-block font-mono text-xs px-2 py-0.5 rounded border mb-3"
                style={{ color: course.accentHex, borderColor: `${course.accentHex}40`, background: `${course.accentHex}15` }}
              >
                {course.category}
              </span>

              <h3 className="text-lg font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{course.description}</p>

              <Link to="/cursos">
                <Button variant="outline" className="w-full border-white/10 hover:border-primary/50 hover:bg-primary/5 hover:glow-neon transition-all">
                  Ver Detalhes
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/cursos">
            <Button size="lg" id="home-courses-cta" className="glow-neon hover:glow-neon-strong font-mono uppercase tracking-wide text-sm transition-all duration-300 hover:scale-105">
              Ver Todos os Cursos
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
