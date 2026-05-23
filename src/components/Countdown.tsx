import { useEffect, useState } from "react";

interface TimeLeft {
  days:    number;
  hours:   number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date("2026-06-13T14:00:00-03:00").getTime();

const calculateTimeLeft = (): TimeLeft | null => {
  const difference = TARGET_DATE - Date.now();
  if (difference <= 0) return null;
  return {
    days:    Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const TimeUnit = ({
  value,
  label,
  index,
}: {
  value: number;
  label: string;
  index: number;
}) => (
  <div
    className="flex flex-col items-center gap-2 animate-fade-up"
    style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
  >
    {/* Cyberpunk display block */}
    <div className="relative cyber-corners group">
      <div
        className="
          relative bg-card/70 backdrop-blur-sm
          border border-primary/30 rounded-lg
          px-5 py-4 min-w-[88px]
          flex items-center justify-center
          transition-all duration-300
          group-hover:border-primary/70 group-hover:glow-neon
        "
      >
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 rounded-lg pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />
        <span className="font-mono text-4xl font-bold text-gradient relative z-10 tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
    </div>
    {/* Label */}
    <span className="label-mono">{label}</span>
  </div>
);

const Separator = () => (
  <div className="flex flex-col items-center justify-center pb-6 select-none">
    <span className="font-mono text-3xl font-bold text-primary/60 animate-blink leading-none">
      :
    </span>
  </div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-center animate-fade-up">
        <span className="label-mono block mb-2">// status: live</span>
        <p className="text-2xl font-bold text-gradient">
          Evento em andamento — FlashClip 13/06/2026
        </p>
      </div>
    );
  }

  const units = [
    { label: "DIAS",    value: timeLeft.days },
    { label: "HORAS",   value: timeLeft.hours },
    { label: "MIN",     value: timeLeft.minutes },
    { label: "SEG",     value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-end gap-2 justify-center flex-wrap">
      {units.map((unit, i) => (
        <>
          <TimeUnit key={unit.label} value={unit.value} label={unit.label} index={i} />
          {i < units.length - 1 && <Separator key={`sep-${i}`} />}
        </>
      ))}
    </div>
  );
};

export default Countdown;
