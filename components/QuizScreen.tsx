'use client'

import { useState, useEffect, useCallback } from 'react'
import { questions, AnswerKey } from '@/lib/questions'

interface Props {
  answers: AnswerKey[]
  onAnswer: (answer: AnswerKey, questionIndex: number) => void
}

export default function QuizScreen({ answers, onAnswer }: Props) {
  const currentIndex = answers.length
  const question = questions[currentIndex]
  const [selected, setSelected] = useState<AnswerKey | null>(null)
  const [exiting, setExiting] = useState(false)
  const [entering, setEntering] = useState(true)

  useEffect(() => {
    setSelected(null)
    setEntering(true)
    const t = setTimeout(() => setEntering(false), 50)
    return () => clearTimeout(t)
  }, [currentIndex])

  const handleSelect = useCallback((optionId: AnswerKey) => {
    if (selected || exiting) return
    setSelected(optionId)
    setExiting(true)
    setTimeout(() => {
      onAnswer(optionId, currentIndex)
      setExiting(false)
    }, 400)
  }, [selected, exiting, onAnswer, currentIndex])

  const handleKeyDown = useCallback((e: React.KeyboardEvent, optionId: AnswerKey) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSelect(optionId)
    }
  }, [handleSelect])

  if (!question) return null

  const progress = (currentIndex / questions.length) * 100

  return (
    <div className={`min-h-dvh flex flex-col transition-[opacity,transform] duration-500 ${exiting ? 'opacity-0 -translate-y-2' : entering ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-px bg-divider z-50">
        <div
          className="h-full bg-ink-secondary transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question counter */}
      <div className="fixed top-0 right-0 p-6 md:p-8 z-40">
        <span className="font-ui text-caption text-ink-tertiary" style={{ letterSpacing: '0.1em' }}>
          {String(currentIndex + 1).padStart(2, '0')}&nbsp;/&nbsp;{questions.length}
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-3xl mx-auto w-full pt-24 pb-16">
        {/* Scene label */}
        <p className="font-ui text-caption text-ink-tertiary mb-6 md:mb-8 uppercase tracking-widest">
          {question.scene}
        </p>

        {/* Question text */}
        <h2
          className="font-display font-light text-ink-primary mb-12 md:mb-16 text-balance"
          style={{
            fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
            lineHeight: '1.25',
            letterSpacing: '-0.01em',
          }}
        >
          {question.text}
        </h2>

        {/* Divider */}
        <div className="divider-line mb-8 opacity-20" />

        {/* Options */}
        <div className="flex flex-col gap-0" role="radiogroup" aria-label={question.text}>
          {question.options.map((option) => (
            <div
              key={option.id}
              role="radio"
              aria-checked={selected === option.id}
              tabIndex={0}
              onClick={() => handleSelect(option.id)}
              onKeyDown={(e) => handleKeyDown(e, option.id)}
              className={`quiz-option py-5 pr-4 pl-4 border-b border-divider last:border-0 ${selected === option.id ? 'selected' : ''}`}
            >
              <div className="flex gap-4 items-start">
                <span className="font-ui text-caption text-ink-tertiary pt-1 shrink-0 w-4" style={{ letterSpacing: '0.05em' }}>
                  {option.id}
                </span>
                <span
                  className={`font-display font-light text-pretty transition-[color] duration-200 ${selected === option.id ? 'text-ink-primary' : 'text-ink-secondary'}`}
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: '1.55' }}
                >
                  {option.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
