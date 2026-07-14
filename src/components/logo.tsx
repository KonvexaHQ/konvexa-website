import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: number;
  variant?: "mark" | "lockup";
};

export function Logo({ className, size = 32, variant = "lockup" }: LogoProps) {
  const mark = (
    <Image
      src="/konvexa-logo.png"
      alt="Konvexa"
      width={size}
      height={size}
      className="shrink-0 object-contain"
      style={{ mixBlendMode: "multiply" }}
      priority
    />
  );

  if (variant === "mark") return <span className={className}>{mark}</span>;

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {mark}
      <span className="font-display text-lg font-semibold tracking-tight text-signal">
        Konvexa
      </span>
    </span>
  );
}
