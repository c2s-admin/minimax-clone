import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ResearchSection from '@/components/ResearchSection'
import ProductSection from '@/components/ProductSection'
import NewsSection from '@/components/NewsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ResearchSection />
      <ProductSection />
      <NewsSection />
      <Footer />
    </main>
  )
}
