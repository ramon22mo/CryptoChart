import {useEffect, useState} from "react";
import {Card} from "@tremor/react";
import {useCrypto} from "../hooks/useCrypto.tsx";
import {useCoinDataInfo} from "../api/coins.ts";

interface CryptoInfo {
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
}

export const CardInfo = () => {
  const { selectedCrypto } = useCrypto();
  const fetchCoinData = useCoinDataInfo();

  const [cryptoInfo, setCryptoInfo] = useState<CryptoInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoInfo = async () => {
      try {
       const response = await fetchCoinData(selectedCrypto);
        setCryptoInfo(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCryptoInfo();
  }, [selectedCrypto]);

  if (isLoading) return <div>Loading...</div>;
  if (!cryptoInfo) return <div className="text-dark dark:text-white text-4xl font-semibold">Error loading crypto info</div>;

  const CARD_INFO = [
    { title: cryptoInfo.name, description: "Current Price", value: `$${cryptoInfo.current_price.toLocaleString("en-US", { maximumFractionDigits: 2 })}`, percentage: `${cryptoInfo.price_change_percentage_24h}%` },
    { title: "Volume", description: "24h Trading Volume", value: `$${cryptoInfo.total_volume.toLocaleString("en-US", { maximumFractionDigits: 2 })}` },
    { title: "Market Cap", description: "Total Market Capitalization", value: `$${cryptoInfo.market_cap.toLocaleString("en-US", { maximumFractionDigits: 2 })}` }
  ]

  return (
    <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {CARD_INFO.map((info, index) => (
        <Card key={index}>
          <h1 className="text-2xl text-dark dark:text-white">{info.title}</h1>
          <p className="text-gray-500 dark:text-gray-500">{info.description}</p>
          <h3 className="mt-8 text-dark dark:text-white text-4xl truncate hover:text-clip font-semibold">{info.value}</h3>
          {info.percentage && (
            <p className={`mt-2 ${cryptoInfo.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"}`}>{info.percentage}%</p>
          )}
        </Card>
      ))}
    </main>
  );
};