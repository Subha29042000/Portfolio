import React from "react";

export default function About() {
  const stats = [
    { icon: "clock", color: "purple", val: "1+", label: "Years Experience", glow: "#7c3aed" },
    { icon: "monitor", color: "cyan", val: "10+", label: "Projects Built", glow: "#06b6d4" },
    { icon: "shield", color: "green", val: "MCA", label: "Graduate", glow: "#00d4aa" },
    { icon: "user", color: "amber", val: "5+", label: "Happy Clients", glow: "#fbbf24" },
  ];

  const techStack = ["React.js","JavaScript","TypeScript","HTML5","CSS3","Tailwind CSS","Node.js","MongoDB","REST APIs","Git"];
  const tags = ["UI/UX Focused","React Ecosystem","API Integration","MERN Stack"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');

        .abt-wrap {
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
          background: #07070f;
        }
        .abt-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
          pointer-events: none;
        }
        .abt-orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(100px); }
        .abt-orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(88,28,235,0.18), transparent 70%); top: -150px; right: -100px; }
        .abt-orb-2 { width: 350px; height: 350px; background: radial-gradient(circle, rgba(0,212,170,0.12), transparent 70%); bottom: -80px; left: 5%; }

        .abt-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }

        .abt-section-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
          letter-spacing: 0.35em; text-transform: uppercase; color: rgba(124,58,237,0.85);
          margin-bottom: 1.5rem;
        }
        .abt-label-line { width: 32px; height: 1px; background: linear-gradient(90deg, #7c3aed, transparent); }

        .abt-heading {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 1rem;
        }
        .abt-heading em {
          font-style: normal;
          background: linear-gradient(100deg, #7c3aed 0%, #06b6d4 55%, #00d4aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .abt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }

        /* Left */
        .abt-left { display: flex; flex-direction: column; gap: 2rem; }

        .bio-block {
          padding: 2rem;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          background: rgba(255,255,255,0.02);
          position: relative; overflow: hidden;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .bio-block:hover { border-color: rgba(124,58,237,0.3); background: rgba(124,58,237,0.04); }
        .bio-block::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .bio-block:hover::before { opacity: 1; }

        .bio-text { font-family: 'Inter', sans-serif; font-size: 0.95rem; line-height: 1.9; color: rgba(255,255,255,0.5); font-weight: 300; }
        .bio-text + .bio-text { margin-top: 1rem; }
        .bio-hl { color: rgba(167,139,250,0.9); font-weight: 400; }

        .abt-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 1.2rem; }
        .abt-tag {
          font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(6,182,212,0.8); border: 1px solid rgba(6,182,212,0.2);
          background: rgba(6,182,212,0.05); padding: 5px 12px; border-radius: 100px;
          transition: all 0.2s ease;
        }
        .abt-tag:hover { background: rgba(6,182,212,0.12); border-color: rgba(6,182,212,0.4); color: #06b6d4; }

        /* Tech block */
        .tech-block {
          padding: 1.8rem; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; background: rgba(255,255,255,0.02);
        }
        .block-label {
          font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: 0.25em; text-transform: uppercase; color: rgba(255,255,255,0.3);
          margin-bottom: 1rem;
        }
        .tech-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .tech-pill {
          font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500; letter-spacing: 0.08em;
          color: rgba(255,255,255,0.55); border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03); padding: 5px 14px; border-radius: 100px;
          transition: all 0.2s ease; cursor: default;
        }
        .tech-pill:hover { color: #fff; border-color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.07); }

        /* Right */
        .abt-right { display: flex; flex-direction: column; gap: 1.5rem; }

        .stat-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .stat-card {
          padding: 1.6rem 1.4rem; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; background: rgba(255,255,255,0.02);
          position: relative; overflow: hidden; transition: all 0.3s ease; cursor: default;
        }
        .stat-card:hover { border-color: rgba(124,58,237,0.35); background: rgba(124,58,237,0.05); transform: translateY(-3px); }
        .stat-icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
        }
        .stat-icon.purple { background: rgba(124,58,237,0.15); }
        .stat-icon.cyan { background: rgba(6,182,212,0.15); }
        .stat-icon.green { background: rgba(0,212,170,0.15); }
        .stat-icon.amber { background: rgba(251,191,36,0.15); }
        .stat-num {
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 2rem;
          line-height: 1; color: #fff; margin-bottom: 4px;
        }
        .stat-num span { color: #7c3aed; }
        .stat-lbl {
          font-family: 'DM Mono', monospace; font-size: 9px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.3);
        }
        .stat-glow {
          position: absolute; bottom: -20px; right: -20px;
          width: 80px; height: 80px; border-radius: 50%;
          filter: blur(25px); opacity: 0.15; pointer-events: none; transition: opacity 0.3s ease;
        }
        .stat-card:hover .stat-glow { opacity: 0.3; }

        /* Timeline */
        .timeline-block {
          padding: 1.8rem; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; background: rgba(255,255,255,0.02);
        }
        .tl-item { display: flex; gap: 1rem; }
        .tl-item + .tl-item { margin-top: 1.2rem; }
        .tl-dot-col { display: flex; flex-direction: column; align-items: center; }
        .tl-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }
        .tl-dot.active { background: #7c3aed; box-shadow: 0 0 10px rgba(124,58,237,0.6); }
        .tl-dot.past { background: rgba(255,255,255,0.15); }
        .tl-line { width: 1px; flex: 1; background: rgba(255,255,255,0.06); margin-top: 4px; }
        .tl-role { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.88rem; color: #fff; }
        .tl-company { font-family: 'Inter', sans-serif; font-size: 0.78rem; color: rgba(124,58,237,0.8); margin-top: 2px; }
        .tl-period { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.15em; color: rgba(255,255,255,0.25); margin-top: 4px; }

        @media (max-width: 768px) {
          .abt-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>

      <section id="about" className="abt-wrap">
        <div className="abt-orb abt-orb-1" />
        <div className="abt-orb abt-orb-2" />

        <div className="abt-inner">
          <div className="abt-section-label">
            <span className="abt-label-line" />
            Get to know me
          </div>

          <h2 className="abt-heading">About <em>Me</em></h2>

          <div className="abt-grid">

            {/* LEFT */}
            <div className="abt-left">
              <div className="bio-block">
                <p className="bio-text">
                  I'm a <span className="bio-hl">Frontend Developer</span> based in Chennai with 1+ year of experience crafting responsive and user-friendly web applications using <span className="bio-hl">React.js</span>, JavaScript, HTML, and CSS.
                </p>
                <p className="bio-text">
                  I have hands-on experience developing reusable UI components, integrating <span className="bio-hl">RESTful APIs</span>, and supporting MERN stack applications. I focus on translating design ideas into clean, pixel-perfect interfaces.
                </p>
                <p className="bio-text">
                  Passionate about improving user experience, writing efficient code, and continuously learning new technologies to grow as a developer.
                </p>
                <div className="abt-tags">
                  {tags.map(t => <span key={t} className="abt-tag">{t}</span>)}
                </div>
              </div>

              {/* <div className="tech-block">
                <div className="block-label">Core Tech Stack</div>
                <div className="tech-row">
                  {techStack.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div> */}
            </div>

            {/* RIGHT */}
            <div className="abt-right">
              <div className="stat-cards">
                <div className="stat-card">
                  <div className="stat-icon purple">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M8 1v6l4 2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="8" r="6.5" stroke="#a78bfa" strokeWidth="1.2"/></svg>
                  </div>
                  <div className="stat-num">1<span>+</span></div>
                  <div className="stat-lbl">Years Experience</div>
                  <div className="stat-glow" style={{ background: "#7c3aed" }} />
                </div>
                <div className="stat-card">
                  <div className="stat-icon cyan">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><rect x="1" y="2" width="14" height="10" rx="2" stroke="#06b6d4" strokeWidth="1.2"/><path d="M5 14h6" stroke="#06b6d4" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  </div>
                  <div className="stat-num">5<span>+</span></div>
                  <div className="stat-lbl">Projects Built</div>
                  <div className="stat-glow" style={{ background: "#06b6d4" }} />
                </div>
                <div className="stat-card">
                  <div className="stat-icon green">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M8 1L2 5v4c0 3.31 2.69 5.5 6 6 3.31-.5 6-2.69 6-6V5L8 1z" stroke="#00d4aa" strokeWidth="1.2"/></svg>
                  </div>
                  <div className="stat-num">MCA</div>
                  <div className="stat-lbl">Graduate</div>
                  <div className="stat-glow" style={{ background: "#00d4aa" }} />
                </div>
                <div className="stat-card">
                  <div className="stat-icon amber">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="6" r="3.5" stroke="#fbbf24" strokeWidth="1.2"/><path d="M2 14c0-3.31 2.69-5 6-5s6 1.69 6 5" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  </div>
                  <div className="stat-num">5<span>+</span></div>
                  <div className="stat-lbl">Happy Clients</div>
                  <div className="stat-glow" style={{ background: "#fbbf24" }} />
                </div>
              </div>

              {/* <div className="timeline-block">
                <div className="block-label">Experience Timeline</div>
                <div className="tl-item">
                  <div className="tl-dot-col">
                    <div className="tl-dot active" />
                    <div className="tl-line" />
                  </div>
                  <div>
                    <div className="tl-role">Frontend Developer</div>
                    <div className="tl-company">Your Company · Chennai</div>  {/* ← update this *
                    <div className="tl-period">2024 — Present</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot-col">
                    <div className="tl-dot past" />
                  </div>
                  <div>
                    <div className="tl-role">MCA Graduate</div>
                    <div className="tl-company">Master of Computer Applications</div>
                    <div className="tl-period">2022 — 2024</div>
                  </div>
                </div>
              </div> */}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}