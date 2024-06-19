import {CardInfo} from "../sections/CardInfo.tsx";
import {ChartCrypto} from "../sections/ChartCrypto.tsx";

export const Home = () => {
  return (
    <section className="my-4">
      <CardInfo />
      <ChartCrypto />
    </section>
  );
};