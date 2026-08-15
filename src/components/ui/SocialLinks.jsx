import { Github, Facebook, Mail } from 'lucide-react'
import socials from '../../data/socials'

const iconMap = {
  github: Github,
  facebook: Facebook,
  email: Mail,
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((item) => {
        const Icon = iconMap[item.icon]
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            aria-label={item.label}
          >
            <Icon size={18} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks