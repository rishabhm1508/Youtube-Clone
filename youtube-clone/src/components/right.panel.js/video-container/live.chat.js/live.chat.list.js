import { useDispatch, useSelector } from "react-redux";
import { userIcon } from "../../../../utils/constants";
import { removeOldestChat } from "../../../../utils/store/live.chat.slice";
import { useEffect } from "react";

export const LiveChatList = () => {
  const dispatcher = useDispatch();
  const chats = useSelector((store) => store.liveChatSlice.chatList);

  useEffect(() => {
    if (chats.length === 100) {
      const ch = [...chats];
      ch.shift();
      dispatcher(removeOldestChat(ch));
    }
  }, [chats]);
  return chats.map(({ name, text }, index) => (
    <div key={index} className="flex flex-row p-1 bg-gray-50 mb-1 rounded-lg">
      <img className="w-7 h-7" src={userIcon}></img>
      <div className="flex">
        <span className="ml-2 font-bold">
          {name}: <span className="font-light">{text}</span>
        </span>
      </div>
    </div>
  ));
};
