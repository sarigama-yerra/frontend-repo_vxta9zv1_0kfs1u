import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-white/60 text-xs mb-6">Mendeleeff — Established MMXXV</p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            Moonshine Stills, Reimagined in Monochrome
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Precision-crafted copper and stainless apparatus for the modern alchemist. Minimal, resilient, and engineered for impeccable purity.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#products" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">Explore Collection</a>
            <a href="#craft" className="px-6 py-3 rounded-full border border-white/30 hover:border-white/60 transition">Our Craft</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
