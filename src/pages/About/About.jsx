import { CheckCircle } from 'lucide-react'
import SEOHead from '@/components/common/SEOHead/SEOHead'
import Container from '@/components/layout/Container/Container'
import ContactCTA from '@/components/sections/ContactCTA/ContactCTA'
import styles from './About.module.css'

const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript (ES2022+)', 'HTML5 semântico', 'CSS3 / CSS Modules'] },
  { category: 'Ferramentas', items: ['Vite', 'Git / GitHub', 'VS Code', 'Figma (básico)'] },
  { category: 'Infraestrutura', items: ['Vercel', 'GitHub Pages', 'HTTPS / DNS', 'Google Search Console'] },
  { category: 'Estudando', items: ['Node.js / Express', 'Next.js / SSR', 'Segurança web avançada', 'E-commerce'] },
]

const values = [
  'Transparência em cada etapa do projeto',
  'Código limpo e bem documentado',
  'Prazos cumpridos sem desculpas',
  'Segurança como prioridade, não opcional',
  'Comunicação clara e resposta rápida',
  'Resultado que funciona de verdade',
]

export default function About() {
  return (
    <>
      <SEOHead
        title="Sobre"
        description="Conheça Wendel Faria, desenvolvedor web especializado em landing pages para profissionais autônomos e pequenos negócios. Saiba mais sobre minha história, habilidades e valores."
        canonical="/sobre"
      />

      {/* Hero da página */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={styles.label}>Sobre mim</p>
              <h1 className={styles.heading}>
                Desenvolvedor que entrega sites que funcionam de verdade
              </h1>
              <p className={styles.subheading}>
                Sou Wendel Faria, desenvolvedor web freelancer focado em criar landing pages que convertem visitantes em clientes para profissionais autônomos e pequenos negócios.
              </p>
            </div>
            <div className={styles.heroAvatar} aria-hidden="true">
              <div className={styles.avatar}>
                <span className={styles.avatarInitials}>WF</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* História */}
      <section className={styles.section}>
        <Container>
          <div className={styles.prose}>
            <h2 className={styles.sectionHeading}>Minha trajetória</h2>
            <p>
              Comecei na programação movido pela curiosidade de entender como os sites funcionam por dentro. Logo percebi que havia uma lacuna enorme: profissionais incríveis no que fazem — psicólogos, dentistas, advogados — mas com presença digital que não faz jus ao trabalho que entregam.
            </p>
            <p>
              Decidi focar nisso. Aprendi React, me aprofundei em performance, segurança e SEO, e comecei a construir landing pages que realmente convertem — sem templates genéricos, sem frescura.
            </p>
            <p>
              Cada projeto é tratado como se fosse o meu próprio negócio: com cuidado nos detalhes, comunicação honesta e entrega no prazo combinado.
            </p>
          </div>
        </Container>
      </section>

      {/* Habilidades */}
      <section className={styles.sectionAlt}>
        <Container>
          <h2 className={styles.sectionHeading}>Habilidades técnicas</h2>
          <div className={styles.skillsGrid}>
            {skills.map(({ category, items }) => (
              <div key={category} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{category}</h3>
                <ul className={styles.skillList}>
                  {items.map((skill) => (
                    <li key={skill} className={styles.skillItem}>
                      <CheckCircle size={16} aria-hidden="true" className={styles.skillIcon} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className={styles.section}>
        <Container>
          <div className={styles.valuesGrid}>
            <div>
              <h2 className={styles.sectionHeading}>Como trabalho</h2>
              <p className={styles.valuesIntro}>
                Princípios que guiam cada projeto, do briefing à entrega.
              </p>
            </div>
            <ul className={styles.valuesList}>
              {values.map((v) => (
                <li key={v} className={styles.valueItem}>
                  <CheckCircle size={18} aria-hidden="true" className={styles.valueIcon} />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}
