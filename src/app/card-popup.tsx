"use client";
import { Fragment, createContext, useContext, useState } from "react";
import { Card, RootCtx } from "@/components";
import ListMessage from "./_component/message/list-message";
import DetailMessage from "./_component/message/detail-message";
import ListTask from "./_component/task/list-task";

interface PopupeCtxProps {
  roomId: string;
  setRoomId: (id: string) => void;
  onReplyMessage?: PropsReplyMessage;
  setOnReplyMessage: (v?: PropsReplyMessage) => void;
}

interface PropsReplyMessage {
  authorMessage: string;
  message: string;
}

export const PopupCtx = createContext<PopupeCtxProps>({
  roomId: "",
  setRoomId: () => {},
  onReplyMessage: undefined,
  setOnReplyMessage: () => undefined,
});

const CardPopup = () => {
  const { typeShow } = useContext(RootCtx);
  const [roomId, setRoomId] = useState("");
  const [onReplyMessage, setOnReplyMessage] = useState<
    PropsReplyMessage | undefined
  >();

  return (
    <PopupCtx.Provider
      value={{ roomId, setRoomId, onReplyMessage, setOnReplyMessage }}
    >
      <Card isOpen={!!typeShow}>
        {typeShow === "Inbox" && (
          <Fragment>{roomId ? <DetailMessage /> : <ListMessage />}</Fragment>
        )}
        {typeShow === "Task" && <ListTask />}
      </Card>
    </PopupCtx.Provider>
  );
};

export default CardPopup;
