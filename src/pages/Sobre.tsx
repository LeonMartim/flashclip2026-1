import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Users, Rocket, Heart, ChevronRight } from "lucide-react";

const values = [
  { title: "Acessibilidade", desc: "Educação de qualidade deve ser acessível a todos" },
  { title: "Prática",        desc: "Aprender fazendo é a melhor forma de absorver conhecimento" },
  { title: "Comunidade",     desc: "Crescemos juntos através da colaboração" },
  { title: "Excelência",     desc: "Comprometidos com a melhor experiência de aprendizado" },
];

const sections = [
  {
    num: "01",
    icon: Target,
    title: "Nossa Missão",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        O FlashClip é um evento universitário criado para democratizar o acesso ao
        conhecimento em programação. Nossa missão é proporcionar uma introdução
        rápida, prática e acessível ao mundo da tecnologia, permitindo que
        estudantes de todas as áreas descubram o fascinante universo do código.
      </p>
    ),
  },
  {
    num: "02",
    icon: Rocket,
    title: "O Que Oferecemos",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p className="leading-relaxed">
          Cursos intensivos de 3 horas que cobrem desde os fundamentos até
          aplicações práticas em diversas linguagens de programação.
        </p>
        <ul className="space-y-2">
          {[
            "Instrutores qualificados com experiência prática no mercado",
            "Metodologia hands-on com projetos práticos",
            "Certificado digital reconhecido",
            "Networking com colegas e profissionais da área",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">›</span>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    num: "03",
    icon: Users,
    title: "Para Quem é o Evento",
    content: (
      <div className="text-muted-foreground">
        <p className="leading-relaxed mb-4">
          O FlashClip é para todos que têm curiosidade sobre programação,
          independente do nível de experiência:
        </p>
        <ul className="space-y-2">
          {[
            "Estudantes universitários de qualquer curso que querem aprender a programar",
            "Profissionais de outras áreas buscando transição de carreira",
            "Entusiastas de tecnologia que querem expandir seus conhecimentos",
            "Iniciantes absolutos sem nenhuma experiência prévia",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-cyan mt-1 shrink-0">✓</span>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

const Sobre = () => (
  <div className="min-h-screen pt-28 pb-16 px-4 relative z-10">
    <div className="container mx-auto max-w-3xl">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="label-mono mb-3 opacity-60">// sobre o evento</p>
        <h1 className="text-gradient mb-4">Sobre o FlashClip</h1>
        <p className="text-xl text-muted-foreground">
          Conectando estudantes ao mundo da programação
        </p>
      </div>

      <div className="space-y-6">
        {/* Main sections */}
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="card-cyber p-6 animate-fade-up"
              style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-cyan/40 font-bold">{s.num}</span>
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
                  <Icon className="text-primary" size={20} />
                </div>
                <h2 className="text-xl font-bold">{s.title}</h2>
              </div>
              {s.content}
            </div>
          );
        })}

        {/* Values grid */}
        <div
          className="card-cyber p-6 animate-fade-up"
          style={{ "--delay": "300ms" } as React.CSSProperties}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-cyan/40 font-bold">04</span>
            <div className="w-10 h-10 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center">
              <Heart className="text-secondary" size={20} />
            </div>
            <h2 className="text-xl font-bold">Nossos Valores</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <p className="font-mono text-sm font-bold text-primary mb-1">{v.title}</p>
                <p className="text-xs text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="card-cyber p-8 text-center animate-fade-up"
          style={{ "--delay": "400ms" } as React.CSSProperties}
        >
          <h3 className="text-2xl font-bold mb-3">
            Pronto para começar sua jornada?
          </h3>
          <p className="text-muted-foreground mb-6">
            Junte-se a centenas de estudantes que já transformaram suas carreiras
            através da programação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inscricao">
              <Button size="lg" className="glow-neon-strong hover:scale-105 transition-all font-mono uppercase tracking-wide text-sm">
                Inscreva-se Agora
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
            <Link to="/cursos">
              <Button size="lg" variant="outline" className="border-primary/40 hover:border-primary hover:bg-primary/10 font-mono uppercase tracking-wide text-sm">
                Ver Cursos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sobre;
