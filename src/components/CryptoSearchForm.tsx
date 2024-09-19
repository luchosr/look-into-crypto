import { useState } from 'react';
import { currencies } from '../data';
import { useCryptoStore } from '../store';
import { Pair } from '../types';
import ErrorMessage from './ErrorMessage';

export default function CryptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
  const [pair, setPair] = useState<Pair>({
    currency: '',
    cryptocurrency: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda</label>
        <select
          id="cyrrency"
          name="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">--- Seleccione una moneda ---</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Criptomoneda</label>
        <select
          id="cryptocurrency"
          name="cryptocurrency"
          onChange={handleChange}
          value={pair.cryptocurrency}
        >
          <option value="">--- Seleccione una criptomoneda ---</option>
          {cryptocurrencies.map((cryptocurrency) => (
            <option
              key={cryptocurrency.CoinInfo.FullName}
              value={cryptocurrency.CoinInfo.Name}
            >
              {cryptocurrency.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value={'Cotizar'} />
    </form>
  );
}
