import Container from '@/components/layout/Container/Container'
import { testimonials } from '@/data/testimonials'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <Container>
        <div className={styles.header}>
          <p className={styles.label}>Depoimentos</p>
          <h2 id="testimonials-heading" className={styles.heading}>
            O que dizem os clientes
          </h2>
        </div>

        <ul className={styles.grid} aria-label="Depoimentos de clientes">
          {testimonials.map((t) => (
            <li key={t.id} className={styles.card}>
              <blockquote className={styles.quote}>
                <p className={styles.text}>"{t.text}"</p>
                <footer className={styles.author}>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
