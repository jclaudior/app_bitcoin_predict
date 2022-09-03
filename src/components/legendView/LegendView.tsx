import React from 'react'
import bitcoin_up from '../../assets/bitcoin_up.png';
import bitcoin_down from '../../assets/bitcoin_down.png';

import { Container, Label } from './Styles';


function LegendView(){
    return (
        <Container>
            <div>
                <img className='img_ico' src={bitcoin_up}/><Label>UP</Label>
            </div>
            <div>
                <img className='img_ico' src={bitcoin_down}/><Label>DOWN</Label>
            </div>
        </Container>
    )
}

export default LegendView;