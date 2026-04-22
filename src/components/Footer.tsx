import { Link } from "react-router-dom";
import { Instagram, Youtube, Zap } from "lucide-react";
import { LogoFlashClip } from "@/components/LogoFlashClip";

const socialLinks = [
  {
    name: "FlashClip no Instagram",
    icon: Instagram,
    url: "https://instagram.com/flashclip",
    color: "hover:text-pink-400 hover:shadow-[0_0_16px_rgba(236,72,153,0.6)]",
  },
  {
    name: "Computação em Movimento no Instagram",
    icon: Instagram,
    url: "https://instagram.com/computacaomovimento",
    color: "hover:text-pink-400 hover:shadow-[0_0_16px_rgba(236,72,153,0.6)]",
  },
  {
    name: "Ulbra no Instagram",
    icon: Instagram,
    url: "https://instagram.com/ulbra",
    color: "hover:text-pink-400 hover:shadow-[0_0_16px_rgba(236,72,153,0.6)]",
  },
  {
    name: "Ulbra no YouTube",
    icon: Youtube,
    url: "https://youtube.com/ulbra",
    color: "hover:text-red-400 hover:shadow-[0_0_16px_rgba(248,113,113,0.6)]",
  },
];

const Footer = () => (
  <footer className="relative mt-24 border-t border-white/5">
    {/* Top glow line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

    <div
      className="relative"
      style={{
        background:
          "linear-gradient(180deg, hsl(230 40% 7% / 0.8) 0%, hsl(230 45% 4% / 0.95) 100%)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <LogoFlashClip size="sm" rounded />
            <p className="text-xs text-muted-foreground font-mono max-w-[200px] text-center md:text-left">
              // Sistema de Eventos — Ulbra Palmas, TO
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 FlashClip. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-2 justify-center text-xs text-muted-foreground/70">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidade
              </a>
              <span>·</span>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <Zap size={11} className="text-primary" />
              <span className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                Powered by Computação em Movimento
              </span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 justify-center md:justify-end">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`
                    w-10 h-10 rounded-full glass
                    flex items-center justify-center
                    text-muted-foreground
                    transition-all duration-300 hover:scale-110
                    ${social.color}
                  `}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
