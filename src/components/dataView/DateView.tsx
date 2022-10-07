import React from 'react'
import { useLocation } from 'react-router-dom';
import BitcoinPredictType from '../../models/bitcoin.interface';

import { Container } from './Styles';


function DateView(props: BitcoinPredictType){
    return (
        <Container>
            <ul>
                <li>{useLocation().pathname !== '/byparameters' ? <b>DATE: </b> : ''} {useLocation().pathname !== '/byparameters' ? props.body?.date.toLocaleString() : ''}</li>
                <li><b>OPEN: </b>{props.body?.simpleBitcoin.open}</li>
                <li><b>HIGH: </b>{props.body?.simpleBitcoin.high}</li>
                <li><b>LOW: </b>{props.body?.simpleBitcoin.low}</li>
            </ul>  
        </Container>
    )
}

export default DateView;