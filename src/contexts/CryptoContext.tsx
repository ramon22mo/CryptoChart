import React, {createContext, useState} from "react";

type CryptoContextType = {
  selectedCrypto: string;
  setSelectedCrypto: React.Dispatch<React.SetStateAction<string>>;
}

export const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

type CryptoProviderProps = {
  children: React.ReactNode;
};

export const CryptoProvider: React.FC<CryptoProviderProps> = ({ children }) => {
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");

  return (
    <CryptoContext.Provider value={{selectedCrypto, setSelectedCrypto}}>
      {children}
    </CryptoContext.Provider>
  );
};