const FOOTER_LINKS = {
  Produk: [
    { label: "Jamu Stamina", href: "#katalog" },
    { label: "Jamu Pencernaan", href: "#katalog" },
    { label: "Jamu Imunitas", href: "#katalog" },
    { label: "Jamu Kecantikan", href: "#katalog" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "#about" },
    { label: "Visi & Misi", href: "#about" },
    { label: "Katalog Produk", href: "#katalog" },
    { label: "Hubungi Kami", href: "#contact" },
  ],
  Sertifikasi: [
    { label: "Halal MUI", href: "#" },
    { label: "Izin BPOM", href: "#" },
  ],
};

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    color: "#e1306c",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook",
    href: "#",
    color: "#1877f2",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "TikTok",
    href: "#",
    color: "#f0ede4",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    label: "YouTube",
    href: "#",
    color: "#ff0000",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const scrollTo = (href) => {
  if (href.startsWith("#") && href.length > 1) {
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #060f08 0%, #0a1f10 100%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative top border */}
      <div
        style={{
          height: 3,
          background:
            "linear-gradient(to right, transparent, #4caf50, #d4a738, #4caf50, transparent)",
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
          opacity: 0.03,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="ft-batik"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="40"
              cy="40"
              r="18"
              fill="none"
              stroke="#a8d5a2"
              strokeWidth="1"
            />
            <circle
              cx="40"
              cy="40"
              r="10"
              fill="none"
              stroke="#a8d5a2"
              strokeWidth="0.5"
            />
            <circle
              cx="0"
              cy="0"
              r="5"
              fill="none"
              stroke="#a8d5a2"
              strokeWidth="0.5"
            />
            <circle
              cx="80"
              cy="80"
              r="5"
              fill="none"
              stroke="#a8d5a2"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ft-batik)" />
      </svg>

      {/* Glow blobs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(46,125,50,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,167,56,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Main footer body ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "72px 32px 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 48,
          }}
          className="ft-grid"
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "linear-gradient(135deg, #4caf50, #2e7d32)",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  flexShrink: 0,
                  boxShadow:
                    "0 0 0 1px rgba(125,200,100,0.3), 0 4px 12px rgba(76,175,80,0.25)",
                }}
              >
                🌿
              </div>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: 2,
                    color: "#7a9e74",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  PT
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 18,
                    color: "#f0ede4",
                    lineHeight: 1.1,
                  }}
                >
                  Helton Jaya
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: 14,
                color: "#6a8e6a",
                lineHeight: 1.8,
                marginBottom: 24,
                maxWidth: 280,
              }}
            >
              Produsen jamu tradisional modern sejak 2020. Menghadirkan khasiat
              herbal Nusantara untuk kesehatan dan vitalitas keluarga Indonesia.
            </p>

            {/* Badges */}
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 28,
              }}
            >
              {["Halal MUI", "BPOM", "GMP"].map((b) => (
                <span
                  key={b}
                  style={{
                    background: "rgba(125,200,100,0.1)",
                    border: "1px solid rgba(125,200,100,0.25)",
                    borderRadius: 50,
                    padding: "4px 12px",
                    fontSize: 11,
                    color: "#7dc864",
                    fontWeight: 600,
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(125,200,100,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition:
                      "background 0.2s, border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${s.color}22`;
                    e.currentTarget.style.borderColor = `${s.color}66`;
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor =
                      "rgba(125,200,100,0.15)";
                    e.currentTarget.style.transform = "";
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="#a8b8a8"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "#7dc864",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {heading}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      style={{
                        fontSize: 14,
                        color: "#6a8e6a",
                        textDecoration: "none",
                        transition: "color 0.2s, padding-left 0.2s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#a8e09a";
                        e.currentTarget.style.paddingLeft = "6px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#6a8e6a";
                        e.currentTarget.style.paddingLeft = "0";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Newsletter strip ── */}
        <div
          style={{
            margin: "56px 0 0",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(125,200,100,0.12)",
            borderRadius: 18,
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
          className="ft-newsletter"
        >
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2,
                color: "#7dc864",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              Newsletter
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.1rem",
                color: "#f0ede4",
                fontWeight: 600,
                marginBottom: 4,
              }}
            >
              Dapatkan Info Promo & Tips Kesehatan
            </div>
            <p style={{ fontSize: 13, color: "#6a8e6a", margin: 0 }}>
              Langganan newsletter kami dan dapatkan diskon 10% untuk pembelian
              pertama.
            </p>
          </div>
          <div style={{ display: "flex", gap: 0, flexShrink: 0 }}>
            <input
              type="email"
              placeholder="Email Anda..."
              style={{
                padding: "12px 18px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(125,200,100,0.25)",
                borderRight: "none",
                borderRadius: "50px 0 0 50px",
                color: "#f0ede4",
                fontSize: 13,
                fontFamily: "'DM Sans', sans-serif",
                outline: "none",
                width: 220,
              }}
            />
            <button
              style={{
                padding: "12px 22px",
                background: "linear-gradient(135deg, #4caf50, #2e7d32)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                border: "none",
                borderRadius: "0 50px 50px 0",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                whiteSpace: "nowrap",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              Langganan →
            </button>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 28,
            borderTop: "1px solid rgba(125,200,100,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: "#4a6a4a", margin: 0 }}>
            © {year} PT Helton Jaya. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Kebijakan Privasi", "Syarat & Ketentuan", "Peta Situs"].map(
              (t) => (
                <a
                  key={t}
                  href="#"
                  style={{
                    fontSize: 12,
                    color: "#4a6a4a",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#7dc864";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#4a6a4a";
                  }}
                >
                  {t}
                </a>
              ),
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#4caf50",
                animation: "ftPulse 2s ease-in-out infinite",
              }}
            />
            <span style={{ fontSize: 12, color: "#4a6a4a" }}>
              Semua sistem berjalan normal
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes ftPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }

        input[type="email"]::placeholder { color: #4a6a4a !important; }

        @media (max-width: 900px) {
          .ft-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 560px) {
          .ft-grid { grid-template-columns: 1fr !important; }
          .ft-newsletter { flex-direction: column; padding: 24px !important; }
          .ft-newsletter input { width: 100% !important; }
        }
      `}</style>
    </footer>
  );
}
