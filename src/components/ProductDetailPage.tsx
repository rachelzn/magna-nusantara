"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";

const productData: Record<string, {
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  origin: string;
  tastingNotes: string[];
  applications: string[];
  specifications: { label: string; value: string }[];
  heroImage: string;
  secondaryImage: string;
  altHero: string;
  altSecondary: string;
}> = {
  "vanilla-bean": {
    name: "Vanilla Bean",
    subtitle: "Planifolia · Grade A · Whole Pod",
    tagline: "The pod in its original form.",
    description: "Sourced from highland farms in Sulawesi and Lombok, where volcanic soil and humid microclimate produce pods of exceptional length and vanillin concentration. Each pod is hand-picked at peak maturity and traditionally cured for six to eight months.",
    origin: "Sulawesi & Lombok, Indonesia",
    tastingNotes: ["Deep, creamy vanilla", "Subtle floral top notes", "Warm, woody finish", "Rich vanillin intensity"],
    applications: ["Infuse into creams, custards, and ice cream bases", "Split and scrape directly into doughs and batters", "Steep in spirits for house-made extracts", "Bury in sugar to create natural vanilla sugar"],
    specifications: [
      { label: "Grade", value: "Grade A — Gourmet" },
      { label: "Length", value: "16–20 cm" },
      { label: "Moisture", value: "30–35%" },
      { label: "Vanillin", value: "≥ 1.8%" },
      { label: "Cure", value: "6–8 months" },
      { label: "Origin", value: "Sulawesi · Lombok" },
      { label: "Certification", value: "Phytosanitary Certified" },
      { label: "Packaging", value: "Vacuum-sealed glass vial" },
    ],
    heroImage: "https://images.unsplash.com/photo-1649832764034-bc81f47a98e7?w=900&h=1100&fit=crop&auto=format",
    secondaryImage: "https://images.unsplash.com/photo-1592788174877-3f99727fd23d?w=1400&h=600&fit=crop&auto=format",
    altHero: "Whole vanilla beans on a textured surface",
    altSecondary: "Vanilla beans on parchment",
  },
  "vanilla-extract": {
    name: "Vanilla Extract",
    subtitle: "Single-Origin · Cold Process · Pure",
    tagline: "Vanilla and time. Nothing more.",
    description: "Made from Grade A whole pods and pharmaceutical-grade alcohol. No artificial vanillin. No glycerin carriers. No added sugars. Cold-process extraction preserves the full aromatic complexity of the bean — the woody depth, the floral top notes, and the long, creamy finish.",
    origin: "Sulawesi & Lombok, Indonesia",
    tastingNotes: ["Intensely floral", "Deep woody vanilla", "Sweet caramel undertones", "Long, warm finish"],
    applications: ["Direct flavoring of cake batters and frostings", "Finishing desserts after heat for maximum aroma", "Cocktail and mocktail flavoring", "Enhancing chocolate and coffee preparations"],
    specifications: [
      { label: "Type", value: "Single-Origin Pure Extract" },
      { label: "Process", value: "Cold maceration" },
      { label: "Alcohol Base", value: "Pharmaceutical-grade ethanol" },
      { label: "Pod Ratio", value: "100g pods per 1L" },
      { label: "Maturation", value: "Minimum 8 weeks" },
      { label: "Origin", value: "Sulawesi · Lombok" },
      { label: "Packaging", value: "Dark amber glass bottle" },
      { label: "Shelf Life", value: "5 years" },
    ],
    heroImage: "https://images.unsplash.com/photo-1743309026555-97f545a08490?w=900&h=1100&fit=crop&auto=format",
    secondaryImage: "https://images.unsplash.com/photo-1771329064159-33f758d91f4a?w=1400&h=600&fit=crop&auto=format",
    altHero: "Vanilla extract in a minimal glass bottle",
    altSecondary: "Premium botanical packaging",
  },
  "vanilla-powder": {
    name: "Vanilla Powder",
    subtitle: "Ground · Dehydrated · Pure",
    tagline: "The full pod, in powdered form.",
    description: "Stone-ground from whole dehydrated pods — seeds, pod wall, and all — preserving every compound developed during curing. Unlike spray-dried powders cut with maltodextrin, ours contains only vanilla. The colour is deep brown. A little goes very far.",
    origin: "Sulawesi & Lombok, Indonesia",
    tastingNotes: ["Concentrated floral vanilla", "Dried fruit notes", "Earthy, complex depth", "Sustained finish"],
    applications: ["Dry rubs and spice blends", "Shortbread, sablé, and macaron doughs", "Dusting finished pastries and chocolates", "Health and protein formulations"],
    specifications: [
      { label: "Type", value: "Whole-pod ground powder" },
      { label: "Filler", value: "None — 100% vanilla" },
      { label: "Grind", value: "Fine, 150 micron" },
      { label: "Moisture", value: "< 5%" },
      { label: "Vanillin", value: "≥ 2.5%" },
      { label: "Origin", value: "Sulawesi · Lombok" },
      { label: "Packaging", value: "Sealed kraft tin" },
      { label: "Shelf Life", value: "3 years, sealed" },
    ],
    heroImage: "https://images.unsplash.com/photo-1542178592-012064e82076?w=900&h=1100&fit=crop&auto=format",
    secondaryImage: "https://images.unsplash.com/photo-1770122611222-5de2a6585490?w=1400&h=600&fit=crop&auto=format",
    altHero: "Dried vanilla powder and herbs close up",
    altSecondary: "Indonesian tropical forest",
  },
  "vanilla-paste": {
    name: "Vanilla Paste",
    subtitle: "Whole Bean · Seed-Flecked · Rich",
    tagline: "The baker's most refined tool.",
    description: "A suspension of scraped vanilla seeds in a natural reduction of our own extract — thick, glossy, intensely aromatic. Every jar contains the equivalent of two to three whole pods per tablespoon. No artificial thickeners. No glucose syrup.",
    origin: "Sulawesi & Lombok, Indonesia",
    tastingNotes: ["Creamy, rich vanilla", "Caramelised sweetness", "Visible seed texture", "Intense aromatic depth"],
    applications: ["Crème brûlée, panna cotta, and custard bases", "Vanilla buttercream and ganache", "Gelato and ice cream bases", "Brioche and enriched pastry doughs"],
    specifications: [
      { label: "Type", value: "Whole-seed paste in extract" },
      { label: "Thickener", value: "None" },
      { label: "Sweetener", value: "None" },
      { label: "Yield", value: "1 tsp = 1 whole pod" },
      { label: "Origin", value: "Sulawesi · Lombok" },
      { label: "Packaging", value: "Sealed amber glass jar" },
      { label: "Shelf Life", value: "2 years, refrigerated" },
      { label: "Seed Density", value: "High — visible specking" },
    ],
    heroImage: "https://images.unsplash.com/photo-1659608300925-d8ff7643ee5d?w=900&h=1100&fit=crop&auto=format",
    secondaryImage: "https://images.unsplash.com/photo-1629117061963-c0a8e1f18357?w=1400&h=600&fit=crop&auto=format",
    altHero: "Close-up of vanilla plant and pods",
    altSecondary: "Fresh vanilla pods and spices",
  },
};

