'use client'

import { useState, useCallback } from 'react'
import LandingScreen from '@/components/LandingScreen'
import QuizScreen from '@/components/QuizScreen'
import RevealScreen from '@/components/RevealScreen'
import ResultScreen from '@/components/ResultScreen'
import { AnswerKey } from '@/lib/questions'
import { calculateResult, ScoreResult } from '@/lib/scoring'
import { TypeKey } from '@/lib/questions'

type Phase = 'landing' | 'quiz' | 'reveal' | 'result'

export default function Home() {
  const [phase, setPhase] = useState<Phase>('landing')
  const [answers, setAnswers] = useState<AnswerKey[]>([])
  const [result, setResult] = useState<ScoreResult | null>(null)

  const handleBegin = useCallback(() => {
    setPhase('quiz')
  }, [])

  const handleAnswer = useCallback((answer: AnswerKey, questionIndex: number) => {
    const newAnswers = [...answers.slice(0, questionIndex), answer]
    setAnswers(newAnswers)

    if (questionIndex === 14) {
      const calculated = calculateResult(newAnswers)
      setResult(calculated)
      setPhase('reveal')
    }
  }, [answers])

  const handleRevealComplete = useCallback(() => {
    setPhase('result')
  }, [])

  const handleRestart = useCallback(() => {
    setAnswers([])
    setResult(null)
    setPhase('landing')
  }, [])

  return (
    <main className="min-h-dvh bg-bg-primary">
      {phase === 'landing' && (
        <LandingScreen key="landing" onBegin={handleBegin} />
      )}
      {phase === 'quiz' && (
        <QuizScreen key="quiz" answers={answers} onAnswer={handleAnswer} />
      )}
      {phase === 'reveal' && result && (
        <RevealScreen
          key="reveal"
          typeName={result.dominant as TypeKey}
          onComplete={handleRevealComplete}
        />
      )}
      {phase === 'result' && result && (
        <ResultScreen key="result" result={result} onRestart={handleRestart} />
      )}
    </main>
  )
}
