export function VanillaEmblem({ size = 120, color = "#2A211C" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Magna Nusantara vanilla flower emblem"
    >
      {/* Vanilla flower botanical line drawing */}
      {/* Central oval pod */}
      <ellipse cx="60" cy="68" rx="5" ry="22" stroke={color} strokeWidth="1" fill="none" />
      {/* Stem */}
      <line x1="60" y1="90" x2="60" y2="108" stroke={color} strokeWidth="1" />
      {/* Petals — 5 elongated petals radiating from center */}
      {/* Top petal */}
      <path d="M60 46 C56 32, 50 18, 60 10 C70 18, 64 32, 60 46Z" stroke={color} strokeWidth="1" fill="none" />
      {/* Upper-right petal */}
      <path d="M65 50 C78 40, 90 30, 96 38 C90 50, 76 52, 65 50Z" stroke={color} strokeWidth="1" fill="none" />
      {/* Lower-right petal */}
      <path d="M68 60 C82 58, 96 62, 98 72 C88 76, 76 66, 68 60Z" stroke={color} strokeWidth="1" fill="none" />
      {/* Lower-left petal */}
      <path d="M52 60 C38 58, 24 62, 22 72 C32 76, 44 66, 52 60Z" stroke={color} strokeWidth="1" fill="none" />
      {/* Upper-left petal */}
      <path d="M55 50 C42 40, 30 30, 24 38 C30 50, 44 52, 55 50Z" stroke={color} strokeWidth="1" fill="none" />
      {/* Stamen / center detail */}
      <circle cx="60" cy="52" r="4" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="60" cy="52" r="1.5" fill={color} />
      {/* Small leaf details on stem */}
      <path d="M60 95 C52 90, 48 84, 52 80" stroke={color} strokeWidth="0.75" fill="none" />
      <path d="M60 95 C68 90, 72 84, 68 80" stroke={color} strokeWidth="0.75" fill="none" />
    </svg>
  );
}
