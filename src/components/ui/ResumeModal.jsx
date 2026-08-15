import { useEffect } from "react"
import { X } from "lucide-react"

function ResumeModal({ open, onClose }) {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h2 className="text-lg font-semibold text-white">My Resume</h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-neutral-400 hover:bg-white/10 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="p-4">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
            <iframe
              src="/resume.pdf#toolbar=1&navpanes=0"
              className="w-full h-[75vh]"
              title="Resume"
            />
          </div>

          <div className="mt-4 flex justify-end gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
            >
              Open PDF
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 rounded-full bg-cyan-400 text-neutral-950 font-semibold hover:bg-cyan-300 transition"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeModal