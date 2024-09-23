import { userIcon } from "../../../../utils/constants";

export const Comment = ({ comment }) => {
  return (
    <div className="flex flex-row items-start py-2 shadow-sm my-1 rounded-lg bg-gray-50 border-2 border-gray-100">
      <img className="h-10 w-10 mr-1 ml-2 pt-[0.5px]" src={userIcon} />
      <div>
        <h3 className="font-bold">{comment.name}</h3>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};
