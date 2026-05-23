import { cn } from "@/lib/utils";
import logoImage from "@/assets/LogoFlaschClipMelhorada.png";

interface LogoFlashClipProps {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  rounded?: boolean;
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-24 w-24",
  xl: "h-48 w-48 md:h-64 md:w-64",
};

export const LogoFlashClip = ({
  variant = "full",
  size = "md",
  className,
  rounded = false,
}: LogoFlashClipProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src={logoImage}
        alt="FlashClip Logo"
        className={cn(
          sizeMap[size],
          "object-contain transition-all duration-300",
          rounded && "rounded-full",
          "hover:brightness-125 hover:-translate-y-1 hover:drop-shadow-[0_0_25px_rgba(80,180,255,0.9)]"
        )}
      />
      {variant === "full" && size !== "sm" && (
        <span className="text-2xl font-bold">
          Flash<span className="text-primary">Clip</span>
        </span>
      )}
    </div>
  );
};
