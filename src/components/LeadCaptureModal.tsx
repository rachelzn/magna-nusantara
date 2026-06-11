import { useState, useEffect, useCallback } from "react";
import { VanillaEmblem } from "./VanillaEmblem";

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  country: string;
}

const DISMISSED_KEY = "magna_lead_dismissed";

export function LeadCaptureModal() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({ name: "", email: "", whatsapp: "", country: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const dismiss = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    // Timer: 16 seconds
    const timer = setTimeout(() => setVisible(true), 16000);

    // 50% scroll depth
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled >= 0.5) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Exit intent (mouse leaves viewport top)
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 4) {
        setVisible(true);
        document.removeEventListener("mouseleave", onMouseOut);
      }
    };
    document.addEventListener("mouseleave", onMouseOut);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseOut);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission — replace with Supabase insert when connected
    await new Promise(r => setTimeout(r, 900));
    console.log("Lead captured:", form);
    setLoading(false);
    setSubmitted(true);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  };

  const field = (
    key: keyof FormData,
    label: string,
    type = "text",
    optional = false
  ) => (
    <div style={{ position: "relative" }}>
      <label
        style={{
          display: "block",
          fontFamily: "'Jost', sans-serif",
          fontSize: "8px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#2A211C",
          opacity: focused === key ? 0.8 : 0.4,
          marginBottom: "8px",
          transition: "opacity 0.2s",
        }}
      >
        {label}{optional && <span style={{ color: "#C9A56A", marginLeft: "6px", fontSize: "7px" }}>Optional</span>}
      </label>
      <input
        type={type}
        value={form[key]}
        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
        onFocus={() => setFocused(key)}
        onBlur={() => setFocused(null)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${focused === key ? "#C9A56A" : "rgba(42,33,28,0.2)"}`,
          outline: "none",
          fontFamily: "'EB Garamond', Georgia, serif",
          fontSize: "17px",
          color: "#2A211C",
          padding: "8px 0 10px",
          transition: "border-color 0.25s",
          boxSizing: "border-box",
        }}
      />
    </div>
  );

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(42,33,28,0.55)",
          zIndex: 200,
          backdropFilter: "blur(3px)",
          animation: "fadeIn 0.4s ease",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 201,
          backgroundColor: "#F8F4EE",
          width: "min(680px, 92vw)",
          maxHeight: "90vh",
          overflowY: "auto",
          animation: "modalIn 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <style>{`
          @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
          @keyframes modalIn { from { opacity: 0; transform: translate(-50%, calc(-50% + 24px)) } to { opacity: 1; transform: translate(-50%, -50%) } }
        `}</style>

        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "24px",
            right: "28px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "8px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#2A211C",
              opacity: 0.35,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLSpanElement).style.opacity = "0.8")}
            onMouseLeave={e => ((e.currentTarget as HTMLSpanElement).style.opacity = "0.35")}
          >
            Close
          </span>
        </button>

        <div style={{ padding: "56px 64px 60px" }}>
          {submitted ? (
            /* ── Success state ── */
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "24px",
                padding: "20px 0",
              }}
            >
              <VanillaEmblem size={64} color="#C9A56A" />
              <div>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "8.5px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#C9A56A",
                    marginBottom: "16px",
                  }}
                >
                  Welcome
                </p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(26px, 4vw, 38px)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: "#2A211C",
                    marginBottom: "20px",
                  }}
                >
                  Thank you.
                </h2>
                <p
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "18px",
                    fontStyle: "italic",
                    color: "#2A211C",
                    opacity: 0.65,
                    lineHeight: 1.65,
                  }}
                >
                  Welcome to the world of MAGNA.
                  <br />
                  We will be in touch with stories, harvests, and seasonal releases.
                </p>
              </div>
            </div>
          ) : (
            /* ── Form ── */
            <>
              {/* Header */}
              <div style={{ marginBottom: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <VanillaEmblem size={36} color="#2A211C" />
                  <div style={{ width: "1px", height: "32px", background: "rgba(42,33,28,0.15)" }} />
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "8px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "#C9A56A",
                    }}
                  >
                    Magna Nusantara
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(28px, 4vw, 40px)",
                    fontWeight: 700,
                    lineHeight: 1.05,
                    color: "#2A211C",
                    marginBottom: "14px",
                  }}
                >
                  Join the World
                  <br />
                  <em style={{ fontStyle: "italic", fontWeight: 400 }}>of MAGNA.</em>
                </h2>

                <p
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "17px",
                    lineHeight: 1.7,
                    color: "#2A211C",
                    opacity: 0.62,
                    maxWidth: "400px",
                  }}
                >
                  Receive stories, seasonal harvest updates,
                  and first access to new releases —
                  delivered with the same care as our vanilla.
                </p>
              </div>

              {/* Gold rule */}
              <div style={{ width: "36px", height: "1px", background: "#C9A56A", marginBottom: "36px" }} />

              {/* Fields */}
              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "40px" }}>
                  {field("name", "Your Name")}
                  {field("email", "Email Address", "email")}
                  {field("whatsapp", "WhatsApp Number", "tel", true)}
                  {field("country", "Country", "text", true)}
                </div>

                <button
                  type="submit"
                  disabled={loading || !form.name || !form.email}
                  style={{
                    width: "100%",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    padding: "16px 32px",
                    background: loading ? "#C9A56A" : "#2A211C",
                    color: "#F8F4EE",
                    border: "none",
                    cursor: loading || !form.name || !form.email ? "default" : "pointer",
                    opacity: !form.name || !form.email ? 0.45 : 1,
                    transition: "background 0.3s, opacity 0.3s",
                  }}
                  onMouseEnter={e => {
                    if (form.name && form.email && !loading)
                      (e.currentTarget as HTMLButtonElement).style.background = "#C9A56A";
                  }}
                  onMouseLeave={e => {
                    if (!loading)
                      (e.currentTarget as HTMLButtonElement).style.background = "#2A211C";
                  }}
                >
                  {loading ? "One moment…" : "Join MAGNA"}
                </button>

                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "7.5px",
                    letterSpacing: "0.15em",
                    color: "#2A211C",
                    opacity: 0.3,
                    textAlign: "center",
                    marginTop: "16px",
                    lineHeight: 1.6,
                  }}
                >
                  We respect your privacy. No spam, ever.
                  Unsubscribe at any time.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
