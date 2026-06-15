import { useEffect } from 'react'

export default function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-10 anim-fade-in"
      style={{ background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(14px)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full anim-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
        />

        {/* Nombre del plato */}
        <div
          className="absolute bottom-0 left-0 right-0 px-5 py-4 rounded-b-sm"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)' }}
        >
          <p className="font-display text-2xl leading-tight" style={{ color: 'var(--cream)' }}>
            {alt}
          </p>
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center cursor-pointer backdrop-blur-sm"
          style={{
            borderRadius: '2px',
            border: '1px solid var(--border)',
            background: 'rgba(10,10,10,0.9)',
            color: 'var(--muted)',
            transition: 'color 0.2s ease, border-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--cream)'
            e.currentTarget.style.borderColor = 'rgba(217,168,24,0.45)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--muted)'
            e.currentTarget.style.borderColor = 'var(--border)'
          }}
          aria-label="Cerrar"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 1L12 12M12 1L1 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <p
        className="fixed bottom-5 left-0 right-0 text-center label-caps pointer-events-none"
        style={{ color: 'rgba(100,100,100,0.6)' }}
      >
        Clic en cualquier lugar para cerrar · Esc
      </p>
    </div>
  )
}
