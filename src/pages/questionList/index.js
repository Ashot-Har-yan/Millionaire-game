import React, { useState, useEffect } from 'react';
import { Layout, Menu, Card, Button,Typography, message } from 'antd';
import Question from '../../gamePage'; 
import { questions } from '../../questions'; 
import correct from '../audio/correct.mp3';
import wrong from '../audio/wrong.mp3'

const { Title } = Typography;
const { Sider, Content } = Layout;

const scores = [1000, 2000, 3000, 5000, 8000]; 

const Game = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [usedLifelines, setUsedLifelines] = useState({ fiftyFifty: false, askHelp: false });
  const [options, setOptions] = useState([]); 
  const [gameOver, setGameOver] = useState(false); 
  const [scoreColors, setScoreColors] = useState(Array(scores.length).fill('white'));

  
  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      setOptions(questions[currentQuestionIndex].options); 
      setGameOver(false); 
    }
  }, [currentQuestionIndex]);

  const handleAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestionIndex]?.answer; 

    if (selectedOption === correctAnswer) {
      const newScore = scores[currentQuestionIndex]; 
      setTotalScore(totalScore + newScore); 
      const updatedColors = [...scoreColors];
      updatedColors[currentQuestionIndex] = 'green';  
      setScoreColors(updatedColors);
      const nextIndex = currentQuestionIndex + 1;
      playAudio('correct');

      if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
      } else {
        setCurrentQuestionIndex(questions.length); 
      }
    } else {
      const updatedColors = [...scoreColors];
      updatedColors[currentQuestionIndex] = 'red'; 
      playAudio('wrong');
      setScoreColors(updatedColors);
      setTimeout(()=>
      alert(`Incorrect Answer!\nYour total score is: ${totalScore}\nCorrect answer was ${correctAnswer}`),1000) 
      setGameOver(true); 
      setUsedLifelines({ fiftyFifty: true, askHelp: true });
      
    }
  };
  const playAudio = (type) => {
    const correctAudio = new Audio(correct); 
    const wrongAudio = new Audio(wrong); 

    if (type === 'correct') {
      correctAudio.play();
    } else {
      wrongAudio.play();
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setTotalScore(0);
    setUsedLifelines({ fiftyFifty: false, askHelp: false });
    setGameOver(false); 
    setScoreColors(Array(scores.length).fill('white')); 
  };

  const handleFiftyFifty = () => {
    if (!usedLifelines.fiftyFifty) {
      setUsedLifelines({ ...usedLifelines, fiftyFifty: true });
      const correctAnswer = questions[currentQuestionIndex]?.answer; 
      const incorrectOptions = questions[currentQuestionIndex]?.options.filter(opt => opt !== correctAnswer);
      if (incorrectOptions && incorrectOptions.length > 0) {
        const randomIncorrect = incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];
        
        setOptions([correctAnswer, randomIncorrect]);
      }
    } 
  };

  const handleAskHelp = () => {
    if (!usedLifelines.askHelp) {
      setUsedLifelines({ ...usedLifelines, askHelp: true });
      message.info(`The audience thinks the answer is: ${questions[currentQuestionIndex]?.answer}`);
    } 
  };


  return (
    <Layout style={{ height: '100vh'}} >
      <Sider width={200} style={{ background: '#001f3f' }}>
        <Menu mode="inline" theme="dark">
          <Menu.Item key="scores" disabled style={{color:'white'}}>
            Scores
          </Menu.Item>
          {scores.map((score, index) => (
            <Menu.Item key={index} 
            style={{ color: scoreColors[index], fontWeight: 'bold' }}
            >
              {score}
            </Menu.Item>
          ))}
          <Menu.Item key="totalScore" style={{ color: '#FFD700' }}>
            Total Score: {totalScore}
          </Menu.Item>
          <Button
              onClick={handleFiftyFifty}
              disabled={usedLifelines.fiftyFifty}
              style={{ backgroundColor: '#ff0000', border: 'none' }}>
              50/50
            </Button>
            <Button
              onClick={handleAskHelp}
              disabled={usedLifelines.askHelp}
              style={{ backgroundColor: '#ff0000', border: 'none', marginLeft: '10px' }}>
              Ask for Help
            </Button>
        </Menu>
        
      </Sider>
      <Layout>
        <Content style={{ padding: '20px'}}>
          <Card style={{ marginBottom: '20px', borderRadius: '10px', backgroundColor: '#004080' }}>
            <Title level={2} style={{ color: '#FFD700', textAlign: 'center' }}>
              Who Wants to Be a Millionaire?
            </Title>
            <Title level={4} style={{ color: '#FFFFFF', textAlign: 'center' }}>
              Question {currentQuestionIndex  < questions.length ? currentQuestionIndex + 1:currentQuestionIndex}/{questions.length}
            </Title>
          </Card>

          
          {currentQuestionIndex < questions.length && !gameOver? (
            <Question
              question={questions[currentQuestionIndex].question}
              options={options}
              onAnswer={handleAnswer}
            />
          ) : (
            <div style={{ textAlign: 'center', color: '#FFD700' }}>
              <h2>Your Total Score: {totalScore}</h2>
              <Button type="primary" onClick={resetGame}>Play Again</Button> 
            </div>
          )}
         
        </Content>
      </Layout>
    </Layout>
    
  );
};

export default Game;
