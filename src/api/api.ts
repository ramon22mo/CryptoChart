import axios from "axios";
import {useCache} from "../hooks/useCache.tsx";

export const useApi = () => {
const { cache, setCache } = useCache();
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "accept": "application/json"
    }
  });

  api.interceptors.response.use((response) => {
    setCache(prevCache => ({ ...prevCache, [response.config.url as string]: response.data }))
    return response;
  }, error => {
    return Promise.reject(error);
  });

  return { api, cache };
};