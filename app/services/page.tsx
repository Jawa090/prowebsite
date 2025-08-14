import Header from '@/components/Header'
import ServicesHero from '@/components/ServicesHero'
import OurServices from '@/components/OurServices'
import StartProject from '@/components/StartProject'
import FAQ from '@/components/FAQ'
import DownloadCatalogue from '@/components/DownloadCatalogue'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      <OurServices />
      <StartProject />
      <FAQ />
      <DownloadCatalogue />
      <Footer />
    </main>
  )
} 