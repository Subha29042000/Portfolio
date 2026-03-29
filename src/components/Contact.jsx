// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// export default function Contact() {
//   const form = useRef();
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs.sendForm('subha_2000', 'template_39rn3oo', form.current, '0Zv8ie3WDLtm1URuN')
//       .then(() => {
//         setStatus("Message sent successfully!");
//         form.current.reset();
//       }, () => {
//         setStatus("Failed to send. Please try again.");
//       });
//   };

//   return (
//     <section id="contact" className="section-padding">
//       <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
//         <div className="space-y-8 text-center md:text-left">
//           <h3 className="text-5xl font-bold italic">Let's <span className="text-accent">Connect</span></h3>
//           <p className="text-text-dim text-lg">Have a project in mind or just want to say hi? Feel free to reach out.</p>
//           <div className="space-y-4">
//              <div className="flex items-center gap-4 justify-center md:justify-start">
//                <i className="fas fa-envelope text-accent"></i>
//                <span>subhashree2439r@gmail.com</span>
//              </div>
//           </div>
//         </div>
//         <form ref={form} onSubmit={sendEmail} className="glass-card space-y-4">
//           <input type="text" name="name" placeholder="Name" required className="w-full rounded-xl bg-white/5 p-4 outline-none focus:ring-2 ring-accent/50" />
//           <input type="email" name="email" placeholder="Email" required className="w-full rounded-xl bg-white/5 p-4 outline-none focus:ring-2 ring-accent/50" />
//           <textarea name="message" rows="5" placeholder="Message" required className="w-full rounded-xl bg-white/5 p-4 outline-none focus:ring-2 ring-accent/50"></textarea>
//           <button type="submit" className="w-full rounded-xl bg-accent py-4 font-bold text-white transition-transform hover:scale-95">Send Message</button>
//           {status && <p className="mt-4 text-center text-accent">{status}</p>}
//         </form>
//       </div>
//     </section>
//   );
// }














// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// export default function Contact() {
//   const form = useRef();
//   const [status, setStatus] = useState("");
//   const [sending, setSending] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setSending(true);
//     emailjs.sendForm('subha_2000', 'template_39rn3oo', form.current, '0Zv8ie3WDLtm1URuN')
//       .then(() => {
//         setStatus("success");
//         form.current.reset();
//         setSending(false);
//       }, () => {
//         setStatus("error");
//         setSending(false);
//       });
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

//         .contact-section {
//           position: relative;
//           overflow: hidden;
//           padding: 5rem 2rem;
//           background: #07070f;
//         }
//         .contact-section::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image:
//             linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
//           background-size: 72px 72px;
//           mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
//           pointer-events: none;
//         }

//         .contact-orb {
//           position: absolute;
//           border-radius: 50%;
//           pointer-events: none;
//           filter: blur(90px);
//         }
//         .contact-orb-1 {
//           width: 450px; height: 450px;
//           background: radial-gradient(circle, rgba(88,28,235,0.16), transparent 70%);
//           top: -100px; left: -100px;
//         }
//         .contact-orb-2 {
//           width: 300px; height: 300px;
//           background: radial-gradient(circle, rgba(0,212,170,0.1), transparent 70%);
//           bottom: -60px; right: 5%;
//         }

//         .contact-inner {
//           max-width: 1100px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 1;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 4rem;
//           align-items: start;
//         }

//         /* ── Left col ── */
//         .contact-label {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 11px;
//           font-weight: 600;
//           letter-spacing: 0.35em;
//           text-transform: uppercase;
//           color: rgba(124,58,237,0.85);
//           margin-bottom: 1.2rem;
//         }
//         .contact-label-line {
//           width: 28px; height: 1px;
//           background: linear-gradient(90deg, #7c3aed, transparent);
//         }

//         .contact-heading {
//           font-family: 'Outfit', sans-serif;
//           font-weight: 800;
//           font-size: clamp(2rem, 5vw, 3.5rem);
//           line-height: 0.95;
//           letter-spacing: -0.03em;
//           color: #fff;
//           margin-bottom: 1rem;
//         }
//         .contact-heading em {
//           font-style: normal;
//           background: linear-gradient(100deg, #7c3aed 0%, #06b6d4 55%, #00d4aa 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .contact-desc {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 0.92rem;
//           font-weight: 300;
//           line-height: 1.8;
//           color: rgba(255,255,255,0.38);
//           margin-bottom: 2.5rem;
//           max-width: 380px;
//         }

