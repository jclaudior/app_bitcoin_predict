import axios, { AxiosResponse } from 'axios';
import { Moment } from 'moment';
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
	getBitcoinPredictByDate: (date: Moment): Promise<BitcoinPredictType> => { 
		let month: string = String(date.get("month")+1)
		month = month.length > 1 ? month : `0${month}` 
		let year = String(date.get("year"))
		let day = String(date.get("date"))
		day = day.length > 1 ? day : `0${day}`
		return requests.get(`bitcoin/${day}/${month}/${year}`)
	},
	getBitcoinPredictBySimpleBitcoin: (simpleBitcoin: SimpleBitcoin): Promise<BitcoinPredictType> =>
		requests.post('bitcoin', simpleBitcoin),
};