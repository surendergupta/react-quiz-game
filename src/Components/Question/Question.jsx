import React from 'react'

import './Question.css'

const Question = ({ question, selectedOption, onOptionChange, onSubmit, disabled, showAnswerFeedback, onPrev }) => {
    const isCorrect = selectedOption === question.answer;
  return (
    <div className='question-container'>
        <h3>Question {question.id}</h3>
        <h5 className="mt-2">{question.question}</h5>
        <form onSubmit={onSubmit} className="mt-2 mb-2">
            <div className='options'>
                {question.options.map((option, index) => {
                    let optionClass = "form-check-label";
                    
                    if (showAnswerFeedback) {
                        if (option === question.answer) {
                            optionClass += " text-success fw-bold"; // correct
                        } else if (option === selectedOption && option !== question.answer) {
                            optionClass += " text-danger fw-bold"; // wrong
                        }
                    }
                    return (
                    <div key={index} className="form-check">
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                            className="form-check-input"
                            disabled={disabled}
                        />
                        <label className={optionClass}>
                            {option}
                            {showAnswerFeedback && option === question.answer ? ' ✅' : ''}
                            {showAnswerFeedback && option === selectedOption && option !== question.answer ? ' ❌' : ''}
                        </label>
                    </div>
                )})}
            </div>
            <div className="d-flex gap-2 mt-3">
                <button
                    type="submit"
                    className="btn btn-primary"
                    // disabled={!selectedOption}
                >
                    Submit
                </button>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onPrev}
                    disabled={question.id === 1}
                >
                    Prev
                </button>
            </div>
        </form>
    </div>
  )
}

export default Question