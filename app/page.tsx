import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import OurCollection from '../components/OurCollection'
import Testimonials from '../components/Testimonials'
import BlogSection from '../components/BlogSection'
import DownloadSection from '../components/DownloadSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <OurCollection />
      <Testimonials />
      <BlogSection />
      <DownloadSection />
      <Footer />
    </main>
  )
} 