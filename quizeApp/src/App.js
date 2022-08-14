import React, { useState } from 'react'
import QuizeApp from './components'
import questions from "./data"

export default function App() {


  const [currentQuestion, setCurrentquestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentquestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="app">
<QuizeApp questions={questions} onChange={handleClick} score={score} currentQuestion={currentQuestion} showScore={showScore} />
    </div>
  )
}
