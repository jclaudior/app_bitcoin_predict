import React from 'react'
import BitcoinPredictType from '../../models/bitcoin.interface';
import bitcoin_up from '../../assets/bitcoin_up.png';
import bitcoin_down from '../../assets/bitcoin_down.png';
import {useLocation } from 'react-router-dom'
import { Container } from './Styles';
import moment from 'moment';

function PredictionView(props: BitcoinPredictType){
    moment.locale('pt-BR')
    let now = moment().format("YYYYMMDD")
    let predictDate = moment(props.body?.date).format("YYYYMMDD")
    let divClose =  <span><b>CLOSE:</b> {props.body?.simpleBitcoin.close}</span>;
    return (
        <Container>
            <span><b>PREDICTION:</b> {props.body?.prediction} {useLocation().pathname == '/byparameters' || now == predictDate ? null : divClose } </span>
            <img src={props.body?.ascend ? bitcoin_up : bitcoin_down }/>
        </Container>
    )
}

export default PredictionView;