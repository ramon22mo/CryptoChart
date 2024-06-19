export const Footer = () => {
  return (
    <footer className="p-4 text-center">
      <p className="text-sm text-gray-500">
        Please note that this application uses the free version of the {""}
        <a href="https://www.coingecko.com/en/api" target="_blank" className="underline">CoinGecko API</a>.
        {" "}As a result, there may be errors when querying for certain coins.</p>
    </footer>
  );
};