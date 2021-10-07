import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Question = ({ answer, helperTexts, onGoToNextQuestion, placeholder, text }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [hasError, setHasError] = useState(false);
    const [numberOfTries, setNumberOfTries] = useState(0);
    
    const handleChange = e => {
        if (hasError) setHasError(false);
        setUserAnswer(e.target.value);
    };

    const checkIfAnswerIsRight = ( e ) => {
        e.preventDefault();

        setNumberOfTries(numberOfTries + 1);
        if (answer === userAnswer 
            || answer.toLowerCase() === userAnswer.toLowerCase()) {
            setUserAnswer('');
            onGoToNextQuestion();
        } else {
            setHasError(true);
        }
    }

    return (
        <form onSubmit={checkIfAnswerIsRight}>
            <Slide direction="up" in appear timeout={500}>
                <div className="question-container">
                    <div className="question">
                        <Typography variant="h4">{text}</Typography>
                        <TextField
                            autoComplete="off"
                            error={hasError}
                            helperText={hasError && 
                                (helperTexts[numberOfTries - 1] || 'Nope :(')
                            }
                            id="standard-basic"
                            onChange={handleChange}
                            placeholder={placeholder}
                            value={userAnswer}
                            variant="filled"
                        />
                        <Button variant="contained" type="submit">Enviar</Button>
                    </div>
                </div>
            </Slide>
        </form>
    );
}

export default Question;