import { useSelector } from "react-redux";
import { SidePanel } from "./side-panel/side-panel";
import { Outlet } from "react-router-dom";

export const Body = () => {
  const toggleSidePanel = useSelector((store) => store.appSlice.sidePanelOpen);

  return (
    <div className="flex w-full mt-2 p-1">
      <>
        {toggleSidePanel && (
          <div className="lg:w-2/12 w-3/12 mr-1">
            <SidePanel />
          </div>
        )}

        <div
          className={
            toggleSidePanel
              ? "lg:w-10/12 w-9/12 pl-2 py-1 pr-1"
              : "w-full pl-2 py-1 pr-1"
          }
        >
          <Outlet />
        </div>
      </>
    </div>
  );
};
