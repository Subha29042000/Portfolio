// import React from "react";
// import resumePDF from "../assets/7m/Subhashree_g_Frontend_Developer.pdf";
// // import profilePic from "../assets/pic.jpeg";

// export default function Hero() {
//   const handleResumeDownload = () => {
//     window.open(resumePDF, '_blank');
//     const link = document.createElement("a");
//     link.href = resumePDF;
//     link.download = "Subhashree_G_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <header className="section-padding flex min-h-screen items-center justify-center pt-20">
//       <div className="grid gap-12 md:grid-cols-2 items-center max-w-7xl mx-auto">

//         {/* LEFT SIDE CONTENT */}
//         <div className="space-y-6 animate-fadeInUp text-center md:text-left">
//           <h2 className="text-xl font-medium text-accent italic">Hi, I am Subhashree G</h2>
//           <h1 className="text-5xl font-extrabold md:text-7xl bg-linear-to-r from-accent to-purple-400 bg-clip-text text-transparent">
//             Frontend Developer
//           </h1>
//           <p className="text-text-dim text-lg max-w-lg mx-auto md:mx-0">
//             Detail-oriented Frontend Developer with 1+ year of experience building responsive,
//             high-performance web applications using React.js and modern UI frameworks.
//           </p>

//           <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
//             <a
//               href="#projects"
//               className="rounded-full bg-accent px-8 py-4 font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
//             >
//               View Projects
//             </a>

//             <button
//               onClick={handleResumeDownload}
//               className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-bold transition-all hover:bg-white hover:text-black cursor-pointer"
//             >
//               Resume <span className="fas fa-download ml-1"></span>
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE IMAGE */}
//         {/* <div className="relative group mx-auto md:ml-auto">
//           <div className="absolute -inset-1 bg-linear-to-r from-accent to-purple-600 rounded-2xl blur-sm opacity-25 group-hover:opacity-50 transition duration-1000"></div>
//           <div className="relative glass-card p-2! overflow-hidden rounded-2xl max-w-100">
//             <img
//               src={profilePic}
//               alt="Subhashree G"
//               className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover"
//             />
//           </div>
//         </div> */}

//       </div>
//     </header>
//   );
// }




















