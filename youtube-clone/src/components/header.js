import {
  hamburgerIconUrl,
  searchIcon,
  userIcon,
  youtubeLogo,
} from "../utilities/constants";

export const Header = () => {
  return (
    <div className="flex p-1 w-full">
      <div className="w-2/12 flex">
        <img
          className="w-12 h-10 mt-3 ml-3 cursor-pointer p-1 hover:bg-slate-200 rounded-full"
          alt="humburger logo"
          src={hamburgerIconUrl}
        />
        <img className="w-28 h-16" alt="youtube logo" src={youtubeLogo} />
      </div>

      <div className="w-8/12 flex justify-center items-center">
        <input className="border-2 h-10 w-8/12 p-1 rounded-l-lg border-zinc-200" />
        <img
          className="w-12 h-10 cursor-pointer p-1 bg-zinc-100 rounded-r-lg px-1"
          alt="humburger logo"
          src={searchIcon}
        />
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
