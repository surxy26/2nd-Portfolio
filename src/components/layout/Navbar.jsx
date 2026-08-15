import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Container from "../ui/Container"
import ResumeModal from "../ui/ResumeModal"

function Navbar() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false)
      } else {
        setShow(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },

    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
        { name: "Graphic Design", href: "#graphic-works" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-3 mt-3 rounded-2xl border border-white/10 bg-neutral-950/70 backdrop-blur-xl shadow-lg shadow-black/20">
          <Container>
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <a href="#home" className="group flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/20 transition group-hover:bg-cyan-400/20 group-hover:ring-cyan-400/40">
                  <span className="text-sm font-bold text-cyan-400">X</span>
                </div>

                <div className="leading-tight">
                  <div className="text-lg font-bold tracking-tight text-white">
                    Xyrus<span className="text-cyan-400">.</span>
                  </div>
                  <div className="text-xs text-neutral-400">
                    Frontend Developer
                  </div>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 text-sm text-neutral-300">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="rounded-full px-4 py-2 transition-all duration-200 hover:bg-white/10 hover:text-white hover:shadow-sm"
                  >
                    {link.name}
                  </a>
                ))}

                {/* Resume Button */}
                <button
                  onClick={() => setResumeOpen(true)}
                  className="ml-2 rounded-full bg-cyan-400 px-4 py-2 font-semibold text-neutral-950 transition-all duration-200 hover:scale-105 hover:bg-cyan-300 active:scale-95 shadow-lg shadow-cyan-400/20"
                >
                  Resume
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-neutral-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Toggle menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {open && (
              <div className="md:hidden border-t border-white/10 py-4">
                <nav className="flex flex-col gap-2">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-neutral-300 transition hover:bg-white/10 hover:text-white"
                    >
                      {link.name}
                    </a>
                  ))}

                  <button
                    onClick={() => {
                      setResumeOpen(true)
                      setOpen(false)
                    }}
                    className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-center font-semibold text-neutral-950 transition hover:bg-cyan-300"
                  >
                    Resume
                  </button>
                </nav>
              </div>
            )}
          </Container>
        </div>
      </header>

      {/* Resume Modal */}
      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </>
  )
}

export default Navbar