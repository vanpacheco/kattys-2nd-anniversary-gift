import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Question = ( { text, answer } ) => {
    const [userAnswer, setUserAnswer] = useState('');
    
    const handleChange = e => {
        setUserAnswer(e.target.value);
    };
    
    return (<>
        <Typography>{text}</Typography>
        <TextField
            id="standard-basic"
            label="Standard"
            onChange={handleChange}
            value={userAnswer}
            variant="standard"
        />
    </>
    );
}

export default Question;