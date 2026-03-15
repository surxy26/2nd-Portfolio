function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-7 text-neutral-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle