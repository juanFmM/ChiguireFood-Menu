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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-16 pb-12">
        {/* Parallax warm glow */}
        <div
          ref={heroRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 75% 55% at 50% 0%, rgba(217,168,24,0.08) 0%, transparent 65%)',
          }}
        />
        {/* Subtle scanlines texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.018,
            backgroundImage:
              'repeating-linear-gradient(0deg,#ffffff 0,#ffffff 1px,transparent 1px,transparent 52px)',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Logo */}
          <div className="anim-scale-in delay-0 flex justify-center mb-6">
            <img
              src="/img/logo.png"
              alt="ChiguireFood — Comida Venezolana"
              className="logo-img h-36 sm:h-44 w-auto"
            />
          </div>

          {/* Divider artesanal */}
          <div className="anim-fade-in delay-2 flex items-center justify-center gap-4 mb-3">
            <span className="flex-shrink-0 w-16 gold-rule" />
            <span className="label-caps tracking-[0.28em]">@chiguirefoodrd</span>
            <span className="flex-shrink-0 w-16 gold-rule" />
          </div>

          <p
            className="anim-fade-in delay-3 font-serif italic text-lg"
            style={{ color: 'var(--muted)' }}
          >
            Sabor venezolano, hecho con honestidad
          </p>
        </div>
      </header>

      {/* ── Nav ────────────────────────────────────────────────────────────── */}
      <CategoryNav categories={activeCategories} />

      {/* ── Menu ───────────────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 py-14">
        {/* Banner especial */}
        <div className="note-banner anim-fade-in delay-1 rounded-lg px-5 py-3.5 mb-12 flex items-center gap-3">
          <i className="fa-solid fa-calendar-days text-lg flex-shrink-0" style={{ color: 'var(--gold)' }} />
          <p className="text-sm" style={{ color: 'var(--tan)' }}>
            <span className="font-semibold" style={{ color: 'var(--gold-bright)' }}>Bandeja Mixta</span>{' '}
            disponible{' '}
            <span className="font-semibold" style={{ color: 'var(--gold-soft)' }}>lunes y miércoles</span>{' '}
            <span style={{ color: 'var(--muted)' }}>· precio especial $1400</span>
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
      <footer
        className="text-center py-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <img
          src="/img/logo.png"
          alt=""
          className="h-16 w-auto mx-auto mb-4"
          style={{ opacity: 0.22 }}
        />
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-10 gold-rule" />
          <i className="fa-solid fa-utensils text-xs" style={{ color: 'var(--faint)' }} />
          <span className="w-10 gold-rule" />
        </div>
        <p className="label-caps" style={{ color: 'var(--faint)' }}>
          © ChiguireFood · Comida Venezolana
        </p>
        <p className="label-caps mt-1" style={{ color: 'var(--border)' }}>
          10% de servicio no incluido
        </p>
      </footer>
    </div>
  )
}
