import { motion } from 'framer-motion'

const products = [
  {
    name: 'M1 Pot Still',
    subtitle: '8L copper, classic profile',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'M2 Reflux Tower',
    subtitle: 'Stainless column, packed',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'M3 Hybrid',
    subtitle: 'Pot + reflux interchange',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="uppercase tracking-[0.35em] text-white/60 text-xs mb-4">Collection</p>
            <h2 className="text-4xl md:text-5xl font-semibold">The Mendeleeff Line</h2>
          </div>
          <a href="#contact" className="hidden md:inline-block px-5 py-2 rounded-full border border-white/30 hover:border-white/60 transition">Request Catalog</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.15em] text-white/60">{p.subtitle}</div>
                  <div className="text-xl font-medium">{p.name}</div>
                </div>
                <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">Inquire</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
