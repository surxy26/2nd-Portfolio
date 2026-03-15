import Container from "../ui/Container"

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-lg">
      <Container>
        <div className="flex items-center justify-between py-4">
          
          <div className="text-xl font-bold">
            Xyrus<span className="text-cyan-400">.</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Resume</a>
          </nav>

        </div>
      </Container>
    </header>
  )
}

export default Navbar