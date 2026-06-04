const BADGE_CONFIG = {
  Popular:   { icon: 'fa-solid fa-star',          text: '#d9a818' },
  Especial:  { icon: 'fa-solid fa-fire',           text: '#b5702e' },
  Signature: { icon: 'fa-solid fa-crown',          text: '#e8c000' },
  Quesero:   { icon: 'fa-solid fa-cheese',         text: '#c9991a' },
  Favorito:  { icon: 'fa-solid fa-drumstick-bite', text: '#b5702e' },
  Kids:      { icon: 'fa-solid fa-child-reaching', text: '#a8894e' },
  Compartir: { icon: 'fa-solid fa-people-group',   text: '#d9a818' },
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
              style={{ background: 'rgba(23,18,12,0.78)', border: '1px solid rgba(217,168,24,0.35)', color: cfg.text }}
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
            style={{ background: 'rgba(217,168,24,0.08)', border: '1px solid rgba(217,168,24,0.25)', color: cfg.text }}
          >
            <i className={`${cfg.icon} text-[0.55rem]`} />
            {item.badge}
          </span>
        )}

        <h3 className="font-display text-[1.4rem] leading-tight text-[#f2e8d5]">
          {item.name}
        </h3>

        <p className="font-serif text-[1.02rem] leading-snug text-[#c2ad8a] flex-1 italic">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-3 mt-1 border-t border-[#3a2c1a]">
          {item.price ? (
            <span className="price-tag text-[1.75rem] leading-none">
              ${item.price}
            </span>
          ) : (
            <span className="font-serif italic text-base text-[#8a7656]">Consultar precio</span>
          )}
          <span className="label-caps text-[0.55rem]">RD$</span>
        </div>
      </div>
    </article>
  )
}
