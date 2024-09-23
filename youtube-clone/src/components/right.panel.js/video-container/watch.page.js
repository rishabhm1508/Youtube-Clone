import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  setSidePanelToggle,
  toggleSidePanelAction,
} from "../../../utils/store/app.slice";
import { CommentsContainer } from "./comments/comments.container";
import { getVideoDetailsURL, YT_API_KEY } from "../../../utils/constants";

export const Watch = () => {
  const actionDispatcher = useDispatch();
  const [searchParam] = useSearchParams();
  const [subscribed, setSubscribed] = useState(false);
  const [videoDetails, setVideoDetails] = useState(null);
  useEffect(() => {
    actionDispatcher(setSidePanelToggle(false));
    getVideoDetails(searchParam.get("v"));
    return () => {
      actionDispatcher(toggleSidePanelAction());
    };
  }, []);

  const getVideoDetails = async (videoId) => {
    const url = `${getVideoDetailsURL}${videoId}&key=${YT_API_KEY}`;
    const data = await fetch(url);
    const videoFile = await data.json();
    setVideoDetails(videoFile.items[0].snippet);
  };

  return (
    videoDetails && (
      <div className="p-1 flex flex-col w-9/12">
        <iframe
          height="700"
          className="rounded-lg"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <p className="text-xl font-bold mt-3">{videoDetails.title}</p>

        <div className="my-4 flex items-center">
          <p className="text-lg font-bold flex items-center mr-auto">
            <img
              className="h-10 w-10 rounded-full"
              src={videoDetails.thumbnails.high.url}
            />
            <span className="mx-2">{videoDetails.channelTitle}</span>

            <button
              onClick={() => setSubscribed(!subscribed)}
              className={
                subscribed
                  ? "bg-gray-400 text-black py-1 px-4 rounded-xl active:bg-gray-600"
                  : "bg-red-600 font-bold text-white py-1 px-4 rounded-xl active:bg-red-800"
              }
            >
              {subscribed ? "Unsubscribe" : "Subscribe"}
            </button>
          </p>
          <button
            className="text-xxl font-bold text-blue-500 bg-white border-[1px] border-blue-600 border-r-0 rounded-r-none rounded-xl p-2 py-1
        active:bg-blue-600 active:text-white"
          >
            <span className="mr-2">Like</span>
            <i className="fa">&#xf087;</i>
          </button>
          <button className="text-xxl text-blue-500 bg-white border-[1px] border-blue-600 rounded-l-none rounded-xl px-3 py-1 mr-4 active:bg-blue-600 active:text-white">
            <i className="fa">&#xf088;</i>
          </button>

          <button className="text-xxl text-gray-700 bg-white border-[1px] border-gray-900 rounded-xl px-3 py-1 active:bg-gray-700 active:text-white">
            Download
            <i className="fa fa-download ml-2"></i>
          </button>
        </div>

        <div>
          <CommentsContainer />
        </div>
      </div>
    )
  );
};
