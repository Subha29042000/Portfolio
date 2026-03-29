import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      date: "2023",
      title: "Master's in UI/UX Design",
      institute: "Adoro Institute of Multimedia",
      skills: ["User Research & Prototyping", "Figma & Web Design", "Photoshop & Illustrator"],
      badge: "Design",
    },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVars = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');

        .cert-section {
          position: relative;
          overflow: hidden;
          padding: 5rem 2rem;
          background: #07070f;
        }
        .cert-section::before {
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

        .cert-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
        }
        .cert-orb-1 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(88,28,235,0.15), transparent 70%);
          top: -120px; right: -80px;
        }
        .cert-orb-2 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(0,212,170,0.1), transparent 70%);
          bottom: -60px; left: 0;
        }

        .cert-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cert-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(124,58,237,0.85);
          margin-bottom: 1.2rem;
        }
        .cert-label-line {
          width: 28px; height: 1px;
          background: linear-gradient(90deg, #7c3aed, transparent);
        }

        .cert-heading {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 1rem;
        }
        .cert-heading em {
          font-style: normal;
          background: linear-gradient(100deg, #7c3aed 0%, #06b6d4 55%, #00d4aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cert-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(255,255,255,0.35);
          margin-bottom: 3rem;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.4rem;
        }

        .cert-card {
          padding: 2rem;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          background: rgba(255,255,255,0.02);
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }
        .cert-card:hover {
          border-color: rgba(124,58,237,0.3);
          background: rgba(124,58,237,0.04);
          transform: translateY(-4px);
        }
        .cert-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cert-card:hover::before { opacity: 1; }

        .cert-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.6rem;
        }

        .cert-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: rgba(124,58,237,0.12);
          border: 1px solid rgba(124,58,237,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }
        .cert-card:hover .cert-icon-wrap {
          background: rgba(124,58,237,0.2);
        }

        .cert-badge {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(124,58,237,0.9);
          background: rgba(124,58,237,0.1);
          border: 1px solid rgba(124,58,237,0.2);
          padding: 4px 12px;
          border-radius: 100px;
        }

        .cert-year {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 0.5rem;
        }

        .cert-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 0.4rem;
          transition: color 0.2s ease;
        }
        .cert-card:hover .cert-title {
          color: rgba(167,139,250,0.95);
        }

        .cert-institute {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 400;
          color: rgba(255,255,255,0.35);
          margin-bottom: 1.4rem;
        }

        .cert-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 1.2rem;
        }

        .cert-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .cert-skill {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          padding: 4px 10px;
          border-radius: 100px;
          transition: all 0.2s ease;
        }
        .cert-skill:hover {
          color: rgba(255,255,255,0.75);
          border-color: rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
        }

        .cert-glow {
          position: absolute;
          bottom: -30px; right: -30px;
          width: 120px; height: 120px;
          border-radius: 50%;
          background: #7c3aed;
          filter: blur(40px);
          opacity: 0.08;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .cert-card:hover .cert-glow { opacity: 0.2; }

        @media (max-width: 560px) {
          .cert-grid { grid-template-columns: 1fr; }
          .cert-section { padding: 3rem 1.2rem; }
        }
      `}</style>

      <section id="certifications" className="cert-section">
        <div className="cert-orb cert-orb-1" />
        <div className="cert-orb cert-orb-2" />

        <div className="cert-inner">

          <div className="cert-label">
            <span className="cert-label-line" />
            Credentials
          </div>

          <h2 className="cert-heading">
            Verified <em>Expertise</em>
          </h2>
          <p className="cert-sub">
            Certified qualifications that back my craft.
          </p>

          <motion.div
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="cert-grid"
          >
            {certs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVars}
                className="cert-card"
              >
                <div className="cert-card-top">
                  <div className="cert-icon-wrap">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path
                        d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 14.27l-4.77 2.44.91-5.32L2.27 7.62l5.34-.78L10 2z"
                        stroke="#a78bfa"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="cert-badge">{item.badge}</span>
                </div>

                <div className="cert-year">{item.date}</div>
                <div className="cert-title">{item.title}</div>
                <div className="cert-institute">{item.institute}</div>

                <div className="cert-divider" />

                <div className="cert-skills">
                  {item.skills.map((skill) => (
                    <span key={skill} className="cert-skill">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="cert-glow" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}