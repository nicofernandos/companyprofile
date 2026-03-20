import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: "📍",
    label: "Alamat",
    value: "Jl. Talang Betutu No. 88\Palembang, DIY 55281",
    color: "#7dc864",
    bg: "rgba(125,200,100,0.08)",
    border: "rgba(125,200,100,0.2)",
  },
  {
    icon: "📞",
    label: "Telepon",
    value: "+62 274 555-0188\nSenin–Sabtu, 08.00–17.00",
    color: "#d4a738",
    bg: "rgba(212,167,56,0.08)",
    border: "rgba(212,167,56,0.2)",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@heltonjaya.com\nhalo@heltonjaya.com",
    color: "#7dc864",
    bg: "rgba(125,200,100,0.08)",
    border: "rgba(125,200,100,0.2)",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+62 812-3456-7890\nRespon cepat < 1 jam",
    color: "#d4a738",
    bg: "rgba(212,167,56,0.08)",
    border: "rgba(212,167,56,0.2)",
  },
];

const TOPICS = [
  "Pemesanan Produk",
  "Kerjasama Reseller",
  "Pertanyaan Produk",
  "Pengiriman & Logistik",
  "Lainnya",
];

const INPUT_STYLE = {
  width: "100%",
  padding: "13px 16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(125,200,100,0.2)",
  borderRadius: 12,
  color: "#f0ede4",
  fontSize: 14,
  fontFamily: "'DM Sans', sans-serif",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
  boxSizing: "border-box",
};

