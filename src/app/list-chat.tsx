"use client";
import { User } from "@/api";
import { ItemMessage } from "@/components";
import Input from "@/components/input";
import { useGetUser } from "@/hooks/use-get-user";
import { formatDate } from "@/lib/format-time";
import { FC } from "react";

const ListChat: FC<{ onSelectect: (data: User) => void }> = ({
  onSelectect,
}) => {
  const { data, error, isPending } = useGetUser();

  return (
    <div>
      {isPending ? (
        <p className="text-center">Loading..</p>
      ) : error ? (
        <p>{error?.message}</p>
      ) : (
        <section className="mt-4 space-y-4">
          <Input />
          {data?.map((it) => (
            <ItemMessage
              key={it.id}
              date={formatDate(new Date().toISOString())}
              message={it.first_name}
              name={it.first_name + " " + it.last_name}
              type={it.email}
              oncLick={() => onSelectect(it)}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default ListChat;
