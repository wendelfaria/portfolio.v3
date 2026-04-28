import { MessageCircle, Mail, Github, Linkedin, Instagram, Clock } from 'lucide-react'
import SEOHead from '@/components/common/SEOHead/SEOHead'
import Container from '@/components/layout/Container/Container'
import Toast from '@/components/common/Toast/Toast'
import { useToast } from '@/hooks/useToast'
import styles from './Contact.module.css'

const socials = [
  {
    href: 'https://github.com/wendelfaria',
    label: 'GitHub',
    Icon: Github,
    description: 'Veja meu código',
  },
  {
    href: 'https://linkedin.com/in/wendelfaria',
    label: 'LinkedIn',
    Icon: Linkedin,
    description: 'Rede profissional',
  },
  {
    href: 'https://instagram.com/wendelfaria.dev',
    label: 'Instagram',
    Icon: Instagram,
    description: 'Bastidores dos projetos',
  },
]

export default function Contact() {
  const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER
  const email = import.meta.env.VITE_CONTACT_EMAIL || 'contato@exemplo.com'
  const message = encodeURIComponent(
    'Olá, Wendel! Vim pelo seu portfólio e gostaria de solicitar um orçamento para minha landing page.',
  )

  const { toast, show } = useToast()

  const copyEmail = async (e) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(email)
      show('E-mail copiado!')
    } catch {
      // Clipboard bloqueado (ex: contexto sem HTTPS) — fallback para mailto
      window.location.href = `mailto:${email}?subject=Orçamento%20de%20Landing%20Page`
    }
  }

  return (
    <>
      <SEOHead
        title="Contato"
        description="Entre em contato com Wendel Faria para solicitar um orçamento de landing page. Atendimento via WhatsApp ou e-mail."
        canonical="/contato"
      />

      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <p className={styles.label}>Contato</p>
            <h1 className={styles.heading}>Vamos criar algo incrível juntos?</h1>
            <p className={styles.subheading}>
              Conta sobre o seu negócio e o que você precisa. Respondo em até 24 horas com uma proposta personalizada — sem compromisso.
            </p>
            <div className={styles.heroCtas}>
              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaWhatsApp}
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  Chamar no WhatsApp
                </a>
              )}
              <button type="button" onClick={copyEmail} className={styles.ctaEmail}>
                <Mail size={20} aria-hidden="true" />
                Copiar e-mail
              </button>
            </div>
            <p className={styles.heroNote}>
              <Clock size={14} aria-hidden="true" />
              Resposta em até 4 horas em dias úteis
            </p>
          </div>
        </Container>
      </section>

      {/* Contato */}
      <section className={styles.section}>
        <Container>
          <div className={styles.grid}>
            {/* Canais principais */}
            <div className={styles.channels}>
              <h2 className={styles.sectionHeading}>Fale comigo</h2>

              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelCard}
                >
                  <div className={styles.channelIcon} style={{ background: 'rgba(37,211,102,0.1)', color: 'var(--color-whatsapp)' }}>
                    <MessageCircle size={28} aria-hidden="true" />
                  </div>
                  <div>
                    <p className={styles.channelTitle}>WhatsApp</p>
                    <p className={styles.channelDesc}>A forma mais rápida de me contatar. Respondo na hora em dias úteis.</p>
                    <span className={styles.channelLink}>Chamar no WhatsApp →</span>
                  </div>
                </a>
              )}

              {/* Card de e-mail — clique copia para clipboard */}
              <button
                type="button"
                onClick={copyEmail}
                className={styles.channelCard}
                aria-label={`Copiar e-mail ${email}`}
              >
                <div className={styles.channelIcon} style={{ background: 'rgba(59,130,246,0.1)', color: 'var(--color-accent)' }}>
                  <Mail size={28} aria-hidden="true" />
                </div>
                <div>
                  <p className={styles.channelTitle}>E-mail</p>
                  <p className={styles.channelDesc}>{email}</p>
                  <span className={styles.channelLink}>Clique para copiar →</span>
                </div>
              </button>

              <div className={styles.responseTime}>
                <Clock size={16} aria-hidden="true" />
                <p>Tempo médio de resposta: menos de 4 horas em dias úteis.</p>
              </div>
            </div>

            {/* Redes sociais */}
            <div className={styles.socials}>
              <h2 className={styles.sectionHeading}>Redes sociais</h2>
              <ul className={styles.socialList}>
                {socials.map(({ href, label, Icon, description }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialCard}
                    >
                      <Icon size={24} aria-hidden="true" />
                      <div>
                        <p className={styles.socialLabel}>{label}</p>
                        <p className={styles.socialDesc}>{description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Toast toast={toast} />
    </>
  )
}
