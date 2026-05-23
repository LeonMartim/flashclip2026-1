import { courses } from "@/data/courses";
import { instructorsByLanguage } from "@/data/instructors";

const Instrutores = () => (
  <div className="min-h-screen pt-28 pb-16 px-4 relative z-10">
    <div className="container mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="label-mono mb-3 opacity-60">// time de instrutores</p>
        <h1 className="text-gradient mb-4">Nossos Instrutores</h1>
        <p className="text-xl text-muted-foreground">
          Conheça os profissionais que vão guiar sua jornada
        </p>
      </div>

      <div className="space-y-20">
        {courses.map((course, sectionIdx) => {
          const instructors = instructorsByLanguage[course.category] ?? [];

          return (
            <section key={course.id}>
              {/* Section header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-[72px] h-[72px] rounded-xl flex items-center justify-center p-2"
                  style={{
                    background: `${course.accentHex}18`,
                    border: `1px solid ${course.accentHex}35`,
                  }}
                >
                  <img
                    src={course.image}
                    alt={`${course.category} logo`}
                    className="w-full h-full object-contain"
                    style={{ filter: `drop-shadow(0 0 6px ${course.accentHex}80)` }}
                  />
                </div>

                <div>
                  <p
                    className="font-mono text-xs uppercase tracking-widest mb-0.5"
                    style={{ color: course.accentHex }}
                  >
                    {course.category}
                  </p>
                  <h2
                    className="text-2xl md:text-3xl font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${course.accentHex}, hsl(var(--primary)))`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Instrutores de {course.category}
                  </h2>
                </div>

                {/* Spacer line */}
                <div
                  className="hidden md:block flex-1 h-px ml-4"
                  style={{
                    background: `linear-gradient(90deg, ${course.accentHex}40, transparent)`,
                  }}
                />
              </div>

              {/* Cards grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {instructors.map((instructor, i) => (
                  <div
                    key={instructor.name}
                    className="card-cyber p-5 text-center group animate-fade-up"
                    style={{
                      "--delay": `${sectionIdx * 50 + i * 60}ms`,
                    } as React.CSSProperties}
                  >
                    {/* Spinning ring avatar */}
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      {/* Gradient ring — spins on hover */}
                      <div
                        className="absolute inset-0 rounded-full transition-all duration-500"
                        style={{
                          background: `conic-gradient(from 0deg, ${course.accentHex}, hsl(var(--primary)), hsl(var(--cyan)), ${course.accentHex})`,
                          padding: "2px",
                          borderRadius: "9999px",
                          animation: "spin-slow 6s linear infinite",
                        }}
                      />
                      <div className="absolute inset-[2px] rounded-full overflow-hidden bg-card z-10">
                        <img
                          src={instructor.photo}
                          alt={instructor.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const el = e.currentTarget;
                            el.style.display = "none";
                            // Show initials fallback
                            const parent = el.parentElement!;
                            if (!parent.querySelector(".initials-fallback")) {
                              const div = document.createElement("div");
                              div.className = "initials-fallback w-full h-full flex items-center justify-center font-mono font-bold text-lg";
                              div.style.color = course.accentHex;
                              div.textContent = instructor.name
                                .split(" ")
                                .slice(0, 2)
                                .map((n) => n[0])
                                .join("");
                              parent.appendChild(div);
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-sm font-bold tracking-wide mb-2 leading-tight">
                      {instructor.name}
                    </h3>

                    {/* Language badge */}
                    <span
                      className="inline-block font-mono text-[10px] px-2 py-0.5 rounded-full border uppercase tracking-wider"
                      style={{
                        color: course.accentHex,
                        borderColor: `${course.accentHex}40`,
                        background: `${course.accentHex}12`,
                      }}
                    >
                      {course.category}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  </div>
);

export default Instrutores;
