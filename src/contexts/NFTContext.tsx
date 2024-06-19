import React, {useState} from "react";

type NFTContextType = {
  selectedNFT: string;
  setSelectedNFT: React.Dispatch<React.SetStateAction<string>>;
}

export const NFTContext = React.createContext<NFTContextType | undefined>(undefined);

type NFTProviderProps = {
  children: React.ReactNode;
};

export const NFTProvider: React.FC<NFTProviderProps> = ({ children }) => {
  const [selectedNFT, setSelectedNFT] = useState("squiggly");

  return (
    <NFTContext.Provider value={{ selectedNFT, setSelectedNFT }}>
      {children}
    </NFTContext.Provider>
  );
};