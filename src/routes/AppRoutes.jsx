import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('@/pages/Home/Home'))
const About = lazy(() => import('@/pages/About/About'))
const Services = lazy(() => import('@/pages/Services/Services'))
const Portfolio = lazy(() => import('@/pages/Portfolio/Portfolio'))
const Contact = lazy(() => import('@/pages/Contact/Contact'))
const Privacy = lazy(() => import('@/pages/Privacy/Privacy'))
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'))

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <span className="srOnly">Carregando página...</span>
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
