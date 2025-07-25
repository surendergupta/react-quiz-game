# 🧠 React Quiz App

A responsive and interactive quiz game built with **React**, featuring a real-time countdown timer, persistent state with localStorage/sessionStorage, answer review, and a leaderboard to track scores.

---

## 🌐 Live Demo

👉 [Play Now on Vercel](https://react-quiz-game-zeta.vercel.app/)

---

## 📌 Features

- ⏲️ **Timer per question** — 30 seconds for each
- ✅ **Single answer lock** — answer cannot be changed once selected
- 📊 **Leaderboard** — stores and sorts scores locally
- 🔄 **Quiz resumption** — continue from where you left off
- 📋 **Answer Review Page** — full review at the end with correct/incorrect indication
- 📈 **Score Summary** — view attempted, correct, and wrong answers
- 🧠 **100+ Questions** support
- 🌐 **LocalStorage + SessionStorage** for persistent state

---

## 🛠️ Tech Stack

- **React.js** (Hooks-based)
- **Bootstrap** (for styling)
- **JavaScript (ES6+)**
- **HTML5/CSS3**
- **LocalStorage / SessionStorage**

---

## 🚀 Getting Started

### Prerequisites

- Node.js v14 or above
- npm or yarn

### Installation

```bash
git clone https://github.com/surendergupta/react-quiz-game.git
cd react-quiz-game
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

---

## 📁 Project Structure

```bash

react-quiz-app/
├── public/
├── src/
│   ├── Components/
│   │   ├── Question/
│   │   │   ├── Question.css
│   │   │   └── Question.js
│   │   ├── QuestionBank/
│   │   │   └── QuestionBank.js
│   │   ├── Score/
│   │   │   ├── Score.css
│   │   │   └── Score.js
│   │   ├── Review/
│   │   │   ├── Review.css
│   │   │   └── Review.js
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   └── main.js
└── README.md

```

---

## 🔍 How It Works
- Quiz auto-starts from the first question.
- Each question gives you 30 seconds to answer.
- After answer selection:
    - Selected option is locked.
    - Correct answer is highlighted.
- At the end of quiz:
    - User is prompted for name to be added to the leaderboard.
    - User can view Score Summary and open the Review Page.
- Progress is auto-saved via localStorage.
- If the page is reloaded, quiz resumes from last state.

---

## 🧪 Review Page Summary
At the end of the quiz, you can review:
- ✅ Your selected answer
- ✅ Correct answer
- ❌ Incorrect answers
- 📊 Total Questions, Attempted, Correct, and Wrong

---

## 👨‍💻 Author
Surender Gupta
- GitHub: @surendergupta
- LinkedIn: in/surender-gupta

---

## 📄 License
This project is licensed under the MIT License.