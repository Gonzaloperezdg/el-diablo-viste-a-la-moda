import { Question, AnswerKey, TypeKey } from './questions'

export interface ScoreResult {
  scores: Record<TypeKey, number>
  dominant: TypeKey
  shadow: TypeKey
  isHybrid: boolean
}

export function calculateResult(answers: AnswerKey[], selectedQuestions: Question[]): ScoreResult {
  const scores: Record<TypeKey, number> = { E: 0, T: 0, A: 0, C: 0 }

  answers.forEach((answer, index) => {
    const question = selectedQuestions[index]
    if (!question) return
    const option = question.options.find(o => o.id === answer)
    if (!option) return
    Object.entries(option.scores).forEach(([type, pts]) => {
      scores[type as TypeKey] += pts ?? 0
    })
  })

  const sorted = (Object.entries(scores) as [TypeKey, number][])
    .sort((a, b) => b[1] - a[1])

  const dominant = sorted[0][0]
  const shadow = sorted[1][0]
  const isHybrid = Math.abs(sorted[0][1] - sorted[1][1]) <= 2

  return { scores, dominant, shadow, isHybrid }
}
