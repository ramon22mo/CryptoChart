import React, {createContext, useState} from "react";

type CacheContextType = {
  cache: Record<string, unknown>;
  setCache: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
};

export const CacheContext = createContext<CacheContextType | undefined>(undefined);

type CacheProviderProps = {
  children: React.ReactNode;
};

export const CacheProvider: React.FC<CacheProviderProps> = ({ children }) => {
  const [cache, setCache] = useState<Record<string, unknown>>({});

  return (
    <CacheContext.Provider value={{ cache, setCache }}>
      {children}
    </CacheContext.Provider>
  );
};
