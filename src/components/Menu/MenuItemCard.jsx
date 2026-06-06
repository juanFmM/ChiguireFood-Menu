const BADGE_CONFIG = {
  Popular:   { icon: 'fa-solid fa-star',          text: '#e8c000' },
  Especial:  { icon: 'fa-solid fa-fire',           text: '#ffd400' },
  Signature: { icon: 'fa-solid fa-crown',          text: '#ffd400' },
  Quesero:   { icon: 'fa-solid fa-cheese',         text: '#e8c000' },
  Favorito:  { icon: 'fa-solid fa-drumstick-bite', text: '#e8c000' },
  Kids:      { icon: 'fa-solid fa-child-reaching', text: '#e8c000' },
  Compartir: { icon: 'fa-solid fa-people-group',   text: '#e8c000' },
}

export default function MenuItemCard({ item, index = 0 }) {
  const delay = ['delay-0','delay-1','delay-2','delay-3','delay-4','delay-5'][index % 6]
  const cfg = item.badge ? BADGE_CONFIG[item.badge] : null

  return (
    <article className={`menu-card anim-fade-up ${delay} rounded-lg overflow-hidden flex flex-col`}>
      {/* Imagen del plato */}
      {item.image && (
        <div className="card-img h-52">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {cfg && (
            <span
              className="badge-soft absolute top-3 left-3 z-10 text-[0.6rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm"
              style={{ background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(232,192,0,0.4)', color: cfg.text }}
            >
              <i className={`${cfg.icon} text-[0.55rem]`} />
              {item.badge}
            </span>
          )}
        </div>
      )}

      <div className="p-5 flex flex-col gap-2.5 flex-1">
        {/* Badge cuando no hay imagen */}
        {!item.image && cfg && (
          <span
            className="badge-soft self-start text-[0.6rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5"
            style={{ background: 'rgba(232,192,0,0.1)', border: '1px solid rgba(232,192,0,0.28)', color: cfg.text }}
          >
            <i className={`${cfg.icon} text-[0.55rem]`} />
            {item.badge}
          </span>
        )}

        <h3 className="font-display text-[1.4rem] leading-tight text-[#f5f5f5]">
          {item.name}
        </h3>

        <p className="font-serif text-[1.02rem] leading-snug text-[#b5b5b5] flex-1 italic">
          {item.description}
        </p>

        {item.variants ? (
          <div className="pt-3 mt-1 border-t border-[#242424] flex flex-col gap-1.5">
            {item.variants.map((v) => (
              <div key={v.label} className="flex items-center justify-between">
                <span className="font-serif italic text-[1.02rem] text-[#b5b5b5]">{v.label}</span>
                <span className="flex items-baseline gap-1">
                  <span className="price-tag text-[1.3rem] leading-none">${v.price}</span>
                  <span className="label-caps text-[0.5rem]">RD$</span>
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-between pt-3 mt-1 border-t border-[#242424]">
            {item.price ? (
              <span className="price-tag text-[1.75rem] leading-none">
                ${item.price}
              </span>
            ) : (
              <span className="font-serif italic text-base text-[#8a8a8a]">Consultar precio</span>
            )}
            <span className="label-caps text-[0.55rem]">RD$</span>
          </div>
        )}
      </div>
    </article>
  )
}