const shopLinks = [
  { label: "Shopee", href: "https://shopee.co.id" },
  { label: "TikTok Shop", href: "https://shop.tiktok.com" },
  { label: "Tokopedia", href: "https://tokopedia.com" },
];

const label = (text: string) => (
  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
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
      {text}
    </span>
  </div>
);

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? productData[id] : null;

  if (!product) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#F8F4EE",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "20px", color: "#2A211C" }}>
          Product not found.
        </p>
        <Link
          href="/"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "8.5px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#2A211C",
            textDecoration: "none",
            borderBottom: "1px solid rgba(42,33,28,0.3)",
            paddingBottom: "2px",
          }}
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#F8F4EE" }}>
      {/* Hero */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "55% 45%",
          minHeight: "100vh",
        }}
      >
        {/* Left — image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={product.heroImage}
            alt={product.altHero}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "36px",
              left: "36px",
              borderLeft: "1px solid rgba(248,244,238,0.4)",
              paddingLeft: "14px",
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "8px",
                letterSpacing: "0.28em",
                color: "#F8F4EE",
                opacity: 0.65,
                textTransform: "uppercase",
              }}
            >
              Magna Nusantara · {product.origin}
            </span>
          </div>
        </div>

        {/* Right — info */}
        <div
          style={{
            padding: "120px 72px 80px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "52px" }}>
            <Link
              href="/#collection"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "8.5px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2A211C",
                opacity: 0.35,
                textDecoration: "none",
              }}
            >
              Collection
            </Link>
            <span style={{ color: "#C9A56A", lineHeight: 1 }}>—</span>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "8.5px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2A211C",
                opacity: 0.75,
              }}
            >
              {product.name}
            </span>
          </div>

          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "8.5px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#C9A56A",
              marginBottom: "12px",
            }}
          >
            {product.subtitle}
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(40px, 4vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.0,
              color: "#2A211C",
              marginBottom: "10px",
              letterSpacing: "-0.01em",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "20px",
              color: "#2A211C",
              opacity: 0.5,
              marginBottom: "28px",
              fontWeight: 400,
            }}
          >
            {product.tagline}
          </p>

          <div style={{ width: "36px", height: "1px", background: "#C9A56A", marginBottom: "28px" }} />

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
            {product.description}
          </p>

          {/* Purchase */}
          <div style={{ marginBottom: "36px" }}>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "8px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2A211C",
                opacity: 0.35,
                marginBottom: "14px",
              }}
            >
              Purchase via
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {shopLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "8.5px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "12px 22px",
                    border: "1px solid rgba(42,33,28,0.25)",
                    color: "#2A211C",
                    textDecoration: "none",
                    transition: "border-color 0.22s, background 0.22s, color 0.22s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2A211C";
                    (e.currentTarget as HTMLAnchorElement).style.background = "#2A211C";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F8F4EE";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(42,33,28,0.25)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#2A211C";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(42,33,28,0.1)", paddingTop: "24px" }}>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "8.5px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C9A56A",
                textDecoration: "none",
                opacity: 0.8,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
            >
              Wholesale & Partnership Enquiries →
            </a>
          </div>
        </div>
      </section>

      {/* Tasting notes + applications */}
      <section
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "100px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "100px",
        }}
      >
        <div>
          {label("Tasting Notes")}
          {product.tastingNotes.map((note, i) => (
            <div
              key={note}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "18px 0",
                borderBottom: "1px solid rgba(42,33,28,0.08)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "8.5px",
                  letterSpacing: "0.18em",
                  color: "#C9A56A",
                  minWidth: "20px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "19px",
                  color: "#2A211C",
                  fontStyle: "italic",
                  opacity: 0.85,
                }}
              >
                {note}
              </span>
            </div>
          ))}
        </div>

        <div>
          {label("Suggested Applications")}
          {product.applications.map(app => (
            <div
              key={app}
              style={{
                padding: "18px 0",
                borderBottom: "1px solid rgba(42,33,28,0.08)",
              }}
            >
              <p
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#2A211C",
                  opacity: 0.7,
                }}
              >
                {app}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Wide editorial image */}
      <div style={{ padding: "0 80px 80px", maxWidth: "1440px", margin: "0 auto" }}>
        <img
          src={product.secondaryImage}
          alt={product.altSecondary}
          style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Specifications */}
      <section
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 80px 120px",
        }}
      >
        {label("Product Specifications")}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 80px",
          }}
        >
          {product.specifications.map(spec => (
            <div
              key={spec.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "16px 0",
                borderBottom: "1px solid rgba(42,33,28,0.08)",
                gap: "24px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "8.5px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#2A211C",
                  opacity: 0.35,
                  whiteSpace: "nowrap",
                }}
              >
                {spec.label}
              </span>
              <span
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: "16px",
                  color: "#2A211C",
                  textAlign: "right",
                  opacity: 0.82,
                }}
              >
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <div
        style={{
          borderTop: "1px solid rgba(42,33,28,0.08)",
          padding: "48px 80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/#collection"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "8.5px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#2A211C",
            textDecoration: "none",
            opacity: 0.4,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.9")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.4")}
        >
          ← Return to Collection
        </Link>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "8.5px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#2A211C",
            textDecoration: "none",
            opacity: 0.4,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.9")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.4")}
        >
          Order in Bulk →
        </a>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
