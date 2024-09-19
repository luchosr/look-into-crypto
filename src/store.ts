import { CryptoPrice } from './types/index';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Cryptocurrency, Pair } from './types';
import { fetchCurrentCryptoPrice, getCryptos } from '../services/CryptoService';

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  result: CryptoPrice;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    result: {
      IMAGEURL: '',
      PRICE: '',
      HIGHDAY: '',
      LOWDAY: '',
      CHANGE24HOUR: '',
      LASTUPDATE: '',
    },
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },
    fetchData: async (pair) => {
      const result = await fetchCurrentCryptoPrice(pair);
      set(() => ({
        result,
      }));
    },
  }))
);
