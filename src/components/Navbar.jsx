import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const links = ['About', 'TechStack', 'Experience', 'Projects', 'Contact'];
// const links = [
//   { label: 'Who I Am',   href: 'about' },
//   { label: 'Tech Stack', href: 'skills' },
//   { label: 'Work',       href: 'experience' },
//   { label: 'Projects',   href: 'projects' },
//   { label: "Let's Talk", href: 'contact' },
// ];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: all 0.4s ease;
          padding: 0 1.5rem;
        }

        /* Floating pill style when scrolled */
        .nav-root.scrolled {
          padding: 0.6rem 1.5rem;
        }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 2rem;
          border-radius: 0 0 20px 20px;
          border: 1px solid rgba(255,255,255,0.04);
          border-top: none;
          background: rgba(7,7,15,0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.4s ease;
        }

        .nav-root.scrolled .nav-inner {
          border-radius: 100px;
          padding: 0.85rem 1.8rem;
          background: rgba(7,7,15,0.85);
          border: 1px solid rgba(124,58,237,0.2);
          box-shadow: 0 0 40px rgba(124,58,237,0.08), 0 8px 32px rgba(0,0,0,0.4);
        }

        /* Logo */
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: -0.03em;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
          position: relative;
        }
        .nav-logo-bracket {
          color: rgba(124,58,237,0.6);
          font-family: 'DM Mono', monospace;
          font-size: 1rem;
          font-weight: 400;
        }
        .nav-logo-name { color: #fff; }
        .nav-logo-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #7c3aed;
          box-shadow: 0 0 8px #7c3aed;
          margin-left: 4px;
          animation: logoPulse 2s ease-in-out infinite;
        }
        @keyframes logoPulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.6); opacity: 0.5; }
        }

        /* Desktop links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }

        .nav-link {
          position: relative;
          font-family: 'DM Mono', monospace;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 100px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 16px;
          height: 1.5px;
          background: #7c3aed;
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }
        .nav-link.active {
          color: #fff;
        }

        /* CTA button */
        .nav-cta {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          background: #7c3aed;
          border: none;
          padding: 9px 20px;
          border-radius: 100px;
          cursor: pointer;
          text-decoration: none;
          margin-left: 0.5rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 0 20px rgba(124,58,237,0.35);
        }
        .nav-cta::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s ease;
        }
        .nav-cta:hover::before { left: 150%; }
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 35px rgba(124,58,237,0.55);
        }

        /* Mobile hamburger */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 6px;
          z-index: 60;
        }
        .ham-line {
          width: 24px;
          height: 1.5px;
          background: rgba(255,255,255,0.8);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          transform-origin: center;
        }
        .nav-hamburger.open .ham-line:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .nav-hamburger.open .ham-line:nth-child(2) {
          opacity: 0; transform: scaleX(0);
        }
        .nav-hamburger.open .ham-line:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* Mobile drawer */
        .nav-drawer {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 49;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: rgba(4,4,12,0.97);
          backdrop-filter: blur(24px);
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease;
          pointer-events: none;
        }
        .nav-drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .drawer-link {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 8vw, 3.5rem);
          letter-spacing: -0.03em;
          color: rgba(255,255,255,0.2);
          text-decoration: none;
          line-height: 1.1;
          transition: color 0.2s ease, transform 0.2s ease;
          transform: translateY(20px);
          opacity: 0;
        }
        .nav-drawer.open .drawer-link {
          opacity: 1;
          transform: translateY(0);
        }
        .nav-drawer.open .drawer-link:nth-child(1) { transition: all 0.4s ease 0.1s; }
        .nav-drawer.open .drawer-link:nth-child(2) { transition: all 0.4s ease 0.17s; }
        .nav-drawer.open .drawer-link:nth-child(3) { transition: all 0.4s ease 0.24s; }
        .nav-drawer.open .drawer-link:nth-child(4) { transition: all 0.4s ease 0.31s; }
        .nav-drawer.open .drawer-link:nth-child(5) { transition: all 0.4s ease 0.38s; }
        .drawer-link:hover { color: #fff; transform: translateX(8px); }

        .drawer-footer {
          position: absolute;
          bottom: 3rem;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.15);
          opacity: 0;
          transition: opacity 0.4s ease 0.5s;
        }
        .nav-drawer.open .drawer-footer { opacity: 1; }

        .drawer-accent-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, transparent, rgba(124,58,237,0.5), transparent);
          margin: 0.5rem 0;
          opacity: 0;
          transition: opacity 0.4s ease 0.45s;
        }
        .nav-drawer.open .drawer-accent-line { opacity: 1; }

        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none !important; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      {/* Mobile full-screen drawer */}
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="drawer-link"
            onClick={() => setIsOpen(false)}
          >
            {link}
          </a>
        ))}
        <div className="drawer-accent-line" />
        <div className="drawer-footer">Subhashree G — Frontend Developer</div>
      </div>

      {/* Navbar */}
      <nav className={`nav-root ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Logo */}
          <a href="#" className="nav-logo">
            <span className="nav-logo-bracket"></span>
            <span className="nav-logo-name">SG</span>
            <span className="nav-logo-bracket"></span>
            <span className="nav-logo-dot" />
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`nav-link ${active === link ? 'active' : ''}`}
                  onClick={() => setActive(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire me CTA */}
          <a href="#contact" className="nav-cta">Hire Me</a>

          {/* Hamburger */}
          <button
            className={`nav-hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>

        </div>
      </nav>
    </>
  );
}

























