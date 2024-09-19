import axios from 'axios';
import { CryptoCurrenciesResponseSchema } from './../src/schema/crypto-schema';
import { Pair } from '../src/types';
export async function getCryptos() {
  const url =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

  const {
    data: { Data },
  } = await axios.get(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios.get(url);
  console.log(DISPLAY[pair.cryptocurrency][pair.currency].PRICE);
}
