import { Fragment, useContext } from "react";
import { ArrowLeftIcon, XIcon } from "lucide-react";
import { Button, Input, ItemChat } from "@/components";
import { ChatCtx } from "./card-popup";
import {
  formatDateInRoomChat,
  formatTime,
  formatDate,
} from "@/lib/format-time";

const roomChatData = [
  {
    user_name: "John Doe",
    user_id: 1,
    date: new Date("2023-01-15T10:30:00").getTime(),
    message: "Hello, how are you?",
  },
  {
    user_name: "Alice Smith",
    user_id: 2,
    date: new Date("2023-01-15T10:35:00").getTime(),
    message: "Hi John! I'm doing well, thanks. How about you?",
  },
  {
    user_name: "John Doe",
    user_id: 1,
    date: new Date("2023-01-15T10:40:00").getTime(),
    message: "I'm good too. Just working on some projects.",
  },
  {
    user_name: "Bob Johnson",
    user_id: 3,
    date: new Date().getTime(),
    message: "Hey everyone!",
  },
];

const DetailChat = () => {
  const { setRoomId } = useContext(ChatCtx);
  const userAuthId = 1;

  return (
    <Fragment>
      <div className="flex w-full py-3 px-5 justify-between items-center">
        <div className="flex w-full space-x-3 items-center">
          <ArrowLeftIcon
            size={24}
            className="cursor-pointer"
            onClick={() => setRoomId("")}
          />
          <section className="w-full">
            <p className="text-blue-primary font-semibold">
              1-589-AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </p>
            <p className="text-sm mt-1">3 Partciant</p>
          </section>
        </div>
        <XIcon className="cursor-pointer" onClick={() => setRoomId("")} />
      </div>
      <div className="h-[1px] bg-gray-500" />

      {/*  */}
      <section className="mt-3 min-h-[385px] max-h-[385px] overflow-auto px-5">
        {roomChatData.map((it, idx) => {
          const checkDate = formatDateInRoomChat(it.date);
          return (
            <Fragment key={idx}>
              {checkDate.isToday && (
                <div className="flex items-center my-3">
                  <div className="flex-1 border-b border-solid border-black"></div>
                  <h1 className="mx-5 text-sm font-semibold">
                    {formatDate(checkDate.date)}
                  </h1>
                  <div className="flex-1 border-b border-solid border-black"></div>
                </div>
              )}

              <ItemChat
                message={it.message}
                time={formatTime(it.date)}
                name={it.user_id === userAuthId ? undefined : it.user_name}
              />
            </Fragment>
          );
        })}

        <section className="flex justify-center items-center">
          <p className="bg-[#E9F3FF] w-fit p-2 text-blue-primary text-sm font-semibold text-center rounded-[5px]">
            New Message
          </p>
        </section>
      </section>

      <section className="px-3 bottom-0 inline-flex justify-between w-full pt-3 pb-1">
        <Input placeholder="Type a new message" className="w-[420px]" />
        <Button className="w-[76px] h-[40px]">Send</Button>
      </section>
    </Fragment>
  );
};

export default DetailChat;
