import Container from '@/components/layout/Container/Container'
import Reveal from '@/components/common/Reveal/Reveal'
import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Briefing',
    description: 'Conversamos sobre seu negócio, público-alvo, objetivos e referências. Quanto mais detalhes, melhor o resultado.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Crio o layout personalizado com sua identidade visual. Você aprova antes de qualquer linha de código.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Transformo o design em código React otimizado — responsivo, rápido, seguro e pronto para o Google.',
  },
  {
    number: '04',
    title: 'Entrega',
    description: 'Deploy do site no seu domínio com HTTPS configurado, testes em múltiplos dispositivos e treinamento básico.',
  },
  {
    number: '05',
    title: 'Suporte',
    description: '30 dias de suporte incluso para ajustes finos. Você nunca fica na mão depois da entrega.',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-heading">
      <Container>
        <Reveal>
          <div className={styles.header}>
            <p className={styles.label}>Como trabalho</p>
            <h2 id="how-heading" className={styles.heading}>
              Do briefing ao site no ar
            </h2>
            <p className={styles.subheading}>
              Um processo claro e transparente, sem surpresas — para que você saiba exatamente o que esperar em cada etapa.
            </p>
          </div>
        </Reveal>

        <ol className={styles.steps} aria-label="Etapas do processo">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <li className={styles.step}>
                <div className={styles.stepNumber} aria-hidden="true">{step.number}</div>
                {i < steps.length - 1 && <div className={styles.connector} aria-hidden="true" />}
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
