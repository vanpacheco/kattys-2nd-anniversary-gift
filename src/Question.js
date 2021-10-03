import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const Question = ({ answer, onGoToNextQuestion, text }) => {
    const [userAnswer, setUserAnswer] = useState('');
    
    const handleChange = e => {
        setUserAnswer(e.target.value);
    };

    useEffect(() => {
        if (answer === userAnswer) {
            onGoToNextQuestion();
       } 
    }, [answer, onGoToNextQuestion, userAnswer]);
    
    return (<>
        <Typography>{text}</Typography>
        <TextField
            id="standard-basic"
            label="Standard"
            onChange={handleChange}
            value={userAnswer}
            variant="standard"
        />
    </>);
}

export default Question;