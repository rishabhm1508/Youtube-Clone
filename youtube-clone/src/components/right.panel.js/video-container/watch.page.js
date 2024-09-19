import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { setSidePanelToggle } from "../../../utils/store/app.slice";

export const Watch = () => {
  const actionDispatcher = useDispatch();
  const [searchParam] = useSearchParams();
  console.log(searchParam);
  useEffect(() => {
    actionDispatcher(setSidePanelToggle(false));
  }, []);

  return (
    <div className="p-1 ">
      <iframe
        width="85%"
        height="700"
        className="rounded-lg"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
