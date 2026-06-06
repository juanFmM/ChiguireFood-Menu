import MenuItemCard from './MenuItemCard'

export default function MenuSection({ category, items }) {
  if (items.length === 0) return null

  return (
    <section id={`cat-${category.id}`} className="scroll-mt-16 mb-20">
      {/* Header */}
      <div className="anim-fade-in mb-9">
        <div className="flex items-center gap-6">
          <div className="flex-1 section-line" />
          <div className="text-center">
            <i className={`${category.icon} text-[1.5rem] text-[#e8c000] block mb-3`} />
            <p className="label-caps mb-1.5">{category.description}</p>
            <h2 className="font-display text-3xl sm:text-[2.4rem] text-[#f5f5f5] leading-tight">
              {category.name}
            </h2>
          </div>
          <div className="flex-1 section-line" />
        </div>
        {/* Accent */}
        <div className="flex justify-center mt-4">
          <span className="w-12 gold-rule" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <MenuItemCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
