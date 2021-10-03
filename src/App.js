import './App.css';
import Question from './Question';
import { questions } from './questions';

function App () {
  return (
    <div className="App">
      {questions.map(ele =>
        <Question text={ele.question} answer={ele.answer} />
      )}
    </div>
  );
}

export default App;
