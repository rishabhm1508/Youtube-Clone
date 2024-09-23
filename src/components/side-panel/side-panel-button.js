export const SidePanelButton = ({ imgUrl, text, height, width }) => {
  console.log(imgUrl);
  return (
    <div className="flex">
      <button className="w-full px-1 py-2 my-1 rounded-lg hover:bg-gray-200">
        <div className="flex items-center">
          <img className={`w-${width} h-${height} mt-[4.5px]`} src={imgUrl} />
          <span className="text-l ml-5 mr-auto">{text}</span>
        </div>
      </button>
    </div>
  );
};