//         .contact-info-list {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }

//         .contact-info-item {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           padding: 1rem 1.2rem;
//           border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 14px;
//           background: rgba(255,255,255,0.02);
//           transition: border-color 0.3s ease, background 0.3s ease;
//           text-decoration: none;
//         }
//         .contact-info-item:hover {
//           border-color: rgba(124,58,237,0.3);
//           background: rgba(124,58,237,0.04);
//         }

//         .contact-info-icon {
//           width: 38px; height: 38px;
//           border-radius: 10px;
//           background: rgba(124,58,237,0.12);
//           border: 1px solid rgba(124,58,237,0.2);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//         }

//         .contact-info-text {
//           display: flex;
//           flex-direction: column;
//           gap: 2px;
//         }
//         .contact-info-label {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 9px;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.25);
//         }
//         .contact-info-value {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 0.85rem;
//           font-weight: 500;
//           color: rgba(255,255,255,0.7);
//         }

//         /* ── Right col — Form ── */
//         .contact-form-wrap {
//           padding: 2rem;
//           border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 20px;
//           background: rgba(255,255,255,0.02);
//           position: relative;
//           overflow: hidden;
//         }
//         .contact-form-wrap::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent);
//         }

//         .contact-form-title {
//           font-family: 'Outfit', sans-serif;
//           font-weight: 800;
//           font-size: 1.1rem;
//           color: #fff;
//           margin-bottom: 1.6rem;
//         }

//         .contact-form {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }

//         .contact-field {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }

//         .contact-field-label {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 10px;
//           font-weight: 600;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.3);
//         }

//         .contact-input {
//           width: 100%;
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 12px;
//           padding: 12px 16px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 0.88rem;
//           font-weight: 400;
//           color: #fff;
//           outline: none;
//           transition: border-color 0.2s ease, background 0.2s ease;
//           box-sizing: border-box;
//         }
//         .contact-input::placeholder {
//           color: rgba(255,255,255,0.2);
//         }
//         .contact-input:focus {
//           border-color: rgba(124,58,237,0.5);
//           background: rgba(124,58,237,0.04);
//         }

//         textarea.contact-input {
//           resize: vertical;
//           min-height: 120px;
//         }

//         .contact-submit {
//           width: 100%;
//           padding: 14px;
//           border-radius: 12px;
//           border: none;
//           background: linear-gradient(135deg, #6d28d9, #4f46e5);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: #fff;
//           cursor: pointer;
//           position: relative;
//           overflow: hidden;
//           transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
//           box-shadow: 0 0 30px rgba(109,40,217,0.4);
//           margin-top: 0.4rem;
//         }
//         .contact-submit::before {
//           content: '';
//           position: absolute;
//           top: 0; left: -100%;
//           width: 60%; height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
//           transition: left 0.5s ease;
//         }
//         .contact-submit:hover::before { left: 150%; }
//         .contact-submit:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 0 45px rgba(109,40,217,0.6);
//         }
//         .contact-submit:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//           transform: none;
//         }

//         .contact-status {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 12px 16px;
//           border-radius: 12px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 0.82rem;
//           font-weight: 500;
//           margin-top: 0.4rem;
//         }
//         .contact-status.success {
//           background: rgba(0,212,170,0.08);
//           border: 1px solid rgba(0,212,170,0.2);
//           color: #00d4aa;
//         }
//         .contact-status.error {
//           background: rgba(239,68,68,0.08);
//           border: 1px solid rgba(239,68,68,0.2);
//           color: #f87171;
//         }

//         .contact-glow {
//           position: absolute;
//           bottom: -40px; right: -40px;
//           width: 140px; height: 140px;
//           border-radius: 50%;
//           background: #7c3aed;
//           filter: blur(50px);
//           opacity: 0.07;
//           pointer-events: none;
//         }

