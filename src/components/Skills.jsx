// import React, { useEffect, useState } from "react";

// export default function Skills() {
//   const skillsData = [
//     { name: "React", width: 70 },
//     { name: "JavaScript (ES6+)", width: 75 },
//     { name: "HTML5 & CSS3", width: 90 },
//     { name: "Tailwind / Bootstrap", width: 80 },
//     { name: "MongoDB", width: 60 }
//   ];

//   return (
//     <section id="skills" className="section-padding bg-white/2">
//       <h3 className="text-center text-4xl font-bold italic mb-16">Technical Expertise</h3>
      
//       <div className="max-w-3xl mx-auto space-y-10">
//         {skillsData.map((skill, index) => (
//           <div key={index} className="space-y-3">
//             <div className="flex justify-between font-bold">
//               <span className="text-lg">{skill.name}</span>
//               <span className="text-accent">{skill.width}%</span>
//             </div>
            
//             {/* Progress Bar Container */}
//             <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
//               <div 
//                 className="h-full bg-linear-to-r from-accent to-purple-500 rounded-full transition-all duration-1000 ease-out"
//                 style={{ width: `${skill.width}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }














export default function Skills() {
  const categories = [
    {
      color: "purple", label: "Frontend",
      pills: ["React.js","JavaScript","TypeScript","HTML5","CSS3","Tailwind CSS"],
      glow: "#7c3aed",
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><rect x="1" y="2" width="14" height="10" rx="2" stroke="#a78bfa" strokeWidth="1.3"/><path d="M5 14h6" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round"/></svg>
    },
    {
      color: "cyan", label: "Backend & DB",
      pills: ["Node.js","Express.js","MongoDB","REST APIs","MySQL"],
      glow: "#06b6d4",
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><rect x="1" y="1" width="14" height="14" rx="3" stroke="#06b6d4" strokeWidth="1.3"/><path d="M4 6l3 3-3 3M8 12h4" stroke="#06b6d4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    {
      color: "green", label: "Tools & DevOps",
      pills: ["Git","GitHub","VS Code","Postman","Figma"],
      glow: "#00d4aa",
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M13 8.5V13a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h4.5" stroke="#00d4aa" strokeWidth="1.3" strokeLinecap="round"/><path d="M10 2h4v4M14 2L8 8" stroke="#00d4aa" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    {
      color: "amber", label: "Currently Learning",
      pills: ["Next.js","Redux","Docker","AWS Basics"],
      glow: "#fbbf24",
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.5" stroke="#fbbf24" strokeWidth="1.3"/><path d="M8 5v3.5L10 10" stroke="#fbbf24" strokeWidth="1.3" strokeLinecap="round"/></svg>
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');

        .ts-wrap {
          position: relative; overflow: hidden;
          padding: 5rem 2rem; background: #07070f;
        }
        .ts-wrap::before {
          content: ''; position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          pointer-events: none;
        }
        .ts-orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(90px); }
        .ts-orb-1 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(88,28,235,0.15), transparent 70%); top: -120px; right: -80px; }
        .ts-orb-2 { width: 300px; height: 300px; background: radial-gradient(circle, rgba(0,212,170,0.1), transparent 70%); bottom: -60px; left: 0; }

        .ts-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }

        .ts-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
          letter-spacing: 0.35em; text-transform: uppercase; color: rgba(124,58,237,0.85);
          margin-bottom: 1.2rem;
        }
        .ts-label-line { width: 28px; height: 1px; background: linear-gradient(90deg, #7c3aed, transparent); }

        .ts-heading {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 1rem;
        }
        .ts-heading em {
          font-style: normal;
          background: linear-gradient(100deg, #7c3aed 0%, #06b6d4 55%, #00d4aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ts-sub {
          font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 300;
          color: rgba(255,255,255,0.35); margin-bottom: 3rem;
        }

        .ts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.2rem; }

        .ts-card {
          padding: 1.6rem; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px; background: rgba(255,255,255,0.02);
          position: relative; overflow: hidden;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }
        .ts-card:hover { transform: translateY(-4px); }
        .ts-card.purple:hover { border-color: rgba(124,58,237,0.35); background: rgba(124,58,237,0.05); }
        .ts-card.cyan:hover   { border-color: rgba(6,182,212,0.35);  background: rgba(6,182,212,0.04); }
        .ts-card.green:hover  { border-color: rgba(0,212,170,0.35);  background: rgba(0,212,170,0.04); }
        .ts-card.amber:hover  { border-color: rgba(251,191,36,0.35); background: rgba(251,191,36,0.04); }
        .ts-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          opacity: 0; transition: opacity 0.3s ease;
        }
        .ts-card.purple::before { background: linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent); }
        .ts-card.cyan::before   { background: linear-gradient(90deg, transparent, rgba(6,182,212,0.6), transparent); }
        .ts-card.green::before  { background: linear-gradient(90deg, transparent, rgba(0,212,170,0.6), transparent); }
        .ts-card.amber::before  { background: linear-gradient(90deg, transparent, rgba(251,191,36,0.6), transparent); }
        .ts-card:hover::before  { opacity: 1; }

        .ts-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1.2rem; }
        .ts-icon {
          width: 34px; height: 34px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ts-icon.purple { background: rgba(124,58,237,0.15); }
        .ts-icon.cyan   { background: rgba(6,182,212,0.15); }
        .ts-icon.green  { background: rgba(0,212,170,0.15); }
        .ts-icon.amber  { background: rgba(251,191,36,0.15); }

        .ts-cat-name {
          font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
        }
        .ts-cat-name.purple { color: rgba(124,58,237,0.85); }
        .ts-cat-name.cyan   { color: rgba(6,182,212,0.85); }
        .ts-cat-name.green  { color: rgba(0,212,170,0.85); }
        .ts-cat-name.amber  { color: rgba(251,191,36,0.85); }

        .ts-pills { display: flex; flex-wrap: wrap; gap: 7px; }
        .ts-pill {
          font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500; letter-spacing: 0.06em;
          color: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03); padding: 5px 12px; border-radius: 100px;
          transition: all 0.2s ease; cursor: default; white-space: nowrap;
        }
        .ts-pill:hover { color: #fff; border-color: rgba(255,255,255,0.22); background: rgba(255,255,255,0.07); }

        .ts-glow {
          position: absolute; bottom: -30px; right: -30px; width: 100px; height: 100px;
          border-radius: 50%; filter: blur(35px); opacity: 0.1; pointer-events: none; transition: opacity 0.3s;
        }
        .ts-card:hover .ts-glow { opacity: 0.22; }

        @media (max-width: 560px) {
          .ts-grid { grid-template-columns: 1fr; }
          .ts-wrap { padding: 3rem 1.2rem; }
        }
      `}</style>

      <section id="techstack" className="ts-wrap">
        <div className="ts-orb ts-orb-1" />
        <div className="ts-orb ts-orb-2" />
        <div className="ts-inner">

          <div className="ts-label"><span className="ts-label-line" />What I work with</div>
          <h2 className="ts-heading">Core <em>Tech Stack</em></h2>
          <p className="ts-sub">Technologies I use to build products from idea to deployment.</p>

          <div className="ts-grid">
            {categories.map(({ color, label, pills, glow, icon }) => (
              <div key={label} className={`ts-card ${color}`}>
                <div className="ts-card-header">
                  <div className={`ts-icon ${color}`}>{icon}</div>
                  <span className={`ts-cat-name ${color}`}>{label}</span>
                </div>
                <div className="ts-pills">
                  {pills.map(p => <span key={p} className="ts-pill">{p}</span>)}
                </div>
                <div className="ts-glow" style={{ background: glow }} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}