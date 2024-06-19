import {useContext} from "react";
import {CryptoContext} from "../contexts/CryptoContext.tsx";

export const useCrypto = () => {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error("useCrypto must be used within a CryptoProvider");
  }
  return context;
};