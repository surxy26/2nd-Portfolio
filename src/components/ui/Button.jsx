function Button({ children, href = '#', variant = 'primary' }) {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary'

  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export default Button