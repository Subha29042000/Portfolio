// // export default function Experience() {
// //   return (
// //     <section id="experience" className="section-padding">
// //       <h3 className="mb-16 text-center text-4xl font-bold">Work History</h3>
// //       <div className="mx-auto max-w-4xl space-y-8">
// //         <div className="glass-card p-4! md:p-8!">
// //           <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
// //             <h4 className="text-2xl font-bold text-accent">Associate Frontend Developer</h4>
// //             <span className="text-sm font-mono text-text-dim">Jan 2024 — July 2024</span>
// //           </div>
// //           <p className="mt-2 text-xl font-semibold">Cloute Technologies Pvt. Ltd.</p>
// //           <ul className="mt-6 space-y-3 text-text-dim">
// //             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i> Developed responsive SPAs using React.js.</li>
// //             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i> Integrated complex REST APIs for real-time data flow.</li>
// //             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i> Collaborated with UI designers to implement pixel-perfect Figma designs.</li>
// //           </ul>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }














// export default function Experience() {
//   return (
//     <section id="experience" className="section-padding">
//       <h3 className="mb-16 text-center text-4xl font-bold">
//         Work History
//       </h3>

//       <div className="mx-auto max-w-4xl space-y-8">

//         {/* RR IT Solutions */}
//         <div className="glass-card p-4 md:p-8">
//           <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
//             <h4 className="text-2xl font-bold text-accent">
//               Frontend Developer
//             </h4>
//             <span className="text-sm font-mono text-text-dim">
//               March 2025 — Present
//             </span>
//           </div>

//           <p className="mt-2 text-xl font-semibold">
//             RR IT Solutions, Chennai
//           </p>

//           <ul className="mt-6 space-y-3 text-text-dim">
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Develop responsive web interfaces using React.js and JavaScript (ES6+) for enterprise CRM applications.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Build reusable and modular UI components to maintain consistency and improve development efficiency.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Implement real-time dashboards to monitor leads, customer records, and sales performance.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Optimize frontend code and component structure for fast loading and performance.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Convert UX wireframes into functional and interactive UI components.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Create responsive layouts using CSS3, Flexbox, and Grid.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Maintain consistent layout, spacing, and typography based on design guidelines.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Improve performance by reducing unnecessary rendering.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Test UI across browsers and devices for compatibility.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Integrate REST APIs to display dynamic CRM data.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Use Git & GitHub for version control and collaboration.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Participate in Agile sprints and code reviews.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Work with backend developers and designers for feature implementation.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Debug and fix UI issues during development and testing.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Maintain clean, scalable, and maintainable code structure.</li>
//           </ul>
//         </div>

//         {/* Cloute Technologies */}
//         <div className="glass-card p-4 md:p-8">
//           <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
//             <h4 className="text-2xl font-bold text-accent">
//               Associate Frontend Developer
//             </h4>
//             <span className="text-sm font-mono text-text-dim">
//               Jan 2024 — July 2024
//             </span>
//           </div>

//           <p className="mt-2 text-xl font-semibold">
//             Cloute Technologies Pvt. Ltd., Chennai
//           </p>

//           <ul className="mt-6 space-y-3 text-text-dim">
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Developed responsive UI components using React.js, JavaScript (ES6+), and Tailwind CSS.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Built reusable components for HRMS and NGO platforms.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Delivered UI modules for HRMS dashboard improving navigation usability.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Implemented UI from wireframes ensuring consistent layout.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Created responsive interfaces for all device sizes.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Improved performance and achieved better Lighthouse scores.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Used Git & GitHub and worked in Agile teams.</li>
//             <li className="flex gap-3"><i className="fas fa-check text-accent mt-1"></i>Integrated REST APIs and fixed UI bugs during testing.</li>
//           </ul>
//         </div>

//       </div>
//     </section>
//   );
// }