//         @media (max-width: 768px) {
//           .contact-inner {
//             grid-template-columns: 1fr;
//             gap: 2.5rem;
//           }
//           .contact-desc { max-width: 100%; }
//           .contact-section { padding: 3rem 1.2rem; }
//         }
//       `}</style>

//       <section id="contact" className="contact-section">
//         <div className="contact-orb contact-orb-1" />
//         <div className="contact-orb contact-orb-2" />

//         <div className="contact-inner">

//           {/* ── Left ── */}
//           <div>
//             <div className="contact-label">
//               <span className="contact-label-line" />
//               Get In Touch
//             </div>

//             <h2 className="contact-heading">
//               Let's <em>Connect</em>
//             </h2>

//             <p className="contact-desc">
//               Have a project in mind or just want to say hi? Feel free to reach out — I'm always open to new opportunities.
//             </p>

//             <div className="contact-info-list">
//               <a href="mailto:subhashree2439r@gmail.com" className="contact-info-item">
//                 <div className="contact-info-icon">
//                   <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
//                     <rect x="1" y="3" width="14" height="10" rx="2" stroke="#a78bfa" strokeWidth="1.3"/>
//                     <path d="M1 5l7 5 7-5" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round"/>
//                   </svg>
//                 </div>
//                 <div className="contact-info-text">
//                   <span className="contact-info-label">Email</span>
//                   <span className="contact-info-value">subhashree2439r@gmail.com</span>
//                 </div>
//               </a>

//               <a href="www.linkedin.com/in/subhashree-govindaraju-a5862b389" target="_blank" rel="noopener noreferrer" className="contact-info-item">
//                 <div className="contact-info-icon">
//                   <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
//                     <rect x="1" y="1" width="14" height="14" rx="3" stroke="#a78bfa" strokeWidth="1.3"/>
//                     <path d="M4 6.5V12M4 4.5v.01M7 12V9c0-1.1.9-2 2-2s2 .9 2 2v3M7 6.5V12" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round"/>
//                   </svg>
//                 </div>
//                 <div className="contact-info-text">
//                   <span className="contact-info-label">LinkedIn</span>
//                   <span className="contact-info-value">linkedin</span>
//                 </div>
//               </a>

//               <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-info-item">
//                 <div className="contact-info-icon">
//                   <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
//                     <path d="M8 1C4.13 1 1 4.13 1 8c0 3.09 2.01 5.71 4.79 6.63.35.06.48-.15.48-.34v-1.2c-1.94.42-2.35-.94-2.35-.94-.32-.81-.78-1.02-.78-1.02-.63-.43.05-.42.05-.42.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76.44-.93-1.55-.18-3.18-.78-3.18-3.46 0-.76.27-1.39.72-1.88-.07-.18-.31-.89.07-1.86 0 0 .59-.19 1.92.72A6.67 6.67 0 018 4.87c.59 0 1.19.08 1.75.23 1.33-.9 1.92-.72 1.92-.72.38.97.14 1.68.07 1.86.45.49.72 1.12.72 1.88 0 2.69-1.64 3.28-3.2 3.45.25.22.48.65.48 1.31v1.94c0 .19.13.41.48.34A7.002 7.002 0 0015 8c0-3.87-3.13-7-7-7z" stroke="#a78bfa" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <div className="contact-info-text">
//                   <span className="contact-info-label">GitHub</span>
//                   <span className="contact-info-value">github.com/yourusername</span>
//                 </div>
//               </a>
//             </div>
//           </div>

//           {/* ── Right — Form ── */}
//           <div className="contact-form-wrap">
//             <div className="contact-form-title">Send a Message</div>

//             <form ref={form} onSubmit={sendEmail} className="contact-form">

//               <div className="contact-field">
//                 <label className="contact-field-label">Your Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Subhashree G"
//                   required
//                   className="contact-input"
//                 />
//               </div>

//               <div className="contact-field">
//                 <label className="contact-field-label">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="hello@example.com"
//                   required
//                   className="contact-input"
//                 />
//               </div>

