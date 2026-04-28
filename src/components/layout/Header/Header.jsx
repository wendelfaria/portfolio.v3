import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from '@/components/layout/Container/Container'
import Button from '@/components/ui/Button/Button'
import logoWf from '@/assets/images/logo-wf.png'
import styles from './Header.module.css'

const navLinks = [
  { to: '/', label: 'Início', end: true },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Trava o scroll no iOS (overflow:hidden sozinho não funciona no Safari mobile) */
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      const top = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(top || '0') * -1)
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [menuOpen])

  /* Fecha o menu ao redimensionar para desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER
  const message = encodeURIComponent('Olá, Wendel! Vim pelo seu portfólio e gostaria de solicitar um orçamento.')

  const mobileNav = (
    <div
      id="mobile-nav"
      className={[styles.mobileNav, menuOpen && styles.mobileNavOpen].filter(Boolean).join(' ')}
      aria-hidden={!menuOpen}
    >
      <nav aria-label="Navegação mobile">
        <ul className={styles.mobileNavList}>
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  [styles.mobileNavLink, isActive && styles.active].filter(Boolean).join(' ')
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.mobileCta}>
          <Button
            as="a"
            href={`https://wa.me/${whatsapp}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            onClick={closeMenu}
          >
            Solicitar orçamento
          </Button>
        </div>
      </nav>
    </div>
  )

  return (
    <>
      <header className={[styles.header, scrolled && styles.scrolled].filter(Boolean).join(' ')}>
        <Container>
          <div className={styles.inner}>
            {/* Logo */}
            <Link to="/" className={styles.logo} onClick={closeMenu} aria-label="Wendel Faria — página inicial">
              <img src={logoWf} alt="Logo WF" className={styles.logoImg} />
              <span className={styles.logoText}>Wendel Faria</span>
            </Link>

            {/* Nav desktop */}
            <nav className={styles.nav} aria-label="Navegação principal">
              <ul className={styles.navList}>
                {navLinks.map(({ to, label, end }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        [styles.navLink, isActive && styles.active].filter(Boolean).join(' ')
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA desktop */}
            <div className={styles.cta}>
              <Button
                as="a"
                href={`https://wa.me/${whatsapp}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
              >
                Solicitar orçamento
              </Button>
            </div>

            {/* Botão hamburger */}
            <button
              type="button"
              className={styles.hamburger}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Nav mobile renderizado direto no body — evita conflito com backdrop-filter do header */}
      {createPortal(mobileNav, document.body)}
    </>
  )
}
