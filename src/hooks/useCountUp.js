import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, duration = 1400) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        if (prefersReduced) {
          setCount(target)
          return
        }

        let startTime = null
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / duration, 1)
          // easeOutCubic — acelera no início, desacelera no fim
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(animate)
          else setCount(target)
        }

        requestAnimationFrame(animate)
      },
      { threshold: 0.4 },
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [target, duration])

  return { ref, count }
}
