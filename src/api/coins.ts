import {useApi} from "./api.ts";

export const useCoinList = () => {
  const { api } = useApi();

  return async (page: number) => {
    try {
      const response = await api.get(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}`);
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error(error);
    }
  };
}

export const useCoinDataInfo = () => {
  const { api } = useApi();

  return async (crypto: string) => {
    try {
      const response = await api.get(`/coins/markets?vs_currency=usd&ids=${crypto}`);
      return response.data[0];
    } catch (error) {
      console.error(error);
    }
  };
}

export const useCoinHistoricalData = () => {
  const { api } = useApi();

  return async (crypto: string, days: string) => {
    try {
      const response = await api.get(`/coins/${crypto}/market_chart?vs_currency=usd&days=${days}`);
      return response.data.prices.map((price: [number, number], index: number) => ({
        date: new Date(price[0]).toLocaleDateString(),
        Price: price[1],
        MarketCap: response.data.market_caps[index][1],
        TotalVolume: response.data.total_volumes[index][1]
      }));
    } catch (error) {
      console.error(error);
    }
  };
}
