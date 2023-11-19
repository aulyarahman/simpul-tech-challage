"use client";
import { ItemMessage, InputSearch } from "@/components";
import { useGetUser } from "@/hooks/use-get-user";
import { formatDate } from "@/lib/format-time";
import { FC, useContext } from "react";
import { ChatCtx } from "./card-popup";

const ListChat: FC = () => {
  const { data, error, isPending } = useGetUser();
  const { setRoomId } = useContext(ChatCtx);

  return (
    <div className="">
      {isPending ? (
        <p className="text-center">Loading..</p>
      ) : error ? (
        <p>{error?.message}</p>
      ) : (
        <section className="py-3 px-3">
          <InputSearch className="mr-4" />
          <section className="min-h-[465px] max-h-[465px] overflow-auto ">
            {data?.map((it) => (
              <ItemMessage
                key={it.id}
                date={formatDate(new Date().toISOString())}
                message={it.first_name}
                name={it.first_name + " " + it.last_name}
                type={it.email}
                oncLick={() => setRoomId(it.first_name)}
              />
            ))}
          </section>
        </section>
      )}
    </div>
  );
};

export default ListChat;
