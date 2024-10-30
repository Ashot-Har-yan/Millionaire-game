import React, { useState } from 'react';
import Question from './Question';
import { questions } from '../data';
import { Button } from 'antd';

const QuestionList = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <div>
        <h2>Your Score: {score}/{questions.length}</h2>
        <Button  onClick={resetGame}>Play again</Button>
        </div>
      )}
    </div>
  );
};

export default QuestionList;