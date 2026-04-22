import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  vx: number;
  vy: number;
}

interface Connection {
  a: number;
  b: number;
  dist: number;
}

const MAX_DIST = 120; // max distance to draw a constellation line

export const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ── Resize ──────────────────────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Mouse parallax tracking ──────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      if (!prefersReducedMotion) {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Generate stars ───────────────────────────────────────
    const starCount = 160;
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.8 + 0.3,
      opacity: Math.random() * 0.7 + 0.1,
      speed: Math.random() * 0.02 + 0.005,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
    }));

    // ── Pre-compute which star pairs can connect ─────────────
    const getConnections = (): Connection[] => {
      const conns: Connection[] = [];
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) conns.push({ a: i, b: j, dist: d });
        }
      }
      return conns;
    };

    let connections = getConnections();
    let connUpdateTimer = 0;

    // ── Animation loop ───────────────────────────────────────
    let raf: number;
    let lastTime = 0;

    const animate = (now: number) => {
      const delta = now - lastTime;
      // ~30 fps cap to save CPU
      if (delta < 32) {
        raf = requestAnimationFrame(animate);
        return;
      }
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update & draw stars
      stars.forEach((star) => {
        if (!prefersReducedMotion) {
          // Twinkle
          star.opacity += star.speed * (Math.random() > 0.5 ? 1 : -1);
          star.opacity = Math.max(0.05, Math.min(0.95, star.opacity));

          // Slow drift
          star.x += star.vx;
          star.y += star.vy;

          // Wrap around canvas
          if (star.x < 0) star.x = canvas.width;
          if (star.x > canvas.width) star.x = 0;
          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;
        }

        // Subtle parallax push away from mouse
        let dx = 0, dy = 0;
        if (!prefersReducedMotion && mx > 0) {
          const mdx = star.x - mx;
          const mdy = star.y - my;
          const md  = Math.sqrt(mdx * mdx + mdy * mdy);
          if (md < 200) {
            const force = (1 - md / 200) * 1.2;
            dx = (mdx / md) * force;
            dy = (mdy / md) * force;
          }
        }

        const px = star.x + dx;
        const py = star.y + dy;

        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 200, 250, ${star.opacity})`;

        // Glow for larger stars
        if (star.size > 1.3) {
          ctx.shadowBlur  = 12;
          ctx.shadowColor = "hsl(260 85% 75% / 0.6)";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      });

      // Update connections every ~2s
      connUpdateTimer += delta;
      if (connUpdateTimer > 2000) {
        connections = getConnections();
        connUpdateTimer = 0;
      }

      // Draw constellation lines
      ctx.shadowBlur = 0;
      connections.forEach(({ a, b, dist }) => {
        const alpha = (1 - dist / MAX_DIST) * 0.25;
        ctx.beginPath();
        ctx.moveTo(stars[a].x, stars[a].y);
        ctx.lineTo(stars[b].x, stars[b].y);
        // Alternate purple/cyan lines for visual richness
        const useCyan = (a + b) % 3 === 0;
        ctx.strokeStyle = useCyan
          ? `hsla(185, 100%, 60%, ${alpha})`
          : `hsla(260, 85%, 70%, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      });

      raf = requestAnimationFrame(animate);
    };

    if (!prefersReducedMotion) {
      raf = requestAnimationFrame(animate);
    } else {
      // Static draw for reduced-motion
      animate(0);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.65 }}
    />
  );
};
