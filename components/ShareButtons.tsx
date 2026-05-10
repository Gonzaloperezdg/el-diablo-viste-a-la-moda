'use client'

import { useState, useCallback } from 'react'
import { PersonalityType } from '@/lib/types-data'
import { generateShareImage, ShareFormat } from '@/lib/generate-share-image'

interface Props {
  type: PersonalityType
}

type Status = 'idle' | 'generating' | 'error'

const APP_URL_FULL = 'https://eldiablovistealamodabygpdg.vercel.app'

async function share(type: PersonalityType, format: ShareFormat) {
  const blob = await generateShareImage(type, format)
  const ext = 'jpg'
  const fileName = `runway-${type.slug}-${format}.${ext}`
  const file = new File([blob], fileName, { type: 'image/jpeg' })

  if (
    typeof navigator !== 'undefined' &&
    navigator.canShare &&
    navigator.canShare({ files: [file] })
  ) {
    const shareText =
      format === 'square'
        ? `${type.coverLine}\n\n${type.shareCaption}\n\nHacé el test · ${APP_URL_FULL}`
        : APP_URL_FULL
    await navigator.share({
      files: [file],
      text: shareText,
    })
  } else {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 5000)
  }
}

export default function ShareButtons({ type }: Props) {
  const [squareStatus, setSquareStatus] = useState<Status>('idle')
  const [storyStatus, setStoryStatus] = useState<Status>('idle')

  const handleShare = useCallback(
    async (format: ShareFormat) => {
      const setStatus = format === 'square' ? setSquareStatus : setStoryStatus
      setStatus('generating')
      try {
        await share(type, format)
        setStatus('idle')
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          setStatus('idle')
        } else {
          setStatus('error')
          setTimeout(() => setStatus('idle'), 2500)
        }
      }
    },
    [type],
  )

  const buttonClass =
    'font-ui text-caption text-ink-tertiary hover:text-ink-primary transition-[color] duration-200 border border-divider hover:border-ink-tertiary px-6 py-3 text-left sm:text-center disabled:opacity-40 disabled:cursor-not-allowed'

  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-6">
      <button
        onClick={() => handleShare('square')}
        disabled={squareStatus === 'generating'}
        className={buttonClass}
        style={{ letterSpacing: '0.1em', minWidth: '160px' }}
      >
        {squareStatus === 'generating'
          ? 'Generando…'
          : squareStatus === 'error'
            ? 'Error — reintentar'
            : 'Compartir · WhatsApp'}
      </button>

      <button
        onClick={() => handleShare('story')}
        disabled={storyStatus === 'generating'}
        className={buttonClass}
        style={{ letterSpacing: '0.1em', minWidth: '160px' }}
      >
        {storyStatus === 'generating'
          ? 'Generando…'
          : storyStatus === 'error'
            ? 'Error — reintentar'
            : 'Compartir · Historia'}
      </button>
    </div>
  )
}
