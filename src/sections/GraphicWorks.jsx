import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Container from "../components/ui/Container"
import SectionTitle from "../components/ui/SectionTitle"
import Reveal from "../components/effects/Reveal"

const featuredWorks = []

const posterWorks = [
  {
    src: "/graphics/Buwan ng Wika.jpg",
    title: "Buwan ng Wika Poster for NADREMS Inc.",
    description:
      "A promotional poster created for NADREMS Inc.'s Buwan ng Wika campaign, featuring Filipino cultural elements and a vibrant composition designed to encourage audience engagement.",
  },
  {
    src: "/graphics/Buwan ng Wika Golden.jpg",
    title: "Buwan ng Wika Poster for Golden Globe",
    description:
      "A Buwan ng Wika promotional poster for Golden Globe, combining Filipino cultural elements with a refined gold-themed visual style to create an elegant and engaging campaign piece.",
  },
  {
    src: "/graphics/Buwan ng Wika Sinag.jpg",
    title: "Buwan ng Wika Poster for Sinag Foundation",
    description:
      "A cultural campaign poster created for Sinag Foundation's Buwan ng Wika initiative, using vibrant colors, Filipino-inspired elements, and dynamic typography to capture the spirit of the celebration.",
  },
  {
    src: "/graphics/Sunday Invite.png",
    title: "Sunday Invite",
    description:
      "A digital invitation designed for Sunday activities and announcements, with a clean layout and clear visual hierarchy to make the event details easy to read.",
  },
  {
    src: "/graphics/Sunday Invite2.png",
    title: "Sunday Invite Version 2",
    description:
      "An alternate version of the Sunday invitation exploring a different layout, typography, and visual hierarchy while maintaining a clear and accessible presentation.",
  },
  {
    src: "/graphics/Ministry.png",
    title: "Ministry Graphic",
    description:
      "A promotional graphic created for ministry-related communication, combining clean typography and visual elements to effectively present the intended message and information.",
  },
  {
    src: "/graphics/golden globe ninoy.jpg",
    title: "Ninoy Aquino Day Poster for Golden Globe",
    description:
      "A commemorative poster created for Golden Globe's Ninoy Aquino Day campaign, incorporating patriotic imagery and a formal visual treatment appropriate for the occasion.",
  },
  {
    src: "/graphics/sinag ninoy.jpg",
    title: "Ninoy Aquino Day Poster for Sinag Foundation",
    description:
      "A commemorative graphic created for Sinag Foundation's Ninoy Aquino Day campaign, using historical imagery and a strong visual composition to honor the significance of the occasion.",
  },
  {
    src: "/graphics/sinag.jpg",
    title: "Sinag Foundation Magazine Cover",
    description:
      "A magazine cover designed for a recent Sinag Foundation project, combining editorial-style composition, prominent typography, and visual storytelling to create an engaging cover design.",
  },
]

function GraphicWorks() {
  const [open, setOpen] = useState(false)
  const [sortedWorks, setSortedWorks] = useState([])

  const preventSave = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const loadImages = async () => {
      const worksWithOrientation = await Promise.all(
        posterWorks.map(
          (work, index) =>
            new Promise((resolve) => {
              const img = new Image()

              img.onload = () => {
                let orientation

                if (img.naturalWidth > img.naturalHeight) {
                  orientation = 0 // Landscape
                } else if (img.naturalWidth === img.naturalHeight) {
                  orientation = 1 // Square
                } else {
                  orientation = 2 // Portrait
                }

                resolve({
                  ...work,
                  orientation,
                  originalIndex: index,
                })
              }

              img.onerror = () => {
                resolve({
                  ...work,
                  orientation: 3,
                  originalIndex: index,
                })
              }

              img.src = work.src
            })
        )
      )

      // Landscape → Square → Portrait
      worksWithOrientation.sort((a, b) => {
        if (a.orientation !== b.orientation) {
          return a.orientation - b.orientation
        }

        return a.originalIndex - b.originalIndex
      })

      setSortedWorks(worksWithOrientation)
    }

    loadImages()
  }, [])

  return (
    <section id="graphic-works" className="section-padding">
      <Container>
        <SectionTitle
          eyebrow="Design"
          title="Graphic Works"
          subtitle="Selected professional graphic design work created during my professional experience, including promotional campaigns, event materials, and social media graphics."
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
                  className="pointer-events-none block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />

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
              <p className="text-sm text-neutral-400">
                Professional Work
              </p>

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
                ? "max-h-[6000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2">
              {sortedWorks.map((work, index) => (
                <Reveal
                  key={work.src}
                  delay={index * 0.06}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(6,182,212,0.12)]">
                    {/* Image */}
                    <div className="flex w-full items-center justify-center overflow-hidden bg-black/20">
                      <img
                        src={work.src}
                        alt={work.title}
                        draggable={false}
                        onContextMenu={preventSave}
                        className="pointer-events-none block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-full flex-col justify-end p-5">
                        <span className="mb-2 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                          Professional Work
                        </span>

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