export default function Contact() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    topik: "",
    pesan: "",
  });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const focusStyle = (field) =>
    focused === field
      ? {
          ...INPUT_STYLE,
          borderColor: "rgba(125,200,100,0.6)",
          background: "rgba(125,200,100,0.06)",
        }
      : INPUT_STYLE;

  return (
    <section
      id="contact"
      style={{
        background: "#EAF97C ",
        padding: "100px 0 120px",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -100,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(46,125,50,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -80,
          right: -60,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,167,56,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Batik overlay */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.025,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="ct-batik"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="30"
              cy="30"
              r="12"
              fill="none"
              stroke="#2e7d32"
              strokeWidth="1"
            />
            <circle
              cx="30"
              cy="30"
              r="6"
              fill="none"
              stroke="#2e7d32"
              strokeWidth="0.5"
            />
            <circle
              cx="0"
              cy="0"
              r="3"
              fill="none"
              stroke="#2e7d32"
              strokeWidth="0.5"
            />
            <circle
              cx="60"
              cy="60"
              r="3"
              fill="none"
              stroke="#2e7d32"
              strokeWidth="0.5"
            />
            <circle
              cx="60"
              cy="0"
              r="3"
              fill="none"
              stroke="#2e7d32"
              strokeWidth="0.5"
            />
            <circle
              cx="0"
              cy="60"
              r="3"
              fill="none"
              stroke="#2e7d32"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ct-batik)" />
      </svg>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(46,125,50,0.1)",
              border: "1px solid rgba(46,125,50,0.25)",
              borderRadius: 100,
              padding: "6px 18px",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: 2.5,
                color: "#2e7d32",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Kontak
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#0a1f10",
              margin: "0 auto 20px",
              maxWidth: 520,
              lineHeight: 1.2,
            }}
          >
            Ada Pertanyaan?{" "}
            <span
              style={{
                color: "#2e7d32",
                position: "relative",
                display: "inline-block",
              }}
            >
              Kami Siap
              <svg
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "100%",
                  height: 8,
                }}
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 6 Q50 1 100 5 Q150 9 198 4"
                  stroke="#d4a738"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            Membantu
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#5a7a5a",
              lineHeight: 1.8,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Dari pertanyaan produk hingga pemesanan grosir, tim kami dengan
            senang hati membantu Anda.
          </p>
        </div>

        {/* ── Two column layout ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 48,
            alignItems: "start",
          }}
          className="ct-grid"
        >
          {/* Left: contact info */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#0a1f10",
                marginBottom: 8,
              }}
            >
              Informasi Kontak
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "#5a7a5a",
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              Kunjungi kami langsung atau hubungi melalui saluran pilihan Anda.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 36,
              }}
            >
              {CONTACT_INFO.map((c) => (
                <div
                  key={c.label}
                  style={{
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    borderRadius: 14,
                    padding: "16px 20px",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(4px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        color: c.color,
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {c.label}
                    </div>
                    {c.value.split("\n").map((line, i) => (
                      <div
                        key={i}
                        style={{
                          fontSize: i === 0 ? 14 : 12,
                          color: i === 0 ? "#2d4a2d" : "#7a9e74",
                          lineHeight: 1.6,
                          fontWeight: i === 0 ? 500 : 400,
                        }}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social / WhatsApp CTA */}
            <div
              style={{
                background: "linear-gradient(135deg, #0f2c1a 0%, #1a3a20 100%)",
                borderRadius: 16,
                padding: "22px 24px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "#7dc864",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                Respon Tercepat
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1rem",
                  color: "#f0ede4",
                  marginBottom: 14,
                  fontWeight: 600,
                }}
              >
                Chat via WhatsApp
              </div>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "11px 22px",
                  background: "#25d366",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  borderRadius: 50,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(37,211,102,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(37,211,102,0.35)";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Mulai Chat Sekarang
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(46,125,50,0.12)",
              borderRadius: 24,
              padding: "40px",
              boxShadow: "0 8px 40px rgba(46,125,50,0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background:
                  "linear-gradient(to right, #4caf50, #2e7d32, #d4a738)",
              }}
            />

            {submitted ? (
              /* ── Success state ── */
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div
                  style={{
                    fontSize: 64,
                    marginBottom: 20,
                    animation: "ctaBounce 0.5s ease",
                  }}
                >
                  ✅
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#0a1f10",
                    marginBottom: 12,
                  }}
                >
                  Pesan Terkirim!
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#5a7a5a",
                    lineHeight: 1.7,
                    marginBottom: 28,
                    maxWidth: 320,
                    margin: "0 auto 28px",
                  }}
                >
                  Terima kasih telah menghubungi kami. Tim PT Helton Jaya akan
                  membalas dalam 1×24 jam kerja.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ nama: "", email: "", topik: "", pesan: "" });
                  }}
                  style={{
                    padding: "11px 28px",
                    background: "linear-gradient(135deg, #4caf50, #2e7d32)",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    border: "none",
                    borderRadius: 50,
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    boxShadow: "0 4px 16px rgba(76,175,80,0.3)",
                  }}
                >
                  Kirim Pesan Lagi
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#0a1f10",
                    marginBottom: 6,
                  }}
                >
                  Kirim Pesan
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#5a7a5a",
                    marginBottom: 28,
                    lineHeight: 1.6,
                  }}
                >
                  Isi formulir di bawah dan kami akan menghubungi Anda segera.
                </p>

                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  {/* Nama + Email row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                    className="ct-form-row"
                  >
                    <div>
                      <label
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#2d4a2d",
                          letterSpacing: 0.5,
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        Nama Lengkap *
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          type="text"
                          name="nama"
                          value={form.nama}
                          required
                          placeholder="Budi Santoso"
                          onChange={handleChange}
                          onFocus={() => setFocused("nama")}
                          onBlur={() => setFocused(null)}
                          style={{
                            ...focusStyle("nama"),
                            background: "#f7f4ee",
                            color: "#0a1f10",
                            border:
                              focused === "nama"
                                ? "1.5px solid #2e7d32"
                                : "1px solid rgba(46,125,50,0.2)",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#2d4a2d",
                          letterSpacing: 0.5,
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        required
                        placeholder="budi@email.com"
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...focusStyle("email"),
                          background: "#f7f4ee",
                          color: "#0a1f10",
                          border:
                            focused === "email"
                              ? "1.5px solid #2e7d32"
                              : "1px solid rgba(46,125,50,0.2)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Topik select */}
                  <div>
                    <label
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#2d4a2d",
                        letterSpacing: 0.5,
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      Topik Pesan
                    </label>
                    <select
                      name="topik"
                      value={form.topik}
                      onChange={handleChange}
                      onFocus={() => setFocused("topik")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...focusStyle("topik"),
                        background: "#f7f4ee",
                        color: form.topik ? "#0a1f10" : "#9ab89a",
                        border:
                          focused === "topik"
                            ? "1.5px solid #2e7d32"
                            : "1px solid rgba(46,125,50,0.2)",
                        appearance: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="" disabled>
                        Pilih topik...
                      </option>
                      {TOPICS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pesan textarea */}
                  <div>
                    <label
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#2d4a2d",
                        letterSpacing: 0.5,
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      Pesan *
                    </label>
                    <textarea
                      name="pesan"
                      value={form.pesan}
                      required
                      rows={5}
                      placeholder="Tuliskan pertanyaan atau kebutuhan Anda di sini..."
                      onChange={handleChange}
                      onFocus={() => setFocused("pesan")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...focusStyle("pesan"),
                        background: "#f7f4ee",
                        color: "#0a1f10",
                        border:
                          focused === "pesan"
                            ? "1.5px solid #2e7d32"
                            : "1px solid rgba(46,125,50,0.2)",
                        resize: "vertical",
                        minHeight: 130,
                      }}
                    />
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: 11,
                        color: "#9ab89a",
                        marginTop: 4,
                      }}
                    >
                      {form.pesan.length} karakter
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      padding: "15px",
                      background: loading
                        ? "rgba(46,125,50,0.5)"
                        : "linear-gradient(135deg, #4caf50, #2e7d32)",
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 600,
                      border: "none",
                      borderRadius: 12,
                      cursor: loading ? "not-allowed" : "pointer",
                      fontFamily: "'DM Sans', sans-serif",
                      boxShadow: loading
                        ? "none"
                        : "0 4px 20px rgba(76,175,80,0.3)",
                      transition: "all 0.2s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.currentTarget.style.transform = "translateY(-1px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 28px rgba(76,175,80,0.45)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow =
                        "0 4px 20px rgba(76,175,80,0.3)";
                    }}
                  >
                    {loading ? (
                      <>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          style={{ animation: "ctaSpin 0.8s linear infinite" }}
                        >
                          <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                          <path d="M12 2a10 10 0 0 1 10 10" />
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      <>✉️ Kirim Pesan</>
                    )}
                  </button>

                  <p
                    style={{
                      fontSize: 12,
                      color: "#9ab89a",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    🔒 Data Anda aman dan tidak akan dibagikan ke pihak ketiga.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes ctaBounce {
          0%   { transform: scale(0.5); opacity: 0; }
          70%  { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes ctaSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        input::placeholder, textarea::placeholder, select::placeholder {
          color: #9ab89a !important;
        }

        @media (max-width: 900px) {
          .ct-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .ct-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
