import { useEffect, useRef } from 'react'
import CategoryNav from './CategoryNav'
import MenuSection  from './MenuSection'

export default function MenuPage({ categories, items }) {
  const activeCategories = categories.filter((cat) =>
    items.some((item) => item.categoryId === cat.id)
  )

  const heroRef = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current)
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0b0804]">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-14 pb-12">
        {/* Warm radial glow */}
        <div
          ref={heroRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(240,180,41,0.12) 0%, rgba(224,123,57,0.06) 40%, transparent 70%)',
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #f0b429 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Logo */}
          <div className="anim-scale-in delay-0 flex justify-center mb-5">
            <img
              src="/logo.svg"
              alt="ChiguireFood"
              className="logo-float logo-glow h-24 sm:h-32 w-auto"
            />
          </div>

          {/* Divider line */}
          <div className="anim-fade-in delay-2 flex items-center justify-center gap-4 mb-3">
            <span className="flex-shrink-0 w-14 h-px bg-gradient-to-r from-transparent to-[#f0b429]/40" />
            <span className="label-caps tracking-[0.2em] text-[#6b5a3e]">@chiguirefoodrd</span>
            <span className="flex-shrink-0 w-14 h-px bg-gradient-to-l from-transparent to-[#f0b429]/40" />
          </div>

          <p className="anim-fade-in delay-3 label-caps" style={{ color: '#3d3018' }}>
            10% de servicio no incluido
          </p>
        </div>
      </header>

      {/* ── Nav ────────────────────────────────────────────────────────────── */}
      <CategoryNav categories={activeCategories} />

      {/* ── Menu ───────────────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 py-14">
        {/* Lunes y Miércoles special banner */}
        <div className="note-banner anim-fade-in delay-1 rounded-xl px-5 py-3 mb-10 flex items-center gap-3">
          <i className="fa-solid fa-calendar-days text-[#f0b429] text-lg" />
          <p className="text-sm font-semibold text-[#f0b429]">
            Bandeja Mixta disponible <span className="text-[#e07b39]">lunes y miércoles</span>{' '}
            <span className="text-[#6b5a3e] font-normal">· Precio especial $1400</span>
          </p>
        </div>

        {activeCategories.map((cat) => (
          <MenuSection
            key={cat.id}
            category={cat}
            items={items.filter((i) => i.categoryId === cat.id)}
          />
        ))}
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="text-center py-10 border-t border-[#1a1508]">
        <div className="flex items-center justify-center gap-4 mb-3">
          <span className="w-8 h-px bg-[#2a2010]" />
          <img src="/logo.svg" alt="" className="h-8 w-auto opacity-15" />
          <span className="w-8 h-px bg-[#2a2010]" />
        </div>
        <p className="label-caps" style={{ color: '#2a2010' }}>
          © ChiguireFood · Todos los derechos reservados
        </p>
        <p className="label-caps mt-1" style={{ color: '#2a2010' }}>
          10% de servicio no incluido
        </p>
      </footer>
    </div>
  )
}
