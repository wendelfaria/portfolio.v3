import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import WhatsAppFloat from '@/components/common/WhatsAppFloat/WhatsAppFloat'
import ScrollToTop from '@/components/common/ScrollToTop/ScrollToTop'
import AppRoutes from '@/routes/AppRoutes'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