import React, { useEffect, useState } from "react";
import resumePDF from "../assets/7m/Subhashree_g_Frontend_Developer.pdf";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleResumeDownload = () => {
    window.open(resumePDF, '_blank');
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Subhashree_G_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500&display=swap');

        .hero-wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7rem 2rem 4rem;
          position: relative;
          overflow: hidden;
          background: #07070f;
        }

        /* Animated grid */
        .hero-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
          z-index: 0;
        }

        /* Glowing orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: blur(90px);
        }
        .orb-a {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(88, 28, 235, 0.22), transparent 70%);
          top: -200px; left: -200px;
          animation: driftA 10s ease-in-out infinite;
        }
        .orb-b {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(0, 212, 170, 0.14), transparent 70%);
          bottom: -100px; right: 5%;
          animation: driftB 13s ease-in-out infinite;
        }
        @keyframes driftA {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(40px, -60px); }
        }
        @keyframes driftB {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-30px, 40px); }
        }

        /* Inner layout */
        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        /* Status badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px 6px 8px;
          border-radius: 100px;
          border: 1px solid rgba(88,28,235,0.35);
          background: rgba(88,28,235,0.08);
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 2.2rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .hero-badge.in { opacity: 1; transform: translateY(0); }
        .badge-pip {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #00d4aa;
          box-shadow: 0 0 8px #00d4aa;
          animation: pipPulse 2s ease-in-out infinite;
        }
        @keyframes pipPulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.5; }
        }

        /* Greeting */
        .hero-greeting {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.04em;
          margin-bottom: 0.6rem;
          font-style: italic;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s;
        }
        .hero-greeting.in { opacity: 1; transform: translateY(0); }

        /* Main heading */
        .hero-heading {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3.5rem, 9vw, 7.5rem);
          line-height: 0.92;
          letter-spacing: -0.04em;
          margin: 0 0 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s;
        }
        .hero-heading.in { opacity: 1; transform: translateY(0); }

        .word-plain { color: #ffffff; display: block; }
        .word-grad {
          display: block;
          background: linear-gradient(100deg, #7c3aed 0%, #06b6d4 55%, #00d4aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }
        /* Underline accent on grad word */
        .word-grad::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #7c3aed, #00d4aa);
          border-radius: 2px;
          opacity: 0.4;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1s ease 0.9s;
        }
        .hero-heading.in .word-grad::after { transform: scaleX(1); }

        /* Description */
        .hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.4);
          max-width: 520px;
          margin-bottom: 2.8rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }
        .hero-desc.in { opacity: 1; transform: translateY(0); }

        /* Buttons row */
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s;
        }
        .hero-actions.in { opacity: 1; transform: translateY(0); }

        .btn-main {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #6d28d9, #4f46e5);
          padding: 15px 36px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 35px rgba(109,40,217,0.45), inset 0 1px 0 rgba(255,255,255,0.15);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-main::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transition: left 0.5s ease;
        }
        .btn-main:hover::before { left: 150%; }
        .btn-main:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 55px rgba(109,40,217,0.65), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .btn-main:active { transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          background: rgba(255,255,255,0.04);
          padding: 15px 36px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition: all 0.2s ease;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.3);
          color: #fff;
          transform: translateY(-3px);
        }
        .btn-ghost:active { transform: translateY(-1px); }

        /* Bottom stats strip */
        .hero-stats {
          display: flex;
          gap: 2.5rem;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s;
        }
        .hero-stats.in { opacity: 1; transform: translateY(0); }
        .stat-item { display: flex; flex-direction: column; gap: 3px; }
        .stat-val {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.6rem;
          color: #fff;
          line-height: 1;
        }
        .stat-val span { color: #7c3aed; }
        .stat-lbl {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .stat-divider {
          width: 1px;
          background: rgba(255,255,255,0.08);
          align-self: stretch;
        }

        @media (max-width: 640px) {
          .hero-inner { align-items: center; text-align: center; }
          .hero-desc { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-stats { justify-content: center; flex-wrap: wrap; gap: 1.5rem; }
          .stat-divider { display: none; }
        }
      `}</style>

      <header className="hero-wrap">
        <div className="orb orb-a" />
        <div className="orb orb-b" />

        <div className="hero-inner">

          {/* Badge */}
          <div className={`hero-badge ${loaded ? "in" : ""}`}>
            <span className="badge-pip" />
            Available for opportunities
          </div>

          {/* Greeting */}
          <p className={`hero-greeting ${loaded ? "in" : ""}`}>
            Hi, I am Subhashree G
          </p>

          {/* Main heading */}
          <h1 className={`hero-heading ${loaded ? "in" : ""}`}>
            <span className="word-plain">Frontend</span>
            <span className="word-grad">Developer</span>
          </h1>

          {/* Description */}
          <p className={`hero-desc ${loaded ? "in" : ""}`}>
            Detail-oriented Frontend Developer with 1+ year of experience building responsive,
            high-performance web applications using React.js and modern UI frameworks.
          </p>

          {/* Buttons — same functions, new style */}
          <div className={`hero-actions ${loaded ? "in" : ""}`}>
            <a href="#projects" className="btn-main">
              View Projects
              <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <button onClick={handleResumeDownload} className="btn-ghost">
              Resume
              <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                <path d="M7 1v9M3 7l4 4 4-4M2 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Stats strip */}
          <div className={`hero-stats ${loaded ? "in" : ""}`}>
            <div className="stat-item">
              <span className="stat-val">1<span>+</span></span>
              <span className="stat-lbl">Year Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-val">10<span>+</span></span>
              <span className="stat-lbl">Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-val">MCA</span>
              <span className="stat-lbl">Graduate</span>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
