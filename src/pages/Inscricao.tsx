import { CheckCircle2 } from "lucide-react";

const Inscricao = () => (
  <div className="min-h-screen pt-28 pb-16 px-4 relative z-10 flex items-center justify-center">
    <div className="container mx-auto max-w-2xl">
      <div
        className="card-cyber p-12 md:p-20 text-center animate-fade-up"
      >
        {/* Icon */}
        <div className="relative w-28 h-28 mx-auto mb-8">
          <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full" />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--cyan)), hsl(var(--secondary)), hsl(var(--primary)))",
              padding: "2px",
              borderRadius: "9999px",
              animation: "spin-slow 5s linear infinite",
            }}
          />
          <div className="absolute inset-[2px] rounded-full bg-card flex items-center justify-center">
            <CheckCircle2
              className="text-secondary relative z-10"
              size={52}
              strokeWidth={1.5}
            />
          </div>
        </div>

        <p className="label-mono mb-4 opacity-60">// status: encerrado</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Inscrições Encerradas!
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
          As inscrições para o evento foram encerradas. Agradecemos o seu interesse
          e esperamos te ver na próxima edição!
        </p>
        <div className="mt-8 pt-6 border-t border-white/5 text-sm text-muted-foreground/60 font-mono">
          // fique atento às nossas redes sociais para novidades
        </div>
      </div>
    </div>
  </div>
);

export default Inscricao;