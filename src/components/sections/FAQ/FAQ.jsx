import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '@/components/layout/Container/Container'
import { faq } from '@/data/faq'
import styles from './FAQ.module.css'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  const id = question.replace(/\s+/g, '-').toLowerCase().slice(0, 32)

  return (
    <li className={styles.item}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={`faq-${id}`}
      >
        <span className={styles.question}>{question}</span>
        <ChevronDown
          size={20}
          aria-hidden="true"
          className={[styles.chevron, open && styles.chevronOpen].filter(Boolean).join(' ')}
        />
      </button>
      <div
        id={`faq-${id}`}
        className={[styles.panel, open && styles.panelOpen].filter(Boolean).join(' ')}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
      >
        {/* wrapper necessário: min-height:0 no grid child, padding no neto */}
        <div className={styles.answerWrap}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </li>
  )
}

export default function FAQ() {
  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <Container>
        <div className={styles.header}>
          <p className={styles.label}>Dúvidas frequentes</p>
          <h2 id="faq-heading" className={styles.heading}>
            Perguntas e respostas
          </h2>
          <p className={styles.subheading}>
            Respondendo as dúvidas mais comuns antes mesmo de você perguntar.
          </p>
        </div>

        <ul className={styles.list} aria-label="Perguntas frequentes">
          {faq.map((item) => (
            <FAQItem key={item.id} question={item.question} answer={item.answer} />
          ))}
        </ul>
      </Container>
    </section>
  )
}
