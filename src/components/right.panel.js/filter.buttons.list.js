import { useDispatch, useSelector } from "react-redux";
import { filterButtonsList } from "../../utils/constants";
import { setActiveFilter } from "../../utils/store/app.slice";

export const FilterButtonsList = () => {
  const activeFilter = useSelector((store) => store.appSlice.activeFilter);
  const actionDispatcher = useDispatch();
  const handleSetActiveFilter = (btnName) => {
    actionDispatcher(setActiveFilter(btnName));
  };
  return (
    <div className="mt-2">
      {filterButtonsList.map((btnName) => {
        return (
          <button
            key={btnName}
            onClick={() => handleSetActiveFilter(btnName)}
            className={
              activeFilter === btnName
                ? "bg-black text-sm text-white px-4 py-1 mx-2 rounded-lg"
                : "bg-gray-200 text-sm px-4 py-1 mx-2 rounded-lg"
            }
          >
            {btnName}
          </button>
        );
      })}
    </div>
  );
};
