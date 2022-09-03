import React from 'react'
import BitcoinPredictType from '../../models/bitcoin.interface';
import bitcoin_up from '../../assets/bitcoin_up.png';
import bitcoin_down from '../../assets/bitcoin_down.png';

import { Container } from './Styles';

function PredictionView(props: BitcoinPredictType){
    return (
        <Container>
            <span><b>PREDICTION:</b> {props.body?.prediction} <b>CLOSE:</b> {props.body?.simpleBitcoin.close}</span>
            <img src={props.body?.ascend ? bitcoin_up : bitcoin_down }/>
        </Container>
    )
}

export default PredictionView;