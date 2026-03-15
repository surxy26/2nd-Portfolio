import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/effects/Reveal'

function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <SectionTitle
          eyebrow="About Me"
          title="Passionate about building clean, useful, and modern digital solutions."
          subtitle="I focus on front-end development, system interfaces, and IoT-based applications that solve real-world problems."
        />

        <Reveal>
          <div className="card-modern max-w-4xl">
            <p className="text-lg leading-8 text-neutral-300">
              I am an aspiring IT professional with experience in web development,
              mobile-oriented systems, and IoT project implementation. I enjoy
              building interfaces that are both visually polished and practical to
              use. My work includes responsive portfolio websites, admin dashboards,
              database-driven systems, and sensor-based automation projects.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default About