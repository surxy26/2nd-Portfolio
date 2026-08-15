import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import Container from "../ui/Container"

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-neutral-950/60 backdrop-blur-xl">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="py-14">

          {/* Top section */}
          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-400/20">
                  <span className="text-sm font-bold text-cyan-400">X</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Xyrus<span className="text-cyan-400">.</span>
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Frontend Developer & IT Graduate
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-md leading-7 text-neutral-400">
                Building modern web experiences, responsive interfaces, and
                practical IoT solutions with a focus on clean design,
                performance, and usability.
              </p>
            </div>

            {/* Contact & Socials */}
            <div className="flex flex-col items-start gap-5 md:items-end">

              <a
                href="mailto:xyrus@example.com"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-neutral-300 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-100"
              >
                <Mail size={16} />
                Let’s work together
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-100"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-100"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="mailto:xyrus@example.com"
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-100"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom section */}
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-neutral-500 md:flex-row">
            <p>© 2026 Xyrus. All rights reserved.</p>

            <div className="flex items-center gap-3 text-neutral-600">
              <span className="h-1 w-1 rounded-full bg-neutral-600" />
              <span>Built with React, Tailwind & Vite</span>
              <span className="h-1 w-1 rounded-full bg-neutral-600" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer