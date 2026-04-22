import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Clock, Users, MapPin, ChevronRight } from "lucide-react";
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
          className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-up"
          style={{ "--delay": "200ms" } as React.CSSProperties}
        >
          Conecte-se ao futuro da programação
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
            29/11/2025 às 14h
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
        <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
          {sponsors
            .filter((s) => s.tier === "diamante")
            .map((sponsor, i) => (
              <a
                key={i}
                href={sponsor.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-32 h-32 md:w-40 md:h-40 rounded-2xl
                  glass hover:border-primary/50 hover:glow-neon
                  flex items-center justify-center p-6
                  transition-all duration-300 hover:scale-105
                "
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ))}
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

              <div className="w-16 h-16 flex items-center justify-center mb-5 mx-auto">
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
