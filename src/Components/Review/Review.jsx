import React from 'react'

import './Review.css'
const Review = ({ questionBank, selectedAnswers, onBackClick }) => {
    const totalQuestions = questionBank.length;
    const attempted = Object.keys(selectedAnswers).length;
    const correct = questionBank.filter((q, i) => selectedAnswers[i] === q.answer).length;
    const wrong = attempted - correct;
  return (
    <div className="review-container">
      <h2 className="mb-4">Quiz Review</h2>
      <div className="summary mb-4">
        <p><strong>Total Questions:</strong> {totalQuestions}</p>
        <p><strong>Attempted:</strong> {attempted}</p>
        <p><strong>Correct:</strong> {correct}</p>
        <p><strong>Wrong:</strong> {wrong}</p>
    </div>
    <button className="btn btn-secondary mt-3" onClick={onBackClick}>
    ⬅️ Back to Score
    </button>
      {questionBank.map((question, index) => {
        const selected = selectedAnswers[index];
        const isCorrect = selected === question.answer;

        return (
          <div key={index} className="review-question mb-3 p-3 border rounded">
            <h5>{index + 1}. {question.question}</h5>
            <ul className="list-group mt-2">
              {question.options.map((option, idx) => {
                
                let className = "list-group-item";
                if (option === question.answer) {
                  className += " list-group-item-success";
                }
                if (option === selected && option !== question.answer) {
                  className += " list-group-item-danger";
                }

                return (
                  <li key={idx} className={className}>
                    {option}
                    {option === question.answer ? ' ✅' : ''}
                    {option === selected && option !== question.answer ? ' ❌' : ''}
                  </li>
                );
              })}
            </ul>
            <p className="mt-2">
              <strong>Your Answer:</strong> {selected || 'Not Attempted'}
              <br />
              <strong>Correct Answer:</strong> {question.answer}
            </p>
          </div>
        );
      })}
    </div>
  )
}

export default Review