import { CheckCircle, XCircle } from 'lucide-react'
import styles from './Toast.module.css'

export default function Toast({ toast }) {
  const visible = toast !== null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={[
        styles.toast,
        visible && styles.visible,
        toast?.type && styles[toast.type],
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {toast && (
        <>
          <span className={styles.icon} aria-hidden="true">
            {toast.type === 'error' ? <XCircle size={16} /> : <CheckCircle size={16} />}
          </span>
          {toast.message}
        </>
      )}
    </div>
  )
}
