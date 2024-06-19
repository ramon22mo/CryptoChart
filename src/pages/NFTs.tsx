import {useNFT} from "../hooks/useNFT.tsx";
import {Card} from "@tremor/react";
import {useNFTInfo} from "../api/nfts.ts";
import {useEffect, useState} from "react";

interface NFT {
  id: string;
  name: string;
  description: string;
  native_currency_symbol: string;
  image: {
    small: string;
    thumb: string;
  };
  floor_price: {
    usd: number;
  };
  market_cap: {
    usd: number;
  };
  volume_24h: {
    usd: number;
  };
  number_of_unique_addresses: number;
  total_supply: number;
  links: {
    homepage: string;
    twitter: string;
    discord: string;
  };
}

export const NFTs = () => {
  const { selectedNFT } = useNFT();
  const fetchNFT = useNFTInfo();

  const [nftInfo, setNFTInfo] = useState<NFT | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNFTInfo = async () => {
      try {
        const response = await fetchNFT(selectedNFT);
        setNFTInfo(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNFTInfo();
  }, [selectedNFT]);

  if (isLoading) return <div>Loading...</div>;
  if (!nftInfo) return <div>Error loading NFT info</div>;

  const CARD_INFO = [
    { title: nftInfo.name, description: "Native Currency", value: nftInfo.native_currency_symbol },
    { title: "Floor Price", description: "Current Floor Price", value: `$${nftInfo.floor_price.usd.toLocaleString("en-US", { maximumFractionDigits: 2 })}` },
    { title: "Market Cap", description: "Total Market Cap", value: `$${nftInfo.market_cap.usd.toLocaleString("en-US", { maximumFractionDigits: 2 })}` },
    { title: "24h Volume", description: "24h Trading Volume", value: `$${nftInfo.volume_24h.usd.toLocaleString("en-US", { maximumFractionDigits: 2 })}` },
    { title: "Unique Addresses", description: "Number of Unique Addresses", value: nftInfo.number_of_unique_addresses },
    { title: "Total Supply", description: "Total Supply", value: nftInfo.total_supply }
  ]

  return (
    <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {CARD_INFO.map((info, index) => (
        <Card key={index}>
          <h1 className="text-2xl text-dark dark:text-white">{info.title}</h1>
          <p className="text-gray-500 dark:text-gray-500">{info.description}</p>
          <h3 className="mt-8 text-dark dark:text-white text-4xl truncate hover:text-clip font-semibold">{info.value}</h3>
        </Card>
      ))}
    </main>
  );
};