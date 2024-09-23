import { sidePanelIcons, subcriptions } from "../../utils/constants";
import { SidePanelButton } from "./side-panel-button";

export const SidePanel = () => {
  return (
    <div>
      {sidePanelIcons.map((iconDetail) => {
        return (
          <SidePanelButton
            key={iconDetail.name}
            text={iconDetail.name}
            imgUrl={iconDetail.url}
            height={iconDetail.height}
            width={iconDetail.width}
          />
        );
      })}

      <div className="w-full h-[0.5px] bg-gray-200"></div>

      <div>
        <p className="font-bold p-3">Subscriptions</p>

        {subcriptions.map((iconDetail) => {
          return (
            <SidePanelButton
              key={iconDetail.name}
              text={iconDetail.name}
              imgUrl={iconDetail.imgUrl}
              height={iconDetail.height}
              width={iconDetail.width}
            />
          );
        })}
      </div>
    </div>
  );
};