//               <div className="contact-field">
//                 <label className="contact-field-label">Message</label>
//                 <textarea
//                   name="message"
//                   placeholder="Tell me about your project..."
//                   required
//                   className="contact-input"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={sending}
//                 className="contact-submit"
//               >
//                 {sending ? "Sending..." : "Send Message"}
//               </button>

//               {status === "success" && (
//                 <div className="contact-status success">
//                   <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
//                     <circle cx="7" cy="7" r="6" stroke="#00d4aa" strokeWidth="1.3"/>
//                     <path d="M4 7l2 2 4-4" stroke="#00d4aa" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                   Message sent successfully!
//                 </div>
//               )}

//               {status === "error" && (
//                 <div className="contact-status error">
//                   <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
//                     <circle cx="7" cy="7" r="6" stroke="#f87171" strokeWidth="1.3"/>
//                     <path d="M7 4v3M7 9.5v.01" stroke="#f87171" strokeWidth="1.3" strokeLinecap="round"/>
//                   </svg>
//                   Failed to send. Please try again.
//                 </div>
//               )}

//             </form>

//             <div className="contact-glow" />
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }
















































////333333333333333

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm('subha_2000', 'template_39rn3oo', form.current, '0Zv8ie3WDLtm1URuN')
      .then(() => {
        setStatus("success");
        form.current.reset();
        setSending(false);
      }, () => {
        setStatus("error");
        setSending(false);
      });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .contact-section {
          position: relative;
          overflow: hidden;
          padding: 5rem 2rem;
          background: #07070f;
        }
        .contact-section::before {
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
        .contact-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
        }
        .contact-orb-1 {
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(88,28,235,0.16), transparent 70%);
          top: -100px; left: -100px;
        }
        .contact-orb-2 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(0,212,170,0.1), transparent 70%);
          bottom: -60px; right: 5%;
        }
        .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-label {
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
        .contact-label-line {
          width: 28px; height: 1px;
          background: linear-gradient(90deg, #7c3aed, transparent);
        }
        .contact-heading {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 1rem;
        }
        .contact-heading em {
          font-style: normal;
          background: linear-gradient(100deg, #7c3aed 0%, #06b6d4 55%, #00d4aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.38);
          margin-bottom: 2.5rem;
          max-width: 380px;
        }
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 1rem 1.2rem;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          background: rgba(255,255,255,0.02);
          transition: border-color 0.3s ease, background 0.3s ease;
          text-decoration: none;
          cursor: pointer;
        }
        .contact-info-item:hover {
          border-color: rgba(124,58,237,0.3);
          background: rgba(124,58,237,0.04);
        }
        .contact-info-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: rgba(124,58,237,0.12);
          border: 1px solid rgba(124,58,237,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-info-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .contact-info-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
        .contact-info-value {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .contact-form-wrap {
          padding: 2rem;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          background: rgba(255,255,255,0.02);
          position: relative;
          overflow: hidden;
        }
        .contact-form-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent);
        }
        .contact-form-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 1.6rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .contact-field-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .contact-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 12px 16px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 400;
          color: #fff;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
          box-sizing: border-box;
        }
        .contact-input::placeholder { color: rgba(255,255,255,0.2); }
        .contact-input:focus {
          border-color: rgba(124,58,237,0.5);
          background: rgba(124,58,237,0.04);
        }
        textarea.contact-input {
          resize: vertical;
          min-height: 120px;
        }
        .contact-submit {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #6d28d9, #4f46e5);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #fff;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          box-shadow: 0 0 30px rgba(109,40,217,0.4);
          margin-top: 0.4rem;
        }
        .contact-submit::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transition: left 0.5s ease;
        }
        .contact-submit:hover::before { left: 150%; }
        .contact-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 45px rgba(109,40,217,0.6);
        }
        .contact-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        .contact-status {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 12px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          margin-top: 0.4rem;
        }
        .contact-status.success {
          background: rgba(0,212,170,0.08);
          border: 1px solid rgba(0,212,170,0.2);
          color: #00d4aa;
        }
        .contact-status.error {
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2);
          color: #f87171;
        }
        .contact-glow {
          position: absolute;
          bottom: -40px; right: -40px;
          width: 140px; height: 140px;
          border-radius: 50%;
          background: #7c3aed;
          filter: blur(50px);
          opacity: 0.07;
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .contact-desc { max-width: 100%; }
          .contact-section { padding: 3rem 1.2rem; }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-orb contact-orb-1" />
        <div className="contact-orb contact-orb-2" />

        <div className="contact-inner">

          {/* ── Left ── */}
          <div>
            <div className="contact-label">
              <span className="contact-label-line" />
              Get In Touch
            </div>

            <h2 className="contact-heading">
              Let's <em>Connect</em>
            </h2>

            <p className="contact-desc">
              Have a project in mind or just want to say hi? Feel free to reach out — I'm always open to new opportunities.
            </p>

            <div className="contact-info-list">

              {/* Email */}
              
                <a href="mailto:subhashree2439r@gmail.com"
                className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="#a78bfa" strokeWidth="1.3"/>
                    <path d="M1 5l7 5 7-5" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">subhashree2439r@gmail.com</span>
                </div>
              </a>

              {/* LinkedIn */}
              
                <a href="https://www.linkedin.com/in/subhashree-govindaraju-a5862b389"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <rect x="1" y="1" width="14" height="14" rx="3" stroke="#a78bfa" strokeWidth="1.3"/>
                    <path d="M4 6.5V12M4 4.5v.01M7 12V9c0-1.1.9-2 2-2s2 .9 2 2v3M7 6.5V12" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">LinkedIn</span>
                  <span className="contact-info-value">subhashree-govindaraju</span>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Subha29042000"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item">
                
                <div className="contact-info-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path d="M8 1C4.13 1 1 4.13 1 8c0 3.09 2.01 5.71 4.79 6.63.35.06.48-.15.48-.34v-1.2c-1.94.42-2.35-.94-2.35-.94-.32-.81-.78-1.02-.78-1.02-.63-.43.05-.42.05-.42.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76.44-.93-1.55-.18-3.18-.78-3.18-3.46 0-.76.27-1.39.72-1.88-.07-.18-.31-.89.07-1.86 0 0 .59-.19 1.92.72A6.67 6.67 0 018 4.87c.59 0 1.19.08 1.75.23 1.33-.9 1.92-.72 1.92-.72.38.97.14 1.68.07 1.86.45.49.72 1.12.72 1.88 0 2.69-1.64 3.28-3.2 3.45.25.22.48.65.48 1.31v1.94c0 .19.13.41.48.34A7.002 7.002 0 0015 8c0-3.87-3.13-7-7-7z" fill="#a78bfa"/>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">GitHub</span>
                  <span className="contact-info-value">Subhashree-Govindaraju</span>
                </div>
              </a>

            </div>
          </div>

          {/* ── Right — Form ── */}
          <div className="contact-form-wrap">
            <div className="contact-form-title">Send a Message</div>

            <form ref={form} onSubmit={sendEmail} className="contact-form">

              <div className="contact-field">
                <label className="contact-field-label">Who’s reaching out?</label>
                <input
                  type="text"
                  name="name"
                  placeholder="May I know your name?"
                  required
                  className="contact-input"
                />
              </div>

              <div className="contact-field">
                <label className="contact-field-label">How can I get back to you?</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Where can I reach you?"
                  required
                  className="contact-input"
                />
              </div>

              <div className="contact-field">
                <label className="contact-field-label">What’s this about?</label>
                <textarea
                  name="message"
                  placeholder="What would you like to discuss?"
                  required
                  className="contact-input"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="contact-submit"
              >
                {sending ? "Sending..." : "Start a Conversation"}
              </button>

              {status === "success" && (
                <div className="contact-status success">
                  <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                    <circle cx="7" cy="7" r="6" stroke="#00d4aa" strokeWidth="1.3"/>
                    <path d="M4 7l2 2 4-4" stroke="#00d4aa" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="contact-status error">
                  <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                    <circle cx="7" cy="7" r="6" stroke="#f87171" strokeWidth="1.3"/>
                    <path d="M7 4v3M7 9.5v.01" stroke="#f87171" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  Failed to send. Please try again.
                </div>
              )}

            </form>

            <div className="contact-glow" />
          </div>

        </div>
      </section>
    </>
  );
}