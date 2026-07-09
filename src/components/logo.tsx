import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: number;
  variant?: "mark" | "lockup";
};

export function Logo({ className, size = 28, variant = "lockup" }: LogoProps) {
  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="konvexa-metal" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#D8DAE2" />
          <stop offset="100%" stopColor="#9698A6" />
        </linearGradient>
      </defs>
      <path
        d="M16 7C18.21 7 20 8.79 20 11V18.2L31.8 7.96C32.85 7.05 34.42 7.13 35.37 8.15C36.31 9.16 36.24 10.74 35.2 11.66L24.86 20.66L36.86 31.96C37.92 32.97 37.97 34.65 36.96 35.71C35.94 36.78 34.27 36.82 33.21 35.82L20 23.2V37C20 39.21 18.21 41 16 41C13.79 41 12 39.21 12 37V11C12 8.79 13.79 7 16 7Z"
        fill="url(#konvexa-metal)"
      />
    </svg>
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
