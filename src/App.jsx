import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black/80">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} Mendeleeff Atelier — All rights reserved.</div>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="/test" className="hover:text-white">System</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
