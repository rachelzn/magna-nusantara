import { VanillaEmblem } from "./VanillaEmblem";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#2A211C", padding: "72px 0 40px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        {/* Main row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "start",
            gap: "40px",
            marginBottom: "64px",
          }}
        >
          {/* Left */}
          <div>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "8.5px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#C9A56A",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Contact
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "hello@magnanusantara.com", href: "mailto:hello@magnanusantara.com" },
                { label: "WhatsApp", href: "https://wa.me/6281234567890" },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "16px",
                    color: "#F8F4EE",
                    opacity: 0.55,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.55")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Center — logo */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <VanillaEmblem size={56} color="#C9A56A" />
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#F8F4EE",
                  textTransform: "uppercase",
                  display: "block",
                  lineHeight: 1,
                }}
              >
                Magna
              </span>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "6.5px",
                  letterSpacing: "0.38em",
                  color: "#C9A56A",
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: "4px",
                }}
              >
                Nusantara
              </span>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "8.5px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#C9A56A",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Follow
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
              {[
                { label: "Instagram", href: "https://instagram.com/magnanusantara" },
                { label: "Facebook", href: "https://facebook.com/magnanusantara" },
                { label: "WhatsApp", href: "https://wa.me/6281234567890" },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "16px",
                    color: "#F8F4EE",
                    opacity: 0.55,
                    textDecoration: "none",
                    transition: "opacity 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C9A56A";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = "0.55";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F8F4EE";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", background: "rgba(248,244,238,0.08)", marginBottom: "32px" }} />

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "8.5px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#F8F4EE",
              opacity: 0.25,
            }}
          >
            © 2025 Magna Nusantara. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "13px",
              fontStyle: "italic",
              color: "#F8F4EE",
              opacity: 0.2,
            }}
          >
            Luxury Botanical Vanilla House · Indonesia
          </span>
        </div>
      </div>
    </footer>
  );
}
