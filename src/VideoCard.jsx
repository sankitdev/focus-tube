const VideoCard = ({ snippet, statistics }) => {
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  const convertCount = (viewCount) => {
    if (viewCount.length >= 4 && viewCount.length <= 6) {
      let convert = +viewCount / 1000;
      return convert.toFixed(2) + "K";
    } else if (viewCount.length >= 7 && viewCount.length <= 9) {
      let convert = +viewCount / 1000000;
      return convert.toFixed(2) + "M";
    } else if (viewCount.length > 9) {
      let convert = +viewCount / 1000000000;
      return convert.toFixed(2) + "B";
    } else {
      return +viewCount;
    }
  };

  return (
    <div className="bg-white rounded-md shadow-md">
      <img
        src={thumbnails?.maxres?.url}
        className="w-full h-48 object-cover rounded-t-md"
        alt={title}
      />
      <div className="p-4">
        <h1 className="text-md sm:text-lg font-semibold truncate">{title}</h1>
        <h2 className="text-gray-600 text-sm">{channelTitle}</h2>
        <h3 className="text-gray-500 text-xs mt-1">
          <span>{convertCount(viewCount)}</span> • <span>{publishedAt}</span>
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;
