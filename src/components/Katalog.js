import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const CATEGORIES = ["Semua", "Stamina", "Pencernaan", "Imunitas", "Kecantikan"];

const fmt = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

export default function Katalog() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [hoveredId, setHoveredId] = useState(null);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/menu");
        setProducts(response.data);
      } catch (err) {
        console.error("Gagal mengambil data katalog:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filtered =
    activeCategory === "Semua"
      ? products
      : products.filter((p) => p.kategori === activeCategory);

  return (
    <section
      id="katalog"
      style={{
        background:
          "linear-gradient(180deg, #0a1f10 0%, #0f2c1a 60%, #0a1f10 100%)",
        padding: "100px 0 120px",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow blobs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(46,125,50,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
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
          opacity: 0.04,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="kat-batik"
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
        <rect width="100%" height="100%" fill="url(#kat-batik)" />
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
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(125,200,100,0.12)",
              border: "1px solid rgba(125,200,100,0.3)",
              borderRadius: 100,
              padding: "6px 18px",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: 2.5,
                color: "#7dc864",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Produk Kami
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#f0ede4",
              margin: "0 auto 20px",
              maxWidth: 560,
              lineHeight: 1.2,
            }}
          >
            Katalog{" "}
            <span
              style={{
                color: "#7dc864",
                position: "relative",
                display: "inline-block",
              }}
            >
              Jamu Pilihan
              <svg
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "100%",
                  height: 8,
                }}
                viewBox="0 0 260 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 6 Q65 1 130 5 Q195 9 258 4"
                  stroke="#d4a738"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#7a9e74",
              lineHeight: 1.8,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Setiap produk diracik dari bahan herbal segar pilihan dengan standar
            kualitas tertinggi untuk menjaga kesehatan Anda.
          </p>
        </div>

        {/* ── Category filter ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 52,
          }}
        >
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "9px 22px",
                  borderRadius: 50,
                  border: active ? "none" : "1px solid rgba(125,200,100,0.25)",
                  background: active
                    ? "linear-gradient(135deg, #4caf50, #2e7d32)"
                    : "rgba(125,200,100,0.06)",
                  color: active ? "#fff" : "#7a9e74",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: active
                    ? "0 4px 16px rgba(76,175,80,0.35)"
                    : "none",
                  transition: "all 0.2s",
                  letterSpacing: 0.3,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Product grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="kat-grid"
        >
          {filtered.map((p) => {
            const hovered = hoveredId === p.id;
            return (
              <div
                key={p.id}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${hovered ? "rgba(125,200,100,0.45)" : "rgba(125,200,100,0.15)"}`,
                  borderRadius: 20,
                  overflow: "hidden",
                  transition:
                    "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                  transform: hovered ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: hovered
                    ? "0 20px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(125,200,100,0.2)"
                    : "0 4px 16px rgba(0,0,0,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Card top — icon area */}
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(46,125,50,0.15) 0%, rgba(15,44,26,0.4) 100%)",
                    padding: "32px 28px 24px",
                    position: "relative",
                    textAlign: "center",
                    borderBottom: "1px solid rgba(125,200,100,0.1)",
                  }}
                >
                  {/* Badge */}
                  {p.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        background: p.badgeColor,
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        borderRadius: 50,
                        boxShadow: `0 2px 8px ${p.badgeColor}55`,
                      }}
                    >
                      {p.badge}
                    </div>
                  )}

                  {/* Rating */}
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      background: "rgba(0,0,0,0.3)",
                      borderRadius: 50,
                      padding: "4px 10px",
                    }}
                  >
                    <span style={{ color: "#d4a738", fontSize: 11 }}>★</span>
                    <span
                      style={{
                        color: "#f0ede4",
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {p.rating}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      fontSize: 52,
                      lineHeight: 1,
                      marginBottom: 16,
                      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
                      transition: "transform 0.3s",
                      transform: hovered
                        ? "scale(1.15) rotate(-5deg)"
                        : "scale(1)",
                      display: "inline-block",
                    }}
                  >
                    {p.icon}
                  </div>

                  {/* Khasiat pills */}
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {(p.khasiat || []).map((k) => (
                      <span
                        key={k}
                        style={{
                          background: "rgba(125,200,100,0.12)",
                          border: "1px solid rgba(125,200,100,0.2)",
                          borderRadius: 50,
                          padding: "3px 10px",
                          fontSize: 11,
                          color: "#7dc864",
                          fontWeight: 500,
                        }}
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding: "22px 24px 24px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#f0ede4",
                      margin: "0 0 10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </h3>

                  <p
                    style={{
                      fontSize: 13.5,
                      color: "#7a9e74",
                      lineHeight: 1.75,
                      margin: "0 0 14px",
                      flex: 1,
                    }}
                  >
                    {p.deskripsi}
                  </p>

                  {/* Bahan */}
                  <div
                    style={{
                      fontSize: 11.5,
                      color: "#5a7a5a",
                      marginBottom: 18,
                      fontStyle: "italic",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ color: "#7dc864", fontSize: 13 }}>🌱</span>
                    {p.bahan}
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      height: 1,
                      background: "rgba(125,200,100,0.12)",
                      marginBottom: 18,
                    }}
                  />

                  {/* Price row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#5a7a5a",
                          marginBottom: 2,
                        }}
                      >
                        Harga / botol
                      </div>
                      <div
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "#7dc864",
                        }}
                      >
                        {fmt(p.harga)}
                      </div>
                    </div>

                    <button
                      style={{
                        padding: "10px 20px",
                        background: hovered
                          ? "linear-gradient(135deg, #4caf50, #2e7d32)"
                          : "rgba(76,175,80,0.15)",
                        border: "1px solid rgba(76,175,80,0.4)",
                        borderRadius: 50,
                        color: hovered ? "#fff" : "#7dc864",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        fontFamily: "'DM Sans', sans-serif",
                        transition: "all 0.25s",
                        boxShadow: hovered
                          ? "0 4px 16px rgba(76,175,80,0.35)"
                          : "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Pesan →
                    </button>
                  </div>

                  {/* Review count */}
                  <div
                    style={{
                      marginTop: 12,
                      fontSize: 11.5,
                      color: "#4a6a4a",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <span style={{ color: "#d4a738" }}>{"★".repeat(5)}</span>
                    <span>
                      {(p.ulasan || 0).toLocaleString("id-ID")} ulasan
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div
          style={{
            marginTop: 72,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(125,200,100,0.15)",
            borderRadius: 20,
            padding: "36px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            backdropFilter: "blur(8px)",
          }}
          className="kat-cta"
        >
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2,
                color: "#7dc864",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              Pesan dalam Jumlah Besar?
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "#f0ede4",
                marginBottom: 6,
              }}
            >
              Dapatkan Harga Grosir Spesial
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#7a9e74",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Kami melayani pemesanan partai besar untuk reseller, apotek, dan
              distributor di seluruh Indonesia.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              style={{
                padding: "13px 28px",
                background: "linear-gradient(135deg, #4caf50, #2e7d32)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                borderRadius: 50,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 4px 20px rgba(76,175,80,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 28px rgba(76,175,80,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(76,175,80,0.35)";
              }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              💬 Hubungi Kami
            </button>
            <button
              style={{
                padding: "13px 28px",
                background: "transparent",
                color: "#a8e09a",
                fontSize: 14,
                fontWeight: 600,
                border: "1.5px solid rgba(125,200,100,0.35)",
                borderRadius: 50,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(125,200,100,0.1)";
                e.currentTarget.style.borderColor = "rgba(125,200,100,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(125,200,100,0.35)";
              }}
            >
              📋 Download Katalog
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

        @media (max-width: 900px) {
          .kat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .kat-grid { grid-template-columns: 1fr !important; }
          .kat-cta { flex-direction: column; padding: 28px 24px !important; text-align: center; }
        }
      `}</style>
    </section>
  );
}
