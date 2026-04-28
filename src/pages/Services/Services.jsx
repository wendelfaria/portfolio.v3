import { Check, X } from 'lucide-react'
import SEOHead from '@/components/common/SEOHead/SEOHead'
import Container from '@/components/layout/Container/Container'
import ServiceCard from '@/components/ui/ServiceCard/ServiceCard'
import ContactCTA from '@/components/sections/ContactCTA/ContactCTA'
import { services, included, notIncluded } from '@/data/services'
import styles from './Services.module.css'

export default function Services() {
  return (
    <>
      <SEOHead
        title="Serviços"
        description="Landing pages profissionais para psicólogos, dentistas, advogados, personal trainers, coaches e outros profissionais. Veja o que está incluso em cada projeto."
        canonical="/servicos"
      />

      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <p className={styles.label}>Serviços</p>
            <h1 className={styles.heading}>
              Landing pages feitas para o seu segmento
            </h1>
            <p className={styles.subheading}>
              Cada nicho tem suas particularidades. Crio sites pensados para o seu público-alvo — com a linguagem, design e chamadas certas para converter visitantes em clientes.
            </p>
            <ul className={styles.chips} aria-label="Nichos atendidos">
              {services.map((s) => (
                <li key={s.id} className={styles.chip}>{s.name}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Grid de nichos */}
      <section className={styles.section} aria-labelledby="nichos-heading">
        <Container>
          <h2 id="nichos-heading" className={styles.sectionHeading}>Nichos atendidos</h2>
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

          <div className={styles.comingSoon}>
            <p className={styles.comingSoonText}>
              <strong>Em breve:</strong> landing pages para SaaS e e-commerce.
            </p>
          </div>
        </Container>
      </section>

      {/* O que está incluso */}
      <section className={styles.sectionAlt} aria-labelledby="included-heading">
        <Container>
          <div className={styles.includeGrid}>
            <div>
              <h2 id="included-heading" className={styles.sectionHeading}>O que está incluso</h2>
              <p className={styles.includeIntro}>
                Tudo que você precisa para ter um site profissional no ar e captando clientes.
              </p>
              <ul className={styles.includeList} aria-label="Itens inclusos no projeto">
                {included.map((item) => (
                  <li key={item} className={styles.includeItem}>
                    <Check size={18} aria-hidden="true" className={styles.iconYes} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={styles.sectionHeading}>O que NÃO está incluso</h2>
              <p className={styles.includeIntro}>
                Transparência total: estes itens não fazem parte do escopo padrão.
              </p>
              <ul className={styles.includeList} aria-label="Itens não inclusos no projeto">
                {notIncluded.map((item) => (
                  <li key={item} className={styles.includeItem}>
                    <X size={18} aria-hidden="true" className={styles.iconNo} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}
