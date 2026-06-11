export function BrandStorySection() {
  return (
    <section
      id="story"
      style={{ backgroundColor: "#F8F4EE", padding: "120px 0", overflow: "hidden" }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0",
        }}
      >
        {/* Left — image */}
        <div style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1770122611222-5de2a6585490?w=820&h=880&fit=crop&auto=format"
            alt="Dense tropical forest in Indonesia"
            style={{ width: "100%", height: "620px", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "40px",
              borderLeft: "1px solid #C9A56A",
              paddingLeft: "14px",
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "8px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#F8F4EE",
                opacity: 0.75,
              }}
            >
              Sulawesi · Lombok · Java
            </span>
          </div>
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
              The Maison
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(34px, 3.2vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.06,
              color: "#2A211C",
              marginBottom: "32px",
            }}
          >
            From the
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>volcanic soil</em>
            <br />
            of the archipelago.
          </h2>

          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "17.5px",
              lineHeight: 1.78,
              color: "#2A211C",
              opacity: 0.7,
              marginBottom: "24px",
            }}
          >
            Indonesia produces some of the world's most aromatic vanilla —
            yet most of its harvest disappears into anonymous commodity chains.
            Magna Nusantara was founded to change this.
          </p>

          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "17.5px",
              lineHeight: 1.78,
              color: "#2A211C",
              opacity: 0.7,
              marginBottom: "40px",
            }}
          >
            We work exclusively with family farms, selecting only pods that meet
            our exacting standards for length, moisture, and vanillin concentration.
            Each batch is cured over eight months before it bears our name.
          </p>

          <blockquote
            style={{
              borderLeft: "1px solid #C9A56A",
              paddingLeft: "20px",
              margin: "0",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "18px",
                fontStyle: "italic",
                color: "#2A211C",
                lineHeight: 1.55,
                opacity: 0.8,
              }}
            >
              "The finest vanilla does not announce itself.
              It reveals itself — slowly, completely."
            </p>
          </blockquote>
        </div>
      </div>

      {/* Three pillars */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "100px auto 0",
          padding: "0 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0",
        }}
      >
        {[
          { n: "01", title: "Hand-Pollinated", body: "Each vanilla orchid opens for a single morning. Our farmers hand-pollinate every blossom — a practice unchanged for two centuries." },
          { n: "02", title: "Eight-Month Cure", body: "After harvest, pods undergo a traditional blanching and sweating cycle — alternating sun and shade — for up to eight months." },
          { n: "03", title: "Rigorous Selection", body: "Less than 30% of each harvest meets our minimum vanillin threshold. Our name appears only on the rest." },
        ].map((item, i) => (
          <div
            key={item.n}
            style={{
              padding: "48px 48px 48px 0",
              borderLeft: i > 0 ? "1px solid rgba(42,33,28,0.1)" : "none",
              paddingLeft: i > 0 ? "48px" : "0",
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "8.5px",
                letterSpacing: "0.22em",
                color: "#C9A56A",
                display: "block",
                marginBottom: "16px",
              }}
            >
              {item.n}
            </span>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#2A211C",
                marginBottom: "14px",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "16.5px",
                lineHeight: 1.72,
                color: "#2A211C",
                opacity: 0.65,
              }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
