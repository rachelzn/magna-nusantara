export function FarmersOriginSection() {
  return (
    <section
      id="origin"
      style={{ backgroundColor: "#2A211C", overflow: "hidden" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "55% 45%",
          minHeight: "680px",
        }}
      >
        {/* Left — image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1743585497049-7f7cd13daf78?w=900&h=800&fit=crop&auto=format"
            alt="Indonesian farmer"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              filter: "sepia(12%) contrast(1.04)",
            }}
          />
        </div>

        {/* Right — text */}
        <div
          style={{
            padding: "80px 80px 80px 72px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
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
              The Growers
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(34px, 3.2vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#F8F4EE",
              marginBottom: "32px",
            }}
          >
            People
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>before</em>
            <br />
            commodity.
          </h2>

          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "17.5px",
              lineHeight: 1.78,
              color: "#F8F4EE",
              opacity: 0.65,
              marginBottom: "48px",
            }}
          >
            We work directly with twelve farming families across Sulawesi and Lombok,
            purchasing exclusively at premium above-market prices.
            No middlemen. No anonymous aggregators.
            The knowledge of when to pick and how to cure lives in the hands of these families.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "0",
              marginBottom: "52px",
              borderTop: "1px solid rgba(248,244,238,0.1)",
              borderBottom: "1px solid rgba(248,244,238,0.1)",
              padding: "32px 0",
            }}
          >
            {[
              { n: "12", label: "Family farms" },
              { n: "3+", label: "Years per cycle" },
              { n: "100%", label: "Direct trade" },
            ].map((item, i) => (
              <div
                key={item.n}
                style={{
                  flex: 1,
                  paddingLeft: i > 0 ? "32px" : "0",
                  borderLeft: i > 0 ? "1px solid rgba(248,244,238,0.1)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "#C9A56A",
                    display: "block",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {item.n}
                </span>
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "8.5px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#F8F4EE",
                    opacity: 0.4,
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

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
              border: "1px solid rgba(248,244,238,0.3)",
              background: "transparent",
              color: "#F8F4EE",
              textDecoration: "none",
              alignSelf: "flex-start",
              transition: "border-color 0.25s, color 0.25s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A56A";
              (e.currentTarget as HTMLAnchorElement).style.color = "#C9A56A";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(248,244,238,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#F8F4EE";
            }}
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
