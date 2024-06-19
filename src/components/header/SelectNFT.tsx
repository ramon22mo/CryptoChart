import {useState, useEffect} from "react";
import {SearchSelect, SearchSelectItem} from "@tremor/react";
import {useNFT} from "../../hooks/useNFT.tsx";
import {useNFTList} from "../../api/nfts.ts";

interface NFT {
  id: string;
  name: string;
}

export const SelectNFT = () => {
  const { selectedNFT, setSelectedNFT } = useNFT();
  const fetchNFT = useNFTList();

  const [nfts, setNFTs] = useState<NFT[]>([]);

  const handleSelect = (newNFT: string) => {
    setSelectedNFT(newNFT);
  }

  useEffect(() => {
    const loadNFTs = async () => {
      const fetchedNFTs = await fetchNFT();
      setNFTs(fetchedNFTs);
    }
    loadNFTs();
  }, []);

  return (
    <>
      <SearchSelect
        className="w-44"
        id="nfts"
        name="nfts"
        value={selectedNFT}
        onValueChange={handleSelect}
      >
        {nfts.map((nft) => (
          <SearchSelectItem key={nft.id} value={nft.id}>{nft.name}</SearchSelectItem>
        ))}
      </SearchSelect>
    </>
  );
};