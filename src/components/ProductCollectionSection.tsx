import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: "vanilla-bean",
    name: "Vanilla Bean",
    subtitle: "Planifolia · Grade A",
    description: "Whole cured pods. 16–20 cm. Rich, creamy, intensely aromatic.",
    image: "https://images.unsplash.com/photo-1649832764034-bc81f47a98e7?w=640&h=720&fit=crop&auto=format",
    alt: "Whole vanilla beans on paper",
    num: "01",
  },
  {
    id: "vanilla-extract",
    name: "Vanilla Extract",
    subtitle: "Single-Origin · Pure",
    description: "Cold-process extraction. No additives. Just vanilla and time.",
    image: "https://images.unsplash.com/photo-1743309026555-97f545a08490?w=640&h=720&fit=crop&auto=format",
    alt: "Vanilla extract in a glass bottle",
    num: "02",
  },
  {
    id: "vanilla-powder",
    name: "Vanilla Powder",
    subtitle: "Ground · Dehydrated",
    description: "Stone-ground from whole pods. No carriers, no fillers.",
    image: "https://images.unsplash.com/photo-1542178592-012064e82076?w=640&h=720&fit=crop&auto=format",
    alt: "Dried vanilla powder",
    num: "03",
  },
  {
    id: "vanilla-paste",
    name: "Vanilla Paste",
    subtitle: "Whole Bean · Seed-Flecked",
    description: "Seeds suspended in natural reduction. The baker's luxury.",
    image: "https://images.unsplash.com/photo-1659608300925-d8ff7643ee5d?w=640&h=720&fit=crop&auto=format",
    alt: "Vanilla plant close-up",
    num: "04",
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/product/${product.id}`}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container — fixed ratio */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#EEE8DF",
          aspectRatio: "3 / 4",
        }}
      >
        <img
          src={product.image}
          alt={product.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            fontFamily: "'Jost', sans-serif",
            fontSize: "8.5px",
            letterSpacing: "0.22em",
            color: "#F8F4EE",
            opacity: 0.65,
          }}
        >
          {product.num}
        </span>
      </div>

      {/* Info */}
      <div style={{ paddingTop: "20px" }}>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "8px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C9A56A",
            marginBottom: "7px",
          }}
        >
          {product.subtitle}
        </p>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "20px",
            fontWeight: 600,
            color: "#2A211C",
            marginBottom: "8px",
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "15.5px",
            color: "#2A211C",
            opacity: 0.6,
            lineHeight: 1.6,
            marginBottom: "14px",
          }}
        >
          {product.description}
        </p>
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "8.5px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#2A211C",
            opacity: hovered ? 1 : 0.45,
            transition: "opacity 0.25s",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          Discover <span style={{ letterSpacing: 0 }}>→</span>
        </span>
      </div>
    </Link>
  );
}

export function ProductCollectionSection() {
  return (
    <section
      id="collection"
      style={{ backgroundColor: "#F8F4EE", padding: "120px 0" }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "64px",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
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
                The Collection
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(36px, 3.5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.0,
                color: "#2A211C",
              }}
            >
              Four expressions
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>of vanilla.</em>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "17px",
              lineHeight: 1.72,
              color: "#2A211C",
              opacity: 0.6,
              maxWidth: "320px",
            }}
          >
            Each form serves a different purpose — all share the same origin,
            the same care, and the same uncompromising standard.
          </p>
        </div>

        {/* Product grid — equal 4 columns, same height */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
            alignItems: "start",
          }}
        >
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
