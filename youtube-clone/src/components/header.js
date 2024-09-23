import { useDispatch, useSelector } from "react-redux";
import {
  hamburgerIconUrl,
  searchIcon,
  searchSuggestionsAPI,
  userIcon,
  youtubeLogo,
} from "../utils/constants";
import {
  setSearchResultsCache,
  toggleSidePanelAction,
} from "../utils/store/app.slice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DropdownList } from "./common/downdown.list";

export const Header = () => {
  const [searchString, setSearchString] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSearchSuggestions, setshowSearchSuggestions] = useState(false);
  const cachedSearchResults = useSelector(
    (store) => store.appSlice.searchResultsCache
  );
  const actionDispatcher = useDispatch();
  const toggleSidePanel = () => {
    actionDispatcher(toggleSidePanelAction());
  };

  const updateString = (searchStringEvent) => {
    console.log(searchStringEvent.target.value);
    setSearchString(searchStringEvent.target.value);
  };

  const updateShowSearchSuggestions = (isShow) => {
    setshowSearchSuggestions(isShow);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      cachedSearchResults[searchString]
        ? setSearchSuggestions(cachedSearchResults[searchString])
        : searchSuggestionsList();
    }, 300);

    return () => {
      console.log("cleared");
      clearTimeout(timer);
    };
  }, [searchString]);

  const searchSuggestionsList = async () => {
    console.log("searchSuggestionsList");
    const apiCall = await fetch(`${searchSuggestionsAPI}&q=${searchString}`);
    const data = await apiCall.json();
    setSearchSuggestions(data[1]);
    actionDispatcher(
      setSearchResultsCache({ searchString, searchResults: data[1] })
    );
  };

  return (
    <div className="flex w-full shadow-sm p-1">
      <div className="w-3/12 flex">
        <img
          onClick={toggleSidePanel}
          className="h-10 mt-3 cursor-pointer p-1 hover:bg-slate-200 rounded-full active:bg-slate-300 active:outline-1"
          alt="humburger logo"
          src={hamburgerIconUrl}
        />
        <Link to={"/"}>
          <img
            className="w-28 h-16 cursor-pointer"
            alt="youtube logo"
            src={youtubeLogo}
          />
        </Link>
      </div>

      <div className="w-7/12 py-4">
        <div className="flex">
          <input
            onFocus={() => updateShowSearchSuggestions(true)}
            onChange={($event) => updateString($event)}
            onBlur={() => updateShowSearchSuggestions(false)}
            className="border-2 h-10 w-8/12 p-1 rounded-l-lg border-zinc-200"
          />
          <img
            className="h-10 cursor-pointer p-1 bg-gray-100 rounded-r-lg px-"
            alt="humburger logo"
            src={searchIcon}
          />
        </div>

        {searchSuggestions.length > 0 && showSearchSuggestions && (
          <div className="flex flex-col absolute bg-white w-[inherit] border-[1px] shadow-lg rounded-lg max-h-60 overflow-scroll py-1">
            <DropdownList listStringArray={searchSuggestions} />
          </div>
        )}
      </div>

      <div className="w-2/12 flex justify-end pr-3 pt-2">
        <img
          className="w-10 h-10 cursor-pointer bg-zinc-100 rounded-r-lg mt-1"
          alt="humburger logo"
          src={userIcon}
        />
      </div>
    </div>
  );
};
