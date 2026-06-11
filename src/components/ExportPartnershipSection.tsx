const partners = [
  "Fine Dining Restaurants",
  "Artisan Bakeries",
  "Luxury Hotels & Resorts",
  "Specialty Food Importers",
  "Patisseries & Chocolatiers",
  "International Distributors",
];

export function ExportPartnershipSection() {
  return (
    <section
      id="partnership"
      style={{ backgroundColor: "#F8F4EE", padding: "120px 0" }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "100px",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "36px" }}>
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
                Partnership
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(36px, 3.5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.02,
                color: "#2A211C",
                marginBottom: "32px",
              }}
            >
              For those who
              <br />
              demand
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>the source.</em>
            </h2>

            <p
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "17.5px",
                lineHeight: 1.78,
                color: "#2A211C",
                opacity: 0.68,
                marginBottom: "44px",
              }}
            >
              We supply hotels, restaurants, and food manufacturers across Asia and Europe
              with direct-from-origin Indonesian vanilla —
              including export documentation, certification, and custom private-label packaging.
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "'Jost', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "13px 32px",
                border: "1px solid #2A211C",
                background: "#2A211C",
                color: "#F8F4EE",
                textDecoration: "none",
                transition: "background 0.25s, border-color 0.25s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#C9A56A";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A56A";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#2A211C";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2A211C";
              }}
            >
              Discuss Partnership
            </a>
          </div>

          {/* Right — image + list */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1771329064159-33f758d91f4a?w=700&h=380&fit=crop&auto=format"
              alt="Premium packaging and presentation"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                display: "block",
                marginBottom: "40px",
              }}
            />
            <div>
              {partners.map((partner, i) => (
                <div
                  key={partner}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(42,33,28,0.1)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontSize: "17px",
                      color: "#2A211C",
                      opacity: 0.78,
                    }}
                  >
                    {partner}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "8.5px",
                      letterSpacing: "0.2em",
                      color: "#C9A56A",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
