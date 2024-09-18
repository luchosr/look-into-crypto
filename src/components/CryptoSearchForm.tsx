import { currencies } from '../data';

export default function CryptoSearchForm() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda</label>
        <select id="cyrrency" name="currency">
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
        <select id="cryptocurrency" name="cryptocurrency">
          <option value="">--- Seleccione una criptomoneda ---</option>
        </select>
      </div>
      <input type="submit" value={'Cotizar'} />
    </form>
  );
}
