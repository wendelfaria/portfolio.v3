import SEOHead from '@/components/common/SEOHead/SEOHead'
import HeroCarousel from '@/components/sections/HeroCarousel/HeroCarousel'
import AboutPreview from '@/components/sections/AboutPreview/AboutPreview'
import ServicesGrid from '@/components/sections/ServicesGrid/ServicesGrid'
import HowItWorks from '@/components/sections/HowItWorks/HowItWorks'
import PortfolioPreview from '@/components/sections/PortfolioPreview/PortfolioPreview'
import Differentials from '@/components/sections/Differentials/Differentials'
import Testimonials from '@/components/sections/Testimonials/Testimonials'
import FAQ from '@/components/sections/FAQ/FAQ'
import ContactCTA from '@/components/sections/ContactCTA/ContactCTA'

export default function Home() {
  return (
    <>
      <SEOHead
        description="Criação de landing pages profissionais para psicólogos, dentistas, advogados, personal trainers e outros profissionais autônomos. Rápido, seguro e otimizado para converter."
        canonical="/"
      />
      <HeroCarousel />
      <AboutPreview />
      <ServicesGrid />
      <HowItWorks />
      <PortfolioPreview />
      <Differentials />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  )
}
