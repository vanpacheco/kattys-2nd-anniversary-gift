import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';

const Rules = ({ onStart }) => (
    <Grow in timeout={ 500 }>
        <Box display="flex" justifyContent="center" alignItems="center" className="messageContainer">
            <Card sx={ { maxWidth: 600 } }>
                <CardContent>
                    <Typography variant="h4">Juego de preguntas:
                        <br />
                        ¿Qué tanto recuerdas nuestra historia?
                    </Typography>
                    <br />
                    <br />
                    Nota:
                    <br />
                    • Piensa muy bien antes de escribir las respuestas, tienes intentos limitados 🤭
                    <br />
                    • No se vale hacer trampa, no busques fechas en nuestro chat
                    <br />
                    • Como no llegues al final... me debes una pizza Hawaiana con tocineta y borde de queso como castigo por no recordar nuestras fechas importantes 🤔😂
                    <br />
                    <br />
                    <Button onClick={onStart} variant="contained">Comenzar</Button>
                </CardContent>
            </Card>
        </Box>
    </Grow>
);

export default Rules;