import { ExternalLink, Github } from "lucide-react"
import { useRef } from "react"
import Container from "../components/ui/Container"
import SectionTitle from "../components/ui/SectionTitle"
import Reveal from "../components/effects/Reveal"
import projects from "../data/projects"

function Projects() {
  const ref = useRef(null)

  const down = (e) => {
    const el = ref.current
    if (!el) return

    const startX = e.pageX
    const startLeft = el.scrollLeft

    const move = (m) => {
      el.scrollLeft = startLeft - (m.pageX - startX)
    }

    const up = () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseup", up)
    }

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseup", up)
  }

  return (
    <section id="projects" className="section-padding">
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Selected work and technical projects."
          subtitle="A few projects that reflect my skills in web development, interface design, and system implementation."
        />

        <div
          ref={ref}
          onMouseDown={down}
          className="-mx-4 overflow-x-auto px-4 py-4 cursor-grab active:cursor-grabbing select-none scrollbar-hide"
        >
          <div className="flex w-max gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="w-[90vw] md:w-[560px] flex-shrink-0"
              >
                <Reveal delay={index * 0.08}>
                  <div className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">

                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-3 leading-7 text-neutral-400">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex gap-3">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects