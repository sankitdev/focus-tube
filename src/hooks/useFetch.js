import { useState, useEffect } from "react";
import { API } from "../constant";
const useFetch = (url, urlParam) => {
  const [data, setData] = useState(null);
  const searchQuery = urlParam || "";
  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(url + searchQuery + `&key=${API}`);
      const data = await response.json();
      setData(data.items);
    };
    FetchData();
  }, []);
  return data;
};

export default useFetch;
