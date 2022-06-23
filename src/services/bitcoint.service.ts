import axios, { AxiosResponse } from 'axios';
import BitcoinPredictType, {SimpleBitcoin} from '../models/bitcoin.interface';

const instance = axios.create({
	baseURL: 'https://hr-bitcoin-predict.herokuapp.com/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
};

export const BitcoinPredictService = {
	getBitcoinPredictNow: (): Promise<BitcoinPredictType> => requests.get('bitcoin'),
	getBitcoinPredictByDate: (day: number, month: number, year: number): Promise<BitcoinPredictType> => requests.get(`bitcoin/${day}/${month}/${year}`),
	getBitcoinPredictBySimpleBitcoin: (simpleBitcoin: SimpleBitcoin): Promise<BitcoinPredictType> =>
		requests.post('bitcoin', simpleBitcoin),
};