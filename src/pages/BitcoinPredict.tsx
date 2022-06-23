import React, { useEffect, useState } from 'react';
import BitcoinPredictType from '../models/bitcoin.interface';
import { BitcoinPredictService } from '../services/bitcoint.service';

function BitcoinPredict() {
    const [bitcoinPredict, setBitcoinPredict] = useState<BitcoinPredictType>();

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

    return (
      <div>{JSON.stringify(bitcoinPredict)}</div>
    );
}
  
export default BitcoinPredict;