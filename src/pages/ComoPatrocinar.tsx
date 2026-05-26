import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Building2, ExternalLink, Gem, Handshake, Mail, MessageCircle, Medal, Star, Trophy } from "lucide-react";
import { sponsorPlans } from "@/data/sponsorPlans";

const iconMap = {
  Handshake: Handshake,
  Medal: Medal,
  Trophy: Trophy,
  Gem: Gem,
};

const contactUrls = {
  instagram: "https://www.instagram.com/flashclipp2026",
  whatsapp: "https://wa.me/559484250581",
  email: "contatoflashclip@gmail.com",
};

const ComoPatrocinar = () => {
  useEffect(() => {
    // If arriving with a hash, scroll smoothly to the anchor
    if (window.location.hash === "#quer-apoiar") {
      const el = document.getElementById("quer-apoiar");
      if (el) {
        // small timeout to allow layout to settle after navigation
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 relative z-10">
      <div className="container mx-auto">
      <section className="mb-20 text-center">
        <p className="label-mono mb-3 opacity-60">// apoio corporativo</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Seja um patrocinador do FlashClip 2026</h1>
        <p className="mx-auto max-w-3xl text-base md:text-lg text-muted-foreground">
          O FlashClip 2026 conecta empresas, estudantes e a comunidade acadêmica, entusiastas de tecnologia e diferentes pessoas em uma experiência voltada para tecnologia, inovação e aprendizado na universidade ULBRA.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 mb-16">
        <div className="card-cyber p-6 border border-white/10 bg-white/5">
          <h2 className="text-2xl font-bold mb-4">Por que patrocinar?</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>• Visibilidade para público universitário e acadêmico.</li>
            <li>• Presença digital e presencial no evento.</li>
            <li>• Associação da marca à tecnologia e educação da rede ULBRA.</li>
            <li>• Divulgação no site oficial e nas redes do FlashClip.</li>
            <li>• Apoio à formação de novos talentos em programação.</li>
          </ul>
        </div>
        <div className="card-cyber p-6 border border-white/10 bg-white/5">
          <h2 className="text-2xl font-bold mb-4">O que você ganha?</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>• Alcance universitário e público externo qualificado.</li>
            <li>• Destaque em materiais digitais e presenciais.</li>
            <li>• Fortalecimento de reputação com jovens talentos.</li>
            <li>• Mais exposição para projetos, serviços e produtos.</li>
            <li>• Apoio à comunidade acadêmica e ao ecossistema de tecnologia.</li>
          </ul>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <p className="label-mono opacity-60">// cotas de patrocínio</p>
            <h2 className="text-3xl font-bold">Cotas que se adaptam ao seu objetivo</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/patrocinadores">
              <Button variant="outline" size="sm">Ver patrocinadores atuais</Button>
            </Link>
            <Button asChild size="sm" variant="secondary">
              <a href={contactUrls.instagram} target="_blank" rel="noopener noreferrer">Instagram do FlashClip</a>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-4">
          {sponsorPlans.map((plan) => {
            const Icon = iconMap[plan.icon];
            return (
              <article
                key={plan.id}
                id={plan.id}
                className={`card-cyber border border-white/10 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 ${
                  plan.id === "diamante"
                    ? "bg-cyan-950/20 border-cyan-400/30"
                    : plan.id === "ouro"
                    ? "bg-orange-950/15 border-orange-400/25"
                    : plan.id === "prata"
                    ? "bg-slate-950/20 border-slate-400/25"
                    : "bg-slate-950/10"
                }`}
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                    <Icon size={18} /> {plan.subtitle}
                  </span>
                  <span className="text-xs uppercase tracking-[0.35em] text-cyan-300">{plan.valueRange}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{plan.tagline}</p>
                <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <Star size={16} className="text-cyan-400 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" size="lg" variant={plan.id === "diamante" ? "default" : "secondary"}>
                  <a
                    href="#quer-apoiar"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("quer-apoiar");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {plan.contactLabel}
                  </a>
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <div className="card-cyber border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="label-mono mb-3 opacity-60">// permuta e apoio</p>
              <h2 className="text-3xl font-bold">Também aceitamos apoios em permuta</h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Dependendo da quantidade, seu apoio pode ser enquadrado nas categorias Bronze, Prata, Ouro ou Diamante.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Coffee break",
                "Banner",
                "Material gráfico",
                "Brindes para sorteio",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div id="quer-apoiar" className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-500/15 bg-slate-950/70 p-10 shadow-[0_0_60px_rgba(56,189,248,0.12)]">
          <p className="label-mono mb-3 opacity-60">// quer apoiar?</p>
          <h2 className="text-3xl font-bold mb-6">Quer apoiar o FlashClip 2026?</h2>
          <p className="mb-8 text-muted-foreground">
            Quer divulgar sua marca no FlashClip 2026? Entre em contato e conheça as opções de parceria.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
              <a href={contactUrls.instagram} target="_blank" rel="noopener noreferrer">entrar em contato com o Instagram</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <a href={contactUrls.whatsapp} target="_blank" rel="noopener noreferrer">entre em contato com WhatsApp</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href={contactUrls.email}>Enviar e-mail para organização</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  </div>
);
}
export default ComoPatrocinar;
