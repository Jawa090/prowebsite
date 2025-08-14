import Header from '@/components/Header'
import StoryHero from '@/components/StoryHero'
import WhyUs from '@/components/WhyUs'
import Timeline from '@/components/Timeline'
import DownloadCatalogue from '@/components/DownloadCatalogue'
import Footer from '@/components/Footer'

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <StoryHero />
      <WhyUs />
      <Timeline />
      <DownloadCatalogue />
      <Footer />
    </main>
  )
}

