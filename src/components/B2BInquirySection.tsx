import { useState } from "react";

interface B2BForm {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  country: string;
  type: string;
}

const inquiryTypes = [
  "Hotel & Hospitality",
  "Restaurant & Fine Dining",
  "Artisan Bakery & Patisserie",
  "Food Manufacturing",
  "Retail & Distribution",
  "International Import / Export",
  "Other",
];

export function B2BInquirySection() {
  const [form, setForm] = useState<B2BForm>({
    name: "", company: "", email: "", whatsapp: "", country: "", type: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof B2BForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    console.log("B2B Lead:", form);
    setLoading(false);
    setSubmitted(true);
  };

  const isValid = form.name && form.email && form.company && form.type;

  const inputStyle = (key: string): React.CSSProperties => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused === key ? "#C9A56A" : "rgba(248,244,238,0.15)"}`,
    outline: "none",
    fontFamily: "'EB Garamond', Georgia, serif",
    fontSize: "17px",
    color: "#F8F4EE",
    padding: "7px 0 9px",
    transition: "border-color 0.25s",
    boxSizing: "border-box" as const,
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Jost', sans-serif",
    fontSize: "7.5px",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#F8F4EE",
    opacity: 0.32,
    marginBottom: "7px",
  };

  return (
    <section
      id="partnership-form"
      style={{ backgroundColor: "#2A211C", padding: "100px 0" }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>

        {/* Header — single row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "64px",
            gap: "40px",
            flexWrap: "wrap",
            borderBottom: "1px solid rgba(248,244,238,0.08)",
            paddingBottom: "40px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <div style={{ width: "28px", height: "1px", background: "#C9A56A" }} />
              <span style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "8.5px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#C9A56A",
              }}>
                Trade Enquiries
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(32px, 3vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#F8F4EE",
            }}>
              Sourced <em style={{ fontStyle: "italic", fontWeight: 400 }}>exclusively</em> for your craft.
            </h2>
          </div>
          <p style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "17px",
            lineHeight: 1.72,
            color: "#F8F4EE",
            opacity: 0.48,
            maxWidth: "340px",
          }}>
            We work with a select number of professional partners who share our belief
            that the source of an ingredient matters as much as the technique.
          </p>
        </div>

        {/* Form — full width, 3-column grid */}
        {submitted ? (
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "8.5px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#C9A56A",
              marginBottom: "20px",
            }}>
              Enquiry Received
            </p>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "32px",
              fontWeight: 700,
              color: "#F8F4EE",
              lineHeight: 1.1,
            }}>
              Thank you, <em style={{ fontStyle: "italic", fontWeight: 400 }}>{form.name || "for reaching out"}.</em>
            </h3>
            <p style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "17px",
              color: "#F8F4EE",
              opacity: 0.45,
              marginTop: "16px",
              lineHeight: 1.7,
            }}>
              We will respond within two business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Row 1: Name, Company, Email */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }}>
              {([
                { key: "name", label: "Name", type: "text" },
                { key: "company", label: "Company", type: "text" },
                { key: "email", label: "Email", type: "email" },
              ] as const).map(f => (
                <div key={f.key}>
                  <label style={labelStyle}>{f.label}</label>
                  <input
                    required
                    type={f.type ?? "text"}
                    value={form[f.key]}
                    onChange={set(f.key)}
                    onFocus={() => setFocused(f.key)}
                    onBlur={() => setFocused(null)}
                    style={inputStyle(f.key)}
                  />
                </div>
              ))}
            </div>

            {/* Row 2: WhatsApp, Country, Type */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", marginBottom: "52px" }}>
              <div>
                <label style={labelStyle}>WhatsApp</label>
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={set("whatsapp")}
                  onFocus={() => setFocused("whatsapp")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("whatsapp")}
                />
              </div>
              <div>
                <label style={labelStyle}>Country</label>
                <input
                  type="text"
                  value={form.country}
                  onChange={set("country")}
                  onFocus={() => setFocused("country")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("country")}
                />
              </div>
              <div>
                <label style={labelStyle}>Nature of Enquiry</label>
                <select
                  required
                  value={form.type}
                  onChange={set("type")}
                  onFocus={() => setFocused("type")}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputStyle("type"),
                    cursor: "pointer",
                    appearance: "none" as const,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23C9A56A' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 4px center",
                    paddingRight: "20px",
                  }}
                >
                  <option value="" disabled style={{ background: "#2A211C" }} />
                  {inquiryTypes.map(t => (
                    <option key={t} value={t} style={{ background: "#2A211C", color: "#F8F4EE" }}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>
              <p style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "15px",
                fontStyle: "italic",
                color: "#F8F4EE",
                opacity: 0.28,
              }}>
                We review all enquiries personally. Response within 2 business days.
              </p>
              <button
                type="submit"
                disabled={loading || !isValid}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  padding: "14px 40px",
                  background: "transparent",
                  color: "#F8F4EE",
                  border: "1px solid rgba(248,244,238,0.28)",
                  cursor: isValid && !loading ? "pointer" : "default",
                  opacity: !isValid ? 0.35 : 1,
                  transition: "background 0.25s, border-color 0.25s, opacity 0.25s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  if (isValid && !loading) {
                    (e.currentTarget as HTMLButtonElement).style.background = "#C9A56A";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A56A";
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(248,244,238,0.28)";
                }}
              >
                {loading ? "Submitting…" : "Discuss Partnership"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
