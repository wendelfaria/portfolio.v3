import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import SEOHead from '@/components/common/SEOHead/SEOHead'
import Container from '@/components/layout/Container/Container'
import Button from '@/components/ui/Button/Button'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Página não encontrada"
        description="A página que você tentou acessar não existe."
        noIndex
      />

      <section className={styles.section}>
        <Container>
          <div className={styles.content}>
            <p className={styles.code} aria-hidden="true">404</p>
            <h1 className={styles.heading}>Página não encontrada</h1>
            <p className={styles.text}>
              A página que você tentou acessar não existe ou foi movida. Não se preocupe — o resto do site está funcionando perfeitamente.
            </p>
            <div className={styles.actions}>
              <Button as={Link} to="/">
                <Home size={18} aria-hidden="true" />
                Ir para o início
              </Button>
              <Button as="button" variant="secondary" onClick={() => window.history.back()}>
                <ArrowLeft size={18} aria-hidden="true" />
                Voltar
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
