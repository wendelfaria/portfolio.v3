import { useCallback, useRef, useState } from 'react'

export function useToast(duration = 3000) {
  const [toast, setToast] = useState(null)
  const timerRef = useRef(null)

  const show = useCallback((message, type = 'success') => {
    clearTimeout(timerRef.current)
    setToast({ message, type })
    timerRef.current = setTimeout(() => setToast(null), duration)
  }, [duration])

  const hide = useCallback(() => {
    clearTimeout(timerRef.current)
    setToast(null)
  }, [])

  return { toast, show, hide }
}
