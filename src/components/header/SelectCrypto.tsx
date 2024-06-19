import React, {useEffect, useState} from "react";
import {SearchSelect, SearchSelectItem} from "@tremor/react";
import {useCrypto} from "../../hooks/useCrypto.tsx";
import {useCoinList} from "../../api/coins.ts";

interface Coin {
  id: string;
  name: string;
}

export const SelectCrypto = () => {
  const { selectedCrypto, setSelectedCrypto } = useCrypto();
  const fetchCoins = useCoinList();

  const [coins, setCoins] = useState<Coin[]>([]);
  const [page, setPage] = useState(1);

  const handleSelect = (newCrypto: string) => {
    setSelectedCrypto(newCrypto);
  }

  const loadMoreCoins = async () => {
    const newCoins = await fetchCoins(page);
    if (newCoins) {
      setCoins(prevCoins => [...prevCoins, ...newCoins]);
      setPage(prevPage => prevPage + 1);
    }
  }

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      loadMoreCoins();
    }
  }

  useEffect(() => {
    loadMoreCoins();
  }, []);

  return (
    <>
      <SearchSelect
        className="w-44"
        id="crypto"
        name="crypto"
        value={selectedCrypto}
        onValueChange={handleSelect}
        onScroll={handleScroll}
      >
        {coins.map((coin) => (
          <SearchSelectItem key={coin.id} value={coin.id}>{coin.name}</SearchSelectItem>
        ))}
      </SearchSelect>
    </>
  );
};