import { useState } from 'react';

import './App.css';
import Question from './Question';
import { questions } from './questions';
import SurpriseImage from './SurpriseImage';

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
          helperTexts={ele.helperTexts}
          key={ele.id}
          onGoToNextQuestion={handleGoToNextQuestion} 
          text={ele.question}
        />
      )}
      {currentQuestionId === questions.length + 1 && <SurpriseImage />}
    </div>
  );
}

export default App;
