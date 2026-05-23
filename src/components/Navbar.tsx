import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoFlashClip } from "@/components/LogoFlashClip";

const navLinks = [
  { name: "Home",          path: "/" },
  { name: "Cursos",        path: "/cursos" },
  { name: "Programação",   path: "/programacao" },
  { name: "Instrutores",   path: "/instrutores" },
  { name: "Patrocinadores",path: "/patrocinadores" },
  { name: "Contato",       path: "/contato" },
  { name: "Sobre",         path: "/sobre" },
  { name: "FAQ",           path: "/faq" },
];

const Navbar = () => {
  const [isOpen,      setIsOpen]      = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const location = useLocation();

  // Add shadow/blur intensity when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-background/50 backdrop-blur-lg border-b border-white/[0.04]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center transition-all duration-300 hover:drop-shadow-[0_0_12px_hsl(215_100%_50%_/_0.7)]"
          >
            <LogoFlashClip variant="full" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 group ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Hover bg */}
                <span
                  className={`absolute inset-0 rounded-md transition-opacity duration-200 ${
                    isActive(link.path)
                      ? "opacity-100 bg-primary/10"
                      : "opacity-0 group-hover:opacity-100 bg-white/5"
                  }`}
                />
                {link.name}
                {/* Active underline glow */}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-primary to-secondary rounded-full glow-neon" />
                )}
              </Link>
            ))}
            <Link to="/inscricao" className="ml-4">
              <Button
                size="sm"
                className="
                  font-mono uppercase tracking-wide text-xs
                  glow-neon hover:glow-neon-strong
                  transition-all duration-300 hover:scale-105
                "
              >
                Inscreva-se
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="navbar-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation — slide-down animation */}
      <div
        className={`lg:hidden border-t border-white/5 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(180deg, hsl(230 40% 7% / 0.95) 0%, hsl(230 45% 4% / 0.98) 100%)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="container mx-auto px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {isActive(link.path) && (
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-primary to-secondary glow-neon inline-block" />
              )}
              {link.name}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <Link to="/inscricao">
              <Button className="w-full font-mono uppercase tracking-wide text-xs glow-neon">
                Inscreva-se
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
