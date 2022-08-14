import React from 'react'
export default function QuizeApp({questions, onChange, score, currentQuestion, showScore}) {

  return (
    <div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((i, key) => (
              <button key={key} onClick={() => onChange(i.isCorrect)}>
                {i.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
