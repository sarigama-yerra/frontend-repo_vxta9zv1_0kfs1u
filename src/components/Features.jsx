import { Droplets, Gauge, ShieldCheck, Flame } from 'lucide-react'

const features = [
  {
    icon: Droplets,
    title: 'Clean Reflux',
    desc: 'Optimized column geometry for crisp separation and minimal impurities.'
  },
  {
    icon: Gauge,
    title: 'Precision Control',
    desc: 'Dial-in flow, pressure, and temperature with micrometer accuracy.'
  },
  {
    icon: ShieldCheck,
    title: 'Food-Grade Build',
    desc: 'Stainless interiors and lead-free solder joints. Nothing but purity.'
  },
  {
    icon: Flame,
    title: 'Efficient Heat',
    desc: 'Multi-fuel compatibility and thermal baffling for stable runs.'
  }
]

export default function Features() {
  return (
    <section id="craft" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 items-end gap-12 mb-16">
          <div>
            <p className="uppercase tracking-[0.35em] text-white/60 text-xs mb-4">Engineering</p>
            <h2 className="text-4xl md:text-5xl font-semibold">Purpose-built for clarity</h2>
          </div>
          <p className="text-white/70 max-w-2xl md:justify-self-end">
            From small-batch pot stills to high-reflux towers, each piece is bench-tested and tuned for repeatable results.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition">
              <div className="w-12 h-12 rounded-full bg-white/[0.06] flex items-center justify-center mb-4">
                <Icon className="text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">{title}</h3>
              <p className="text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
