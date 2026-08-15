import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Container from "../components/ui/Container"
import SectionTitle from "../components/ui/SectionTitle"
import Reveal from "../components/effects/Reveal"

const featuredWorks = [
  {
    src: "/graphics/Buwan ng Wika.jpg",
    title: "Buwan ng Wika Campaign Banner",
    description:
      "A featured promotional banner designed for a Filipino language celebration campaign with a modern and engaging visual style.",
  },
]

const posterWorks = [
  {
    src: "/graphics/Buwan ng Wika Golden.jpg",
    title: "Golden Global Annual Awards Poster",
    description:
      "Elegant event poster using warm gold tones and strong typography to create a premium visual identity.",
  },
  {
    src: "/graphics/Buwan ng Wika Sinag.jpg",
    title: "Sinag Theme Poster",
    description:
      "Bright and energetic layout focused on cultural celebration and community engagement.",
  },
  {
    src: "/graphics/Sunday Invite.png",
    title: "Sunday Invite",
    description:
      "Social media invitation designed for church and community announcements with a clean, readable composition.",
  },
  {
    src: "/graphics/Sunday Invite2.png",
    title: "Sunday Invite Alternate",
    description:
      "Alternative invitation layout exploring different hierarchy, spacing, and visual emphasis.",
  },
  {
    src: "/graphics/Ministry.png",
    title: "Ministry Graphic",
    description:
      "Promotional ministry visual created for digital outreach and event communication.",
  },
]

function GraphicWorks() {
  const [open, setOpen] = useState(false)

  const preventSave = (e) => {
    e.preventDefault()
  }

  return (
    <section id="graphic-works" className="section-padding">
      <Container>
        <SectionTitle
          eyebrow="Design"
          title="Graphic Works"
          subtitle="Posters, social media graphics, branding materials, and promotional visuals created for businesses and digital campaigns."
        />

        <div
          className="space-y-6 select-none"
          onContextMenu={preventSave}
        >
          {/* Featured work */}
          {featuredWorks.map((work, index) => (
            <Reveal key={work.src} delay={index * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(6,182,212,0.12)]">
                <img
                  src={work.src}
                  alt={work.title}
                  draggable={false}
                  onContextMenu={preventSave}
                  className="pointer-events-none w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-full flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {work.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-neutral-200">
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Dropdown trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
          >
            <div>
              <p className="text-sm text-neutral-400">Gallery</p>

              <h3 className="text-lg font-semibold text-white">
                Posters & Social Media Graphics ({posterWorks.length})
              </h3>
            </div>

            <ChevronDown
              className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Collapsible gallery */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              open
                ? "max-h-[4000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2">
              {posterWorks.map((work, index) => (
                <Reveal key={work.src} delay={index * 0.06}>
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(6,182,212,0.12)]">
                    <img
                      src={work.src}
                      alt={work.title}
                      draggable={false}
                      onContextMenu={preventSave}
                      className="pointer-events-none w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-full flex-col justify-end p-5">
                        <h4 className="text-lg font-semibold text-white">
                          {work.title}
                        </h4>

                        <p className="mt-1 text-sm leading-5 text-neutral-200">
                          {work.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GraphicWorks