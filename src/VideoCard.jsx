const VideoCard = ({ snippet, statistics }) => {
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="h-72 w-72 flex-grow bg-white rounded-md shadow-md">
      <img
        src={thumbnails?.maxres?.url}
        className="w-full h-2/3 object-cover rounded-md"
        alt={title}
      />
      <div className="p-4">
        <h1 className="text-md sm:text-lg font-semibold truncate">{title}</h1>
        <h2 className="text-gray-600 text-sm">{channelTitle}</h2>
        <h3 className="text-gray-500 text-xs mt-1">
          <span>{viewCount}</span> • <span>4 days ago</span>
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;
