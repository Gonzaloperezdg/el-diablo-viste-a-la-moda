'use client'

import { useEffect, useState } from 'react'

interface Props {
  onBegin: () => void
}

export default function LandingScreen({ onBegin }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`min-h-dvh flex flex-col items-center justify-center px-6 relative transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Top masthead */}
      <div className="absolute top-8 left-0 right-0 flex justify-between px-6 md:px-12">
        <span className="font-ui text-caption text-ink-tertiary tracking-widest uppercase">
          No. 01
        </span>
        <span className="font-ui text-caption text-ink-tertiary tracking-widest uppercase">
          Edición El Diablo Viste a la Moda
        </span>
      </div>

      {/* Main content */}
      <div className="max-w-2xl w-full stagger-children text-center">
        {/* RUNWAY title */}
        <h1
          className="font-display font-light text-ink-primary mb-8 tracking-tight leading-none text-balance"
          style={{ fontSize: 'clamp(4rem, 15vw, 11rem)', letterSpacing: '-0.03em' }}
        >
          RUNWAY
        </h1>

        {/* Divider */}
        <div className="divider-line mb-8 mx-auto max-w-xs opacity-30" />

        {/* Tagline */}
        <p className="font-display font-light text-subhead text-ink-secondary italic mb-2 text-pretty">
          Inspirado en <em>El Diablo Viste a la Moda.</em>
        </p>
        <p className="font-display font-light text-body-l text-ink-tertiary mb-16 text-pretty">
          Un perfil editorial de 4 minutos.
        </p>

        {/* CTA */}
        <button
          onClick={onBegin}
          className="group relative font-ui text-caption tracking-widest uppercase text-ink-primary px-10 py-4 border border-ink-tertiary hover:border-ink-primary transition-[border-color] duration-300"
          style={{ letterSpacing: '0.2em' }}
        >
          <span className="relative z-10">Comenzar</span>
          <div className="absolute inset-0 bg-ink-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
          <span className="absolute inset-0 flex items-center justify-center text-bg-primary opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 font-ui text-caption tracking-widest uppercase" style={{ letterSpacing: '0.2em' }}>
            Comenzar
          </span>
        </button>
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center px-6">
        <p className="font-ui text-caption text-ink-tertiary text-center" style={{ letterSpacing: '0.06em' }}>
          Cuatro tipos · Quince preguntas · Una lectura honesta
        </p>
      </div>
    </div>
  )
}
