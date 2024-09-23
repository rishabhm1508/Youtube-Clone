import { useEffect, useState } from "react";
import { LiveChatList } from "./live.chat.list";
import { addChat } from "../../../../utils/store/live.chat.slice";
import { useDispatch } from "react-redux";
import {
  generateName,
  getRandomSentence,
} from "../../../../utils/name.generator";

export const LiveChat = () => {
  const dispatcher = useDispatch();
  window.count = 0;
  useEffect(() => {
    const intervals = setInterval(() => {
      const count = window.count++;
      dispatcher(
        addChat({
          name: generateName(),
          text: `${getRandomSentence()} : Chat ${count + 1} ❤️‍🔥`,
          counter: count + 1,
        })
      );
    }, 500);

    return () => clearInterval(intervals);
  }, []);

  return (
    <div className="border-[1px] border-gray-200 h-[700px] rounded-lg m-1 w-3/12 p-1 overflow-scroll bg-slate-100">
      <LiveChatList />
    </div>
  );
};
