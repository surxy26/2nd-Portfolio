import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import SocialLinks from '../components/ui/SocialLinks'
import Reveal from '../components/effects/Reveal'

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something valuable together."
          subtitle="Open for collaboration, web development projects, and technical opportunities."
        />

        <Reveal>
          <div className="card-modern grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Get in touch</h3>
              <p className="mt-4 leading-7 text-neutral-400">
                You can contact me for portfolio work, freelance projects, system
                development, or collaboration opportunities.
              </p>

              <div className="mt-6 space-y-3 text-neutral-300">
                <p>Email: xyruspedido26@gmail.com</p>
                <p>Location: Project 4, Quezon City</p>
              </div>

              <div className="mt-6">
                <SocialLinks />
              </div>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400/60"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400/60"
              />
              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400/60"
              />
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Contact