import { useEffect, useState } from "react";
import { youtubeVideoAPI } from "../../../utils/constants";
import { VideoCard } from "./video.card";
import { VideoShimmer } from "./video.shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchPopulerVideos();
  }, []);

  const fetchPopulerVideos = async function () {
    const data = await fetch(youtubeVideoAPI);
    const dataJson = await data.json();
    setVideos(dataJson.items);
  };

  return videos.length ? (
    <div className="grid grid-cols-4">
      {videos.map((video) => {
        return (
          <div
            key={video.id}
            className="mt-2 cursor-pointer p-2 m-1 rounded-md shadow-md border-2 border-gray-100"
          >
            <VideoCard video={video} />
          </div>
        );
      })}
    </div>
  ) : (
    <VideoShimmer />
  );
};
export default VideoContainer;
