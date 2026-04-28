import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import styles from './BackToTop.module.css'

const SCROLL_THRESHOLD = 400

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={[styles.btn, visible && styles.visible].filter(Boolean).join(' ')}
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  )
}
