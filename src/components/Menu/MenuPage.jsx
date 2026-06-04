import CategoryNav from './CategoryNav'
import MenuSection  from './MenuSection'

export default function MenuPage({ categories, items }) {
  const activeCategories = categories.filter((cat) =>
    items.some((item) => item.categoryId === cat.id)
  )

  return (
    <div className="min-h-screen bg-[#17120c]">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-16 pb-12">
        {/* Warm earthy wash (mate, sin neón) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 75% 55% at 50% 0%, rgba(217,168,24,0.07) 0%, transparent 65%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Logo real */}
          <div className="anim-scale-in flex justify-center mb-6">
            <img
              src="/img/logo.png"
              alt="ChiguireFood — Comida Venezolana"
              className="logo-img h-36 sm:h-44 w-auto"
            />
          </div>

          {/* Divider artesanal */}
          <div className="anim-fade-in delay-2 flex items-center justify-center gap-4 mb-3">
            <span className="flex-shrink-0 w-16 gold-rule" />
            <span className="label-caps">@chiguirefoodrd</span>
            <span className="flex-shrink-0 w-16 gold-rule" />
          </div>

          <p className="anim-fade-in delay-3 font-serif italic text-lg text-[#8a7656]">
            Sabor venezolano, hecho con honestidad
          </p>
          <p className="anim-fade-in delay-3 label-caps mt-3 text-[#5a4a32]">
            10% de servicio no incluido
          </p>
        </div>
      </header>

      {/* ── Nav ────────────────────────────────────────────────────────────── */}
      <CategoryNav categories={activeCategories} />

      {/* ── Menu ───────────────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 py-14">
        {/* Banner especial */}
        <div className="note-banner anim-fade-in delay-1 rounded-lg px-5 py-3.5 mb-12 flex items-center gap-3">
          <i className="fa-solid fa-calendar-days text-[#d9a818] text-lg" />
          <p className="text-sm text-[#c2ad8a]">
            <span className="font-semibold text-[#e8c000]">Bandeja Mixta</span> disponible{' '}
            <span className="text-[#b5702e] font-semibold">lunes y miércoles</span>{' '}
            <span className="text-[#8a7656]">· precio especial $1400</span>
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
      <footer className="text-center py-12 border-t border-[#251c11]">
        <img src="/img/logo.png" alt="" className="h-16 w-auto mx-auto opacity-25 mb-4" />
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-10 gold-rule" />
          <i className="fa-solid fa-utensils text-[#5a4a32] text-xs" />
          <span className="w-10 gold-rule" />
        </div>
        <p className="label-caps text-[#5a4a32]">
          © ChiguireFood · Comida Venezolana
        </p>
        <p className="label-caps mt-1 text-[#3a2e1c]">
          10% de servicio no incluido
        </p>
      </footer>
    </div>
  )
}
