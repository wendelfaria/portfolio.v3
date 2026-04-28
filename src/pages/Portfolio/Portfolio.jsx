import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '@/components/common/SEOHead/SEOHead'
import Container from '@/components/layout/Container/Container'
import ProjectCard from '@/components/ui/ProjectCard/ProjectCard'
import Button from '@/components/ui/Button/Button'
import ContactCTA from '@/components/sections/ContactCTA/ContactCTA'
import { projects } from '@/data/projects'
import { services } from '@/data/services'
import styles from './Portfolio.module.css'

const stats = [
  { value: `${services.length}`, label: 'Segmentos atendidos' },
  { value: '15 dias', label: 'Prazo médio de entrega' },
  { value: '100%', label: 'Código próprio, sem templates' },
]

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Portfólio"
        description="Conheça os projetos de landing pages criados por Wendel Faria para profissionais autônomos e pequenos negócios."
        canonical="/portfolio"
      />

      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <p className={styles.label}>Portfólio</p>
            <h1 className={styles.heading}>Projetos entregues</h1>
            <p className={styles.subheading}>
              Sites reais, para profissionais reais. Cada projeto foi construído do zero com atenção total à performance, segurança e conversão.
            </p>
            <ul className={styles.stats} aria-label="Destaques do portfólio">
              {stats.map(({ value, label }) => (
                <li key={label} className={styles.statItem}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Projetos */}
      <section className={styles.section} aria-labelledby="projects-heading">
        <Container>
          <h2 id="projects-heading" className="srOnly">Lista de projetos</h2>

          {projects.length > 0 ? (
            <ul className={styles.grid} aria-label="Projetos do portfólio">
              {projects.map((project) => (
                <li key={project.id}>
                  <ProjectCard {...project} />
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>Projetos em breve</p>
              <p className={styles.emptyText}>
                Estou finalizando os primeiros cases para exibir aqui. Enquanto isso, entre em contato para conversarmos sobre o seu projeto.
              </p>
              <Button as={Link} to="/contato">
                Fale comigo
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          )}
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}
