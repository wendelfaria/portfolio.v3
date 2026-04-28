import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/layout/Container/Container'
import ServiceCard from '@/components/ui/ServiceCard/ServiceCard'
import Button from '@/components/ui/Button/Button'
import Reveal from '@/components/common/Reveal/Reveal'
import { services } from '@/data/services'
import styles from './ServicesGrid.module.css'

export default function ServicesGrid() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <Container>
        <Reveal>
          <div className={styles.header}>
            <p className={styles.label}>Nichos atendidos</p>
            <h2 id="services-heading" className={styles.heading}>
              Especializado no seu segmento
            </h2>
            <p className={styles.subheading}>
              Cada profissão tem suas particularidades. Crio landing pages pensadas para o seu público, transmitindo credibilidade e gerando contatos qualificados.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className={styles.grid} aria-label="Nichos atendidos">
            {services.map((service) => (
              <li key={service.id}>
                <ServiceCard
                  name={service.name}
                  description={service.description}
                  icon={service.icon}
                />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <div className={styles.cta}>
            <Button as={Link} to="/servicos" variant="secondary">
              Ver todos os serviços
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
