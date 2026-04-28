import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react'
import Container from '@/components/layout/Container/Container'
import Button from '@/components/ui/Button/Button'
import styles from './HeroCarousel.module.css'

const slides = [
  {
    id: 1,
    eyebrow: 'Para psicólogos e terapeutas',
    heading: 'Seu site que transmite acolhimento e',
    headingAccent: 'gera novos pacientes',
    subheading:
      'Landing pages que comunicam sua abordagem, humanizam o atendimento e facilitam o primeiro contato — para quem ainda tem medo de pedir ajuda.',
    accent: '#3B82F6',
    accentSoft: 'rgba(59,130,246,0.10)',
    mockupColor: '#1E40AF',
    mockupAccent: '#60A5FA',
    stat1: { icon: '🤝', label: 'Primeiro contato facilitado' },
    stat2: { icon: '🔒', label: 'Sigilo garantido' },
  },
  {
    id: 2,
    eyebrow: 'Para dentistas e clínicas',
    heading: 'Transforme visitantes em',
    headingAccent: 'pacientes agendados',
    subheading:
      'Sites que destacam seus procedimentos, apresentam sua equipe e facilitam o agendamento — gerando consultas qualificadas todos os dias.',
    accent: '#10B981',
    accentSoft: 'rgba(16,185,129,0.10)',
    mockupColor: '#064E3B',
    mockupAccent: '#34D399',
    stat1: { icon: '📅', label: 'Agendamentos online' },
    stat2: { icon: '⭐', label: 'Credibilidade clínica' },
  },
  {
    id: 3,
    eyebrow: 'Para advogados e consultores',
    heading: 'Presença digital que',
    headingAccent: 'gera consultas qualificadas',
    subheading:
      'Sites que transmitem autoridade, especialização e seriedade — para o cliente já chegar até você convicto de que você é a escolha certa.',
    accent: '#F59E0B',
    accentSoft: 'rgba(245,158,11,0.10)',
    mockupColor: '#78350F',
    mockupAccent: '#FCD34D',
    stat1: { icon: '⚖️', label: 'Autoridade transmitida' },
    stat2: { icon: '📈', label: 'Leads qualificados' },
  },
  {
    id: 4,
    eyebrow: 'Para personal trainers e coaches',
    heading: 'Mostre resultados e',
    headingAccent: 'conquiste mais alunos',
    subheading:
      'Landing pages de impacto que mostram sua metodologia, cases de sucesso e facilitam o agendamento de uma aula experimental.',
    accent: '#22D3EE',
    accentSoft: 'rgba(34,211,238,0.10)',
    mockupColor: '#164E63',
    mockupAccent: '#67E8F9',
    stat1: { icon: '💪', label: 'Metodologia em destaque' },
    stat2: { icon: '🎯', label: 'Conversão garantida' },
  },
]

export default function HeroCarousel() {
  const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER
  const message = encodeURIComponent(
    'Olá, Wendel! Vim pelo seu portfólio e quero saber mais sobre a criação da minha landing page.',
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  /* Auto-play */
  useEffect(() => {
    if (!emblaApi) return
    const id = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(id)
  }, [emblaApi])

  const current = slides[selectedIndex]

  return (
    <section
      className={styles.section}
      aria-label="Carrossel de serviços"
      style={{ '--slide-accent': current.accent, '--slide-accent-soft': current.accentSoft }}
    >
      {/* Gradiente de fundo animado */}
      <div className={styles.bg} aria-hidden="true" />

      {/* Embla viewport */}
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map((slide) => (
            <div key={slide.id} className={styles.emblaSlide} aria-hidden={slide.id - 1 !== selectedIndex}>
              <Container>
                <div className={styles.content}>
                  {/* Texto */}
                  <div className={styles.text}>
                    <span
                      className={styles.eyebrow}
                      style={{ color: slide.accent, background: slide.accentSoft, borderColor: slide.accentSoft }}
                    >
                      {slide.eyebrow}
                    </span>

                    <h1 className={styles.heading}>
                      {slide.heading}{' '}
                      <span className={styles.accent} style={{ color: slide.accent }}>
                        {slide.headingAccent}
                      </span>
                    </h1>

                    <p className={styles.subheading}>{slide.subheading}</p>

                    <div className={styles.ctas}>
                      {whatsapp && (
                        <Button
                          as="a"
                          href={`https://wa.me/${whatsapp}?text=${message}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="lg"
                          style={{ background: slide.accent }}
                        >
                          Quero meu site
                          <ExternalLink size={18} aria-hidden="true" />
                        </Button>
                      )}

                      <Button as={Link} to="/portfolio" variant="secondary" size="lg">
                        Ver portfólio
                        <ArrowRight size={18} aria-hidden="true" />
                      </Button>
                    </div>

                    <p className={styles.note}>
                      Sem contrato &middot; Orçamento sem compromisso &middot; Entrega em até 15 dias
                    </p>
                  </div>

                  {/* Mockup decorativo */}
                  <div className={styles.visual} aria-hidden="true">
                    <div className={styles.mockup}>
                      <div className={styles.browserBar}>
                        <span className={[styles.dot, styles.dotR].join(' ')} />
                        <span className={[styles.dot, styles.dotY].join(' ')} />
                        <span className={[styles.dot, styles.dotG].join(' ')} />
                        <div className={styles.urlBar}>wendelfaria.dev</div>
                      </div>
                      <div className={styles.screen}>
                        <div
                          className={styles.screenHero}
                          style={{ background: `linear-gradient(135deg, ${slide.mockupColor} 0%, ${slide.mockupAccent} 100%)` }}
                        />
                        <div className={styles.screenBody}>
                          <div className={styles.screenLine} />
                          <div className={styles.screenLine} style={{ width: '72%' }} />
                          <div className={styles.screenLine} style={{ width: '88%' }} />
                          <div className={styles.screenBtn} style={{ background: slide.accent }} />
                        </div>
                      </div>
                    </div>
                    {/* Badges flutuantes */}
                    <div className={[styles.floatCard, styles.floatCard1].join(' ')}>
                      <span className={styles.floatIcon}>{slide.stat1.icon}</span>
                      <span>{slide.stat1.label}</span>
                    </div>
                    <div className={[styles.floatCard, styles.floatCard2].join(' ')}>
                      <span className={styles.floatIcon}>{slide.stat2.icon}</span>
                      <span>{slide.stat2.label}</span>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className={styles.controls}>
        {/* Dots */}
        <div className={styles.dots} role="tablist" aria-label="Selecionar slide">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === selectedIndex}
              aria-label={`Slide ${i + 1}: ${slides[i].eyebrow}`}
              className={[styles.dot2, i === selectedIndex && styles.dotActive].filter(Boolean).join(' ')}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>

        {/* Setas */}
        <div className={styles.arrows}>
          <button
            className={styles.arrow}
            onClick={scrollPrev}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            className={styles.arrow}
            onClick={scrollNext}
            aria-label="Próximo slide"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
