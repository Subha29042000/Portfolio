import img1 from "../assets/Screenshot 2026-03-01 161530.png";
import img2 from "../assets/Screenshot 2026-03-01 162237.png";
import img3 from "../assets/Screenshot 2026-03-01 162823.png";

export default function Projects() {
  const projects = [
    {
      title: "APD India - NGO",
      desc: "A fully responsive NGO website built with React and Tailwind CSS, focused on accessibility and clean UI.",
      tech: ["React", "Tailwind", "Vite"],
      img: img1,
      link: "https://www.apd-india.org",
    },
    {
      title: "Oasis India - NGO",
      desc: "A real estate CRM platform with dynamic filtering, contact forms, and fully responsive layouts.",
      tech: ["JavaScript", "CSS Grid", "Node"],
      img: img2,
      link: "https://www.oasisindia.org",
    },
    {
      title: "Library Management",
      desc: "A library management system with book tracking, search functionality, and a clean user interface.",
      tech: ["HTML", "CSS", "Javascript"],
      img: img3,
      link: "https://subha29042000.github.io/LBS/",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .proj-section {
          position: relative;
          overflow: hidden;
          padding: 5rem 2rem;
          background: #07070f;
        }
        .proj-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          pointer-events: none;
        }
        .proj-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
        }
        .proj-orb-1 {
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(88,28,235,0.15), transparent 70%);
          top: -120px;
          left: -80px;
        }
        .proj-orb-2 {
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(0,212,170,0.1), transparent 70%);
          bottom: -60px;
          right: 5%;
        }
        .proj-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .proj-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(124,58,237,0.85);
          margin-bottom: 1.2rem;
        }
        .proj-label-line {
          width: 28px;
          height: 1px;
          background: linear-gradient(90deg, #7c3aed, transparent);
        }
        .proj-heading {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 0.6rem;
        }
        .proj-heading em {
          font-style: normal;
          background: linear-gradient(100deg, #7c3aed 0%, #06b6d4 55%, #00d4aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .proj-sub {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(255,255,255,0.35);
          margin-bottom: 3rem;
        }
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.4rem;
        }
        .proj-card {
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          background: rgba(255,255,255,0.02);
          overflow: hidden;
          position: relative;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .proj-card:hover {
          border-color: rgba(124,58,237,0.3);
          background: rgba(124,58,237,0.03);
          transform: translateY(-5px);
        }
        .proj-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }
        .proj-card:hover::before {
          opacity: 1;
        }
        .proj-img-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .proj-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease, filter 0.4s ease;
          filter: grayscale(30%);
        }
        .proj-card:hover .proj-img-wrap img {
          transform: scale(1.06);
          filter: grayscale(0%);
        }
        .proj-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(7,7,15,0.9) 100%);
        }
        .proj-number {
          position: absolute;
          top: 14px;
          right: 14px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.5);
          background: rgba(7,7,15,0.7);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 4px 10px;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          z-index: 2;
        }
        .proj-content {
          padding: 1.6rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .proj-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          color: #fff;
          line-height: 1.2;
          transition: color 0.2s ease;
        }
        .proj-card:hover .proj-title {
          color: rgba(167,139,250,0.95);
        }
        .proj-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.38);
        }
        .proj-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 0.2rem;
        }
        .proj-tech {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(6,182,212,0.8);
          border: 1px solid rgba(6,182,212,0.18);
          background: rgba(6,182,212,0.05);
          padding: 4px 10px;
          border-radius: 100px;
          transition: all 0.2s ease;
        }
        .proj-tech:hover {
          background: rgba(6,182,212,0.12);
          border-color: rgba(6,182,212,0.35);
          color: #06b6d4;
        }
        .proj-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-top: auto;
        }
        .proj-link-row {
          padding: 1rem 1.6rem 1.4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .proj-link {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s ease;
        }
        .proj-link:hover {
          color: #fff;
        }
        .proj-link svg {
          transition: transform 0.2s ease;
        }
        .proj-link:hover svg {
          transform: translate(3px, -3px);
        }
        .proj-glow {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #7c3aed;
          filter: blur(40px);
          opacity: 0.06;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .proj-card:hover .proj-glow {
          opacity: 0.18;
        }
        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .proj-grid { grid-template-columns: 1fr; }
          .proj-section { padding: 3rem 1.2rem; }
        }
      `}</style>

      <section id="projects" className="proj-section">
        <div className="proj-orb proj-orb-1" />
        <div className="proj-orb proj-orb-2" />

        <div className="proj-inner">

          <div className="proj-label">
            <span className="proj-label-line" />
            Selected Works
          </div>

          <h2 className="proj-heading">
            Featured <em>Projects</em>
          </h2>
          <p className="proj-sub">
            Real-world applications built with clean code and modern UI.
          </p>

          <div className="proj-grid">
            {projects.map((p, i) => (
              <div key={i} className="proj-card">

                <div className="proj-img-wrap">
                  <img src={p.img} alt={p.title} />
                  <div className="proj-img-overlay" />
                  <span className="proj-number">0{i + 1}</span>
                </div>

                <div className="proj-content">
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-desc">{p.desc}</div>
                  <div className="proj-tech-row">
                    {p.tech.map((t) => (
                      <span key={t} className="proj-tech">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="proj-divider" />

                <div className="proj-link-row">
                  
                   <a href=" href={p.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link">
                    View Project
                    <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                      <path
                        d="M3 11L11 3M11 3H6M11 3v5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                <div className="proj-glow" />

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}