import React from 'react'

import './Score.css'
const Score = ({score, onResetQuiz, leaderboard, onReviewClick}) => {
  return (
    <div className="score-container text-center">
      <h2>🎉 Quiz Completed!</h2>
      <h4>Your Score: {score}</h4>
      <button onClick={onResetQuiz} className="btn btn-warning mt-3">Restart Quiz</button>
      <button className="btn btn-secondary mx-3 mt-3" onClick={onReviewClick}>View Review</button>
      <div className="leaderboard mt-4">
        <h5>🏆 Leaderboard</h5>
        <ul className="list-group">
          {leaderboard.map((entry, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <span>{entry.name}</span>
              <span>{entry.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Score;