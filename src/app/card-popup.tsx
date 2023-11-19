"use client";
import { createContext, useContext, useState } from "react";
import { Card, RootCtx } from "@/components";
import ListChat from "./list-chat";
import DetailChat from "./detail-chat";

interface ChatCtxProps {
  roomId: string;
  setRoomId: (id: string) => void;
}

export const ChatCtx = createContext<ChatCtxProps>({
  roomId: "",
  setRoomId: () => {},
});

const CardPopup = () => {
  const { typeShow } = useContext(RootCtx);
  const [roomId, setRoomId] = useState("");

  return (
    <ChatCtx.Provider value={{ roomId, setRoomId }}>
      <Card isOpen={!!typeShow} className="">
        {roomId ? <DetailChat /> : <ListChat />}
      </Card>
    </ChatCtx.Provider>
  );
};

export default CardPopup;
