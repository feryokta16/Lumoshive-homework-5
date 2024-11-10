import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Question = ({ questions }) => {
  const location = useLocation();
  const minimumScore = location.state?.minimumScore || 0;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (option) => {
    setUserAnswer((prevAnswer) => [...prevAnswer, option]);
    if (currentQuestionIndex === questions.length - 1) {
      const score = calculateScore();
      navigate("/result", { state: { score, minimumScore } });
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };
  const calculateScore = () => {
    let score = 0;
    userAnswer.map((answer, index) => {
      if (answer === questions[index].answer) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{currentQuestion.question}</h5>
        <div className="list-group mt-3">
          {currentQuestion.options.map((option, index) => (
            <button
              className="list-group-item list-group-item-action"
              key={index}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
