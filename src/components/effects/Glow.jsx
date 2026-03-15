function Glow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="float-slow absolute left-[-120px] top-[80px] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-120px] top-[300px] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-[-100px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
    </div>
  )
}

export default Glow