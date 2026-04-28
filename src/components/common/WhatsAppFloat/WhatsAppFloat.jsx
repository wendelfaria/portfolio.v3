import { MessageCircle } from 'lucide-react'
import styles from './WhatsAppFloat.module.css'

export default function WhatsAppFloat() {
  const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER
  const message = encodeURIComponent('Olá, Wendel! Vim pelo seu portfólio e gostaria de conversar.')

  if (!whatsapp) return null

  return (
    <a
      href={`https://wa.me/${whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Conversar no WhatsApp com Wendel Faria (abre em nova aba)"
    >
      <MessageCircle size={28} aria-hidden="true" />
      <span className={styles.tooltip}>Fale no WhatsApp</span>
    </a>
  )
}
