'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { TypeKey } from '@/lib/questions'
import { typesData } from '@/lib/types-data'

interface Props {
  typeName: TypeKey
  onComplete: () => void
}

type Phase = 'black' | 'you-been-read' | 'type-reveal' | 'done'

export default function RevealScreen({ typeName, onComplete }: Props) {
  const [phase, setPhase] = useState<Phase>('black')
  const [visibleLetters, setVisibleLetters] = useState(0)
  const typeInfo = typesData[typeName]
  const fullName = typeInfo.name

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('you-been-read'), 600)
    const t2 = setTimeout(() => setPhase('type-reveal'), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    if (phase !== 'type-reveal') return
    let i = 0
    const interval = setInterval(() => {
      i++
      setVisibleLetters(i)
      if (i >= fullName.length) {
        clearInterval(interval)
        setTimeout(() => {
          setPhase('done')
          setTimeout(onComplete, 600)
        }, 1000)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [phase, fullName, onComplete])

  return (
    <div className="fixed inset-0 bg-bg-primary flex flex-col items-center justify-center z-50 overflow-hidden">

      {/* Character image — ghost background during type-reveal */}
      {(phase === 'type-reveal' || phase === 'done') && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 character-image-bg">
            <Image
              src={typeInfo.image}
              alt={typeInfo.characterName}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          {/* Overlay oscuro — deja ~12% del personaje visible */}
          <div className="absolute inset-0" style={{ background: '#0A0A0B', opacity: 0.88 }} />
        </div>
      )}

      {/* "Te leyeron." */}
      <div
        className={`absolute transition-all duration-700 ${phase === 'you-been-read' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
        style={{ top: '50%', transform: 'translate(0, -50%)' }}
      >
        <p
          className="font-display font-light italic text-ink-secondary text-center"
          style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
        >
          Te leyeron.
        </p>
      </div>

      {/* Type name + character name reveal */}
      {phase === 'type-reveal' || phase === 'done' ? (
        <div
          className={`text-center relative z-10 transition-opacity duration-500 ${phase === 'done' ? 'opacity-0' : 'opacity-100'}`}
        >
          <p className="font-ui text-caption text-ink-tertiary mb-6 tracking-widest uppercase" style={{ letterSpacing: '0.15em' }}>
            RUNWAY · No. 01
          </p>
          <div
            className="font-display font-light text-ink-primary letter-reveal"
            style={{
              fontSize: 'clamp(2.5rem, 9vw, 7rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            {fullName.split('').map((char, i) => (
              <span
                key={i}
                style={{
                  display: char === ' ' ? 'inline' : 'inline-block',
                  opacity: i < visibleLetters ? 1 : 0,
                  transform: i < visibleLetters ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </div>
          {/* Character name fades in after name reveals */}
          <p
            className="font-ui text-ink-tertiary mt-4 uppercase transition-opacity duration-700"
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              opacity: visibleLetters >= fullName.length ? 1 : 0,
            }}
          >
            {typeInfo.characterName}
          </p>
        </div>
      ) : null}
    </div>
  )
}
