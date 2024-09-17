export const VideoCard = ({ video }) => {
  const thumbnails = video.snippet.thumbnails;
  const title = video.snippet.title;
  const stats = video.statistics;
  const getFormattedViews = (views) => `${Math.floor(views / 1000)}K`;

  return (
    <>
      <img
        className="h-60 w-full rounded-xl"
        alt="thumb nail"
        src={thumbnails.high.url}
      />
      <div className="p-2">
        <p className="font-semibold">{title}</p>
        <p className="">{getFormattedViews(stats.viewCount)}</p>
      </div>
    </>
  );
};
