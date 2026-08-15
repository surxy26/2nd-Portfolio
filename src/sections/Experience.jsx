import { Briefcase, GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

import Container from "../components/ui/Container"
import SectionTitle from "../components/ui/SectionTitle"
import tipImage from "../assets/experience/tip.png" 
import technoshineImage from "../assets/experience/technoshine.jpg"

const experiences = [
  {
    type: "work",
    role: "Frontend Web Developer Intern",
    company: "Technoshine Trading International",
    period: "2026 • Internship",
    description:
      "Worked on responsive web interfaces, reusable React components, and UI improvements with a focus on performance and accessibility.",
image: technoshineImage,
    skills: ["React", "Tailwind", "Vite", "Responsive UI"],
  },
  {
    type: "work",
    role: "Freelance Web Developer",
    company: "Personal Projects",
    period: "2025 – Present",
    description:
      "Designed and developed portfolio websites, dashboards, and business landing pages with modern UI and smooth interactions.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    skills: ["JavaScript", "PHP", "MySQL", "UI Design"],
  },
]

const education = [
  {
    type: "education",
    role: "Bachelor of Science in Information Technology",
    company: "Technological Institute of the Philippines – Quezon City",
    period: "2022 – 2026",
    description:
      "Focused on web development, databases, networking, and software engineering. Completed academic projects involving IoT, mobile apps, and full-stack systems.",
image: tipImage,
    skills: ["Web Dev", "Databases", "Networking", "IoT"],
  },
]

function ExperienceCard({ item, index }) {
  const isEducation = item.type === "education"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/20 hover:bg-white/[0.06] hover:shadow-[0_24px_80px_rgba(6,182,212,0.12)]"
    >
      <div className="grid md:grid-cols-[280px_1fr]">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.role}
            className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />

          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            {isEducation ? <GraduationCap size={14} /> : <Briefcase size={14} />}
            {isEducation ? "Education" : "Experience"}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-100">
                {item.role}
              </h3>
              <p className="mt-2 text-lg text-neutral-300">{item.company}</p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300">
              <Calendar size={14} />
              {item.period}
            </div>
          </div>

          <p className="mt-5 leading-8 text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
            {item.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/5 group-hover:text-cyan-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Container>
        <SectionTitle
          eyebrow="Experience & Education"
          title="My professional and academic journey."
          subtitle="Internships, freelance work, and education that shaped my skills in frontend development, systems, and IoT."
        />

        {/* Stats */}
        <div className="mb-14 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Years Learning", value: "4+" },
            { label: "Projects Built", value: "10+" },
            { label: "Technologies Used", value: "15+" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="text-3xl font-extrabold text-white">{item.value}</div>
              <div className="mt-2 text-sm text-neutral-400">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-cyan-400/10 p-3 text-cyan-300">
              <GraduationCap size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
              <p className="text-neutral-400">Academic background and specialization</p>
            </div>
          </div>

          <div className="space-y-6">
            {education.map((item, index) => (
              <ExperienceCard key={item.role} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-cyan-400/10 p-3 text-cyan-300">
              <Briefcase size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Experience</h2>
              <p className="text-neutral-400">Internship and freelance development work</p>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <ExperienceCard key={item.role} item={item} index={index + 1} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Experience