import useFetch from "./hooks/useFetch";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { URL_POPULAR } from "./constant";

const VideoContainer = ({ result }) => {
  const data = useFetch(URL_POPULAR);
  // const video = result ? result : data;

  return (
    <>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2">
          {data.map((item) => (
            <Link to={"/watch?v=" + item.id} key={item.id}>
              <VideoCard {...item} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default VideoContainer;
