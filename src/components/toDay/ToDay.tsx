import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import BitcoinPredictType from '../../models/bitcoin.interface';
import { BitcoinPredictService } from '../../services/bitcoint.service';
import DateView from '../dataView/DateView';
import LegendView from '../legendView/LegendView';
import PredictionView from '../predictionView/PredictionView';
import TitlePage from '../titlePage/TitlePage';


import { BodyData, ContentData } from './Styles';


function ToDay() {
    document.title = "ToDay";
    const [bitcoinPredict, setBitcoinPredict] = useState<BitcoinPredictType>();

    useEffect(() => {
        BitcoinPredictService.getBitcoinPredictNow()
            .then((data) => {
                setBitcoinPredict(data);
            })
            .catch((data) => {
                setBitcoinPredict(data);
            });
        return () => { };
    }, []);

    return (
        <ContentData>
            <TitlePage title="TODAY" />
            <BodyData>
                {bitcoinPredict && bitcoinPredict.body && <DateView {...bitcoinPredict} />}
                {bitcoinPredict && bitcoinPredict.body && <PredictionView {...bitcoinPredict} />}
                {bitcoinPredict && bitcoinPredict.body && <LegendView />}
                {!bitcoinPredict && <TailSpin color="#ED9902"/>}
            </BodyData>
        </ContentData>
    )
}

export default ToDay;