import { ReactNode, CSSProperties } from "react";

interface LuxuryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "outline" | "solid" | "ghost";
  external?: boolean;
}

const base: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  fontFamily: "'Jost', sans-serif",
  fontSize: "9px",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  textDecoration: "none",
  cursor: "pointer",
  padding: "13px 32px",
  transition: "background 0.25s, color 0.25s, border-color 0.25s",
  whiteSpace: "nowrap",
};

function Arrow() {
  return (
    <span style={{ fontSize: "11px", lineHeight: 1, letterSpacing: 0 }}>→</span>
  );
}

export function LuxuryButton({ children, href, onClick, variant = "outline", external }: LuxuryButtonProps) {
  const variantStyle: CSSProperties =
    variant === "solid"
      ? { background: "#2A211C", color: "#F8F4EE", border: "1px solid #2A211C" }
      : variant === "ghost"
      ? { background: "transparent", color: "#F8F4EE", border: "1px solid rgba(248,244,238,0.35)" }
      : { background: "transparent", color: "#2A211C", border: "1px solid rgba(42,33,28,0.35)" };

  const hoverIn = (el: HTMLElement) => {
    if (variant === "solid") {
      el.style.background = "#C9A56A";
      el.style.borderColor = "#C9A56A";
    } else if (variant === "ghost") {
      el.style.borderColor = "rgba(248,244,238,0.8)";
      el.style.color = "#C9A56A";
    } else {
      el.style.background = "#2A211C";
      el.style.color = "#F8F4EE";
      el.style.borderColor = "#2A211C";
    }
  };

  const hoverOut = (el: HTMLElement) => {
    if (variant === "solid") {
      el.style.background = "#2A211C";
      el.style.borderColor = "#2A211C";
      el.style.color = "#F8F4EE";
    } else if (variant === "ghost") {
      el.style.borderColor = "rgba(248,244,238,0.35)";
      el.style.color = "#F8F4EE";
    } else {
      el.style.background = "transparent";
      el.style.color = "#2A211C";
      el.style.borderColor = "rgba(42,33,28,0.35)";
    }
  };

  const combinedStyle = { ...base, ...variantStyle };

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={combinedStyle}
        onMouseEnter={e => hoverIn(e.currentTarget)}
        onMouseLeave={e => hoverOut(e.currentTarget)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={{ ...combinedStyle, outline: "none" }}
      onMouseEnter={e => hoverIn(e.currentTarget)}
      onMouseLeave={e => hoverOut(e.currentTarget)}
    >
      {children}
    </button>
  );
}
