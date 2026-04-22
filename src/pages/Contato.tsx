import { Mail, Phone, Clock, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "E-mail",
    value: "contato.flashclip@gmail.com",
    href: "mailto:contato.flashclip@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (63) 98421-0122",
    href: "tel:+5563984210122",
  },
  {
    icon: Clock,
    label: "Horário de Atendimento",
    value: "Segunda a Sexta, 9h–18h",
    href: null,
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Ulbra Palmas — Palmas, TO",
    href: null,
  },
];

const Contato = () => (
  <div className="min-h-screen pt-28 pb-16 px-4 relative z-10">
    <div className="container mx-auto max-w-5xl">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="label-mono mb-3 opacity-60">// fale conosco</p>
        <h1 className="text-gradient mb-4">Entre em Contato</h1>
        <p className="text-xl text-muted-foreground">
          Estamos à disposição para esclarecer suas dúvidas
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div
          className="card-cyber p-6 animate-fade-up"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <h2 className="text-xl font-bold mb-6">Informações de Contato</h2>
          <div className="space-y-5">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Map */}
        <div
          className="card-cyber overflow-hidden animate-fade-up"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          <div className="p-4 border-b border-white/5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="label-mono text-cyan/70">// localização</span>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.9768102689961!2d-48.33419208792172!3d-10.278396208495096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b37991fd1e717%3A0xd41754067bb3ac4!2sCi%C3%AAncia%20da%20Computa%C3%A7%C3%A3o%20-%20Ulbra%20Palmas!5e0!3m2!1spt-BR!2sbr!4v1761416483531!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Ulbra Palmas"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contato;
