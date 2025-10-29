import { Hero } from '@/components/hero'
import { WorkPreview } from '@/components/work-preview'
import { Footer } from '@/components/footer'

export default async function Home() {
  return (
    <>
      <Hero />
      <WorkPreview />
      <Footer />
    </>
  )
}
