import { Link } from 'react-router-dom'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import Container from '@/components/layout/Container/Container'
import logoWf from '@/assets/images/logo-wf.png'
import styles from './Footer.module.css'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/contato', label: 'Contato' },
]

const legalLinks = [
  { to: '/privacidade', label: 'Política de Privacidade' },
]

const socialLinks = [
  {
    href: 'https://github.com/wendelfaria',
    label: 'GitHub de Wendel Faria',
    Icon: Github,
  },
  {
    href: 'https://linkedin.com/in/wendelfaria',
    label: 'LinkedIn de Wendel Faria',
    Icon: Linkedin,
  },
  {
    href: 'https://instagram.com/wendelfaria.dev',
    label: 'Instagram de Wendel Faria',
    Icon: Instagram,
  },
]

const year = new Date().getFullYear()

export default function Footer() {
  const email = import.meta.env.VITE_CONTACT_EMAIL || 'contato@exemplo.com'

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Coluna marca */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo} aria-label="Wendel Faria — página inicial">
              <img src={logoWf} alt="Logo WF" className={styles.logoImg} />
              <span className={styles.logoText}>Wendel Faria</span>
            </Link>
            <p className={styles.tagline}>
              Landing pages rápidas, seguras e que convertem — para profissionais autônomos e pequenos negócios.
            </p>
            <ul className={styles.socials}>
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={styles.socialLink}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${email}`}
                  aria-label="Enviar e-mail para Wendel Faria"
                  className={styles.socialLink}
                >
                  <Mail size={20} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna navegação */}
          <nav aria-label="Links do rodapé">
            <p className={styles.colTitle}>Navegação</p>
            <ul className={styles.linkList}>
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={styles.footerLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna legal */}
          <nav aria-label="Links legais">
            <p className={styles.colTitle}>Legal</p>
            <ul className={styles.linkList}>
              {legalLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={styles.footerLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} Wendel Faria. Todos os direitos reservados.
          </p>
          <p className={styles.made}>
            Feito com React + Vite &mdash; código próprio, sem template.
          </p>
        </div>
      </Container>
    </footer>
  )
}
