import { useState, useEffect } from "react";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "36px",
        right: "36px",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Tooltip label */}
      <div
        style={{
          backgroundColor: "#2A211C",
          color: "#F8F4EE",
          fontFamily: "'Jost', sans-serif",
          fontSize: "8px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "9px 16px",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(6px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        Talk to Us
      </div>

      {/* Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: hovered ? "#C9A56A" : "#2A211C",
          border: `1px solid ${hovered ? "#C9A56A" : "rgba(201,165,106,0.35)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          transition: "background 0.25s, border-color 0.25s",
          flexShrink: 0,
        }}
      >
        {/* WhatsApp path — minimal */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07a8.19 8.19 0 01-2.41-1.49 9.07 9.07 0 01-1.67-2.07c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H8.1c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.19-.57-.34z"
            fill="#F8F4EE"
          />
          <path
            d="M12 1C5.93 1 1 5.93 1 12c0 1.97.52 3.82 1.42 5.42L1 23l5.72-1.5A10.96 10.96 0 0012 23c6.07 0 11-4.93 11-11S18.07 1 12 1zm0 20c-1.82 0-3.53-.5-5-1.37l-.36-.21-3.73.98.99-3.65-.23-.38A9 9 0 013 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9z"
            fill="#F8F4EE"
            opacity="0.55"
          />
        </svg>
      </a>
    </div>
  );
}
