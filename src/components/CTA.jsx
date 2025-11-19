export default function CTA() {
  return (
    <section id="contact" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold">Reserve your still</h3>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Each piece is built to order. Tell us your batch size and desired profile — we’ll spec the ideal configuration.
          </p>
          <form className="mt-8 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <input required type="text" placeholder="Name" className="px-4 py-3 rounded-full bg-white/[0.06] border border-white/10 focus:outline-none focus:border-white/40 placeholder-white/40" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-full bg-white/[0.06] border border-white/10 focus:outline-none focus:border-white/40 placeholder-white/40" />
            <button type="submit" className="px-6 py-3 rounded-full bg-white text-black font-medium">Request Quote</button>
          </form>
          <p className="mt-4 text-xs text-white/50">We’ll get back within 24 hours.</p>
        </div>
      </div>
    </section>
  )
}
