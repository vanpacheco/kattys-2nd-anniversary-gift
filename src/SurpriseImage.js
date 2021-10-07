import Zoom from '@mui/material/Zoom';

import image from './familia.jpeg';

const SurpriseImage = () => {
    return <Zoom in timeout={4000}>
        <img alt="Familia" src={image} width="71%" />
    </Zoom>
}

export default SurpriseImage;