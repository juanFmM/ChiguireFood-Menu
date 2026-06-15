import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

const BADGE_CONFIG = {
  Popular:   { icon: 'fa-solid fa-star',           color: 'var(--gold)' },
  Especial:  { icon: 'fa-solid fa-fire',            color: 'var(--gold-bright)' },
  Signature: { icon: 'fa-solid fa-crown',           color: 'var(--gold-bright)' },
  Quesero:   { icon: 'fa-solid fa-cheese',          color: 'var(--gold-soft)' },
  Favorito:  { icon: 'fa-solid fa-drumstick-bite',  color: 'var(--gold-soft)' },
  Kids:      { icon: 'fa-solid fa-child-reaching',  color: 'var(--gold)' },
  Compartir: { icon: 'fa-solid fa-people-group',    color: 'var(--gold)' },
}

export default function MenuItemCard({ item, index = 0 }) {
  const [lightbox, setLightbox] = useState(false)
  const delay = ['delay-0','delay-1','delay-2','delay-3','delay-4','delay-5'][index % 6]
  const cfg = item.badge ? BADGE_CONFIG[item.badge] : null

  return (
    <>
      <article className={`menu-card anim-fade-up ${delay} rounded-lg overflow-hidden flex flex-col`}>

        {/* ── Imagen ─────────────────────────────────────────────────────── */}
        {item.image && (
          <div
            className="card-img h-52 cursor-zoom-in group"
            onClick={() => setLightbox(true)}
            role="button"
            tabIndex={0}
            aria-label={`Ver foto de ${item.name}`}
            onKeyDown={(e) => e.key === 'Enter' && setLightbox(true)}
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              draggable={false}
              className="w-full h-full object-cover"
            />

            {/* Zoom hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div
                className="rounded-sm px-3 py-2 backdrop-blur-sm"
                style={{ background: 'rgba(0,0,0,0.78)', border: '1px solid rgba(80,80,80,0.5)' }}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ color: 'var(--tan)' }}>
                  <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M13 13L17 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M6 8.5H11M8.5 6V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Badge sobre imagen */}
            {cfg && (
              <span
                className="badge-soft absolute top-3 left-3 z-10 text-[0.6rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm"
                style={{
                  background: 'rgba(0,0,0,0.82)',
                  border: '1px solid rgba(217,168,24,0.35)',
                  color: cfg.color,
                }}
              >
                <i className={`${cfg.icon} text-[0.55rem]`} />
                {item.badge}
              </span>
            )}
          </div>
        )}

        {/* ── Body ───────────────────────────────────────────────────────── */}
        <div className="p-5 flex flex-col gap-2.5 flex-1">

          {/* Badge sin imagen */}
          {!item.image && cfg && (
            <span
              className="badge-soft self-start text-[0.6rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5"
              style={{
                background: 'rgba(217,168,24,0.08)',
                border: '1px solid rgba(217,168,24,0.25)',
                color: cfg.color,
              }}
            >
              <i className={`${cfg.icon} text-[0.55rem]`} />
              {item.badge}
            </span>
          )}

          {/* Nombre */}
          <h3 className="font-display text-[1.55rem] leading-tight" style={{ color: 'var(--cream)' }}>
            {item.name}
          </h3>

          {/* Descripción */}
          <p className="font-serif text-[1.15rem] leading-snug flex-1 italic" style={{ color: 'var(--tan)' }}>
            {item.description}
          </p>

          {/* Precio con variantes */}
          {item.variants ? (
            <div className="pt-3 mt-1 flex flex-col gap-1.5" style={{ borderTop: '1px solid var(--border)' }}>
              {item.variants.map((v) => (
                <div key={v.label} className="flex items-center justify-between">
                  <span className="font-serif italic text-[1.12rem]" style={{ color: 'var(--tan)' }}>
                    {v.label}
                  </span>
                  <span className="flex items-baseline gap-1">
                    <span className="price-tag text-[1.3rem] leading-none">${v.price}</span>
                    <span className="label-caps text-[0.5rem]">RD$</span>
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-between pt-3 mt-1" style={{ borderTop: '1px solid var(--border)' }}>
              {item.price ? (
                <span className="price-tag text-[1.75rem] leading-none">${item.price}</span>
              ) : (
                <span className="font-serif italic text-base" style={{ color: 'var(--muted)' }}>
                  Consultar precio
                </span>
              )}
              <span className="label-caps text-[0.55rem]">RD$</span>
            </div>
          )}
        </div>
      </article>

      {lightbox && item.image && (
        <ImageLightbox src={item.image} alt={item.name} onClose={() => setLightbox(false)} />
      )}
    </>
  )
}
