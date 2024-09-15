import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { URL_POPULAR } from "./constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(URL_POPULAR);
      const data = await response.json();
      setData(data.items);
      console.log(data.items);
    };
    FetchData();
  }, []);

  return (
    <>
      {data && (
        <div
          className="
            grid 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            xl:grid-cols-5 gap-6
            mt-4"
        >
          {data.map((item) => (
            <Link to={"/watch?v=" + item.id} key={item.id} className="block">
              <VideoCard {...item} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default VideoContainer;
