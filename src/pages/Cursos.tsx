import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2, ChevronRight } from "lucide-react";
import { courses } from "@/data/courses";
import { instructorsByLanguage } from "@/data/instructors";

// ── Avatar Group Component ─────────────────────────────────────
interface AvatarGroupProps {
  instructors: { name: string; photo: string }[];
  accentHex: string;
}

const AvatarGroup = ({ instructors, accentHex }: AvatarGroupProps) => {
  const visible = instructors.slice(0, 5);
  const extra = instructors.length - visible.length;

  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-3">
        {visible.map((inst, i) => (
          <div
            key={inst.name}
            className="relative group"
            style={{ zIndex: visible.length - i }}
          >
            <div
              className="w-8 h-8 rounded-full overflow-hidden border-2 border-background transition-all duration-200 group-hover:scale-110 group-hover:z-50 group-hover:-translate-y-1"
              style={{ boxShadow: `0 0 0 1px ${accentHex}40` }}
            >
              <img
                src={inst.photo}
                alt={inst.name}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.style.background = `${accentHex}20`;
                }}
              />
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded text-xs font-mono whitespace-nowrap bg-card border border-white/10 text-foreground opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              {inst.name}
            </div>
          </div>
        ))}

        {extra > 0 && (
          <div
            className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-mono font-bold"
            style={{ background: `${accentHex}20`, color: accentHex }}
          >
            +{extra}
          </div>
        )}
      </div>
      <span className="text-xs text-muted-foreground font-mono">
        {instructors.length} instrutores
      </span>
    </div>
  );
};

// ── Course Card ────────────────────────────────────────────────
const CourseCard = ({
  course,
  index,
}: {
  course: (typeof courses)[0];
  index: number;
}) => {
  const instructors = instructorsByLanguage[course.category] ?? [];

  return (
    <div
      className="card-cyber p-0 overflow-hidden animate-fade-up"
      style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
    >
      {/* Accent bar */}
      <div
        className="h-0.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${course.accentHex}, ${course.accentHex}20)`,
          boxShadow: `0 0 12px ${course.accentHex}50`,
        }}
      />

      <div className="p-6 flex flex-col h-full">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          {/* Language icon with glow */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center p-2.5"
            style={{
              background: `${course.accentHex}15`,
              border: `1px solid ${course.accentHex}30`,
            }}
          >
            <img
              src={course.image}
              alt={`${course.category} logo`}
              className="w-full h-full object-contain"
              style={{ filter: `drop-shadow(0 0 6px ${course.accentHex}90)` }}
            />
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-full border"
              style={{
                color: course.accentHex,
                borderColor: `${course.accentHex}40`,
                background: `${course.accentHex}12`,
              }}
            >
              {course.category}
            </span>
            {course.soldOut && (
              <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-red-500/40 bg-red-500/10 text-red-400">
                ESGOTADO
              </span>
            )}
          </div>
        </div>

        {/* Title + description */}
        <h3 className="text-lg font-bold mb-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
          {course.description}
        </p>

        {/* Meta */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={14} style={{ color: "hsl(var(--cyan))" }} />
            <span className="font-mono">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 size={14} className="text-green-400" />
            <span>Pré-requisito: {course.prerequisite}</span>
          </div>
        </div>

        {/* Avatar Group */}
        {instructors.length > 0 && (
          <div className="mb-5 pb-5 border-b border-white/5">
            <AvatarGroup instructors={instructors} accentHex={course.accentHex} />
          </div>
        )}

        {/* CTA */}
        <Link to="/inscricao" className="w-full">
          <Button
            className="w-full font-mono uppercase tracking-wide text-xs transition-all duration-300 hover:glow-neon"
            style={
              {
                "--tw-shadow-color": course.accentHex,
              } as React.CSSProperties
            }
          >
            Inscreva-se
            <ChevronRight size={14} className="ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

// ── Page ──────────────────────────────────────────────────────
const Cursos = () => (
  <div className="min-h-screen pt-28 pb-16 px-4 relative z-10">
    <div className="container mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="label-mono mb-3 opacity-60">// trilhas disponíveis</p>
        <h1 className="text-gradient mb-4">Conheça nossos cursos</h1>
        <p className="text-xl text-muted-foreground">
          Escolha o curso perfeito para começar sua jornada na programação
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <CourseCard key={course.id} course={course} index={i} />
        ))}
      </div>
    </div>
  </div>
);

export default Cursos;
