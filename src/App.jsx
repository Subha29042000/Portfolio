// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Qualification from './components/Qualification';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <div className="relative overflow-x-hidden">
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Experience />
//         <Projects />
//         <Qualification />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }












import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";

// import all your existing components below
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {/* Splash plays first, then auto-dismisses */}
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      {/* Your full portfolio — fades in after splash */}
      <div
        style={{
          opacity: splashDone ? 1 : 0,
          transform: splashDone ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
