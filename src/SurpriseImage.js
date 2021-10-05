import Slide from '@mui/material/Slide';

import image from './familia.jpeg';

const SurpriseImage = () => {
    return <Slide direction="up" in appear timeout={500}>
        <img alt="Familia" src={image} width="100%" />
    </Slide>
}

export default SurpriseImage;