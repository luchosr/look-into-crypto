import { useEffect } from 'react';
import CryptoSearchForm from './components/CryptoSearchForm';
import { useCryptoStore } from './store';

function App() {
  const featCryptos = useCryptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    featCryptos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CryptoSearchForm />
        </div>
      </div>
    </>
  );
}

export default App;
