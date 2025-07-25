import React, { useEffect } from 'react';
import Question from "./Components/Question/Question";
import QuestionBankList from "./Components/QuestionBank/QuestionBank";
import Score from "./Components/Score/Score";
import Review from './Components/Review/Review';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const questionBank = QuestionBankList;

const App = () => {
  const [score, setScore] = React.useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [isQuizOver, setIsQuizOver] = React.useState(false);
  const [selectedAnswers, setSelectedAnswers] = React.useState({});
  const [leaderboard, setLeaderboard] = React.useState([]);
  const [timer, setTimer] = React.useState(30);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [showReview, setShowReview] = React.useState(false);

  
  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem("quizProgress"));
    const completed = sessionStorage.getItem("quizCompleted") === "true";
    const savedLeaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    if (savedProgress) {
      setScore(savedProgress.score);
      setCurrentQuestionIndex(savedProgress.currentQuestionIndex);
      setSelectedAnswers(savedProgress.selectedAnswers || {});
    }
    if (completed) setIsQuizOver(true);
    setLeaderboard(savedLeaderboard);
  }, []);

  useEffect(() => {
    const progress = {
      currentQuestionIndex,
      score,
      selectedAnswers
    };
    localStorage.setItem("quizProgress", JSON.stringify(progress));
  }, [currentQuestionIndex, score, selectedAnswers]);

  useEffect(() => {
    if (!isQuizOver) {
      setTimer(30);
      const interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            handleEndQuiz();
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentQuestionIndex, isQuizOver]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isSubmitted) return;

    const currentQ = questionBank[currentQuestionIndex];
    if (selectedAnswers[currentQuestionIndex] === currentQ.answer) {
      setScore(prevScore => prevScore + 1);
    }
    
    setIsSubmitted(true);
    setTimeout(() => {
      handleNextQuestion();
      setIsSubmitted(false); // Unlock for next question
    }, 1500);
  };

  const handleOptionChange = (event) => {
    const selected = event.target.value;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: selected
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questionBank.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      handleEndQuiz();
    }
  };

  const handleResetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsQuizOver(false);
    setShowReview(false);
    localStorage.removeItem("quizProgress");
    sessionStorage.removeItem("quizCompleted");
  };

  const updateLeaderboard = (name) => {
    const updatedLeaderboard = [...leaderboard, { name, score }];
    updatedLeaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderboard));
    setLeaderboard(updatedLeaderboard);
  };

  const handleEndQuiz = () => {
    setIsQuizOver(true);
    sessionStorage.setItem("quizCompleted", "true");
    const name = prompt("Enter your name for the leaderboard:");
    if (name) updateLeaderboard(name);
  };

  return (
    <>
      <div className='App d-flex flex-column align-items-center justify-content-center'>
        <h1>Quiz Game</h1>
        {isQuizOver && !showReview ? (
          <Score
            score={score}
            onResetQuiz={handleResetQuiz}
            leaderboard={leaderboard}
            className="score"
            onReviewClick={() => setShowReview(true)} 
          />
        ) : isQuizOver && showReview ? (
          <Review 
            questionBank={questionBank} 
            selectedAnswers={selectedAnswers} 
            onBackClick={() => setShowReview(false)} 
          />
        ) : (
          <>
            <p className='timer'>Each Quetion Time Left: {timer} seconds</p>
            <Question 
              question={questionBank[currentQuestionIndex]}
              selectedOption={selectedAnswers[currentQuestionIndex] || ''}
              onOptionChange={handleOptionChange}
              onSubmit={handleFormSubmit}
              disabled={!!selectedAnswers[currentQuestionIndex]}
              showAnswerFeedback={!!selectedAnswers[currentQuestionIndex]}
              onPrev={() => {
                setCurrentQuestionIndex(prev => Math.max(prev - 1, 0));
              }}
            />
          </>
        )}
        <div className='footer mt-4'>
          <p>Github: <a href="https://github.com/surendergupta" target="_blank" rel="noopener noreferrer">surendergupta</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/surender-gupta" target="_blank" rel="noopener noreferrer">surender-gupta</a></p>
        </div>
      </div>
    </>
  )
}

export default App
