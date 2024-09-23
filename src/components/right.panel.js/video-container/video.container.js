import { useEffect, useState } from "react";
import { VideoCard } from "./video.card";
import { VideoShimmer } from "./video.shimmer";
import { Link } from "react-router-dom";
import { youtubeVideoAPI } from "../../../utils/constants";

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
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => {
        return (
          <div
            key={video.id}
            className="mt-2 cursor-pointer p-2 m-1 rounded-md shadow-md border-2 border-gray-100"
          >
            <Link to={"/watch?v=" + video.id}>
              <VideoCard video={video} />
            </Link>
          </div>
        );
      })}
    </div>
  ) : (
    <VideoShimmer />
  );
};
export default VideoContainer;
