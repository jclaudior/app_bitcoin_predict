import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import BitcoinPredictType from '../../models/bitcoin.interface';
import { BitcoinPredictService } from '../../services/bitcoint.service';
import DateView from '../dataView/DateView';
import DateForm from '../dateForm/DateForm';
import LegendView from '../legendView/LegendView';
import PredictionView from '../predictionView/PredictionView';
import TitlePage from '../titlePage/TitlePage';
import moment, { Moment } from 'moment';


import { BodyData, ContentData } from './Styles';


function ByDate() {
    moment.locale('pt-BR')
    const [bitcoinPredict, setBitcoinPredict] = useState<BitcoinPredictType>();

    const [dateFormValue, setDateFormValue] = useState<Moment>(moment());

    useEffect(() => {
        setBitcoinPredict(undefined);
        BitcoinPredictService.getBitcoinPredictByDate(dateFormValue)
            .then((data) => {
                setBitcoinPredict(data);
            })
            .catch((data) => {
                setBitcoinPredict(data);
            });
        return () => { };
    }, [dateFormValue]);

    console.log(bitcoinPredict)

    return (
        <ContentData>
            <TitlePage title="BY DATE" />
            <DateForm value={dateFormValue} onChange={setDateFormValue} />
            <BodyData>
                {bitcoinPredict && bitcoinPredict.body && <DateView {...bitcoinPredict} />}
                {bitcoinPredict && bitcoinPredict.body && <PredictionView {...bitcoinPredict} />}
                {bitcoinPredict && bitcoinPredict.body && <LegendView />}
                {!bitcoinPredict && <TailSpin color='#ED9902'/>}
            </BodyData>
        </ContentData>
    )
}

export default ByDate;