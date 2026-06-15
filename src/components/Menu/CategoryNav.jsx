import { useEffect, useState } from 'react'

export default function CategoryNav({ categories }) {
  const [active, setActive] = useState(categories[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(entry.target.id.replace('cat-', ''))
        })
      },
      { rootMargin: '-28% 0px -60% 0px' }
    )
    categories.forEach((cat) => {
      const el = document.getElementById(`cat-${cat.id}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [categories])

  function scrollTo(id) {
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className="sticky top-0 z-20 py-0"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg) 90%, transparent)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex gap-0 overflow-x-auto [&::-webkit-scrollbar]:hidden justify-start sm:justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              style={{
                animationDelay: `${i * 45}ms`,
                color: active === cat.id ? 'var(--gold)' : 'var(--muted)',
              }}
              className={`cat-pill anim-fade-in flex-shrink-0 px-5 py-5 text-[0.95rem] font-bold tracking-[0.14em] uppercase cursor-pointer transition-colors flex items-center gap-2 ${
                active === cat.id ? 'active' : ''
              }`}
            >
              <i className={`${cat.icon} text-[0.9rem]`} />
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
