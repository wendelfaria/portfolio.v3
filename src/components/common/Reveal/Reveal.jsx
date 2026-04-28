import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './Reveal.module.css'

export default function Reveal({ children, delay = 0, className = '' }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={[styles.reveal, isVisible && styles.visible, className].filter(Boolean).join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
