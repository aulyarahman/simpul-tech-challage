"use client";
import { FC, createContext, useContext } from "react";
import { ItemMessage, InputSearch } from "@/components";
import { useGetUser } from "@/hooks/use-get-user";
import { formatDate } from "@/lib/format-time";
import { PopupCtx } from "../../card-popup";
import Loading from "../_loading";

const ListMessage: FC = () => {
  const { data, error, isPending } = useGetUser();
  const { setRoomId } = useContext(PopupCtx);

  return (
    <div className="">
      {isPending ? (
        <div className="min-h-[640px] max-h-[640px] justify-center items-center flex">
          <Loading type="Chats" />
        </div>
      ) : error ? (
        <p className="font-semibold text-red-500">{error?.message}</p>
      ) : (
        <section className="py-3 px-3">
          <InputSearch placeholder="Search" className="mr-4" />
          <section className="min-h-[640px] max-h-[640px] overflow-auto">
            {data?.map((it) => (
              <ItemMessage
                key={it.id}
                date={formatDate(new Date().toISOString())}
                message={it.firstName}
                name={it.firstName + " " + it.lastName}
                type={it.title}
                oncLick={() => setRoomId(it.id)}
              />
            ))}
          </section>
        </section>
      )}
    </div>
  );
};

export default ListMessage;
