'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { TypeKey } from '@/lib/questions'
import { typesData } from '@/lib/types-data'
import { ScoreResult } from '@/lib/scoring'

interface Props {
  result: ScoreResult
  onRestart: () => void
}

function Section({ children, elevated = false, accentBg = false, accentColor = '' }: {
  children: React.ReactNode
  elevated?: boolean
  accentBg?: boolean
  accentColor?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="result-section"
      style={{
        backgroundColor: accentBg ? `${accentColor}08` : elevated ? '#141416' : '#0A0A0B',
        transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
      }}
    >
      <div className="max-w-2xl mx-auto w-full">
        {children}
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-ui text-caption text-ink-tertiary mb-8 md:mb-12 uppercase" style={{ letterSpacing: '0.15em' }}>
      {children}
    </p>
  )
}

export default function ResultScreen({ result, onRestart }: Props) {
  const { dominant, shadow } = result
  const type = typesData[dominant]
  const shadowType = typesData[shadow]
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="min-h-dvh">

      {/* ─── COVER — grid editorial imagen + tipografía ─── */}
      <div className="flex flex-col md:grid md:grid-cols-[55fr_45fr] md:min-h-dvh overflow-hidden">

        {/* Contenido: texto del tipo */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-24 md:min-h-dvh order-2 md:order-1">
          <div className="stagger-children">
            {/* Masthead */}
            <p
              className="font-ui text-caption text-ink-tertiary mb-10 md:mb-16 uppercase"
              style={{ letterSpacing: '0.15em' }}
            >
              RUNWAY · No. 01 · Edición El Diablo Viste a la Moda
            </p>

            {/* Nombre del tipo */}
            <h1
              className="font-display font-light text-ink-primary mb-3 text-balance"
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 7rem)',
                letterSpacing: '-0.025em',
                lineHeight: 0.92,
              }}
            >
              {type.name}
            </h1>

            {/* Nombre e intérprete del personaje */}
            <div className="mb-8 md:mb-10">
              <p
                className="font-ui text-ink-tertiary uppercase"
                style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}
              >
                {type.characterName}
              </p>
              <p
                className="font-ui text-ink-tertiary mt-1"
                style={{ fontSize: '0.65rem', letterSpacing: '0.1em', fontStyle: 'italic' }}
              >
                {type.characterActor}
              </p>
            </div>

            {/* Línea de acento */}
            <div
              className="h-px mb-8 md:mb-10 max-w-[200px] opacity-40"
              style={{ background: type.accentColor }}
            />

            {/* Tagline */}
            <p
              className="font-display font-light italic text-ink-secondary text-pretty"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)', maxWidth: '420px' }}
            >
              {type.tagline}
            </p>

            {/* Scroll cue */}
            <div className="mt-14 md:mt-20 flex flex-col gap-2 opacity-25">
              <div className="w-px h-12" style={{ background: '#F4F2EE' }} />
            </div>
          </div>
        </div>

        {/* Imagen del personaje */}
        <div className="relative order-1 md:order-2 aspect-[3/4] md:aspect-auto md:min-h-dvh character-image-reveal">
          <Image
            src={type.image}
            alt={type.characterName}
            fill
            className="object-cover object-top"
            priority
          />
          {/* Degradado de fusión izquierda — solo desktop */}
          <div
            className="hidden md:block absolute inset-0"
            style={{ background: 'linear-gradient(to right, #0A0A0B 5%, transparent 45%)' }}
          />
          {/* Degradado inferior — solo mobile */}
          <div
            className="md:hidden absolute inset-x-0 bottom-0 h-2/5"
            style={{ background: 'linear-gradient(to top, #0A0A0B, transparent)' }}
          />
        </div>
      </div>

      {/* ─── VEREDICTO ─── */}
      <Section>
        <SectionLabel>El veredicto.</SectionLabel>
        <div className="flex flex-col gap-8">
          {type.verdict.map((para, i) => (
            <p
              key={i}
              className="font-display font-light text-ink-primary text-pretty"
              style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)', lineHeight: 1.65 }}
            >
              {para}
            </p>
          ))}
        </div>
      </Section>

      {/* ─── LO QUE TE CUESTA ─── */}
      <Section elevated accentBg accentColor={type.accentColor}>
        <SectionLabel>Lo que te cuesta.</SectionLabel>
        <div className="flex flex-col gap-6">
          {type.whatItCosts.map((para, i) => (
            <p
              key={i}
              className={`font-display font-light text-pretty ${i === type.whatItCosts.length - 1 ? 'text-ink-secondary italic' : 'text-ink-primary'}`}
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.7 }}
            >
              {para}
            </p>
          ))}
        </div>
      </Section>

      {/* ─── TU SOMBRA ─── */}
      <Section>
        <SectionLabel>Tu sombra.</SectionLabel>

        {/* Composición imagen sombra + nombre */}
        <div className="flex gap-6 md:gap-10 items-start mb-8">
          <div className="relative shrink-0 overflow-hidden" style={{ width: '72px', height: '108px' }}>
            <Image
              src={shadowType.image}
              alt={shadowType.characterName}
              fill
              className="object-cover object-top grayscale opacity-55"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2
              className="font-display font-light text-ink-tertiary mb-2 text-balance"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              {shadowType.name}
            </h2>
            <p
              className="font-ui text-ink-tertiary uppercase"
              style={{ fontSize: '0.62rem', letterSpacing: '0.15em' }}
            >
              {shadowType.characterName}
            </p>
          </div>
        </div>

        <p
          className="font-display font-light text-ink-secondary text-pretty"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.65 }}
        >
          {type.shadowText}
        </p>
      </Section>

      {/* ─── CÓMO LEÉS A LOS DEMÁS ─── */}
      <Section elevated>
        <SectionLabel>Cómo leés a los demás.</SectionLabel>
        <div className="grid gap-8 md:gap-12">
          {[
            { label: 'Te lee bien', data: type.whoReadWell },
            { label: 'Te desafía', data: type.whoChallenges },
            { label: 'Admirás en secreto', data: type.whoAdmire },
          ].map(({ label, data }) => (
            <div key={label}>
              <p className="font-ui text-caption text-ink-tertiary mb-3 uppercase" style={{ letterSpacing: '0.12em' }}>
                {label}
              </p>
              <p className="font-display font-light text-ink-secondary mb-2 text-pretty" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)' }}>
                {data.type}
              </p>
              <p className="font-display font-light text-ink-tertiary text-pretty" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                {data.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── TU LÍNEA DE PORTADA ─── */}
      <Section accentBg accentColor={type.accentColor}>
        <SectionLabel>Tu línea de portada.</SectionLabel>
        <div className="mb-12">
          <p
            className="font-display font-light text-ink-primary leading-tight text-balance"
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em',
              fontStyle: 'italic',
            }}
          >
            {type.coverLine}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => copyToClipboard(type.coverLine)}
            className="font-ui text-caption text-ink-tertiary hover:text-ink-primary transition-[color] duration-200 border border-divider hover:border-ink-tertiary px-6 py-3 text-left sm:text-center"
            style={{ letterSpacing: '0.1em', minWidth: '160px' }}
          >
            {copied ? '✓ Copiado' : 'Copiar'}
          </button>
          <button
            onClick={() => copyToClipboard(`${type.coverLine}\n\n${type.shareCaption}\n\nRUNWAY — Edición El Diablo Viste a la Moda`)}
            className="font-ui text-caption text-ink-tertiary hover:text-ink-primary transition-[color] duration-200 border border-divider hover:border-ink-tertiary px-6 py-3 text-left sm:text-center"
            style={{ letterSpacing: '0.1em', minWidth: '160px' }}
          >
            Copiar para compartir
          </button>
        </div>
      </Section>

      {/* ─── CIERRE ─── */}
      <Section>
        <div className="text-center">
          <div className="divider-line mb-12 opacity-20" />

          <p className="font-display font-light italic text-ink-tertiary mb-12 text-pretty" style={{ fontSize: '1.1rem' }}>
            {type.closingLine}
          </p>

          {/* Grilla de los cuatro tipos con imágenes de personaje */}
          <div className="grid grid-cols-2 gap-4 mb-12 max-w-md mx-auto">
            {(['E', 'T', 'A', 'C'] as TypeKey[]).map((key) => {
              const t = typesData[key]
              const isYou = key === dominant
              return (
                <div
                  key={key}
                  className={`border transition-[border-color] duration-300 overflow-hidden ${isYou ? 'border-ink-tertiary' : 'border-divider'}`}
                >
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={t.image}
                      alt={t.characterName}
                      fill
                      className={`object-cover object-top transition-[filter,opacity] duration-300 ${isYou ? 'grayscale-0 opacity-75' : 'grayscale opacity-25'}`}
                    />
                  </div>
                  <div className={`px-3 py-3 text-left ${isYou ? 'bg-white/5' : ''}`}>
                    <p
                      className={`font-display font-light ${isYou ? 'text-ink-primary' : 'text-ink-tertiary'}`}
                      style={{ fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', lineHeight: 1.2 }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="font-ui text-ink-tertiary mt-1"
                      style={{ fontSize: '0.58rem', letterSpacing: '0.08em' }}
                    >
                      {t.characterName}
                    </p>
                    {isYou && (
                      <p className="font-ui text-ink-tertiary mt-1" style={{ fontSize: '0.55rem', letterSpacing: '0.14em' }}>
                        VOS
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Reiniciar */}
          <button
            onClick={onRestart}
            className="font-ui text-caption text-ink-tertiary hover:text-ink-primary transition-[color] duration-200 border-b border-ink-tertiary pb-1"
            style={{ letterSpacing: '0.08em' }}
          >
            {type.restartCta}
          </button>

          {/* Pie de página */}
          <p className="font-ui text-caption text-ink-tertiary mt-16 opacity-40" style={{ fontSize: '0.65rem', letterSpacing: '0.06em' }}>
            RUNWAY · Inspirado en El Diablo Viste a la Moda · Sin afiliación con la película ni sus productores.
          </p>

          {/* Crédito del autor */}
          <div className="mt-8 opacity-35 flex flex-col items-center gap-2">
            <p className="font-ui text-ink-tertiary" style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>
              Una editorial de Gonzalo Perez
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/gonzaloperezdg/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui text-ink-tertiary hover:text-ink-secondary transition-[color] duration-200 border-b border-current pb-px"
                style={{ fontSize: '0.58rem', letterSpacing: '0.08em' }}
              >
                LinkedIn
              </a>
              <span className="font-ui text-ink-tertiary" style={{ fontSize: '0.58rem' }}>·</span>
              <a
                href="https://gonzaloperezdg.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui text-ink-tertiary hover:text-ink-secondary transition-[color] duration-200 border-b border-current pb-px"
                style={{ fontSize: '0.58rem', letterSpacing: '0.08em' }}
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
