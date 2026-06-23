import { ExternalLink, Github } from 'lucide-react'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/effects/Reveal'
import projects from '../data/projects'


function Projects() {
  return (
    <section id="projects" className="section-padding">
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Selected work and technical projects."
          subtitle="A few projects that reflect my skills in web development, interface design, and system implementation."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <div className="card-modern flex h-full flex-col">
          <img
            src={project.image}
            alt={project.title}
            className="mb-5 h-44 w-full rounded-2xl border border-white/10 object-cover"
          />
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 flex-grow leading-7 text-neutral-400">
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
                    className="btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects