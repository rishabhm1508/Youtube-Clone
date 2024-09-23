export const SidePanelButton = ({ imgUrl, text, height, width }) => {
  console.log(imgUrl);
  return (
    <div className="flex">
      <button className="w-full px-1 py-2 my-1 rounded-lg hover:bg-gray-200">
        <div className="flex items-center">
          <img src={imgUrl} className="w-6 h-4 mt-[4.5px]" />
          <span className="text-l ml-5 mr-auto">{text}</span>
        </div>
      </button>
    </div>
  );
};
