import { useEffect, useRef } from "react";

/**
 * SEO — tambahkan di <head> via react-helmet atau index.html:
 *
 * <title>PT Helton Jaya – Jamu Tradisional Premium untuk Kesehatan Tubuh</title>
 * <meta name="description" content="PT Helton Jaya adalah produsen jamu tradisional terpercaya. Produk jamu herbal alami kami diformulasikan untuk menjaga kesehatan tubuh, stamina, dan imunitas secara alami." />
 * <meta name="keywords" content="jamu tradisional, jamu herbal, jamu kesehatan, produsen jamu, jamu alami, PT Helton Jaya, jamu modern, minuman herbal, jamu stamina, jamu imunitas" />
 * <meta property="og:title" content="PT Helton Jaya – Jamu Tradisional Premium" />
 * <meta property="og:description" content="Temukan khasiat jamu tradisional modern dari PT Helton Jaya." />
 * <link rel="canonical" href="https://www.heltonjaya.com/" />
 */

const LEAVES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.round((i * 17 + 7) % 100)}%`,
  delay: `${(i * 0.4) % 6}s`,
  dur: `${6 + (i % 4)}s`,
  size: 10 + (i % 3) * 6,
  rot: (i * 37) % 360,
}));

const PILL_POSITIONS = [
  { top: "8%", left: "-22%" },
  { top: "30%", right: "-26%" },
  { bottom: "30%", left: "-24%" },
  { bottom: "8%", right: "-22%" },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    const onScroll = () => {
      if (!el) return;
      el.style.setProperty("--scroll-y", `${window.scrollY * 0.3}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Helton Jaya",
    description:
      "Produsen jamu tradisional modern berkualitas tinggi menggunakan bahan herbal alami pilihan.",
    url: "https://www.heltonjaya.com",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Jamu Tradisional PT Helton Jaya",
        category: "Herbal Health Products",
      },
    },
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        id="hero"
        ref={heroRef}
        aria-label="Hero — PT Helton Jaya Jamu Tradisional"
        style={{
          position: "relative",
          minHeight: "calc(100vh - 68px)",
          overflow: "hidden",
          background: "#0f2c1a",
          display: "flex",
          alignItems: "center",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* Layered background */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(101,163,83,0.18) 0%, transparent 65%),
            radial-gradient(ellipse 60% 80% at 20% 70%, rgba(212,167,56,0.12) 0%, transparent 60%),
            linear-gradient(160deg, #0a1f10 0%, #0f2c1a 45%, #1a3a20 100%)
          `,
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
            opacity: 0.07,
          }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="batik"
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
                cy="0"
                r="5"
                fill="none"
                stroke="#a8d5a2"
                strokeWidth="0.5"
              />
              <circle
                cx="0"
                cy="80"
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
              <line
                x1="40"
                y1="22"
                x2="40"
                y2="0"
                stroke="#a8d5a2"
                strokeWidth="0.5"
              />
              <line
                x1="40"
                y1="58"
                x2="40"
                y2="80"
                stroke="#a8d5a2"
                strokeWidth="0.5"
              />
              <line
                x1="22"
                y1="40"
                x2="0"
                y2="40"
                stroke="#a8d5a2"
                strokeWidth="0.5"
              />
              <line
                x1="58"
                y1="40"
                x2="80"
                y2="40"
                stroke="#a8d5a2"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#batik)" />
        </svg>

        {/* Floating leaves */}
        <div
          aria-hidden
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        >
          {LEAVES.map((l) => (
            <div
              key={l.id}
              style={{
                position: "absolute",
                left: l.left,
                top: "-40px",
                width: l.size,
                height: l.size,
                opacity: 0.18,
                animation: `heroFloatLeaf ${l.dur} ${l.delay} linear infinite`,
                transform: `rotate(${l.rot}deg)`,
              }}
            >
              <svg
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2 C22 2 28 10 28 18 C28 26 22 28 15 28 C8 28 2 26 2 18 C2 10 8 2 15 2Z"
                  fill="#7ec87e"
                />
                <line
                  x1="15"
                  y1="4"
                  x2="15"
                  y2="27"
                  stroke="#3a8a3a"
                  strokeWidth="1"
                />
                <line
                  x1="15"
                  y1="12"
                  x2="22"
                  y2="8"
                  stroke="#3a8a3a"
                  strokeWidth="0.6"
                />
                <line
                  x1="15"
                  y1="17"
                  x2="22"
                  y2="14"
                  stroke="#3a8a3a"
                  strokeWidth="0.6"
                />
                <line
                  x1="15"
                  y1="12"
                  x2="8"
                  y2="8"
                  stroke="#3a8a3a"
                  strokeWidth="0.6"
                />
                <line
                  x1="15"
                  y1="17"
                  x2="8"
                  y2="14"
                  stroke="#3a8a3a"
                  strokeWidth="0.6"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "64px 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="hj-hero-grid"
        >
          {/* Left: copy */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(125,200,100,0.15)",
                border: "1px solid rgba(125,200,100,0.35)",
                borderRadius: 100,
                padding: "6px 16px",
                marginBottom: 28,
                animation: "heroFadeUp 0.6s ease both",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: 2,
                  color: "#a8e09a",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                }}
              >
                Sejak 1987 · Dipercaya Jutaan Pelanggan
              </span>
            </div>

            <h1
              style={{
                margin: "0 0 24px",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: "#f0ede4",
                letterSpacing: "-0.02em",
                animation: "heroFadeUp 0.7s 0.1s ease both",
              }}
            >
              Jamu Tradisional{" "}
              <span
                style={{
                  color: "#7dc864",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                Modern
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
              untuk Kesehatan Tubuh Optimal
            </h1>

            <p
              style={{
                margin: "0 0 36px",
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                color: "#b0c9a8",
                lineHeight: 1.8,
                fontFamily: "sans-serif",
                animation: "heroFadeUp 0.7s 0.2s ease both",
              }}
            >
              PT Helton Jaya menghadirkan{" "}
              <strong style={{ color: "#d4f4c8" }}>jamu herbal alami</strong>{" "}
              yang diracik dari rempah-rempah pilihan Nusantara. Formulasi
              modern kami menjaga keaslian khasiat tradisional untuk stamina,
              imunitas, dan vitalitas Anda sehari-hari.
            </p>

            {/* CTA */}
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                animation: "heroFadeUp 0.7s 0.3s ease both",
              }}
            >
              <button
                onClick={() => scrollTo("katalog")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "linear-gradient(135deg, #4caf50, #2e7d32)",
                  color: "#fff",
                  fontFamily: "sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  borderRadius: 50,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 24px rgba(76,175,80,0.35)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(76,175,80,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(76,175,80,0.35)";
                }}
              >
                Lihat Produk Jamu
              </button>

              <button
                onClick={() => scrollTo("contact")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "transparent",
                  color: "#a8e09a",
                  fontFamily: "sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  borderRadius: 50,
                  border: "1.5px solid rgba(125,200,100,0.45)",
                  cursor: "pointer",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(125,200,100,0.1)";
                  e.currentTarget.style.borderColor = "rgba(125,200,100,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(125,200,100,0.45)";
                }}
              >
                Hubungi Kami
              </button>
            </div>

            {/* Trust stats */}
            <div
              style={{
                marginTop: 48,
                display: "flex",
                gap: 32,
                flexWrap: "wrap",
                animation: "heroFadeUp 0.7s 0.45s ease both",
              }}
            >
              {[
                { num: "37+", desc: "Tahun Pengalaman" },
                { num: "50+", desc: "Varian Jamu" },
                { num: "1 Juta+", desc: "Pelanggan Puas" },
              ].map((s) => (
                <div key={s.desc}>
                  <div
                    style={{
                      fontSize: "1.7rem",
                      fontWeight: 700,
                      color: "#7dc864",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#7a9e74",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: product card */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: "heroFadeIn 1s 0.3s ease both",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: 340,
                height: 340,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(76,175,80,0.2) 0%, transparent 70%)",
                animation: "heroPulse 4s ease-in-out infinite",
              }}
            />

            <div
              style={{
                position: "relative",
                width: 300,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(125,200,100,0.25)",
                borderRadius: 24,
                padding: 32,
                backdropFilter: "blur(12px)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <img
                  src="/assets/img1.jpg"
                  alt="Jamu Stamina Extra"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#7dc864",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  marginBottom: 8,
                }}
              >
                Unggulan
              </div>
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#f0ede4",
                  marginBottom: 8,
                }}
              >
                Jamu Stamina Extra
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "#88ab82",
                  fontFamily: "sans-serif",
                  lineHeight: 1.6,
                  margin: "0 0 24px",
                }}
              >
                Temulawak · Jahe Merah · Kunyit · Ginseng
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 4,
                  marginBottom: 20,
                }}
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} style={{ color: "#d4a738", fontSize: 18 }}>
                    ★
                  </span>
                ))}
                <span
                  style={{
                    color: "#7a9e74",
                    fontSize: 13,
                    fontFamily: "sans-serif",
                    marginLeft: 6,
                    alignSelf: "center",
                  }}
                >
                  4.9 / 5
                </span>
              </div>
              <button
                onClick={() => scrollTo("katalog")}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px 0",
                  background: "rgba(76,175,80,0.2)",
                  border: "1px solid rgba(76,175,80,0.4)",
                  borderRadius: 50,
                  color: "#a8e09a",
                  fontSize: 14,
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(76,175,80,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(76,175,80,0.2)";
                }}
              >
                Selengkapnya →
              </button>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background:
              "linear-gradient(to bottom, transparent, rgba(10,20,12,0.6))",
          }}
        />

        <style>{`
          @keyframes heroFloatLeaf {
            0%   { transform: translateY(-40px) rotate(0deg); opacity: 0; }
            10%  { opacity: 0.2; }
            90%  { opacity: 0.15; }
            100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
          }
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroFadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to   { opacity: 1; transform: scale(1); }
          }
          @keyframes heroPulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50%       { transform: scale(1.12); opacity: 1; }
          }
          @keyframes heroFloatPill {
            from { transform: translateY(0px); }
            to   { transform: translateY(-10px); }
          }
          @media (max-width: 768px) {
            .hj-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
              text-align: center;
            }
          }
        `}</style>
      </section>
    </>
  );
}
