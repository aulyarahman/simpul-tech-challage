import { Fragment, useContext, useState } from "react";
import { ArrowLeftIcon, XIcon } from "lucide-react";
import { Button, Input, ItemChat } from "@/components";
import { PopupCtx } from "../../card-popup";
import { formatDateInRoomChat, formatTime } from "@/lib/format-time";
import { cn } from "@/lib/utils";

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

const DetailMessage = () => {
  const { setRoomId, onReplyMessage, setOnReplyMessage } = useContext(PopupCtx);
  const [currentMessage, setCurrentMessage] = useState("");
  const [listChats, setListChats] = useState(roomChatData);

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
      <section className="mt-3 min-h-[560px] max-h-[560px] overflow-auto px-5">
        {listChats.map((it, idx) => {
          const checkDate = formatDateInRoomChat(it.date);
          return (
            <Fragment key={idx}>
              {checkDate.isToday && (
                <div className="flex items-center my-3">
                  <div className="flex-1 border-b border-solid border-black"></div>
                  <h1 className="mx-5 text-sm font-semibold">
                    {checkDate.date}
                  </h1>
                  <div className="flex-1 border-b border-solid border-black"></div>
                </div>
              )}

              <ItemChat
                message={it.message}
                time={formatTime(it.date)}
                name={it.user_id === userAuthId ? undefined : it.user_name}
                onDelete={() => {
                  setListChats((v) => v.filter((_, i) => i !== idx));
                }}
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

      <div className="absolute bottom-0">
        <div className="w-[550px]">
          {onReplyMessage && (
            <div className="bg-[#F2F2F2] p-3 rounded-t-md border-[1px] border-[#828282]">
              <div className="inline-flex justify-between w-full">
                <p className="font-bold">
                  Replying to {onReplyMessage.authorMessage}
                </p>
                <XIcon
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setOnReplyMessage(undefined)}
                />
              </div>
              <p className="text-gray-primary-300 pt-3">
                {onReplyMessage.message}
              </p>
            </div>
          )}
        </div>

        <section className="bottom-0 space-x-3 inline-flex w-full pb-1">
          <Input
            placeholder="Type a new message"
            className={cn(
              "w-[550px] border-[1px] border-[#828282]",
              onReplyMessage && "rounded-t-none"
            )}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <Button
            className="w-[76px] h-[40px]"
            onClick={() => {
              setListChats((v) => [
                ...v,
                {
                  date: new Date().getTime(),
                  message: currentMessage,
                  user_id: userAuthId,
                  user_name: "John Doe",
                },
              ]);
            }}
          >
            Send
          </Button>
        </section>
      </div>
    </Fragment>
  );
};

export default DetailMessage;
