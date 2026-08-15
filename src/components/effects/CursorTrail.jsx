import { useEffect, useRef } from "react"

function CursorTrail() {
  const glowRef = useRef(null)

  useEffect(() => {
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let glowX = mouseX
    let glowY = mouseY
    let opacity = 0

    let fadeTimeout

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // show glow when moving
      opacity = 1
      if (glowRef.current) {
        glowRef.current.style.opacity = "1"
      }

      // fade out after stopping
      clearTimeout(fadeTimeout)
      fadeTimeout = setTimeout(() => {
        opacity = 0
        if (glowRef.current) {
          glowRef.current.style.opacity = "0"
        }
      }, 200)
    }

    const animate = () => {
      glowX += (mouseX - glowX) * 0.12
      glowY += (mouseY - glowY) * 0.12

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX - 60}px, ${glowY - 60}px)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", move)
    const raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", move)
      clearTimeout(fadeTimeout)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-32 w-32 rounded-full bg-cyan-400/30 blur-3xl mix-blend-screen opacity-0 transition-opacity duration-300"
      style={{
        boxShadow: "0 0 80px rgba(34,211,238,0.35)",
      }}
    />
  )
}

export default CursorTrail