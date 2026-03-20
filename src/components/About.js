const STATS = [
  { num: "37+", label: "Tahun Berpengalaman" },
  { num: "50+", label: "Varian Produk Jamu" },
  { num: "1Jt+", label: "Pelanggan Puas" },
  { num: "100%", label: "Bahan Herbal Alami" },
];

const VALUES = [
  {
    title: "Bahan Alami Pilihan",
    desc: "Setiap rempah dipilih langsung dari petani lokal terpercaya di seluruh Nusantara untuk menjamin kualitas dan keaslian khasiat.",
  },
  {
    title: "Standar Produksi GMP",
    desc: "Proses produksi kami bersertifikat Good Manufacturing Practice, memastikan setiap produk higienis, aman, dan konsisten.",
  },
  {
    title: "Halal & Tersertifikasi BPOM",
    desc: "Seluruh lini produk telah mendapatkan sertifikasi halal MUI dan izin edar BPOM, sehingga aman dikonsumsi keluarga.",
  },
  {
    title: "Warisan & Inovasi",
    desc: "Kami memadukan kearifan lokal resep jamu leluhur dengan riset modern agar khasiatnya tetap relevan di era kini.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#EAF97C ",
        padding: "100px 0",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 320,
          height: 320,
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
          bottom: -60,
          left: -60,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,167,56,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Batik motif subtle */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
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
            id="about-batik"
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
        <rect width="100%" height="100%" fill="url(#about-batik)" />
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
              Tentang Kami
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#0a1f10",
              margin: "0 auto 20px",
              maxWidth: 640,
              lineHeight: 1.2,
            }}
          >
            Meracik Jamu{" "}
            <span
              style={{
                color: "#2e7d32",
                position: "relative",
                display: "inline-block",
              }}
            >
              Sejak Generasi
              <svg
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "100%",
                  height: 8,
                }}
                viewBox="0 0 300 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 6 Q75 1 150 5 Q225 9 298 4"
                  stroke="#d4a738"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            ke Generasi
          </h2>

          <p
            style={{
              fontSize: 17,
              color: "#5a7a5a",
              lineHeight: 1.8,
              maxWidth: 580,
              margin: "0 auto",
            }}
          >
            Berdiri sejak 2020, PT Helton Jaya telah mengabdikan diri pada
            pelestarian kearifan herbal Nusantara dengan sentuhan ilmu
            pengetahuan modern.
          </p>
        </div>

        {/* ── Stats bar ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(46,125,50,0.15)",
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 80,
          }}
          className="about-stats-grid"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                background: "#f7f4ee",
                padding: "28px 24px",
                textAlign: "center",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(46,125,50,0.12)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "#2e7d32",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#7a9e74",
                  fontWeight: 500,
                  letterSpacing: 0.3,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="about-main-grid"
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  height: 1,
                  flex: 1,
                  background:
                    "linear-gradient(to right, rgba(46,125,50,0.4), transparent)",
                }}
              />
            </div>

            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#0a1f10",
                marginBottom: 20,
                lineHeight: 1.3,
              }}
            >
              Warisan Leluhur,
              <br />
              Dipercaya Jutaan Keluarga
            </h3>

            <p
              style={{
                color: "#5a7a5a",
                lineHeight: 1.85,
                marginBottom: 20,
                fontSize: 15.5,
              }}
            >
              PT Helton Jaya lahir dari kecintaan mendalam terhadap tradisi
              pengobatan herbal Indonesia. Berawal dari racikan jamu rumahan
              keluarga Helton di Palembang, kini kami telah berkembang menjadi
              produsen jamu tradisional modern yang dikenal luas di seluruh
              Nusantara.
            </p>

            <p
              style={{
                color: "#5a7a5a",
                lineHeight: 1.85,
                marginBottom: 32,
                fontSize: 15.5,
              }}
            >
              Dengan menggabungkan kearifan lokal turun-temurun dan teknologi
              produksi terkini, setiap produk kami merupakan perpaduan sempurna
              antara{" "}
              <strong style={{ color: "#2e7d32" }}>manfaat tradisional</strong>{" "}
              dan{" "}
              <strong style={{ color: "#2e7d32" }}>
                standar kualitas modern
              </strong>
              .
            </p>

            {/* Visi & Misi cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  label: "Visi",
                  color: "#2e7d32",
                  bg: "rgba(46,125,50,0.06)",
                  border: "rgba(46,125,50,0.2)",
                  text: "Menjadi produsen jamu herbal tradisional terkemuka di Asia Tenggara yang menjadi pilihan utama keluarga Indonesia.",
                },
                {
                  label: "Misi",
                  color: "#b5820a",
                  bg: "rgba(212,167,56,0.07)",
                  border: "rgba(212,167,56,0.25)",
                  text: "Menghadirkan produk jamu alami berstandar tinggi, melestarikan kearifan herbal Nusantara, dan memberdayakan petani rempah lokal.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                    borderRadius: 14,
                    padding: "18px 20px",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 2,
                        color: item.color,
                        textTransform: "uppercase",
                        marginBottom: 5,
                      }}
                    >
                      {item.label}
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        color: "#4a6a4a",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              style={{
                marginTop: 32,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 28px",
                background: "linear-gradient(135deg, #4caf50, #2e7d32)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                borderRadius: 50,
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(76,175,80,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 28px rgba(76,175,80,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(76,175,80,0.3)";
              }}
            >
              Pelajari Lebih Lanjut →
            </button>
          </div>

          {/* Right: value cards grid */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(46,125,50,0.12)",
                  borderRadius: 18,
                  padding: "24px 20px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 2px 12px rgba(46,125,50,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(46,125,50,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow =
                    "0 2px 12px rgba(46,125,50,0.06)";
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background:
                      i % 2 === 0
                        ? "linear-gradient(to right, #4caf50, #2e7d32)"
                        : "linear-gradient(to right, #d4a738, #b5820a)",
                    borderRadius: "18px 18px 0 0",
                  }}
                />

                <h4
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#0a1f10",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {v.title}
                </h4>

                <p
                  style={{
                    fontSize: 13,
                    color: "#7a9e74",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}

            {/* Rempah showcase card */}
            <div
              style={{
                gridColumn: "1 / -1",
                background: "linear-gradient(135deg, #0f2c1a 0%, #1a3a20 100%)",
                borderRadius: 18,
                padding: "24px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#7dc864",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  Bahan Unggulan
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.1rem",
                    color: "#f0ede4",
                    fontWeight: 600,
                  }}
                >
                  Rempah Pilihan Nusantara
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {["Temulawak", "Jahe Merah", "Kunyit", "Kayu Manis"].map(
                  (r) => (
                    <span
                      key={r}
                      style={{
                        background: "rgba(125,200,100,0.15)",
                        border: "1px solid rgba(125,200,100,0.3)",
                        borderRadius: 50,
                        padding: "5px 14px",
                        fontSize: 12,
                        color: "#a8e09a",
                        fontWeight: 500,
                      }}
                    >
                      {r}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

        @media (max-width: 900px) {
          .about-main-grid { grid-template-columns: 1fr !important; }
          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
