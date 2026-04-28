import { MessageCircle, Mail } from 'lucide-react'
import Container from '@/components/layout/Container/Container'
import Reveal from '@/components/common/Reveal/Reveal'
import styles from './ContactCTA.module.css'

export default function ContactCTA() {
  const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER
  const email = import.meta.env.VITE_CONTACT_EMAIL || 'contato@exemplo.com'
  const message = encodeURIComponent(
    'Olá, Wendel! Vim pelo seu portfólio e gostaria de solicitar um orçamento para minha landing page.',
  )

  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <Container>
        <Reveal>
          <div className={styles.box}>
            <div className={styles.content}>
              <p className={styles.label}>Vamos trabalhar juntos?</p>
              <h2 id="cta-heading" className={styles.heading}>
                Pronto para ter um site que converte?
              </h2>
              <p className={styles.text}>
                Me conta sobre o seu negócio. Respondo em até 24 horas com uma proposta personalizada, sem compromisso.
              </p>
              <p className={styles.note}>Tempo médio de resposta: menos de 4 horas em dias úteis.</p>
            </div>

            <div className={styles.actions}>
              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnWhatsApp}
                >
                  <MessageCircle size={22} aria-hidden="true" />
                  Chamar no WhatsApp
                </a>
              )}
              <a
                href={`mailto:${email}?subject=Orçamento%20de%20Landing%20Page`}
                className={styles.btnEmail}
              >
                <Mail size={20} aria-hidden="true" />
                Enviar e-mail
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
