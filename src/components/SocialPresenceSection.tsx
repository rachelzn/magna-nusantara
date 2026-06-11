const images = [
  { src: "https://images.unsplash.com/photo-1592788174877-3f99727fd23d?w=480&h=480&fit=crop&auto=format", alt: "Vanilla beans on parchment" },
  { src: "https://images.unsplash.com/photo-1659608300925-d8ff7643ee5d?w=480&h=480&fit=crop&auto=format", alt: "Vanilla plant close-up" },
  { src: "https://images.unsplash.com/photo-1649832764034-bc81f47a98e7?w=480&h=480&fit=crop&auto=format", alt: "Vanilla sticks on paper" },
  { src: "https://images.unsplash.com/photo-1743309026555-97f545a08490?w=480&h=480&fit=crop&auto=format", alt: "Vanilla extract bottle" },
  { src: "https://images.unsplash.com/photo-1604069871151-23761eebcb7d?w=480&h=480&fit=crop&auto=format", alt: "Indonesian tropical landscape" },
  { src: "https://images.unsplash.com/photo-1542178592-012064e82076?w=480&h=480&fit=crop&auto=format", alt: "Dried botanical spices" },
];

export function SocialPresenceSection() {
  return (
    <section style={{ backgroundColor: "#F8F4EE", padding: "0 0 120px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <div style={{ width: "28px", height: "1px", background: "#C9A56A" }} />
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "8.5px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#C9A56A",
                }}
              >
                Follow the Season
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 2.8vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#2A211C",
              }}
            >
              From the field,
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>to your kitchen.</em>
            </h2>
          </div>

          <div style={{ display: "flex", gap: "28px" }}>
            {[
              { label: "Instagram", href: "https://instagram.com/magnanusantara" },
              { label: "Facebook", href: "https://facebook.com/magnanusantara" },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "8.5px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#2A211C",
                  textDecoration: "none",
                  opacity: 0.5,
                  borderBottom: "1px solid rgba(42,33,28,0.25)",
                  paddingBottom: "2px",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.5")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Grid — 6 equal columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "6px",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              style={{ overflow: "hidden", backgroundColor: "#EEE8DF", cursor: "pointer" }}
              onMouseEnter={e => {
                const el = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (el) el.style.transform = "scale(1.06)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (el) el.style.transform = "scale(1)";
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a
            href="https://instagram.com/magnanusantara"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "8.5px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#2A211C",
              textDecoration: "none",
              opacity: 0.35,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.35")}
          >
            @magnanusantara
          </a>
        </div>
      </div>
    </section>
  );
}
