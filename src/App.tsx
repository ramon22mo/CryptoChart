import {RouterProvider} from "react-router-dom";
import {routes} from "./routes";
import {CacheProvider} from "./contexts/CacheContext.tsx";
import {CryptoProvider} from "./contexts/CryptoContext.tsx";
import {NFTProvider} from "./contexts/NFTContext.tsx";

function App() {
  return (
    <>
      <CacheProvider>
        <CryptoProvider>
          <NFTProvider>
            <RouterProvider router={routes} />
          </NFTProvider>
        </CryptoProvider>
      </CacheProvider>
    </>
  )
}

export default App
