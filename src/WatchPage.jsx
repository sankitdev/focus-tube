import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");

  return (
    <div className="grid grid-cols-3 grid-rows-[auto,1fr] gap-4 p-4 w-full h-full">
      {/* Video Section */}
      <div className="col-span-3 row-span-1 sm:col-span-3 md:col-span-3 lg:col-span-2 bg-gray-300 p-2 rounded-md">
        {videoId ? (
          <iframe
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-[400px] lg:h-[500px] rounded-md"
          ></iframe>
        ) : (
          <p className="text-center text-gray-500">No video selected</p>
        )}
        <div className="my-4 p-2 bg-white rounded-md shadow-md">
          Details Section
        </div>
      </div>

      {/* Side Content Area */}
      <div className="col-span-3 row-span-2 md:col-span-3 lg:col-span-1 bg-gray-300 p-2 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Watch Page</h2>
        <p className="text-gray-700">
          Here is some information about the video or related content. Here is
          some information about the video or related content. Here is some
        </p>
      </div>

      {/* Comments Section */}
      <div className="col-span-3 lg:col-span-2 md:col-span-3 row-span-1 bg-gray-100 p-2 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Comment Section</h2>
        <div className="space-y-2">
          <div className="p-2 bg-white rounded-md shadow-sm">
            <p className="font-semibold">User1</p>
            <p>Great video! I learned a lot.</p>
          </div>
          <div className="p-2 bg-white rounded-md shadow-sm">
            <p className="font-semibold">User2</p>
            <p>Thanks for the information. Very helpful.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