export default function Experience() {
  const items = [
    {
      period: { from: "", to: "2024" },
      dot: "active",
      card: "work",
      badge: "Full-time",
      role: "Frontend Developer",
      company: "Your Company Name · Chennai, Tamil Nadu", // ← update
      desc: "Building responsive, high-performance web applications using React.js and modern UI frameworks. Developing reusable UI components, integrating RESTful APIs, and collaborating on MERN stack projects.",
      tags: ["React.js","JavaScript","Tailwind CSS","Bootstrap","REST APIs"],
    },
    {
      period: { from: "2024", to: "" },
      dot: "past",
      card: "work",
      badge: "Internship",
      role: "Frontend Intern",
      company: "Company / Project · Chennai", // ← update or remove
      desc: "Worked on frontend features, component design, and UI bug fixes. Gained hands-on experience with React.js and CSS frameworks in a collaborative team environment.",
      tags: ["HTML5","CSS3","Javascript"],
    },
    {
      period: { from: "2022", to: "2024" },
      dot: "edu",
      card: "edu",
      badge: "MCA",
      role: "Master of Computer Applications",
      company: "Your College Name · Tamil Nadu", // ← update
      desc: "Specialized in software development, data structures, algorithms, and full-stack web technologies.",
      tags: ["Data Structures","Web Dev","DBMS","Software Engg"],
    },
    {
      period: { from: "2019", to: "2022" },
      dot: "edu",
      card: "edu",
      badge: "BCA / B.Sc",
      role: "Bachelor of Computer Science",
      company: "Your College Name · Tamil Nadu", // ← update
      desc: "Foundation in programming, computer science principles, and problem-solving. Developed interest in web development and UI design.",
      tags: ["C / C++","Python","HTML & CSS","MySQL"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');

        .et-wrap {
          position: relative; overflow: hidden;
          padding: 5rem 2rem; background: #07070f;
        }
        .et-wrap::before {
          content: ''; position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          pointer-events: none;
        }
        .et-orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(90px); }
        .et-orb-1 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(88,28,235,0.16), transparent 70%); top: -120px; left: -80px; }
        .et-orb-2 { width: 280px; height: 280px; background: radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%); bottom: -60px; right: 5%; }

        .et-inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 1; }

        .et-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
          letter-spacing: 0.35em; text-transform: uppercase; color: rgba(124,58,237,0.85);
          margin-bottom: 1.2rem;
        }
        .et-label-line { width: 28px; height: 1px; background: linear-gradient(90deg, #7c3aed, transparent); }
        .et-heading {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 1rem;
        }
        .et-heading em {
          font-style: normal;
          background: linear-gradient(100deg, #7c3aed 0%, #06b6d4 55%, #00d4aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .et-sub {
          font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 300;
          color: rgba(255,255,255,0.35); margin-bottom: 3rem;
        }

        .et-timeline { display: flex; flex-direction: column; }

        .et-item {
          display: grid;
          grid-template-columns: 120px 40px 1fr;
          gap: 0 1.2rem;
          align-items: stretch;
        }

        .et-date {
          text-align: right; padding-top: 1.8rem;
          font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.25); line-height: 1.4;
        }
        .et-date strong { display: block; font-size: 11px; color: rgba(255,255,255,0.45); }

        .et-spine { display: flex; flex-direction: column; align-items: center; }
        .et-dot-wrap {
          width: 40px; height: 40px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          margin-top: 1.4rem; position: relative; z-index: 2;
        }
        .et-dot { width: 12px; height: 12px; border-radius: 50%; }
        .et-dot.active {
          background: #7c3aed;
          box-shadow: 0 0 0 3px rgba(124,58,237,0.2), 0 0 14px rgba(124,58,237,0.5);
        }
        .et-dot.active::after {
          content: ''; position: absolute; inset: -4px; border-radius: 50%;
          border: 1px solid rgba(124,58,237,0.4);
          animation: ripple 2s ease-in-out infinite;
        }
        @keyframes ripple {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.5); opacity: 0; }
        }
        .et-dot.edu { background: #06b6d4; box-shadow: 0 0 0 3px rgba(6,182,212,0.15), 0 0 12px rgba(6,182,212,0.35); }
        .et-dot.past { background: rgba(255,255,255,0.2); }
        .et-line { width: 1px; flex: 1; background: rgba(255,255,255,0.07); }
        .et-item:last-child .et-line { display: none; }

        .et-card {
          margin: 0.8rem 0 1.8rem;
          padding: 1.6rem 1.8rem;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px; background: rgba(255,255,255,0.02);
          position: relative; overflow: hidden; transition: all 0.3s ease;
        }
        .et-card:hover { transform: translateX(6px); }
        .et-card.work:hover { border-color: rgba(124,58,237,0.25); background: rgba(124,58,237,0.04); }
        .et-card.edu:hover  { border-color: rgba(6,182,212,0.25);  background: rgba(6,182,212,0.04); }
        .et-card::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; border-radius: 2px;
        }
        .et-card.work::before { background: linear-gradient(to bottom, #7c3aed, rgba(124,58,237,0.1)); }
        .et-card.edu::before  { background: linear-gradient(to bottom, #06b6d4, rgba(6,182,212,0.1)); }

        .et-card-top {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 1rem; flex-wrap: wrap; margin-bottom: 0.8rem;
        }
        .et-badge {
          font-family: 'DM Mono', monospace; font-size: 9px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 100px; flex-shrink: 0; margin-top: 2px;
        }
        .et-badge.work { color: rgba(124,58,237,0.9); background: rgba(124,58,237,0.1); border: 1px solid rgba(124,58,237,0.2); }
        .et-badge.edu  { color: rgba(6,182,212,0.9);  background: rgba(6,182,212,0.1);  border: 1px solid rgba(6,182,212,0.2); }

        .et-role { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.05rem; color: #fff; line-height: 1.2; }
        .et-company { font-family: 'Inter', sans-serif; font-size: 0.82rem; color: rgba(255,255,255,0.4); font-weight: 300; margin-top: 3px; }
        .et-desc { font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 300; line-height: 1.7; color: rgba(255,255,255,0.38); margin-top: 0.8rem; }

        .et-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 1rem; }
        .et-tag {
          font-family: 'DM Mono', monospace; font-size: 9px; font-weight: 500; letter-spacing: 0.08em;
          color: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03); padding: 3px 10px; border-radius: 100px;
        }

        @media (max-width: 600px) {
          .et-item { grid-template-columns: 24px 1fr; }
          .et-date { display: none; }
          .et-spine { grid-column: 1; grid-row: 1 / 3; }
          .et-card { grid-column: 2; margin: 0.5rem 0 1.4rem; }
          .et-dot-wrap { margin-top: 1.2rem; width: 24px; }
          .et-wrap { padding: 3rem 1.2rem; }
        }
      `}</style>

      <section id="experience" className="et-wrap">
        <div className="et-orb et-orb-1" />
        <div className="et-orb et-orb-2" />
        <div className="et-inner">

          <div className="et-label"><span className="et-label-line" />My Journey</div>
          <h2 className="et-heading">Experience <em>Timeline</em></h2>
          <p className="et-sub">From education to building real-world products.</p>

          <div className="et-timeline">
            {items.map((item, i) => (
              <div key={i} className="et-item">
                <div className="et-date">
                  <strong>{item.period.from}</strong>{item.period.to}
                </div>
                <div className="et-spine">
                  <div className="et-dot-wrap">
                    <div className={`et-dot ${item.dot}`} />
                  </div>
                  <div className="et-line" />
                </div>
                <div className={`et-card ${item.card}`}>
                  <div className="et-card-top">
                    <div>
                      <div className="et-role">{item.role}</div>
                      <div className="et-company">{item.company}</div>
                    </div>
                    <span className={`et-badge ${item.card}`}>{item.badge}</span>
                  </div>
                  <p className="et-desc">{item.desc}</p>
                  <div className="et-tags">
                    {item.tags.map(t => <span key={t} className="et-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}