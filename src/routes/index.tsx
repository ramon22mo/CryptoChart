import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "../layouts/RootLayout.tsx";
import {Home} from "../pages/Home.tsx";
import {NFTs} from "../pages/NFTs.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "nfts",
        element: <NFTs />
      }
    ]
  }
])