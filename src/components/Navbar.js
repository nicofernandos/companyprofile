import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Beranda", href: "/", section: null, isRoute: true },
  { label: "Tentang", href: "#about", section: "about" },
  { label: "Katalog", href: "#katalog", section: "katalog" },
  { label: "Kontak", href: "#contact", section: "contact", isCta: true },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* ── Glassmorphism saat scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Scroll-spy: deteksi section yang sedang terlihat ── */
  useEffect(() => {
    const sections = ["about", "katalog", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  /* ── Smooth scroll / cross-page navigation ── */
  const scrollToSection = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      setMenuOpen(false);
      if (location.pathname !== "/") {
        window.location.href = `/#${sectionId}`;
        return;
      }
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    },
    [location.pathname],
  );

  const isActive = (link) => {
    if (link.isRoute) return location.pathname === "/" && !activeSection;
    return activeSection === link.section;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <style>{`
        /* Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --nav-h: 68px;
          --green-900: #0a1f10;
          --green-700: #0f2c1a;
          --green-500: #2e7d32;
          --green-400: #4caf50;
          --green-300: #7dc864;
          --green-100: #a8e09a;
          --gold:      #d4a738;
          --cream:     #f0ede4;
        }

        /* ── Nav wrapper ── */
        .hj-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          height: var(--nav-h);
          display: flex;
          align-items: center;
          transition: background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease;
          background: transparent;
        }
        .hj-nav.scrolled {
          background: rgba(10, 31, 16, 0.82);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 1px 0 rgba(125,200,100,0.15), 0 8px 32px rgba(0,0,0,0.35);
        }

        /* ── Inner container ── */
        .hj-nav-inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* ── Brand ── */
        .hj-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .hj-brand-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, var(--green-500), var(--green-300));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          box-shadow: 0 0 0 1px rgba(125,200,100,0.3), 0 4px 12px rgba(76,175,80,0.25);
        }
        .hj-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .hj-brand-pt {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--green-100);
          opacity: 0.75;
        }
        .hj-brand-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 18px;
          color: var(--cream);
          letter-spacing: 0.01em;
        }

        /* ── Desktop menu ── */
        .hj-menu {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .hj-menu li { position: relative; }

        .hj-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: rgba(240,237,228,0.75);
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          display: block;
          letter-spacing: 0.02em;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .hj-link:hover,
        .hj-link.active {
          color: var(--cream);
          background: rgba(125,200,100,0.1);
        }
        .hj-link.active { color: var(--green-300); }

        /* Active underline dot */
        .hj-menu li .hj-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--green-300);
        }

        /* CTA button */
        .hj-link.cta {
          background: linear-gradient(135deg, var(--green-500), #1b5e20);
          color: #fff !important;
          padding: 9px 20px;
          border-radius: 50px;
          box-shadow: 0 3px 14px rgba(76,175,80,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
          margin-left: 8px;
        }
        .hj-link.cta:hover {
          background: linear-gradient(135deg, #43a047, var(--green-500)) !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(76,175,80,0.45);
        }
        .hj-link.cta.active::after { display: none; }

        /* Divider */
        .hj-divider {
          width: 1px;
          height: 20px;
          background: rgba(125,200,100,0.2);
          margin: 0 8px;
        }

        /* ── Hamburger ── */
        .hj-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          border: 1px solid rgba(125,200,100,0.2);
          background: rgba(125,200,100,0.05);
          transition: background 0.2s;
        }
        .hj-hamburger:hover { background: rgba(125,200,100,0.12); }
        .hj-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--green-100);
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s, width 0.3s;
          transform-origin: center;
        }
        .hj-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hj-hamburger.open span:nth-child(2) { opacity: 0; width: 0; }
        .hj-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .hj-drawer {
          position: fixed;
          top: var(--nav-h);
          left: 0; right: 0;
          background: rgba(10,31,16,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(125,200,100,0.15);
          padding: 16px 24px 24px;
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.3s ease;
          pointer-events: none;
          z-index: 999;
        }
        .hj-drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        .hj-drawer ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hj-drawer .hj-link {
          font-size: 15px;
          padding: 12px 16px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hj-drawer .hj-link.cta {
          margin: 8px 0 0;
          text-align: center;
          justify-content: center;
          padding: 13px;
          border-radius: 50px;
          margin-left: 0;
        }
        .hj-drawer-sep {
          height: 1px;
          background: rgba(125,200,100,0.12);
          margin: 8px 0;
        }

        @media (max-width: 767px) {
          .hj-menu { display: none; }
          .hj-hamburger { display: flex; }
          .hj-nav-inner { padding: 0 20px; }
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav
        className={`hj-nav${scrolled ? " scrolled" : ""}`}
        role="navigation"
        aria-label="Navigasi utama"
      >
        <div className="hj-nav-inner">
          {/* Brand */}
          <Link className="hj-brand" to="/" onClick={() => setMenuOpen(false)}>
            <div className="hj-brand-icon">src</div>
            <div className="hj-brand-text">
              <span className="hj-brand-pt">PT</span>
              <span className="hj-brand-name">Helton Jaya</span>
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hj-menu" role="list">
            {NAV_LINKS.map((link, i) => {
              const active = isActive(link);
              if (link.isCta) {
                return (
                  <li key={link.label}>
                    <div className="hj-divider" aria-hidden />
                  </li>
                ).type === null ? null : (
                  <li
                    key={link.label}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="hj-divider" aria-hidden="true" />
                    {link.isRoute ? (
                      <Link
                        className={`hj-link cta${active ? " active" : ""}`}
                        to={link.href}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        className={`hj-link cta${active ? " active" : ""}`}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.section)}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                );
              }
              return (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      className={`hj-link${active ? " active" : ""}`}
                      to={link.href}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      className={`hj-link${active ? " active" : ""}`}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.section)}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Hamburger */}
          <button
            className={`hj-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Buka menu navigasi"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`hj-drawer${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          {NAV_LINKS.map((link) => {
            const icons = {
              Beranda: "🏠",
              Tentang: "📖",
              Katalog: "🛒",
              Kontak: "✉️",
            };
            const active = isActive(link);
            const cls = `hj-link${link.isCta ? " cta" : ""}${active ? " active" : ""}`;
            if (link.label === "Kontak") {
              return (
                <li key={link.label}>
                  <div className="hj-drawer-sep" />
                  <a
                    className={cls}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.section)}
                  >
                    <span>{icons[link.label]}</span> {link.label}
                  </a>
                </li>
              );
            }
            return (
              <li key={link.label}>
                {link.isRoute ? (
                  <Link
                    className={cls}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{icons[link.label]}</span> {link.label}
                  </Link>
                ) : (
                  <a
                    className={cls}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.section)}
                  >
                    <span>{icons[link.label]}</span> {link.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Spacer agar konten tidak tertutup navbar fixed */}
      <div style={{ height: "var(--nav-h, 68px)" }} />
    </>
  );
}
