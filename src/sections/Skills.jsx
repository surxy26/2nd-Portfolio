import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/effects/Reveal'
import skills from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Technologies and tools I use."
          subtitle="A focused stack for responsive web applications, system development, and IoT solutions."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill} delay={index * 0.05}>
              <div className="card-modern text-center font-medium text-neutral-200">
                {skill}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills