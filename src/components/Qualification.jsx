// export default function Qualification() {
//   const education = [
//     { year: "2024", degree: "MCA (Master of Computer Applications)", school: "Dr. G.R. Damodaran College" },
//     { year: "2022", degree: "BCA (Bachelor of Computer Applications)", school: "University of Madras" }
//   ];

//   const certs = [
//     { date: "Feb 2024", title: "Master in UI/UX Design", institute: "Adoro Institute" },
//     { date: "Dec 2023", title: "Frontend Development React", institute: "Online Certification" }
//   ];

//   return (
//     // Line 13
// <section id="qualification" className="section-padding bg-white/1">
//       <h3 className="mb-16 text-center text-4xl font-bold italic text-accent">Qualification</h3>
      
//       <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
//         {/* Education Column */}
//         <div className="space-y-8">
//           <h4 className="flex items-center gap-3 text-xl font-bold border-b border-white/10 pb-4">
//             <i className="fas fa-graduation-cap text-accent"></i> Education
//           </h4>
//           {education.map((item, idx) => (
//             <div key={idx} className="glass-card flex items-start gap-6 hover:translate-x-2 transition-transform">
//               <span className="rounded-lg bg-white/10 px-3 py-1 text-sm font-bold text-accent">{item.year}</span>
//               <div>
//                 <h5 className="font-bold text-white">{item.degree}</h5>
//                 <p className="text-sm text-text-dim">{item.school}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Certifications Column */}
//         <div className="space-y-8">
//           <h4 className="flex items-center gap-3 text-xl font-bold border-b border-white/10 pb-4">
//             <i className="fas fa-award text-accent"></i> Certifications
//           </h4>
//           {certs.map((item, idx) => (
//             <div key={idx} className="glass-card flex items-start gap-6 hover:translate-x-2 transition-transform">
//               <span className="rounded-lg bg-accent/20 px-3 py-1 text-sm font-bold text-accent whitespace-nowrap">{item.date}</span>
//               <div>
//                 <h5 className="font-bold text-white">{item.title}</h5>
//                 <p className="text-sm text-text-dim">{item.institute}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }