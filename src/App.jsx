import { Toaster } from "react-hot-toast"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import CursorTrail from "./components/effects/CursorTrail"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import GraphicWorks from "./sections/GraphicWorks"

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-950 text-white">
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#171717",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "14px",
            padding: "14px 18px",
            boxShadow: "0 10px 30px rgba(0,0,0,.35)",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      {/* Custom Cursor */}
      <CursorTrail />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GraphicWorks />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App