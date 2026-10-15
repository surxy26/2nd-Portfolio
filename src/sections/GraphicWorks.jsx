import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Container from "../components/ui/Container"
import SectionTitle from "../components/ui/SectionTitle"
import Reveal from "../components/effects/Reveal"
import {
  graphicWorks,
  professionalVideos,
  personalVideos,
  assessmentVideos,
} from "../data/works"

function WorkGallery({ works, type }) {
  const preventAction = (e) => {
    e.preventDefault()
  }

  const preventDrag = (e) => {
    e.preventDefault()
  }

  if (works.length === 0) {
    return (
      <p className="pt-6 text-sm text-neutral-400">
        No projects added yet.
      </p>
    )
  }

  return (
    <div
      className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2"
      onContextMenu={preventAction}
      onDragStart={preventDrag}
    >
      {works.map((work, index) => (
        <Reveal key={work.src} delay={index * 0.06}>
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(6,182,212,0.12)]">
            {type === "video" ? (
              <video
                src={work.src}
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                playsInline
                preload="metadata"
                onContextMenu={preventAction}
                onDragStart={preventDrag}
                className="block w-full bg-black"
              />
            ) : (
              <img
                src={work.src}
                alt={work.title}
                draggable={false}
                onContextMenu={preventAction}
                onDragStart={preventDrag}
                className="pointer-events-none block h-auto w-full select-none object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            )}

            <div className="p-5">
              <span className="mb-2 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                {work.category ||
                  (type === "video"
                    ? "Edited Video"
                    : "Graphic Design")}
              </span>

              <h4 className="text-lg font-semibold text-white">
                {work.title}
              </h4>

              <p className="mt-1 text-sm leading-5 text-neutral-200">
                {work.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

function WorkSection({ title, subtitle, works, type }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
      >
        <div>
          <p className="text-sm text-neutral-400">
            {subtitle}
          </p>

          <h3 className="text-lg font-semibold text-white">
            {title} ({works.length})
          </h3>
        </div>

        <ChevronDown
          className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <WorkGallery works={works} type={type} />
        </div>
      </div>
    </div>
  )
}

function GraphicWorks() {
  const preventSave = (e) => {
    e.preventDefault()
  }

  const preventShortcuts = (e) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      ["s", "u", "p"].includes(e.key.toLowerCase())
    ) {
      e.preventDefault()
    }
  }

  return (
    <section
      id="graphic-works"
      className="section-padding select-none"
      onContextMenu={preventSave}
      onKeyDown={preventShortcuts}
    >
      <Container>
        <SectionTitle
          eyebrow="Portfolio"
          title="Graphic & Video Works"
          subtitle="A collection of my graphic designs, professional video projects, personal edits, and editing assessments."
        />

        <div className="space-y-6">
          <WorkSection
            title="Posters & Social Media Graphics"
            subtitle="Graphic Design"
            works={graphicWorks}
            type="graphic"
          />

          <WorkSection
            title="Professional & Corporate Videos"
            subtitle="Company Projects"
            works={professionalVideos}
            type="video"
          />

          <WorkSection
            title="Personal & Creative Edits"
            subtitle="Personal Projects"
            works={personalVideos}
            type="video"
          />

          <WorkSection
            title="Editing Tests & Assessments"
            subtitle="Recruitment Samples"
            works={assessmentVideos}
            type="video"
          />
        </div>
      </Container>
    </section>
  )
}

export default GraphicWorks
