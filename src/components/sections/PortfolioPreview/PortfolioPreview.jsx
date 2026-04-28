import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/layout/Container/Container'
import ProjectCard from '@/components/ui/ProjectCard/ProjectCard'
import Button from '@/components/ui/Button/Button'
import { projects } from '@/data/projects'
import styles from './PortfolioPreview.module.css'

export default function PortfolioPreview() {
  const featured = projects.slice(0, 6)

  return (
    <section className={styles.section} aria-labelledby="portfolio-preview-heading">
      <Container>
        <div className={styles.header}>
          <p className={styles.label}>Portfólio</p>
          <h2 id="portfolio-preview-heading" className={styles.heading}>
            Projetos em destaque
          </h2>
          <p className={styles.subheading}>
            Sites reais entregues para profissionais reais. Cada projeto foi construído do zero com atenção ao detalhe.
          </p>
        </div>

        {featured.length > 0 ? (
          <>
            <ul className={styles.grid} aria-label="Projetos em destaque">
              {featured.map((project) => (
                <li key={project.id}>
                  <ProjectCard {...project} />
                </li>
              ))}
            </ul>
            <div className={styles.cta}>
              <Button as={Link} to="/portfolio" variant="secondary">
                Ver portfólio completo
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>Em breve</p>
            <p className={styles.emptyText}>
              Os primeiros projetos serão exibidos aqui assim que concluídos. Enquanto isso, entre em contato para conversar sobre o seu.
            </p>
            <Button as={Link} to="/contato">
              Fale comigo
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        )}
      </Container>
    </section>
  )
}
