import { useState, useEffect } from "react";
import { API } from "../constant";
const useFetch = (url, urlParam) => {
  const [data, setData] = useState(null);
  const searchQuery = urlParam || "";
  useEffect(() => {
    console.log("Inside Fetch");
    const FetchData = async () => {
      const response = await fetch(url + searchQuery + `&key=${API}`);
      const data = await response.json();
      setData(data.items);
    };
    FetchData();
  }, [url, urlParam]);
  return data;
};

export default useFetch;
