import { useEffect, useState } from "react";
import { LiveChatList } from "./live.chat.list";
import { addChat, clearChatBox } from "../../../../utils/store/live.chat.slice";
import { useDispatch } from "react-redux";
import {
  generateName,
  getRandomSentence,
} from "../../../../utils/name.generator";

export const LiveChat = () => {
  const [myLiveChatText, setMyLiveChatText] = useState("");
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
    }, 200);

    return () => {
      dispatcher(clearChatBox());
      clearInterval(intervals);
    };
  }, []);

  const updateChatWithMyText = () => {
    dispatcher(
      addChat({
        name: "Rishabh Mishra",
        text: `${myLiveChatText} 💖 ❤️‍🔥`,
        counter: 7777,
      })
    );
  };

  return (
    <div className="flex flex-col w-3/12">
      <div className="border-[1px] border-gray-200 h-[700px] rounded-lg m-1 mb-0 p-1 overflow-scroll bg-slate-100 flex flex-col-reverse">
        <LiveChatList />
      </div>
      <form
        className="flex mt-[0.5px]"
        onSubmit={(e) => {
          e.preventDefault();
          updateChatWithMyText();
        }}
      >
        <input
          className="border-2 border-gray-400  bg-slate-100 p-1 m-1 mr-0 mt-0 w-full rounded-lg shadow-lg  cursor-pointer"
          type="text"
          value={myLiveChatText}
          onChange={(e) => setMyLiveChatText(e.target.value)}
        />

        <button
          disabled={!myLiveChatText.length}
          className="bg-white shadow-lg text-blue-500 disabled:bg-gray-400 disabled:text-white disabled:border-none cursor-pointer hover:bg-blue-500 hover:text-white border-2 border-blue-500  font-bold px-2 active:bg-blue-600 active:text-white rounded-lg m-1 mt-0 ml-1"
        >
          Send
        </button>
      </form>
    </div>
  );
};
