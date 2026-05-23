import { Coffee, Clock, ArrowRight, MapPin } from "lucide-react";

interface ScheduleItem {
  time: string;
  duration: string;
  title: string;
  description: string;
  location: string;
  type: "course" | "break" | "coffee";
}

const schedule: ScheduleItem[] = [
  {
    time: "14:00",
    duration: "80 min",
    title: "Início dos Cursos",
    description:
      "Início dos cursos com apresentação dos patrocinadores e a programação geral.",
    location: "Labins",
    type: "course",
  },
  {
    time: "15:20",
    duration: "10 min",
    title: "Intervalo",
    description: "Pausa de 10 minutos para recarregar as energias.",
    location: "",
    type: "break",
  },
  {
    time: "15:30",
    duration: "55 min",
    title: "Retorno às Salas",
    description: "Retorno ao labin para a conclusão dos cursos.",
    location: "Labins",
    type: "course",
  },
  {
    time: "16:25",
    duration: "35 min",
    title: "Coffee-break",
    description:
      "Finalização com coffee-break para networking entre participantes e instrutores.",
    location: "",
    type: "coffee",
  },
];

const typeConfig = {
  course: {
    icon: ArrowRight,
    label: "CURSO",
    dotColor: "hsl(var(--primary))",
    dotGlow: "var(--glow-primary)",
    accentBg: "bg-primary/15 border-primary/40",
    accentText: "text-primary",
  },
  break: {
    icon: Clock,
    label: "INTERVALO",
    dotColor: "hsl(var(--muted-foreground))",
    dotGlow: "none",
    accentBg: "bg-slate-900/80 border-white/20",
    accentText: "text-foreground",
  },
  coffee: {
    icon: Coffee,
    label: "COFFEE-BREAK",
    dotColor: "hsl(var(--cyan))",
    dotGlow: "var(--glow-cyan)",
    accentBg: "bg-cyan/15 border-cyan/50",
    accentText: "text-cyan",
  },
};

const Programacao = () => (
  <div className="min-h-screen pt-28 pb-16 px-4 relative z-10">
    <div className="container mx-auto max-w-3xl">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="label-mono mb-3 opacity-60">// agenda do evento</p>
        <h1 className="text-gradient mb-4">Programação do Evento</h1>
        <p className="text-xl text-muted-foreground">
          Confira a agenda completa do FlashClip
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical gradient line */}
        <div
          className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, hsl(var(--primary)) 15%, hsl(var(--cyan)) 85%, transparent 100%)",
            boxShadow: "0 0 8px hsl(var(--primary) / 0.4)",
          }}
        />

        <div className="space-y-8">
          {schedule.map((item, index) => {
            const cfg = typeConfig[item.type];
            const Icon = cfg.icon;

            return (
              <div
                key={index}
                className="relative animate-fade-up"
                style={{ "--delay": `${index * 120}ms` } as React.CSSProperties}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-8 top-7 w-4 h-4 rounded-full border-2 border-background -translate-x-1/2 hidden md:block animate-timeline-pulse"
                  style={{
                    background: cfg.dotColor,
                    boxShadow: cfg.dotGlow,
                  }}
                />

                {/* Card */}
                <div className="md:ml-20 card-cyber p-0 overflow-hidden bg-slate-950/80 border-white/10">
                  {/* Top accent strip */}
                  <div
                    className={`flex items-center gap-3 px-5 py-2.5 border-b border-white/10 ${cfg.accentBg}`}
                  >
                    <Icon size={14} className={cfg.accentText} />
                    <span className={`font-mono text-xs font-bold tracking-widest uppercase ${cfg.accentText}`}>
                      {cfg.label}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col md:flex-row md:items-start gap-5">
                    {/* Time block */}
                    <div className="shrink-0">
                      <div
                        className={`inline-flex px-3 py-1.5 rounded-lg border font-mono text-xl font-bold ${cfg.accentBg} ${cfg.accentText}`}
                      >
                        {item.time}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1.5">{item.title}</h3>
                      <p className="text-sm text-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Meta row */}
                      <div className="flex flex-wrap gap-4 text-xs font-mono">
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <Clock size={12} className="text-cyan" />
                          {item.duration}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <MapPin size={12} className="text-cyan" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info box */}
      <div className="mt-14 card-cyber p-6 animate-fade-up" style={{ "--delay": "500ms" } as React.CSSProperties}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="label-mono text-cyan/80">// informações importantes</span>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground font-mono">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">›</span>
            Chegue com pelo menos 15 minutos de antecedência
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">›</span>
            Coffee-break e materiais inclusos na inscrição
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Programacao;