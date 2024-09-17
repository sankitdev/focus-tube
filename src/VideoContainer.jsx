import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({ result }) => {
  return (
    <>
      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2">
          {result.map((item) => (
            <Link
              to={`/watch?v=${item.id.videoId ? item.id.videoId : item.id}`}
              key={item.id.videoId ? item.id.videoId : item.id}
            >
              <VideoCard {...item} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default VideoContainer;
