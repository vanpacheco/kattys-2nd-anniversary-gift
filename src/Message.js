import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';

const Message = ({ onShowImage }) => (
    <Grow in timeout={500}>
        <Box display="flex" justifyContent="center" alignItems="center" className="messageContainer">
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <Typography variant="h4">¡Sorpresa!</Typography>
                    <br />
                    <br />
                    Amor, tuve tantas, tantas ideas en mi cabeza, tratando de hacer algo que te guste y que sea diferente y al final, di con esta.
                    <br />
                    <br />
                    Gracias a una vieja amiga del colegio (vieja de que nos conocemos hace años... no de que sea vieja jajaja tenemos la misma edad) hoy pude sorprenderte de esta manera. Elegí esta, porque quería hacerle honor a tu sueño y meta personal de desarrollador y que gracias a Jehová este año empezaste a materializarlo. 
                    <br />
                    <br />
                    Sabes que no es la manera en la que quería pasar nuestro primer aniversario, peeeeeeero... ya tendremos tiempo para celebrarnos y celebrarlo como se debe, con nuestro viaje a Viña del Mar 🤭😍
                    <br />
                    <br />
                    "Feliz 1er aniversario, Mi Fldsmdfr. Deseo que con la ayuda de Jah este sea el primero de muchos... hasta que seamos viejitos"
                    <br />
                    <br />
                    <b>Te amo mucho, mi PHDCCDLC 💜🤭</b>
                    <br />
                    <b>10.10.2020 - 10.10.2021</b>
                    <br />
                    Y ahora sí... tu regalo 🎁💜
                    <br />
                    <br />
                    <Button onClick={onShowImage} variant="contained" >🎁</Button>
                </CardContent>
            </Card>
        </Box>
     </Grow>
);

export default Message;