import {useContext} from "react";
import {NFTContext} from "../contexts/NFTContext.tsx";

export const useNFT = () => {
  const context = useContext(NFTContext);
  if (!context) {
    throw new Error("useNFT must be used within a NFTProvider");
  }

  return context;
}