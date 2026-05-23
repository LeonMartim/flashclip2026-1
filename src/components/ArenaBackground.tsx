import arenaBg from "@/assets/backgrounds/arena-bg.webp";

export default function ArenaBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      
      {/* IMAGEM */}
      <img
        src={arenaBg}
        alt="Arena"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY ESCURO */}
      <div className="absolute inset-0 bg-black/20" />

    </div>
  );
}