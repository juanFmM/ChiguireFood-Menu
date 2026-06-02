import MenuItemCard from './MenuItemCard'

export default function MenuSection({ category, items }) {
  if (items.length === 0) return null

  return (
    <section id={`cat-${category.id}`} className="scroll-mt-14 mb-16">
      {/* Header */}
      <div className="anim-fade-in mb-8">
        <div className="flex items-center gap-5">
          <div className="flex-1 h-px section-line" />
          <div className="text-center">
            <i className={`${category.icon} text-[1.6rem] text-[#f0b429] block mb-2`} />
            <p className="label-caps mb-1">{category.description}</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#f5ead8] leading-tight tracking-wide">
              {category.name}
            </h2>
          </div>
          <div className="flex-1 h-px section-line" />
        </div>
        {/* Accent */}
        <div className="flex justify-center mt-3 gap-1">
          <span className="w-1 h-1 rounded-full bg-[#f0b429] opacity-70" />
          <span className="w-1 h-1 rounded-full bg-[#e07b39] opacity-50" />
          <span className="w-1 h-1 rounded-full bg-[#f0b429] opacity-30" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <MenuItemCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
