const BADGE_CONFIG = {
  Popular:   { icon: 'fa-solid fa-star',          bg: 'rgba(240,180,41,0.15)', border: 'rgba(240,180,41,0.35)', text: '#f0b429' },
  Especial:  { icon: 'fa-solid fa-fire',           bg: 'rgba(224,123,57,0.15)', border: 'rgba(224,123,57,0.35)', text: '#e07b39' },
  Signature: { icon: 'fa-solid fa-crown',          bg: 'rgba(255,220,100,0.12)', border: 'rgba(255,220,100,0.3)', text: '#fcd34d' },
  Quesero:   { icon: 'fa-solid fa-cheese',         bg: 'rgba(240,180,41,0.1)',  border: 'rgba(240,180,41,0.2)',  text: '#d4a017' },
  Favorito:  { icon: 'fa-solid fa-drumstick-bite', bg: 'rgba(224,123,57,0.1)',  border: 'rgba(224,123,57,0.2)',  text: '#e07b39' },
  Kids:      { icon: 'fa-solid fa-child',          bg: 'rgba(132,204,22,0.1)',  border: 'rgba(132,204,22,0.25)', text: '#84cc16' },
  Compartir: { icon: 'fa-solid fa-people-group',   bg: 'rgba(240,180,41,0.1)',  border: 'rgba(240,180,41,0.2)',  text: '#f0b429' },
}

export default function MenuItemCard({ item, index = 0 }) {
  const delay = ['delay-0','delay-1','delay-2','delay-3','delay-4','delay-5'][index % 6]
  const cfg = item.badge ? BADGE_CONFIG[item.badge] : null

  return (
    <article
      className={`menu-card anim-fade-up ${delay} bg-[#141008] border border-[#2a2010] rounded-xl overflow-hidden flex flex-col`}
    >
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Badge */}
        {cfg && (
          <span
            className="badge-pop self-start text-[0.6rem] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5"
            style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.text }}
          >
            <i className={`${cfg.icon} text-[0.55rem]`} />
            {item.badge}
          </span>
        )}

        {/* Name */}
        <h3 className="font-display text-[1.45rem] leading-tight tracking-wide text-[#f5ead8]">
          {item.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#6b5a3e] leading-relaxed flex-1 font-light">
          {item.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between pt-3 border-t border-[#2a2010]">
          {item.price ? (
            <span className="price-tag font-display text-3xl tracking-wide">
              ${item.price}
            </span>
          ) : (
            <span className="font-serif italic text-sm text-[#4a3e2a]">Consultar precio</span>
          )}
          <i className="fa-solid fa-circle-dot text-[#f0b429] opacity-30 text-xs" />
        </div>
      </div>
    </article>
  )
}
