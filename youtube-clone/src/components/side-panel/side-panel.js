import { sidePanelIcons } from "../../utils/constants";
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
          />
        );
      })}
    </div>
  );
};
