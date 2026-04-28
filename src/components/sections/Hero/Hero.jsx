import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Container from '@/components/layout/Container/Container'
import Button from '@/components/ui/Button/Button'
import styles from './Hero.module.css'

export default function Hero() {
  const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER
  const message = encodeURIComponent(
    'Olá, Wendel! Vim pelo seu portfólio e quero saber mais sobre a criação da minha landing page.',
  )

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.bg} aria-hidden="true" />

      <Container>
        <div className={styles.content}>
          {/* Texto */}
          <div className={styles.text}>
            <span className={styles.eyebrow}>Desenvolvedor Web Freelancer</span>

            <h1 id="hero-heading" className={styles.heading}>
              Landing pages que{' '}
              <span className={styles.accent}>convertem</span> para profissionais e
              pequenos negócios
            </h1>

            <p className={styles.subheading}>
              Crio sites rápidos, seguros e otimizados para atrair seus clientes ideais — do design ao
              deploy, com código próprio e atenção a cada detalhe.
            </p>

            <div className={styles.ctas}>
              {whatsapp && (
                <Button
                  as="a"
                  href={`https://wa.me/${whatsapp}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  Quero meu site
                  <ExternalLink size={18} aria-hidden="true" />
                </Button>
              )}

              <Button as={Link} to="/portfolio" variant="secondary" size="lg">
                Ver portfólio
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </div>

            <p className={styles.note}>
              Sem contrato de fidelidade &middot; Orçamento sem compromisso
            </p>
          </div>

          {/* Visual decorativo — mockup de browser */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.mockup}>
              <div className={styles.browserBar}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <div className={styles.urlBar}>wendelfaria.dev</div>
              </div>
              <div className={styles.screen}>
                <div className={styles.screenHero} />
                <div className={styles.screenBody}>
                  <div className={styles.screenLine} />
                  <div className={styles.screenLine} style={{ width: '70%' }} />
                  <div className={styles.screenLine} style={{ width: '85%' }} />
                  <div className={styles.screenBtn} />
                </div>
              </div>
            </div>
            {/* Cards flutuantes */}
            <div className={[styles.floatCard, styles.floatCard1].join(' ')}>
              <span className={styles.floatIcon}>⚡</span>
              <span>Performance 98</span>
            </div>
            <div className={[styles.floatCard, styles.floatCard2].join(' ')}>
              <span className={styles.floatIcon}>🔒</span>
              <span>Seguro por padrão</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
