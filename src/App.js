import './App.css';
import Question from './Question';
import { questions } from './questions';
import { useState } from 'react';


function App () {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  
  const handleGoToNextQuestion = () => {
    setCurrentQuestionId(currentQuestionId + 1);
  }
  
  return (
    <div className="App">
      {questions.filter(ele => ele.id === currentQuestionId).map(ele =>
        <Question 
          answer={ele.answer} 
          onGoToNextQuestion={handleGoToNextQuestion} 
          text={ele.question} 
        />
      )}
    </div>
  );
}

export default App;
