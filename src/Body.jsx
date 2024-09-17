import VideoContainer from "./VideoContainer";
import { URL_POPULAR } from "./constant";
import useFetch from "./hooks/useFetch";
const Body = () => {
  const data = useFetch(URL_POPULAR);
  return (
    <div className="px-5">
      <VideoContainer result={data} />
    </div>
  );
};
export default Body;
