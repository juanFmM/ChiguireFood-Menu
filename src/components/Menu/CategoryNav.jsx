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
      className="sticky top-0 z-20 border-b border-[#242424] py-0"
      style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex gap-0 overflow-x-auto [&::-webkit-scrollbar]:hidden justify-start sm:justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              style={{ animationDelay: `${i * 45}ms` }}
              className={`cat-pill anim-fade-in flex-shrink-0 px-4 py-4 text-xs font-semibold tracking-[0.16em] uppercase cursor-pointer transition-colors
                ${active === cat.id ? 'active text-[#e8c000]' : 'text-[#777777] hover:text-[#f5f5f5]'}`}
            >
              <i className={`${cat.icon} mr-1.5 text-[0.7rem]`} />
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
