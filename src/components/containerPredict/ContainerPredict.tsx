import React, { useEffect, useState } from 'react'
import BitcoinPredictType from '../../models/bitcoin.interface';
import { BitcoinPredictService } from '../../services/bitcoint.service';
import DataStatic, { DataStaticProps } from '../dataStatic/DataStatic';

import { Container } from './Styles';


function ContainerPredict(){
    const [bitcoinPredict, setBitcoinPredict] = useState<BitcoinPredictType>();
    const [dataStaticProps, setDataStaticProps] = useState<DataStaticProps>({
        date: new Date(),
        open:  0,
        high: 0,
        low:  0
    });

    useEffect(() => {
        BitcoinPredictService.getBitcoinPredictNow()
            .then((data) => {
                setBitcoinPredict(data);
            })
            .catch((data) => {
                setBitcoinPredict(data);
            });
        return () => {};
    }, []);

    useEffect(() => {
            setDataStaticProps ({
                    date: bitcoinPredict  && bitcoinPredict.body ? bitcoinPredict.body.date : new Date(),
                    open: bitcoinPredict  && bitcoinPredict.body ? bitcoinPredict.body.simpleBitcoin.open: 0,
                    high: bitcoinPredict  && bitcoinPredict.body ? bitcoinPredict.body.simpleBitcoin.high: 0,
                    low: bitcoinPredict  && bitcoinPredict.body  ? bitcoinPredict.body.simpleBitcoin.low: 0
            })
    }, [bitcoinPredict]);


    
    return (
        <Container>
             {dataStaticProps.open > 0 && <DataStatic {...dataStaticProps}/>}
        </Container>
    )
}

export default ContainerPredict;