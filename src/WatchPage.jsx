import React from "react";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const [params] = useSearchParams();
  // console.log(params.get("v"));
  return (
    <div className="p-4">
      <iframe
        width="860"
        height="500"
        src={"https://www.youtube.com/embed/" + params.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
