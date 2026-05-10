'use client'

import { useState, useCallback } from 'react'
import { PersonalityType } from '@/lib/types-data'
import { generateShareImage } from '@/lib/generate-share-image'

interface Props {
  type: PersonalityType
}

type Status = 'idle' | 'generating' | 'error'

const APP_URL_FULL = 'https://eldiablovistealamodabygpdg.vercel.app'

export default function ShareButtons({ type }: Props) {
  const [status, setStatus] = useState<Status>('idle')

  const handleShare = useCallback(async () => {
    setStatus('generating')
    try {
      const blob = await generateShareImage(type, 'square')
      const file = new File([blob], `runway-${type.slug}.jpg`, { type: 'image/jpeg' })
      const shareText = `${type.coverLine}\n\n${type.shareCaption}\n\nHacé el test · ${APP_URL_FULL}`

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], text: shareText })
      } else {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `runway-${type.slug}.jpg`
        a.click()
        setTimeout(() => URL.revokeObjectURL(url), 5000)
      }
      setStatus('idle')
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        setStatus('idle')
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 2500)
      }
    }
  }, [type])

  return (
    <button
      onClick={handleShare}
      disabled={status === 'generating'}
      className="font-ui text-caption text-ink-tertiary hover:text-ink-primary transition-[color] duration-200 border border-divider hover:border-ink-tertiary px-6 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
      style={{ letterSpacing: '0.1em' }}
    >
      {status === 'generating'
        ? 'Generando…'
        : status === 'error'
          ? 'Error. Intentá de nuevo'
          : 'Compartir'}
    </button>
  )
}
