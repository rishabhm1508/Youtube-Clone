import { useSelector } from "react-redux";
import { SidePanel } from "./side-panel/side-panel";

export const Body = () => {
  const toggleSidePanel = useSelector((store) => store.appSlice.sidePanelOpen);
  return (
    <div className="flex w-full mt-2 p-1">
      {toggleSidePanel && (
        <div className="w-2/12 shadow-md">
          <SidePanel />
        </div>
      )}
    </div>
  );
};
