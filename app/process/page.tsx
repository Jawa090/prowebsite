import Image from 'next/image'
import Header from '@/components/Header'
import ProcessHero from '@/components/ProcessHero'
import SpinningSection from '@/components/SpinningSection'
import KnittingSection from '@/components/KnittingSection'
import DyeingSection from '@/components/DyeingSection'
import ManufacturingSection from '@/components/ManufacturingSection'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'

export default function ProcessPage() {
  return (
    <main>
      <Header />
      <ProcessHero />
      <SpinningSection />
      <KnittingSection />
      <DyeingSection />
      <ManufacturingSection />
      <DownloadSection />
      <Footer />
    </main>
  )
} 