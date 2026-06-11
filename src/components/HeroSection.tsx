import { VanillaEmblem } from "./VanillaEmblem";
import { LuxuryButton } from "./LuxuryButton";

export function HeroSection() {
  return (
    <section
      style={{
        height: "100vh",
        minHeight: "640px",
        backgroundColor: "#F8F4EE",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left — text column */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 64px 80px 80px",
        }}
      >
        <VanillaEmblem size={72} color="#2A211C" />

        <div style={{ marginTop: "40px" }}>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "8.5px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#C9A56A",
              marginBottom: "20px",
            }}
          >
            Est. Sulawesi, Indonesia
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(48px, 5vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.0,
              color: "#2A211C",
              letterSpacing: "-0.01em",
              marginBottom: "32px",
            }}
          >
            Indonesia's
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>Finest</em>
            <br />
            Vanilla.
          </h1>

          <div style={{ width: "36px", height: "1px", background: "#C9A56A", marginBottom: "28px" }} />

          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "17px",
              color: "#2A211C",
              opacity: 0.68,
              lineHeight: 1.72,
              maxWidth: "320px",
              marginBottom: "44px",
            }}
          >
            Cultivated in the volcanic highlands of Sulawesi.
            Hand-pollinated. Sun-cured. For the world's most discerning kitchens.
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <LuxuryButton href="#collection">Explore Collection</LuxuryButton>
            <LuxuryButton href="https://wa.me/6281234567890" external variant="outline">
              Contact Us
            </LuxuryButton>
          </div>
        </div>
      </div>

      {/* Right — image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1592788174877-3f99727fd23d?w=900&h=1100&fit=crop&auto=format"
          alt="Vanilla beans from Indonesia"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            right: "36px",
            textAlign: "right",
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "8px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#F8F4EE",
              opacity: 0.6,
              marginBottom: "4px",
            }}
          >
            Vanilla planifolia
          </p>
          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "13px",
              fontStyle: "italic",
              color: "#F8F4EE",
              opacity: 0.45,
            }}
          >
            Grade A — Export Quality
          </p>
        </div>
      </div>

      {/* Scroll line */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          paddingBottom: "32px",
        }}
      >
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "7.5px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#2A211C",
            opacity: 0.35,
          }}
        >
          Scroll
        </span>
        <div style={{ width: "1px", height: "40px", background: "#C9A56A", opacity: 0.45 }} />
      </div>
    </section>
  );
}
