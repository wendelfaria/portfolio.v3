import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/layout/Container/Container'
import Button from '@/components/ui/Button/Button'
import styles from './AboutPreview.module.css'

export default function AboutPreview() {
  return (
    <section className={styles.section} aria-labelledby="about-preview-heading">
      <Container>
        <div className={styles.grid}>
          {/* Avatar decorativo */}
          <div className={styles.avatarWrap} aria-hidden="true">
            <div className={styles.avatar}>
              <span className={styles.avatarInitials}>WF</span>
            </div>
            <div className={styles.badge}>
              <span>👨‍💻</span>
              <span>Dev Freelancer</span>
            </div>
          </div>

          {/* Texto */}
          <div className={styles.content}>
            <p className={styles.label}>Sobre mim</p>
            <h2 id="about-preview-heading" className={styles.heading}>
              Código feito com cuidado, site entregue com orgulho
            </h2>
            <p className={styles.text}>
              Sou Wendel Faria, desenvolvedor web focado em criar landing pages que realmente funcionam para profissionais autônomos e pequenos negócios. Cada projeto é construído do zero — sem templates genéricos — com atenção total a performance, segurança e conversão.
            </p>
            <p className={styles.text}>
              Trabalho com React, JavaScript moderno e as melhores práticas do mercado. Meu objetivo é entregar um site que você se orgulhe de mostrar e que traga resultados reais para o seu negócio.
            </p>
            <Button as={Link} to="/sobre" variant="secondary">
              Saiba mais sobre mim
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
