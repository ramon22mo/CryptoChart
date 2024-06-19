import {useApi} from "./api.ts";

export const useNFTList = () => {
  const { api } = useApi();

  return async () => {
    try {
      const response = await api.get(`/nfts/list`);
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };
}

export const useNFTInfo = () => {
  const { api } = useApi();

  return async (id: string) => {
    try {
      const response = await api.get(`/nfts/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}