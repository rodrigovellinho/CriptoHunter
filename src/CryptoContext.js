import { useState, useEffect, useContext, createContext } from 'react';

const Crypto = createContext();

function CryptoContext({ children }) {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');

  useEffect(() => {
    if (currency === 'EUR') setSymbol('€');
    else if (currency === 'USD') setSymbol('$');
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
}

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
