import React, { useEffect, useState } from 'react'
import BitcoinPredictType from '../../models/bitcoin.interface';
import { BitcoinPredictService } from '../../services/bitcoint.service';
import DateView from '../dataView/DateView';
import LegendView from '../legendView/LegendView';
import PredictionView from '../predictionView/PredictionView';
import TitlePage from '../titlePage/TitlePage';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

import { BodyData, ContentData } from './Styles';


function ContainerPredict() {
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

        <div>
            <Routes>
                <Route path="/" element={
                    <ContentData>
                        <TitlePage title="TODAY" />
                        <BodyData>
                            {bitcoinPredict && bitcoinPredict.body && <DateView {...bitcoinPredict} />}
                            {bitcoinPredict && bitcoinPredict.body && <PredictionView {...bitcoinPredict} />}
                            {bitcoinPredict && bitcoinPredict.body && <LegendView />}
                        </BodyData>
                    </ContentData>
                } />
                <Route path="/bydate" element={
                    <ContentData>
                        <TitlePage title="BY DATE" />
                        <BodyData>
                            {bitcoinPredict && bitcoinPredict.body && <DateView {...bitcoinPredict} />}
                            {bitcoinPredict && bitcoinPredict.body && <PredictionView {...bitcoinPredict} />}
                            {bitcoinPredict && bitcoinPredict.body && <LegendView />}
                        </BodyData>
                    </ContentData>
                } />
                <Route path="/byparameters" element={
                    <ContentData>
                        <TitlePage title="BY PARAMETERS" />
                        <BodyData>
                            {bitcoinPredict && bitcoinPredict.body && <DateView {...bitcoinPredict} />}
                            {bitcoinPredict && bitcoinPredict.body && <PredictionView {...bitcoinPredict} />}
                            {bitcoinPredict && bitcoinPredict.body && <LegendView />}
                        </BodyData>
                    </ContentData>
                } />
            </Routes>
        </div>
    )
}

export default ContainerPredict;