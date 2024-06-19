import {Link, useLocation} from "react-router-dom";
import {ThemeToggle} from "../components/header/ThemeToggle.tsx";
import {SelectCrypto} from "../components/header/SelectCrypto.tsx";
import {SelectNFT} from "../components/header/SelectNFT.tsx";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center">
     <div className="flex items-center gap-4">
       <Link to="/" className="flex items-center gap-2">
         <img src="/crypto.svg" alt="Logo" className="w-8 h-8 my-6"/>
         <p className="text-dark dark:text-white font-semibold">Crypto Chart</p>
       </Link>
        <Link to="/nfts" className="text-dark dark:text-white">NFTs</Link>
     </div>
      <div className="flex items-center gap-2">
        {location.pathname === "/" && <SelectCrypto />}
        {location.pathname === "/nfts" && <SelectNFT />}
        <ThemeToggle />
      </div>
    </header>
  );
};