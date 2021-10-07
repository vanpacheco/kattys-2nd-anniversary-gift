import { useState } from 'react';

import './App.css';
import Message from './Message';
import Question from './Question';
import SurpriseImage from './SurpriseImage';
import { questions } from './questions';

function App () {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [showImage, setShowImage] = useState(false);
  
  const handleGoToNextQuestion = () => {
    setCurrentQuestionId(currentQuestionId + 1);
  }

  const handleShowImage = () => {
    setShowImage(true);
  }

  const showText = currentQuestionId === questions.length + 1;
  
  return (
    <div className={ `App ${showImage ? 'pink' : '' }` }>
      {questions.filter(ele => ele.id === currentQuestionId).map(ele =>
        <Question
          answer={ele.answer}
          helperTexts={ele.helperTexts}
          key={ele.id}
          onGoToNextQuestion={handleGoToNextQuestion} 
          placeholder={ele.placeholder}
          text={ele.question}
        />
      )}
      {showText && !showImage && <Message onShowImage={handleShowImage}/>}
      {showImage && <SurpriseImage />}
    </div>
  );
}

export default App;
