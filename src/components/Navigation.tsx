"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const dark = scrolled || !isHome;

  // transparent over light hero → dark text; dark bg → light text
  const textColor = dark ? "#F8F4EE" : "#2A211C";
  const linkStyle: React.CSSProperties = {
    fontFamily: "'Jost', sans-serif",
    fontSize: "9.5px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: textColor,
    textDecoration: "none",
    opacity: 0.6,
    transition: "opacity 0.2s, color 0.5s",
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: dark ? "#2A211C" : "transparent",
        borderBottom: dark ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition: "background-color 0.5s ease, border-color 0.5s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
          position: "relative",
        }}
      >
        {/* Left links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Collection", to: "/#collection" },
            { label: "Origin", to: "/#origin" },
          ].map(item => (
            <Link
              key={item.label}
              href={item.to}
              style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Logo — centered absolutely */}
        <Link
          href="/"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            gap: "3px",
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.24em",
              color: dark ? "#F8F4EE" : "#2A211C",
              textTransform: "uppercase",
              lineHeight: 1,
              transition: "color 0.5s",
            }}
          >
            Magna
          </span>
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "6.5px",
              letterSpacing: "0.4em",
              color: "#C9A56A",
              textTransform: "uppercase",
            }}
          >
            Nusantara
          </span>
        </Link>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Partnership", to: "/#partnership" },
          ].map(item => (
            <Link
              key={item.label}
              href={item.to}
              style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...linkStyle,
              color: "#C9A56A",
              opacity: 0.8,
              border: "1px solid rgba(201,165,106,0.35)",
              padding: "7px 18px",
              transition: "opacity 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A56A";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,165,106,0.35)";
            }}
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
          aria-label="Toggle menu"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "20px",
                  height: "1px",
                  background: dark ? "#F8F4EE" : "#2A211C",
                  transition: "background 0.5s, transform 0.3s, opacity 0.3s",
                  transform:
                    i === 0 && menuOpen ? "rotate(45deg) translateY(6px)" :
                    i === 2 && menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#2A211C",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "28px 64px 36px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {[
            { label: "Collection", to: "/#collection" },
            { label: "Origin", to: "/#origin" },
            { label: "Partnership", to: "/#partnership" },
          ].map(item => (
            <Link
              key={item.label}
              href={item.to}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#F8F4EE",
                textDecoration: "none",
                opacity: 0.6,
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C9A56A",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
