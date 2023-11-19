"use client";
import { useContext, useState } from "react";
import { Card, RootCtx } from "@/components";
import ListChat from "./list-chat";
import { User } from "@/api";
import DetailChat from "./detail-chat";

const CardPopup = () => {
  const { typeShow } = useContext(RootCtx);
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <Card isOpen={!!typeShow} className="">
      {user ? (
        <DetailChat />
      ) : (
        <ListChat onSelectect={(user) => setUser(user)} />
      )}
    </Card>
  );
};

export default CardPopup;
