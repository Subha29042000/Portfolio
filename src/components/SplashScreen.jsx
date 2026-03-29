import React, { useEffect, useState } from "react";

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState(0);
  // phase 0 = counting/building, phase 1 = name reveal, phase 2 = exit wipe

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1800); // show name
    const t2 = setTimeout(() => setPhase(2), 3200); // start exit
    const t3 = setTimeout(() => onComplete(), 4000); // hand off
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sp-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #04040c;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          overflow: hidden;
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .sp-root.exit {
          opacity: 0;
          transform: scale(1.06);
          pointer-events: none;
        }

        /* ── particle canvas bg ── */
        .sp-canvas {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .sp-particle {
          position: absolute;
          border-radius: 50%;
          animation: particleDrift linear infinite;
          opacity: 0;
        }
        @keyframes particleDrift {
          0%   { transform: translateY(110vh) scale(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-10vh) scale(1.5); opacity: 0; }
        }

        /* ── horizontal scan lines ── */
        .sp-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.015) 2px,
            rgba(255,255,255,0.015) 4px
          );
          pointer-events: none;
        }

        /* ── corner brackets ── */
        .sp-bracket {
          position: absolute;
          width: 50px; height: 50px;
        }
        .sp-bracket::before, .sp-bracket::after {
          content: '';
          position: absolute;
          background: rgba(124,58,237,0.6);
        }
        .sp-bracket::before { width: 2px; height: 100%; }
        .sp-bracket::after  { width: 100%; height: 2px; }
        .sp-bracket.tl { top: 32px; left: 32px; }
        .sp-bracket.tr { top: 32px; right: 32px; transform: scaleX(-1); }
        .sp-bracket.bl { bottom: 32px; left: 32px; transform: scaleY(-1); }
        .sp-bracket.br { bottom: 32px; right: 32px; transform: scale(-1); }
        .sp-bracket {
          animation: bracketIn 0.5s ease forwards;
          opacity: 0;
        }
        @keyframes bracketIn {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }
        .sp-bracket.tl { animation-delay: 0.1s; }
        .sp-bracket.tr { animation-delay: 0.2s; animation-name: bracketInFlipX; }
        .sp-bracket.bl { animation-delay: 0.2s; animation-name: bracketInFlipY; }
        .sp-bracket.br { animation-delay: 0.1s; animation-name: bracketInFlip; }
        @keyframes bracketInFlipX {
          from { opacity: 0; transform: scaleX(-1) scale(0.6); }
          to   { opacity: 1; transform: scaleX(-1) scale(1); }
        }
        @keyframes bracketInFlipY {
          from { opacity: 0; transform: scaleY(-1) scale(0.6); }
          to   { opacity: 1; transform: scaleY(-1) scale(1); }
        }
        @keyframes bracketInFlip {
          from { opacity: 0; transform: scale(-0.6); }
          to   { opacity: 1; transform: scale(-1); }
        }

        /* ── centre content ── */
        .sp-centre {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        /* loading label */
        .sp-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(124,58,237,0.8);
          margin-bottom: 2.2rem;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.3s forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* big ring */
        .sp-ring-wrap {
          position: relative;
          width: 180px; height: 180px;
          margin-bottom: 2.8rem;
        }
        .sp-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid transparent;
        }
        .sp-ring-outer {
          border-color: rgba(124,58,237,0.25);
          animation: spinRing 3s linear infinite;
          border-top-color: #7c3aed;
          border-right-color: rgba(124,58,237,0.4);
        }
        .sp-ring-mid {
          inset: 16px;
          border-color: rgba(6,182,212,0.15);
          animation: spinRing 2s linear infinite reverse;
          border-top-color: #06b6d4;
        }
        .sp-ring-inner {
          inset: 36px;
          border-color: rgba(0,212,170,0.12);
          animation: spinRing 1.5s linear infinite;
          border-top-color: #00d4aa;
        }
        @keyframes spinRing {
          to { transform: rotate(360deg); }
        }

        /* initials in ring */
        .sp-initials {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 2.8rem;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulseGlow 1.5s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%,100% { filter: brightness(1); }
          50%      { filter: brightness(1.4); }
        }

        /* progress bar */
        .sp-bar-wrap {
          width: 260px;
          height: 2px;
          background: rgba(255,255,255,0.06);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 1rem;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.4s forwards;
        }
        .sp-bar-fill {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #7c3aed, #06b6d4, #00d4aa);
          border-radius: 2px;
          animation: fillBar 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
        }
        @keyframes fillBar {
          0%   { width: 0%; }
          60%  { width: 75%; }
          100% { width: 100%; }
        }

        /* percent counter */
        .sp-percent {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.25);
          opacity: 0;
          animation: fadeUp 0.5s ease 0.5s forwards;
        }

        /* ── name reveal (phase 1) ── */
        .sp-name-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
          background: #04040c;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
        }
        .sp-name-overlay.show {
          opacity: 1;
          pointer-events: all;
        }

        .sp-name-line {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 8vw, 6rem);
          letter-spacing: -0.04em;
          line-height: 1;
          color: #fff;
          overflow: hidden;
        }
        .sp-name-line span {
          display: block;
          transform: translateY(110%);
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sp-name-overlay.show .sp-name-line:nth-child(1) span {
          transform: translateY(0);
          transition-delay: 0.05s;
        }
        .sp-name-overlay.show .sp-name-line:nth-child(2) span {
          transform: translateY(0);
          transition-delay: 0.18s;
        }

        .sp-name-sub {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(124,58,237,0.9);
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s;
        }
        .sp-name-overlay.show .sp-name-sub {
          opacity: 1;
          transform: translateY(0);
        }

        /* horizontal wipe lines for name reveal */
        .sp-wipe {
          position: absolute;
          left: 0; right: 0;
          height: 50%;
          background: #7c3aed;
          transform: scaleX(0);
          transform-origin: left;
          z-index: 4;
        }
        .sp-wipe.top { top: 0; }
        .sp-wipe.bot { bottom: 0; }
        .sp-name-overlay.show .sp-wipe {
          animation: wipeIn 0.4s cubic-bezier(0.7,0,0.3,1) forwards,
                     wipeOut 0.4s cubic-bezier(0.7,0,0.3,1) 0.4s forwards;
        }
        @keyframes wipeIn  { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes wipeOut { from { transform: scaleX(1) translateX(0); } to { transform: scaleX(1) translateX(100%); } }

        /* ── enter text ── */
        .sp-enter {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          position: absolute;
          bottom: 48px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          animation: blinkEnter 1.2s ease-in-out infinite 2s;
        }
        @keyframes blinkEnter {
          0%,100% { opacity: 0.2; }
          50%      { opacity: 0.7; }
        }
      `}</style>

      {/* Animated particles */}
      <div className="sp-root" style={{ opacity: phase === 2 ? 0 : 1, transform: phase === 2 ? 'scale(1.06)' : 'scale(1)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
        <div className="sp-scanlines" />

        {/* Floating particles */}
        <div className="sp-canvas">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="sp-particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: ['#7c3aed','#06b6d4','#00d4aa','#a78bfa'][i % 4],
                animationDuration: `${4 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Corner brackets */}
        <div className="sp-bracket tl" />
        <div className="sp-bracket tr" />
        <div className="sp-bracket bl" />
        <div className="sp-bracket br" />

        {/* Phase 0: loading spinner */}
        <div className="sp-centre" style={{ opacity: phase >= 1 ? 0 : 1, transition: 'opacity 0.4s ease', position: 'relative', zIndex: 2 }}>
          <div className="sp-label">Initializing Portfolio</div>
          <div className="sp-ring-wrap">
            <div className="sp-ring sp-ring-outer" />
            <div className="sp-ring sp-ring-mid" />
            <div className="sp-ring sp-ring-inner" />
            <div className="sp-initials">SG</div>
          </div>
          <div className="sp-bar-wrap">
            <div className="sp-bar-fill" />
          </div>
          <div className="sp-percent">Loading...</div>
        </div>

        {/* Phase 1: name reveal */}
        <div className={`sp-name-overlay ${phase >= 1 ? 'show' : ''}`}>
          <div className="sp-wipe top" />
          <div className="sp-wipe bot" />
          <div className="sp-name-line"><span>Subhashree</span></div>
          <div className="sp-name-line" style={{ background: 'linear-gradient(100deg,#7c3aed,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            <span>Govindaraju</span>
          </div>
          <div className="sp-name-sub">Frontend Developer</div>
        </div>

        <div className="sp-enter">Enter Portfolio</div>
      </div>
    </>
  );
}
