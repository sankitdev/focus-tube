import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { URL_POPULAR } from "./constant";

const VideoContainer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const FetchData = async () => {
      const resposne = await fetch(URL_POPULAR);
      const data = await resposne.json();
      setData(data.items);
      console.log(data.items);
    };
    FetchData();
  }, []);
  return (
    <>
      {data && (
        <div className="flex flex-wrap gap-5 mt-4">
          {data.map((items) => (
            <VideoCard key={items.id} {...items} />
          ))}
        </div>
      )}
    </>
  );
};

export default VideoContainer;
