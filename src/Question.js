import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Question = ({ answer, onGoToNextQuestion, text }) => {
    const [userAnswer, setUserAnswer] = useState('');
    
    const handleChange = e => {
        setUserAnswer(e.target.value);
    };

    const checkIfAnswerIsRight = () => {
        if ( answer === userAnswer ) {
            setUserAnswer('');
            onGoToNextQuestion();
       } 
    }

    return (
        <Slide direction="up" in appear>
            <Paper elevation={4}>
                <Typography>{text}</Typography>
                <TextField
                    id="standard-basic"
                    label="Standard"
                    onChange={handleChange}
                    value={userAnswer}
                    variant="standard"
                />
                <Button onClick={checkIfAnswerIsRight}>Enviar</Button>
            </Paper>
        </Slide>
    );
}

export default Question;