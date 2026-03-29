export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .footer-wrap {
          position: relative;
          overflow: hidden;
          background: #07070f;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 3rem 2rem;
        }
        .footer-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          pointer-events: none;
        }
        .footer-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(88,28,235,0.1), transparent 70%);
          bottom: -100px; left: 50%;
          transform: translateX(-50%);
        }

        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Top divider line */
        .footer-top-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(6,182,212,0.3), transparent);
          margin-bottom: 0.5rem;
        }

        /* Main row */
        .footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        /* Logo */
        .footer-logo {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          letter-spacing: -0.03em;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .footer-logo-bracket {
          font-family: 'Plus Jakarta Sans', monospace;
          font-weight: 400;
          font-size: 1rem;
          color: rgba(124,58,237,0.6);
        }
        .footer-logo em {
          font-style: normal;
          background: linear-gradient(100deg, #7c3aed 0%, #06b6d4 55%, #00d4aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-logo-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #7c3aed;
          box-shadow: 0 0 8px #7c3aed;
          margin-left: 4px;
          animation: footerPulse 2s ease-in-out infinite;
        }
        @keyframes footerPulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.6); opacity: 0.5; }
        }

        /* Copyright */
        .footer-copy {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.22);
          text-align: center;
        }
        .footer-copy span {
          color: rgba(124,58,237,0.7);
          font-weight: 600;
        }

        /* Social links */
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .footer-social-link {
          width: 38px; height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s ease;
          color: rgba(255,255,255,0.35);
        }
        .footer-social-link:hover {
          border-color: rgba(124,58,237,0.4);
          background: rgba(124,58,237,0.08);
          color: #a78bfa;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(124,58,237,0.2);
        }
        .footer-social-link svg {
          width: 15px; height: 15px;
        }

        /* Bottom mini bar */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.04);
          gap: 6px;
        }
        .footer-bottom-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(124,58,237,0.5);
        }
        .footer-bottom-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.15);
        }

        @media (max-width: 640px) {
          .footer-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-copy { order: 3; }
          .footer-wrap { padding: 2.5rem 1.2rem; }
        }
      `}</style>

      <footer className="footer-wrap">
        <div className="footer-orb" />

        <div className="footer-inner">
          <div className="footer-top-line" />

          <div className="footer-row">

            {/* Logo */}
            <a href="#" className="footer-logo">
              <span className="footer-logo-bracket"></span>
              Sub<em>hashree</em>
              <span className="footer-logo-bracket"></span>
              <span className="footer-logo-dot" />
            </a>

            {/* Copyright */}
            <p className="footer-copy">
              &copy; {currentYear} | Designed & Built by{' '}
              <span>Subhashree G.</span>
            </p>

            {/* Socials */}
            <div className="footer-socials">

              {/* GitHub */}
              
                <a href="https://github.com/Subha29042000"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              
                <a href="https://www.linkedin.com/in/subhashree-govindaraju-a5862b389"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Behance */}
              
                <a href="https://www.behance.net/subha_shree2"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Behance">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.971 13h4.978c-.058-1.belangrijk74-1.318-2.974-2.404-2.974-1.258 0-2.45.981-2.574 2.974zM8 8c1.783 0 3.037.425 3.784 1.275.748.85 1.122 2.066 1.122 3.65 0 1.166-.27 2.152-.81 2.959-.326.5-.757.895-1.293 1.186-.536.29-1.19.435-1.96.435H0V5h8zm-.207 6.989c.484 0 .866-.136 1.146-.409.28-.273.42-.683.42-1.231 0-.547-.14-.96-.42-1.238-.28-.278-.662-.417-1.146-.417H3.5v3.295h4.293zm-.22-5.988H3.5v2.99h4.073c.45 0 .808-.126 1.073-.378.265-.253.398-.605.398-1.057 0-.452-.133-.805-.398-1.057-.265-.252-.623-.378-1.073-.378-.199 0-.223-.12 0-.12z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-dot" />
            <span className="footer-bottom-text">Frontend Developer · Chennai, India</span>
            <div className="footer-bottom-dot" />
          </div>

        </div>
      </footer>
    </>
  );
}