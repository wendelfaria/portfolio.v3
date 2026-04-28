import styles from './Button.module.css'

/**
 * Componente polimórfico de botão.
 * Renderiza como <button>, <a> ou qualquer elemento via prop `as`.
 */
export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const defaultType = Tag === 'button' ? { type: 'button' } : {}

  return (
    <Tag className={classes} {...defaultType} {...props}>
      {children}
    </Tag>
  )
}
