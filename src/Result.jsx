import { useSearchParams } from "react-router-dom";
import { SEARCH_URL } from "./constant";
import VideoContainer from "./VideoContainer";
import useFetch from "./hooks/useFetch";

const Result = () => {
  const [value] = useSearchParams();
  const data = useFetch(SEARCH_URL, value.get("search_query"));
  return <VideoContainer result={data?.items} />;
};
export default Result;
