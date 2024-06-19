import {Outlet} from "react-router-dom";
import {Header} from "../sections/Header.tsx";
import {Footer} from "../sections/Footer.tsx";

export const RootLayout = () => {
  return (
    <div className="mx-16 sm:mx-24 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};