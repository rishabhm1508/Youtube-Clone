import { useEffect, useState } from "react";
import { LiveChatList } from "./live.chat.list";
import { addChat } from "../../../../utils/store/live.chat.slice";
import { useDispatch, useSelector } from "react-redux";

export const LiveChat = () => {
  const dispatcher = useDispatch();
  window.count = 0;
  useEffect(() => {
    const intervals = setInterval(() => {
      const count = window.count++;
      dispatcher(
        addChat({
          name: `User ${count}`,
          text: `This is youtube clone live chat number ${count}`,
          counter: count + 1,
        })
      );
    }, 2000);

    return () => clearInterval(intervals);
  }, []);

  return (
    <div className="border-[1px] border-gray-200 h-[700px] rounded-lg m-1 w-3/12 p-1 overflow-scroll">
      <LiveChatList />
    </div>
  );
};
