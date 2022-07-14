export default interface BitcoinPredictType {
   status: number,
   message: string,
   body?: BitcoinBody
}

export interface BitcoinBody{
    simpleBitcoin: SimpleBitcoin
    prediction: number,
    date: Date,
    ascend: boolean
}

export interface SimpleBitcoin{
        open: number,
        high: number,
        low: number,
        close: number
}