import { Zap, Shield, Search, Smartphone, Code, Clock } from 'lucide-react'
import Container from '@/components/layout/Container/Container'
import styles from './Differentials.module.css'

const items = [
  {
    Icon: Zap,
    title: 'Performance máxima',
    description: 'Sites que carregam em menos de 2 segundos. Menos tempo de espera, menos visitantes que desistem.',
  },
  {
    Icon: Shield,
    title: 'Segurança por padrão',
    description: 'HTTPS, headers de segurança, sem vulnerabilidades conhecidas. Seu site e o de seus clientes protegidos.',
  },
  {
    Icon: Search,
    title: 'SEO otimizado',
    description: 'Meta tags, Schema.org, sitemap e estrutura semântica para o Google encontrar e ranquear seu site.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile-first',
    description: 'Projetado primeiro para celular — onde a maioria dos seus clientes vão te encontrar.',
  },
  {
    Icon: Code,
    title: 'Código próprio',
    description: 'Sem construtores de página ou templates. Código limpo, rápido e fácil de evoluir.',
  },
  {
    Icon: Clock,
    title: 'Entrega em até 15 dias',
    description: 'Prazo claro e cumprido. Do briefing ao site no ar, sem enrolação.',
  },
]

export default function Differentials() {
  return (
    <section className={styles.section} aria-labelledby="diff-heading">
      <Container>
        <div className={styles.header}>
          <p className={styles.label}>Por que escolher</p>
          <h2 id="diff-heading" className={styles.heading}>
            Diferenciais que fazem a diferença
          </h2>
          <p className={styles.subheading}>
            Não faço sites "mais ou menos". Cada projeto recebe atenção total em cada detalhe que importa para o seu sucesso.
          </p>
        </div>

        <ul className={styles.grid} aria-label="Diferenciais">
          {items.map(({ Icon, title, description }) => (
            <li key={title} className={styles.item}>
              <div className={styles.iconWrap} aria-hidden="true">
                <Icon size={24} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.itemDesc}>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
