'use client'

import { useState, useCallback } from 'react'
import LandingScreen from '@/components/LandingScreen'
import QuizScreen from '@/components/QuizScreen'
import RevealScreen from '@/components/RevealScreen'
import ResultScreen from '@/components/ResultScreen'
import { AnswerKey, Question, TypeKey, selectRandomQuestions } from '@/lib/questions'
import { calculateResult, ScoreResult } from '@/lib/scoring'

type Phase = 'landing' | 'quiz' | 'reveal' | 'result'

const QUIZ_SIZE = 10

export default function Home() {
  const [phase, setPhase] = useState<Phase>('landing')
  const [answers, setAnswers] = useState<AnswerKey[]>([])
  const [result, setResult] = useState<ScoreResult | null>(null)
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([])

  const handleBegin = useCallback(() => {
    setSelectedQuestions(selectRandomQuestions(QUIZ_SIZE))
    setAnswers([])
    setResult(null)
    setPhase('quiz')
  }, [])

  const handleAnswer = useCallback((answer: AnswerKey, questionIndex: number) => {
    const newAnswers = [...answers.slice(0, questionIndex), answer]
    setAnswers(newAnswers)

    if (questionIndex === selectedQuestions.length - 1) {
      const calculated = calculateResult(newAnswers, selectedQuestions)
      setResult(calculated)
      setPhase('reveal')
    }
  }, [answers, selectedQuestions])

  const handleRevealComplete = useCallback(() => {
    setPhase('result')
  }, [])

  const handleRestart = useCallback(() => {
    setAnswers([])
    setResult(null)
    setSelectedQuestions([])
    setPhase('landing')
  }, [])

  return (
    <main className="min-h-dvh bg-bg-primary">
      {phase === 'landing' && (
        <LandingScreen key="landing" onBegin={handleBegin} />
      )}
      {phase === 'quiz' && selectedQuestions.length > 0 && (
        <QuizScreen key="quiz" answers={answers} onAnswer={handleAnswer} questions={selectedQuestions} />
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
