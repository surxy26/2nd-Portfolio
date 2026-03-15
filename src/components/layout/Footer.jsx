import Container from '../ui/Container'

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="section-padding py-0">
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-neutral-400 md:flex-row">
          <p>© 2026 Xyrus. All rights reserved.</p>
          <p>Built with React, Tailwind, and Vite.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer