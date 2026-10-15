
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SocialLinks from '../components/ui/SocialLinks'

function Hero() {
  return (
    <section className="section-padding relative pt-24 md:pt-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400"
            >
              Developer & Creative Designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight md:text-7xl"
            >
              Building digital experiences,{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                designed to stand out.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400"
            >
              I have experience creating websites, mobile applications, graphic designs, and video content, combining technical skills with creativity to bring ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="#projects">Explore My Work</Button>

              <Button href="#contact" variant="secondary">
                Contact Me <ArrowRight className="ml-2" size={18} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8"
            >
              <SocialLinks />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card-modern relative overflow-hidden p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                What I Do
              </p>

              <h2 className="mt-4 text-2xl font-bold text-white">
                Code Meets Creativity.
              </h2>

              <p className="mt-3 leading-7 text-neutral-400">
                From functional applications to compelling visual content,
                I bring both technical and creative ideas to life.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  'Web Development',
                  'App Development',
                  'UI/UX Design',
                  'Graphic Design',
                  'Video Editing',
                  'Motion Graphics',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm font-medium text-neutral-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero