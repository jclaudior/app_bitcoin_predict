import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import BitcoinPredictType, { SimpleBitcoin } from '../../models/bitcoin.interface';
import { BitcoinPredictService } from '../../services/bitcoint.service';
import DateView from '../dataView/DateView';
import LegendView from '../legendView/LegendView';
import ParametersForm from '../parametersForm/ParametersForm';
import PredictionView from '../predictionView/PredictionView';
import TitlePage from '../titlePage/TitlePage';


import { BodyData, ContentData } from './Styles';


function ByParameters() {
    document.title = "ByParameters";
    const [bitcoinPredict, setBitcoinPredict] = useState<BitcoinPredictType>();
    const [parametersFormValue, setParametersFormValue] = useState<SimpleBitcoin>({
        close: 0,
        open: 0,
        high: 0,
        low: 0
    });

    useEffect(() => {
        return () => { };
    }, [bitcoinPredict]);

    function handleOnChange (simpleBitcoin: SimpleBitcoin){
        setParametersFormValue(simpleBitcoin)
        if (parametersFormValue.high !== 0 || parametersFormValue.open !== 0 || parametersFormValue.low !== 0) {
            BitcoinPredictService.getBitcoinPredictBySimpleBitcoin(parametersFormValue)
                .then((data) => {
                    setBitcoinPredict(data);
                })
                .catch((data) => {
                    setBitcoinPredict(data);
                });
        }
    }

    return (
        <ContentData>
            <TitlePage title="BY PARAMETERS" />
            <ParametersForm value={parametersFormValue} onChange={handleOnChange} />
            <BodyData>
                {bitcoinPredict && bitcoinPredict.body && <DateView {...bitcoinPredict} />}
                {bitcoinPredict && bitcoinPredict.body && <PredictionView {...bitcoinPredict} />}
                {bitcoinPredict && bitcoinPredict.body && <LegendView />}
                {!bitcoinPredict && (parametersFormValue.high !== 0 || parametersFormValue.open !== 0 || parametersFormValue.low !== 0) && <TailSpin color='#ED9902' />}
            </BodyData>
        </ContentData>
    )
}

export default ByParameters;