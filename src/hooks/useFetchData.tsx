import {useCache} from "./useCache.tsx";
import axios from "axios";

export const useFetchData = async () => {
  const { cache, setCache } = useCache();

  return async (url: string) => {
    if (cache[url]) {
      return cache[url];
    } else {
      const response = await axios.get(url);
      setCache(prevCache => ({...prevCache, [url]: response.data}));
      return response.data;
    }
  };
}